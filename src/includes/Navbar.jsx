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
import { useRef, useState } from "react";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { Skiper58, TextRoll } from "@/components/ui/SkiperNavigation";
import ToggleTheme from "@/components/ToggleTheme.jsx";
import BorderBeam from "@/components/ui/NavBeam";
import { useMotionValueEvent, useScroll } from "motion/react";

const NavbarMain = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

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
    <div className="sticky top-2 z-40 w-full" ref={ref}>
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody className="backdrop:blur-md">
          {visible && (
            <BorderBeam
              colorFrom="#7400ff"
              colorTo="#9b41ff"
              size={50}
              duration={6}
              borderThickness={2}
              glowIntensity={5}
            />
          )}
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary">
              <ToggleTheme />
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
                className="relative block py-2 text-neutral-600 dark:text-neutral-300"
              >
                <TextRoll className="text-4xl font-bold">{item.name}</TextRoll>
              </a>
            ))}
            {/* 
                <span className="block">{item.name}</span>
             */}
            <div className="mt-3 flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="border-secondary text-secondary w-full border"
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
