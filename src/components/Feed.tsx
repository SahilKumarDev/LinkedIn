import React from "react";
import PostInput from "./PostInput";
import { getAllPosts } from "@/lib/serveraction";
import Post from "./Posts";
// import { Post } from "@/models/post.model";
// import PostDialog from './PostDialog'
// import PostInput from './PostInput'

const Feed = async ({ user }: { user: any }) => {
  const userData = JSON.parse(JSON.stringify(user));
  const posts = await getAllPosts();

  return (
    <div className="flex-1">
      <PostInput user={userData} />
      <Post posts={posts!} />
    </div>
  );
};

export default Feed;
