import { Link } from "react-router-dom";

import { Github, TwitterIcon } from "lucide-react";
import { IconBrandDiscord } from "@tabler/icons-react";
import logo from "@/assets/logo/logo-black.png";
import React from "react";

import Container from "@/components/Container";

const Footer = () => {
  return (
    <footer className=" ">
      <Container className="container flex flex-col gap-10   px-4 pt-8 md:px-0 selection:bg-secondary border-t  border-neutral-400/50 selection:text-white dark:selection:bg-highlight-primary ">
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="flex flex-1 flex-col gap-4">
            <a href="/" className="flex items-center gap-2">
              <img src={logo} alt="" className="w-[100px]" />
            </a>
            <p className=" max-w-sm opacity-70">
              ArcLine provides high-quality UI components and design solutions
              for developers and designers building the next generation of
              AI-powered applications.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="glassmorphic-icon"
              >
                <TwitterIcon className="h-5 w-5  transition-colors hover:text-foreground" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="glassmorphic-icon"
              >
                <Github className="h-5 w-5  transition-colors hover:text-foreground" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                className="glassmorphic-icon"
              >
                <IconBrandDiscord className="h-5 w-5  transition-colors hover:text-foreground" />
                <span className="sr-only">Discord</span>
              </Link>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-10 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium tracking-tight">Product</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    href="#features"
                    className="text-sm  transition-colors hover:text-foreground opacity-70"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="text-sm  transition-colors hover:text-foreground opacity-70"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#components"
                    className="text-sm  transition-colors hover:text-foreground opacity-70"
                  >
                    Components
                  </Link>
                </li>
                <li>
                  <Link
                    href="#changelog"
                    className="text-sm  transition-colors hover:text-foreground opacity-70"
                  >
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium tracking-tight">Company</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    href="#about"
                    className="text-sm  transition-colors hover:text-foreground opacity-70"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                  href="#blog"
                    className="text-sm  transition-colors hover:text-foreground opacity-70"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#careers"
                    className="text-sm  transition-colors hover:text-foreground opacity-70"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-sm  transition-colors hover:text-foreground opacity-70"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium tracking-tight">Legal</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    href="#privacy"
                    className="text-sm  transition-colors hover:text-foreground opacity-70"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#terms"
                    className="text-sm  transition-colors hover:text-foreground opacity-70"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="#cookies"
                    className="text-sm  transition-colors hover:text-foreground opacity-70"
                  >
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link
                    href="#licenses"
                    className="text-sm  transition-colors hover:text-foreground opacity-70"
                  >
                    Licenses
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between items-center text-xs border-t  border-neutral-400/50  pt-3">
          <p className=" text-zinc-800">
            © {new Date().getFullYear()} Arcline Softs. All Rights reserved.
          </p>
          <div className="flex gap-5  text-zinc-800">
            <a
              href=""
              className="hover:text-zinc-800 text-zinc-600 duration-150 ease-in-ou "
            >
              Terms
            </a>
            <a
              href=""
              className="hover:text-zinc-800 text-zinc-600 duration-150 ease-in-out "
            >
              Privacy
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;