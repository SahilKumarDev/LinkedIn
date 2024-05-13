import React from "react";
import PostInput from "./PostInput";
import { getAllPosts } from "@/lib/serveractions";
import Post from "./Posts";

const Feed = async ({ user }: { user: any }) => {
  const userData = JSON.parse(JSON.stringify(user));
// console.log(userData);


  const posts = await getAllPosts();

  return (
    <div className="flex-1">
      <PostInput user={userData} />
      <Post posts={posts!} />
    </div>
  );
};

export default Feed;
