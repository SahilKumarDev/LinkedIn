"use server";

import { Post } from "@/models/post.model";
import { IUser } from "@/models/user.model";
import { currentUser } from "@clerk/nextjs/server";
import { v2 as cloudinary } from "cloudinary";
import { revalidatePath } from "next/cache";
import { Comment } from "@/models/comment.model";
import dbConnect from "@/dataBase/dbConnect";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

// creating post using server actions
export const createPostAction = async (
  inputText: string,
  selectedFile: string
) => {
  await dbConnect();
  const user = await currentUser();
  if (!user) throw new Error("User not authenticated");
  if (!inputText) throw new Error("Input field is required");

  const image = selectedFile;

  const userDatabase: IUser = {
    firstName: user.firstName || "Sahil",
    lastName: user.lastName || "Kumar Dev",
    userId: user.id,
    profilePhoto: user.imageUrl,
  };
  let uploadResponse;
  try {
    if (image) {
      //1. create post with image
      uploadResponse = await cloudinary.uploader.upload(image);
      await Post.create({
        description: inputText,
        user: userDatabase,
        imageUrl: uploadResponse?.secure_url, // yha pr image url ayega from cloudinary
      });
    } else {
      //2. create post with text only
      await Post.create({
        description: inputText,
        user: userDatabase,
      });
    }
    revalidatePath("/");
  } catch (error: any) {
    throw new Error(error);
  }
};
// get all post using server actions
export const getAllPosts = async () => {
  try {
    await dbConnect();
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .populate({ path: "comments", options: { sort: { createdAt: -1 } } });
    if (!posts) return [];
    return JSON.parse(JSON.stringify(posts));
  } catch (error) {
    console.log(error);
  }
};

// delete post by id
export const deletePostAction = async (postId: string) => {
  await dbConnect();
  const user = await currentUser();
  if (!user) throw new Error("User not authenticated.");
  const post = await Post.findById(postId);
  if (!post) throw new Error("Post not found.");

  // keaval apni hi post delete kr payega.
  if (post.user.userId !== user.id) {
    throw new Error("You are not an owner of this Post.");
  }
  try {
    await Post.deleteOne({ _id: postId });
    revalidatePath("/");
  } catch (error: any) {
    throw new Error("An error occurred", error);
  }
};

export const createCommentAction = async (
  postId: string,
  formData: FormData
) => {
  try {
    const user = await currentUser();
    if (!user) throw new Error("User not authenticated");
    const inputText = formData.get("inputText") as string;
    if (!inputText) throw new Error("Field is required");
    if (!postId) throw new Error("Post id required");

    const userDatabase: IUser = {
      firstName: user.firstName || "sahil",
      lastName: user.lastName || "Kumar Dev",
      userId: user.id,
      profilePhoto: user.imageUrl,
    };
    const post = await Post.findById({ _id: postId });
    if (!post) throw new Error("Post not found");

    const comment = await Comment.create({
      textMessage: inputText,
      user: userDatabase,
    });

    post.comments?.push(comment._id);
    await post.save();

    revalidatePath("/");
  } catch (error) {
    throw new Error("An error occurred");
  }
};
