import React from "react";
import Container from "./Container";
import {
  IconBuildingSkyscraper,
  IconChartBar,
  IconCloud,
  IconDeviceMobile,
  IconNorthStar,
  IconPalette,
  IconPlug,
  IconRocket,
  IconWorld,
} from "@tabler/icons-react";

import { cn } from "@/lib/utils";

const Services = () => {
  const content = [
    {
      title: "Collaborative Editing",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
          Collaborative Editing
        </div>
      ),
    },
    {
      title: "Real time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <img
            src="/linear.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
          Version control
        </div>
      ),
    },
    {
      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
          Running out of content
        </div>
      ),
    },
  ];

const services = [
    {
      title: "Web Development",
      description:
        "High-performance web applications built with modern frameworks. From landing pages to complex SaaS platforms, we deliver scalable solutions optimized for speed, SEO, and user engagement.",
      icon: <IconWorld />,
      tags: ["React", "Next.js", "Node.js", "TypeScript"],
    },
    {
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile experiences that users love. Built for iOS and Android with seamless performance, offline capabilities, and intuitive navigation.",
      icon: <IconDeviceMobile />,
      tags: ["React Native", "Flutter", "iOS", "Android"],
    },
    {
      title: "MVP & Product Development",
      description:
        "Transform your vision into market-ready products. We specialize in rapid prototyping and lean development to help startups validate ideas and secure funding faster.",
      icon: <IconRocket />,
      tags: ["Rapid Development", "Prototyping", "Product Strategy"],
    },
    {
      title: "Enterprise Software Solutions",
      description:
        "Custom-built systems that streamline operations and drive measurable ROI. From workflow automation to complex data pipelines, we architect software that scales with your growth.",
      icon: <IconBuildingSkyscraper />,
      tags: ["Cloud Architecture", "Microservices", "Enterprise Integration"],
    },
    {
      title: "UI/UX & Product Design",
      description:
        "Design systems rooted in user research and behavioral psychology. We create intuitive interfaces that reduce friction, increase conversion, and deliver experiences users remember.",
      icon: <IconPalette />,
      tags: ["Design Systems", "User Research", "Conversion Optimization"],
    },
    {
      title: "API Development & Integration",
      description:
        "Robust APIs and seamless third-party integrations that unify your tech stack. Built with security, scalability, and developer experience at the core.",
      icon: <IconPlug />,
      tags: ["REST", "GraphQL", "Webhooks", "OAuth"],
    },
    {
      title: "Cloud Infrastructure & DevOps",
      description:
        "Enterprise-grade infrastructure that ensures 99.9% uptime. Automated deployments, monitoring, and scalable cloud architecture that grows with your user base.",
      icon: <IconCloud />,
      tags: ["AWS", "Docker", "CI/CD", "Kubernetes"],
    },
    {
      title: "Technical Consulting & Strategy",
      description:
        "Strategic technology guidance for critical decisions. Architecture reviews, technology audits, and fractional CTO services to navigate technical complexity with confidence.",
      icon: <IconChartBar />,
      tags: ["Tech Stack Selection", "Architecture Review", "CTO Advisory"],
    },
  ];
  return (
    <>
      <Container className="px-4 selection:bg-secondary selection:text-white dark:selection:bg-primary">
        <div className="w-full">
          <div className="text-center">
            <span className="font-normal text-secondary uppercase font-zalando">
              {" "}
              <IconNorthStar className="inline mr-2" />
              What We Serve
            </span>
            <h2 className="text-4xl font-zalando">Our Services</h2>
            <p className="max-w-2xl mx-auto mt-2 text-muted-foreground md:text-lg">
        We provide end-to-end web, app, software, and digital solutions tailored to your business needs.
              </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-12  relative z-10  max-w-7xl mx-auto ">
            {services.map((service, index) => (
              <Service key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Services;

const Service = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col border-r border-secondary/30  py-10 relative group/feature dark:border-neutral-800 ",
        (index === 0 || index === 4) && "border-l dark:border-neutral-800",
        index < 4 && "border-b border-l lg:border-b dark:border-neutral-800",

index >= 4 && "border-t border-l lg:border-t-0 dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-white/50 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className=" opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-white/50 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-secondary transition-all duration-200 origin-center" />

        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100 font-zalando">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};