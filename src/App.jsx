import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero_Section from "./components/Hero-Section";
import Tech_Marquee from "./components/Tech_Marquee";
import About from "./components/About";
import Footer from "./components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import Cta from "./components/Cta";
import ScrollVelocity from "./components/ui/ScrollVelocity";
import Projects from "./components/Projects";

const App = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    // Connect Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero_Section />
      <ScrollVelocity
        texts={[" Develoment, Communty, Mentorship,"]}
        className="custom-scroll-text text-neutral-600/20  font-space"
      />
      <About />
      <Projects />
      <Tech_Marquee />
      <Cta />
      <Footer />
    </>
  );
};

export default App;
