import React, { useRef } from "react";
import { useScroll, useTransform } from "motion/react";
import Hero_Section from "@/components/Hero-Section";
import ScrollVelocity from "../components/ui/ScrollVelocity";
import About from "../components/About";
import Projects from "@/components/Projects";
import Tech_Marquee from "@/components/Tech_Marquee";
import Cta from "@/components/Cta";
import Services from "@/components/Services";
import { GoogleGeminiEffect } from "@/components/ui/GeminiScrollEffect";
import FAQSection from "@/components/Faq";
import WhyChooseUse from "@/components/WhyChooseUs";

export const metadata = {
  title: "About Us | Arcline Software Solutions",
  description:
    "Learn about Arcline, a software development company delivering web, app, and digital solutions.",
  keywords: [
    "software company",
    "web development",
    "app development",
    "IT services",
  ],
};

const Home = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <>
      <Hero_Section />
      <ScrollVelocity
        texts={[" Development - Communty - Mentorship - Leadership - "]}
        className="custom-scroll-text font-space text-neutral-600/20"
      />
      <div
        className="relative my-4 w-full overflow-clip rounded-md dark:border dark:border-white/[0.1]"
        ref={ref}
      >
        <GoogleGeminiEffect
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
        />
      </div>
      <Services />
      <WhyChooseUse />
      <Projects />
      <Tech_Marquee />
      <FAQSection />
      <Cta>
        Let's create your next <br />
        big idea.
      </Cta>
    </>
  );
};

export default Home;
