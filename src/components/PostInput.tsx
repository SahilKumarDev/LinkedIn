"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import ProfilePhoto from "./ProfilePhoto";
import { PostDialog } from "./PostDialog";
import { currentUser } from "@clerk/nextjs/server";

const PostInput = ({ user }: { user: any }) => {
  // const User = await currentUser();

  const [open, setOpen] = useState<boolean>(false);
  const inputHandler = () => {
    setOpen(true);
  };
  return (
    <div className="bg-white p-4 m-2 md:m-0 border border-gray-300 rounded-lg">
      <div className="flex items-center gap-3">
        <ProfilePhoto src={user ? user?.imageUrl! : "/banner.jpg"} />
        <Input
          type="text"
          placeholder="Start a post"
          className="rounded-full hover:bg-gray-100 h-12 cursor-pointer"
          onClick={inputHandler}
        />
        <PostDialog
          user={user}
          setOpen={setOpen}
          open={open}
          src={user?.imageUrl}
        />
      </div>
    </div>
  );
};

export default PostInput;
