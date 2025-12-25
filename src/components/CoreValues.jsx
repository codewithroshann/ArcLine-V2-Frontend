import React from "react";

import { Target, Lightbulb, Users, Rocket, Shield } from "lucide-react";
import GridCard from "./ui/GridCard";
const CoreValues = () => {
  const values = [
    {
      icon: Target,
      title: "Client-Centric Approach",
      description:
        "We prioritize understanding your business goals and challenges to deliver solutions that drive real, measurable results.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "We stay ahead of technology trends, bringing cutting-edge solutions and forward-thinking approaches to every project.",
    },
    {
      icon: Users,
      title: "Collaborative Partnership",
      description:
        "We work as an extension of your team, fostering open communication and transparent collaboration throughout the development process.",
    },
    {
      icon: Rocket,
      title: "Excellence in Execution",
      description:
        "From initial planning to final deployment, we maintain the highest standards of quality, performance, and reliability.",
    },
    {
      icon: Shield,
      title: "Security & Scalability",
      description:
        "We build robust, secure systems designed to scale with your business, ensuring long-term success and sustainability.",
    },
  ];

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((value, index) => (
          <GridCard
            key={index}
            className="p-6 border-border hover:border-secondary/50 transition-colors"
          >
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
              <value.icon className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold font-zalando ">
              {value.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {value.description}
            </p>
          </GridCard>
        ))}
      </div>
    </>
  );
};

export default CoreValues;
