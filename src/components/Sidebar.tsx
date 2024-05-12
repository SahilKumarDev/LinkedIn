import React from "react";
import ProfilePhoto from "./ProfilePhoto";
import Image from "next/image";

const Sidebar = ({ user }: { user: any }) => {
  const timestamp = user?.lastActiveAt;

  const date = new Date(timestamp);

  const hours = date.getHours();
  const minutes = date.getMinutes();

  // TODO :- If you have to add more Precise time then use According to your self
  // const year = date.getFullYear();
  // const month = date.getMonth() + 1;
  // const day = date.getDate();
  // const seconds = date.getSeconds();

  const formattedDate = `${hours}:${minutes}`;

  // console.log(formattedDate); // Log to check i Got a value or not

  return (
    <div className="hidden md:block w-[20%] h-fit border border-gray-300 bg-white rounded-lg">
      <div className="flex relative flex-col items-center">
        <div className="w-full h-16 overflow-hidden">
          {user && (
            <Image
              src="/banner.jpg"
              alt="Banner Image is missing"
              width={50}
              height={50}
              className="w-full h-full rounded-t"
            />
          )}
        </div>
        <div className="left-[90px] absolute top-8 ">
          <ProfilePhoto src={user ? user?.imageUrl! : "/banner.jpg"} />
        </div>

        <div className="border-b border-b-gray-300">
          <div className="p-2 mt-5 text-center">
            <h1 className="font-bold hover:underline cursor-pointer">
              {user
                ? `${user?.firstName} ${user?.lastName}`
                : "Sahil Kumar dev"}
            </h1>
            <p className="text-xs">
              Last Active At {user ? `${formattedDate}` : "00:00"}
            </p>
          </div>
        </div>
      </div>

      <div className="text-xs">
        <div className="w-full flex justify-between items-center px-3 py-2 hover:bg-gray-200 cursor-pointer">
          <p>Post Impression</p>
          <p className="text-blue-500 font-bold">88</p>
        </div>
        <div className="w-full flex justify-between items-center px-3 py-2 hover:bg-gray-200 cursor-pointer">
          <p>Posts</p>
          <p className="text-blue-500 font-bold">0</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
