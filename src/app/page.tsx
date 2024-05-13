import Feed from "@/components/Feed";
import News from "@/components/News";
import Sidebar from "@/components/Sidebar";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const User = await currentUser();

  // console.log(User);

  return (
    <div className="pt-20">
      <div className="max-w-6xl mx-auto flex justify-between gap-4">
        {/* Sidebar  */}
        <Sidebar user={User} />
        {/* Feed  */}
        <Feed user={User} />
        {/* News  */}
        <News />
      </div>
    </div>
  );
}
