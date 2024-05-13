import { Info } from "lucide-react";
import Link from "next/link";
import React from "react";

interface NAVITEMS {
  heading: string;
  Link: string;
}
const newsItems: NAVITEMS[] = [
  {
    heading: "casecobracase.io",
    Link: "https://www.linkedin.com/posts/sahil-kumar-dev_chaicode-fullstack-nextjs-activity-7195021975713427456-q0kE?utm_source=share&utm_medium=member_desktop",
  },
  {
    heading: "feedbackify.io",
    Link: "https://www.linkedin.com/posts/sahil-kumar-dev_chaicode-activity-7191592818660761600-EiPn?utm_source=share&utm_medium=member_desktop",
  },
  {
    heading: "musicschool.com",
    Link: "https://www.linkedin.com/posts/sahil-kumar-dev_nextjs-musicschool-webdev-activity-7184542654360076289-Lw3P?utm_source=share&utm_medium=member_desktop",
  },
  {
    heading: "tempreture.io",
    Link: "https://www.linkedin.com/posts/sahil-kumar-dev_this-is-my-first-live-project-click-to-activity-7180541350344290304-YmSC?utm_source=share&utm_medium=member_desktop",
  },
];

const LinkedInPost = () => {
  return (
    <div className="hidden md:block w-full bg-white h-fit rounded-lg border border-gray-300">
      <div className="flex items-center justify-between p-3">
        <h1 className="font-medium">My old Project on LinkedIn </h1>
      </div>
      <div>
        {newsItems.map((item, index) => {
          return (
            <Link  key={index}  href={item.Link}>
              <div
               
                className="px-3 flex justify-between items-center py-2 hover:bg-gray-200 hover:cursor-pointer"
              >
                <h1 className="text-sm font-medium">{item.heading} 👉</h1>
                <p className="text-xs text-blue-600 hover:text-blue-700">
                   Link
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LinkedInPost;