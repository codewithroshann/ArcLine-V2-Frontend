import { cn } from "@/lib/utils";
import React from "react";

const HeroBgPattern = () => {
  return (
    <>
      <div
        className={cn(
          "absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]",
          
          "[mask-image:radial-gradient(ellipse_70%_50%_at_50%_50%,#000_50%,transparent_100%)]",
          "bg-[size:4rem_4rem] dark:bg-black dark:bg-[linear-gradient(to_right,#333333_1px,transparent_1px),linear-gradient(to_bottom,#333333_1px,transparent_1px)]",
        )}
      ></div>
    </>
  );
};

export default HeroBgPattern;
