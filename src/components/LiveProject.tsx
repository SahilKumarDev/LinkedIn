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
    Link: "https://casecobracase.vercel.app/",
  },
  {
    heading: "feedbackify.io",
    Link: "https://feedbackify-sage.vercel.app/",
  },
  {
    heading: "musicschool.com",
    Link: "https://musicschool-delta.vercel.app/",
  },
  {
    heading: "tempreture.io",
    Link: "https://tempretureio.web.app/#/current-location",
  },
];

const LiveProject = () => {
  return (
    <div className="hidden md:block w-full bg-white h-fit rounded-lg border border-gray-300">
      <div className="flex items-center justify-between p-3">
        <h1 className="font-medium">My old Project Live Link </h1>
      </div>
      <div>
        {newsItems.map((item, index) => {
          return (
            <Link key={index} href={item.Link}>
              <div className="px-3 flex justify-between items-center py-2 hover:bg-gray-200 hover:cursor-pointer">
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

export default LiveProject;
