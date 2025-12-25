import React from "react";

const GetStartedBtn = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <a href="/contact">
          <div className="group cursor-pointer border border-border bg-card gap-2 h-[60px] flex items-center p-[10px] rounded-full border-secondary shadow-md">
            <div className="border border-border bg-secondary  text-white h-[40px] rounded-full flex items-center justify-center shadow-sm ">
              <p className="font-medium tracking-tight mr-3 ml-3 flex items-center gap-2 justify-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-globe animate-spin"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                  <path d="M2 12h20"></path>
                </svg>
                <span className="text-white">Get started</span>
              </p>
            </div>
            <div className="text-muted-foreground group-hover:ml-4 ease-in-out transition-all size-[24px] flex items-center justify-center rounded-full border-2 border-border">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-arrow-right group-hover:rotate-180 ease-in-out transition-all"
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
