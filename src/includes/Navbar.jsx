"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { Skiper58, TextRoll } from "@/components/ui/SkiperNavigation";


const NavbarMain = () => {
  const [theme, setTheme] = useState("dark");

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className=" sticky top-2 z-40 w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody className="backdrop:blur-md">
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary">
              {theme === "dark" ? (
                <IconSun className="h-5 w-5 text-neutral-600" />
              ) : (
                <IconMoon className="h-4 w-4 text-neutral-600" />
              )}
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300 py-2 block"
              >
                <TextRoll className="text-4xl  font-bold">{item.name}</TextRoll>
              </a>
            ))}
            {/* 
                <span className="block">{item.name}</span>
             */}
            <div className="flex w-full flex-col mt-3 gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full border border-secondary text-secondary"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
};
export default NavbarMain;
