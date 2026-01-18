import { cn } from "@/lib/utils";
import React from "react";

const GetStartedBtn = ({ title = "Get started", darkShadow = false }) => {
  return (
    <>
      <div className="flex items-center justify-center">
        <a href="/contact">
          <div
            className={cn(
              "group bg-card border-secondary flex h-[60px] cursor-pointer items-center gap-2 rounded-full border p-[10px] shadow-2xl",
              darkShadow && "dark:shadow-secondary dark:shadow-2xl",
            )}
          >
            <div className="border-border bg-secondary flex h-[40px] items-center justify-center rounded-full border text-white shadow-sm">
              <p className="mr-3 ml-3 flex items-center justify-center gap-2 font-medium tracking-tight text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-globe animate-spin "
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                  <path d="M2 12h20"></path>
                </svg>
                <span className="text-white ">{title}</span>
              </p>
            </div>
            <div className="text-muted-foreground border-border flex size-[24px] items-center justify-center rounded-full border-2 transition-all ease-in-out group-hover:ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right transition-all ease-in-out group-hover:rotate-180"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default GetStartedBtn;
