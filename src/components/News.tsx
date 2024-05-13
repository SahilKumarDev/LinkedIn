import { Info } from "lucide-react";
import Link from "next/link";
import React from "react";
import LinkedInPost from "./LinkedInPost";
import LiveProject from "./LiveProject";

const News = () => {
  return (
    <div className="space-y-4">
      <LinkedInPost />
      <LiveProject />
    </div>
  );
};

export default News;
