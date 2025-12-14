import React from "react";
import Container from "./Container";

const Cta = () => {
  return (
    <Container className="px-4 selection:bg-highlight-secondry selection:text-white dark:selection:bg-highlight-primary">
      <div className="shadow-lg w-fulll flex flex-col items-center justify-center rounded-lg bg-white py-10 px-4">
        <div className="flex items-center gap-2 bg-[#30af5b]/10 rounded-full px-3 py-1 ">
          <div className="relative h-[6px] w-[6px] flex rounded-full bg-green-800 ">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-600 opacity-75"></span>
          </div>
          <p className="text-xs">Available For Work</p>
        </div>
        <h1 className="font-zalando text-5xl w-150 text-center leading-14 py-5">
          Let's <span className="text-highlight-secondry">create</span> your next big idea.
        </h1>
      </div>
    </Container>
  );
};

export default Cta;
