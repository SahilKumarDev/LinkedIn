import React from "react";
import PostInput from "./PostInput";
// import PostDialog from './PostDialog'
// import PostInput from './PostInput'

const Feed = ({ user }: { user: any }) => {
  const userData = JSON.parse(JSON.stringify(user));

  return (
    <div className='flex-1'>

      <PostInput user={userData} />
    </div>
  );
};

export default Feed;
