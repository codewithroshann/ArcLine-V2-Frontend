import { Link } from "react-router-dom";

import { Github, TwitterIcon } from "lucide-react";
import { IconBrandDiscord } from "@tabler/icons-react";

import logoBlack from "@/assets/logo/logo-black.png";
import logoWhite from "@/assets/logo/logo-white.png";

import Container from "@/components/Container";
import { useTheme } from "@/provider/ThemeProvider";

const Footer = () => {
  const { isDarkMode } = useTheme();
  return (
    <footer className=" ">
      <Container className="selection:bg-secondary dark:selection:bg-highlight-primary container flex flex-col gap-10 border-t border-neutral-400/50 px-4 pt-8 selection:text-white md:px-0">
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="flex flex-1 flex-col gap-4">
            <a href="/" className="flex items-center gap-2">
              {isDarkMode ? (
                <img src={logoWhite} alt="Logo" className="w-[100px]" />
              ) : (
                <img src={logoBlack} alt="Logo" className="w-[100px]" />
              )}
            </a>
            <p className="max-w-md text-sm text-neutral-400 dark:text-neutral-600">
              Arcline Softs builds innovative software solutions that boost
              productivity and simplify development. We help teams focus on
              creating scalable, high-impact digital products.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="glassmorphic-icon"
              >
                <TwitterIcon className="hover:text-foreground h-5 w-5 transition-colors" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="glassmorphic-icon"
              >
                <Github className="hover:text-foreground h-5 w-5 transition-colors" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                className="glassmorphic-icon"
              >
                <IconBrandDiscord className="hover:text-foreground h-5 w-5 transition-colors" />
                <span className="sr-only">Discord</span>
              </Link>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-10 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium tracking-tight">Product</h3>
              <ul className="flex flex-col gap-2 text-neutral-400 dark:text-neutral-600">
                <li>
                  <Link
                    href="#features"
                    className="hover:text-foreground text-sm transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="hover:text-foreground text-sm transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#components"
                    className="hover:text-foreground text-sm transition-colors"
                  >
                    Components
                  </Link>
                </li>
                <li>
                  <Link
                    href="#changelog"
                    className="hover:text-foreground text-sm transition-colors"
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
                    className="hover:text-foreground text-sm transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#blog"
                    className="hover:text-foreground text-sm transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#careers"
                    className="hover:text-foreground text-sm transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="hover:text-foreground text-sm transition-colors"
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
                    className="hover:text-foreground text-sm transition-colors"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#terms"
                    className="hover:text-foreground text-sm transition-colors"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="#cookies"
                    className="hover:text-foreground text-sm transition-colors"
                  >
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link
                    href="#licenses"
                    className="hover:text-foreground text-sm transition-colors"
                  >
                    Licenses
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-between border-t border-neutral-400/50 pt-3 text-xs">
          <p className="text-zinc-800">
            © {new Date().getFullYear()} Arcline Softs. All Rights reserved.
          </p>
          <div className="flex gap-5 text-zinc-800">
            <a
              href=""
              className="ease-in-ou text-zinc-600 duration-150 hover:text-zinc-800"
            >
              Terms
            </a>
            <a
              href=""
              className="text-zinc-600 duration-150 ease-in-out hover:text-zinc-800"
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
