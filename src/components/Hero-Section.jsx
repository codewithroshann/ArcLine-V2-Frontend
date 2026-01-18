import React from "react";
import Container from "../components/Container.jsx";
import GetStartedBtn from "./ui/GetStartedBtn.jsx";
import Spline3D from "./ui/Spline3D.jsx";
import Subheading from "./ui/Subheading.jsx";
import { cn } from "@/lib/utils.js";

const Hero_Section = () => {
  return (
    <section className="relative">
      <div
        className={cn(
          "absolute inset-0 z-10 size-full",
          "bg-[radial-gradient(circle_at_1px_1px,black_1px,transparent_0)] [background-size:15px_15px] [opacity:8%] [background-position-x:7.5px] [background-position-y:7.5px]",
          "dark:bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] dark:mask-y-from-80% dark:[opacity:16%]",
        )}
      />

      {/* Content */}
      <Container className="relative z-10 grid grid-cols-1 px-6 pt-28 pb-16 lg:grid-cols-2">
        <div>
          <span className="font-space flex items-center justify-center text-sm font-semibold lg:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-hand-stop text-secondary  mr-2"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 13v-7.5a1.5 1.5 0 0 1 3 0v6.5" />
              <path d="M11 5.5v-2a1.5 1.5 0 1 1 3 0v8.5" />
              <path d="M14 5.5a1.5 1.5 0 0 1 3 0v6.5" />
              <path d="M17 7.5a1.5 1.5 0 0 1 3 0v8.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7a69.74 69.74 0 0 1 -.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47" />
            </svg>
            We design. We build. We scale.
          </span>

          <h1 className="font-zalando mt-6 mb-8 max-w-4xl text-center text-4xl font-semibold tracking-tight md:text-6xl lg:text-start">
            Turning{" "}
            <span className="text-secondary ">
              Idea&apos;s
            </span>{" "}
            Into{" "}
            <span className="text-secondary ">Digital</span>{" "}
            Products
          </h1>

          <Subheading className="mx-auto mb-6 flex max-w-xl text-center text-zinc-700 lg:text-start dark:text-neutral-300">
            We build end-to-end digital solutions—from strategy and development
            to scalable, user-focused experiences that drive real business
            growth.
          </Subheading>
          <div className="mt-6 flex justify-center lg:justify-start">
            <GetStartedBtn darkShadow={true} />
          </div>
        </div>


      </Container>
    </section>
  );
};

export default Hero_Section;
