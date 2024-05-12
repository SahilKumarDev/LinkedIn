import React from "react";
import { Avatar, AvatarImage } from "./ui/avatar";

const ProfilePhoto = ({ src }: { src: string }) => {
  return (
    <div>
      <Avatar className="cursor-pointer h-14 w-14">
        <AvatarImage src={src} alt="banner" />
      </Avatar>
    </div>
  );
};

export default ProfilePhoto;
