import React from "react";
import Container from "@/components/Container";
import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <Container className=" px-4 md:px-0 selection:bg-highlight-secondry border-t  border-neutral-600/50 selection:text-white dark:selection:bg-highlight-primary">
      <div className="w-full flex justify-between items-center">
        <p className="text-xs text-zinc-800">
          © {new Date().getFullYear()} Roshan Sahu. All Rights reserved.
        </p>
        <div className="flex gap-5  text-zinc-800">
          <a
            href=""
            className="hover:text-zinc-800 text-zinc-600 duration-150 ease-in-out"
          >
            <IconBrandGithub className="h-6 w-6 " />
          </a>
          <a
            href=""
            className="hover:text-zinc-800 text-zinc-600 duration-150 ease-in-out"
          >
            <IconBrandLinkedin className="h-6 w-6 " />
          </a>
          <a
            href=""
            className="hover:text-zinc-800 text-zinc-600 duration-150 ease-in-out"
          >
            <IconBrandInstagram className="h-6 w-6 " />
          </a>
          <a
            href=""
            className="hover:text-zinc-800  text-zinc-600 duration-150 ease-in-out"
          >
            <IconBrandGmail className="h-6 w-6 " />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
