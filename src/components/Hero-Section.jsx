import Container from "../components/Container.jsx";
import React from "react";

const Hero_Section = () => {
  return (
    <>
      <Container className=" px-6 selection:bg-secondary selection:text-white dark:selection:bg-primary">
        <div className=" mb-6 pt-26 lg:pt-24">
          <span className="text-sm font-semibold font-space">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline text-secondary mr-2 icon icon-tabler icons-tabler-outline icon-tabler-hand-three-fingers"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5" />
              <path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7a69.74 69.74 0 0 1 -.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47" />
              <path d="M11 5.5v-2a1.5 1.5 0 1 1 3 0v8.5" />
              <path d="M14 5.5a1.5 1.5 0 0 1 3 0v6.5" />
            </svg>
            We design. We build. We scale.
          </span>

          <h1 className="text-6xl md:text-6xl  lg:text-7xl font-zalando w-full sm:w-[85%] md:w-[80%] xl:w-[80%] font-medium mb-10 mt-4 text-shadow-sm">
            Turning{" "}
            <span className="text-secondary">idea's</span>{" "}
            into
            <span className="text-secondary"> digital</span>{" "}
            products
          </h1>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 items-center my-12 ">
            <span className="h-[1px] w-full bg-zinc-500"></span>
            <p className="text-zinc-700 text-sm">
            We build end-to-end digital solutions—from strategy and development to scalable, user-focused experiences that drive real business growth.
            </p>
          </div>
          <div className="my-6 space-x-4 uppercase text-sm">
            <a
              href=""
              className="text-zinc-600 hover:text-secondary transition-all ease-in-out duration-150 "
            >
              Linkedin
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className=" rotate-270 inline  icon icon-tabler icons-tabler-outline icon-tabler-arrow-down-right"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 7l10 10" />
                <path d="M17 8l0 9l-9 0" />
              </svg>
            </a>
            <a
              href=""
              className="text-zinc-600 hover:text-secondary transition-all ease-in-out duration-150"
            >
              Github
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className=" rotate-270 inline  icon icon-tabler icons-tabler-outline icon-tabler-arrow-down-right"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 7l10 10" />
                <path d="M17 8l0 9l-9 0" />
              </svg>
            </a>
            <a
              href=""
              className="text-zinc-600 hover:text-secondary transition-all ease-in-out duration-150"
            >
              Instragram
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className=" rotate-270 inline  icon icon-tabler icons-tabler-outline icon-tabler-arrow-down-right"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 7l10 10" />
                <path d="M17 8l0 9l-9 0" />
              </svg>
            </a>
            <a
              href=""
              className="text-zinc-600 hover:text-secondary transition-all ease-in-out duration-150"
            >
              Email
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className=" rotate-270 inline  icon icon-tabler icons-tabler-outline icon-tabler-arrow-down-right"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 7l10 10" />
                <path d="M17 8l0 9l-9 0" />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero_Section;
