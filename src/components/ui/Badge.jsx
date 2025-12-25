import React from "react";

const Badge = ({ children }) => {
  return (
    <>
      <div className=" mx-auto">
        <div className="flex justify-center">
          <button
            type="button"
            className="group relative mx-auto  rounded-full border border-secondary  px-6 py-1 text-xs backdrop-blur transition-all duration-300   flex items-center gap-2"
          >
            <div className="absolute inset-x-0 -top-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent via-[#30af5b] to-transparent shadow-2xl transition-all duration-500 "></div>
            <div className="absolute inset-x-0 -bottom-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent via-[#30af5b] to-transparent shadow-2xl transition-all duration-500 "></div>
            <div className="relative h-[6px] w-[6px] flex rounded-full bg-green-600 ">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-600 opacity-75"></span>
            </div>
            <span className="relative ">{children}</span>
          </button>
        </div>

      </div>
    </>
  );
};

export default Badge;
