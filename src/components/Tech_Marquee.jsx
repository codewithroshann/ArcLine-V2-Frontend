import React from "react";
import Container from "./Container";
import { IconNorthStar } from "@tabler/icons-react";

const Tech_Marquee = () => {
  const skills = [
    { name: "Html", icon: "/skills/html.svg" },
    { name: "Css", icon: "/skills/css.svg" },
    { name: "Js", icon: "/skills/javascript.svg" },
    { name: "TypeScript", icon: "/skills/typescript.svg" },
    { name: "React.Js", icon: "/skills/react.svg" },
    { name: "Next.Js", icon: "/skills/next.svg" },
    { name: "Redux", icon: "/skills/redux.svg" },
    { name: "Node.Js", icon: "/skills/node.svg" },
    { name: "Express.Js", icon: "/skills/express.svg" },
    { name: "MySQL", icon: "/skills/sql.svg" },
    { name: "MongoDB", icon: "/skills/mongodb.svg" },
    { name: "Firebase", icon: "/skills/firebase.svg" },
    { name: "GSAP", icon: "/skills/gsap.svg" },
    { name: "TailwindCss", icon: "/skills/tailwindcss.svg" },
    { name: "Git", icon: "/skills/git.svg" },
  ];

  return (
    <>
      <Container>
        <div className="w-full">
          <div className="text-center">
            <span className="text-secondary font-zalando font-normal uppercase">
              {" "}
              <IconNorthStar className="mr-2 inline" />
              Tool Stacks
            </span>
          </div>

          <div className="selection:bg-secondary dark:selection:bg-primary relative mt-12 mb-2 w-full overflow-hidden border-y border-neutral-600/40 mask-r-from-80% mask-l-from-80% py-8 selection:text-white">
            <div className="animate-marquee-left flex whitespace-nowrap">
              {/* First set */}
              {skills.map((skill, index) => (
                <div
                  key={`first-${index}`}
                  className="mx-3 flex w-max items-center justify-center gap-2 rounded-full bg-white px-6 py-2 text-sm text-zinc-800 shadow-lg dark:bg-zinc-800 dark:text-white"
                >
                  <img src={skill.icon} alt={skill.name} className="h-5" />
                  {skill.name}
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {skills.map((skill, index) => (
                <div
                  key={`second-${index}`}
                  className="mx-3 flex w-max items-center justify-center gap-2 rounded-full bg-white px-6 py-2 text-sm text-zinc-800 shadow-lg dark:bg-zinc-800 dark:text-white"
                >
                  <img src={skill.icon} alt={skill.name} className="h-5" />
                  {skill.name}
                </div>
              ))}
            </div>
          </div>

          <div className="selection:bg-secondary dark:selection:bg-primary relative w-full overflow-hidden border-y border-neutral-600/40 mask-r-from-80% mask-l-from-80% py-8 selection:text-white">
            <div className="animate-marquee-right flex whitespace-nowrap">
              {/* First set */}
              {skills.map((skill, index) => (
                <div
                  key={`first-${index}`}
                  className="mx-3 flex w-max items-center justify-center gap-2 rounded-full bg-white px-6 py-2 text-sm text-zinc-800 shadow-lg dark:bg-zinc-800 dark:text-white"
                >
                  <img src={skill.icon} alt={skill.name} className="h-5" />
                  {skill.name}
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {skills.map((skill, index) => (
                <div
                  key={`second-${index}`}
                  className="mx-3 flex w-max items-center justify-center gap-2 rounded-full bg-white px-6 py-2 text-sm text-zinc-800 shadow-lg dark:bg-zinc-800 dark:text-white"
                >
                  <img src={skill.icon} alt={skill.name} className="h-5" />
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Tech_Marquee;
