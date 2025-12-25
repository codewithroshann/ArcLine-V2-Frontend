import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IconNorthStar } from "@tabler/icons-react";
import Container from "./Container";

const text =
  "I'm Roshan Sahu, a developer with over 2 years of experience. I concentrate on the end-to-end design and development of high-quality, impactful digital experiences. I have collaborated with highly innovative industry leaders to deliver the production-ready products.";

const About = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  const containerRef = useRef(null);
  const charsRef = useRef([]);

  const about = text.split("");

  useGSAP(
    () => {
      // Animate each character individually
      gsap.to(charsRef.current, {
        color: "#000",
        stagger: 0.05, // Small delay between each character
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
     <Container className=" px-10 selection:bg-secondary selection:text-white dark:selection:bg-primary">

    <div className="my-16" ref={containerRef}>
      <span className="text-center font-zalando uppercase text-secondary flex items-center justify-center">
        <IconNorthStar />
        About me
      </span>
      <p className="text-center font-space font-medium text-3xl leading-12 my-5 text-neutral-200">
        {about.map((char, idx) => (
          <span
            key={idx}
            ref={(el) => (charsRef.current[idx] = el)}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </p>
    </div>
    </Container>
  );
};

export default About;
