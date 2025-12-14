import React from "react";

const Tech_Marquee = () => {
  const skills = [
    { name: "Html", icon: "./skills/imgi_2_HTML.svg" },
    { name: "Css", icon: "./skills/imgi_3_CSS.svg" },
    { name: "Js", icon: "./skills/imgi_4_JavaScript.svg" },
    { name: "TypeScript", icon: "./skills/imgi_5_TypeScript.svg" },
    { name: "React.Js", icon: "./skills/imgi_6_React.js.svg" },
    { name: "Next.Js", icon: "./skills/imgi_7_Next.js.svg" },
    { name: "Redux", icon: "./skills/imgi_9_Redux.svg" },
    { name: "Node.Js", icon: "./skills/imgi_10_Node.js.svg" },
    { name: "Express.Js", icon: "./skills/imgi_11_Express.js.svg" },
    { name: "MySQL", icon: "./skills/imgi_12_MySQL.svg" },
    { name: "MongoDB", icon: "./skills/imgi_13_MongoDB.svg" },
    { name: "Firebase", icon: "./skills/imgi_17_Firebase.svg" },
    { name: "GSAP", icon: "./skills/imgi_19_GSAP.svg" },
    { name: "TailwindCss", icon: "./skills/imgi_22_TailwindCSS.svg" },
    { name: "Git", icon: "./skills/imgi_23_GIT.svg" },
  ];

  return (
    <div className="my-12 border-y border-neutral-600/40 w-full selection:bg-highlight-secondry selection:text-white dark:selection:bg-highlight-primary py-8 relative overflow-hidden mask-r-from-80% mask-l-from-80%">
      <div className="flex whitespace-nowrap animate-marquee ">
        {/* First set */}
        {skills.map((skill, index) => (
          <div
            key={`first-${index}`}
            className="bg-white px-6 w-max py-2 text-zinc-800 flex gap-2 rounded-full text-sm items-center justify-center mx-3"
          >
            <img src={skill.icon} alt={skill.name} className="h-5" />
            {skill.name}
          </div>
        ))}

        {/* Duplicate set for seamless loop */}
        {skills.map((skill, index) => (
          <div
            key={`second-${index}`}
            className="bg-white px-6 w-max py-2 text-zinc-800 flex gap-2 rounded-full text-sm items-center justify-center mx-3"
          >
            <img src={skill.icon} alt={skill.name} className="h-5" />
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech_Marquee;
