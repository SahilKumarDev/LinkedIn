// import connectDB from "@/lib/db";
import dbConnect from "@/dataBase/dbConnect";
import { Post } from "@/models/post.model";
import { NextRequest, NextResponse } from "next/server";

// fetch all comments
export const GET = async (
  req: NextRequest,
  { params }: { params: { postId: string } }
) => {
  try {
    await dbConnect();
    const post = Post.findById({ _id: params.postId });
    if (!post) return NextResponse.json({ error: "Post not found." });

    const comments = await post.populate({
      path: "comments",
      options: { sort: { createdAt: -1 } },
    });
    return NextResponse.json(comments);
  } catch (error) {
    return NextResponse.json({ error: "an error occurred." });
  }
};
