import Badge from "@/components/ui/Badge";
import Container from "@/components/Container";
import TextBottomBeam from "@/components/ui/TextBottomBeam";
import GetStartedBtn from "@/components/ui/GetStartedBtn";

import { CardBody, CardContainer, CardItem } from "@/components/ui/Card";
import Cta from "@/components/Cta";
import HeroBgPattern from "@/components/ui/HeroBgPattern";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const metadata = {
  title: "Projects | ArcLine",
  description:
    "Explore our portfolio of successful digital products and innovative solutions across industries.",
};

export default function ProjectsPage() {
  const projects = [
    {
      category: "Sports",
      title: " Triton Sportsline",
      description:
        "Triton Sportsline empowers athletes through sports education, professional training, events, and partnerships nationwid",
      image: "/projects/tritonsportsline.png",
      tags: ["Next.js", "Shopify", "AR", "Payment Integration"],
      stats: { revenue: "+250%", conversion: "4.2%", users: "50K+" },
      year: "2024",
    },
    {
      category: "FinTech",
      title: "Finusmart",
      description:
        "FinuSmart delivers tailored insurance and assistance solutions for fintech, ecommerce, travel, health sectors.",
      image: "/projects/finusmart-fintech.png",
      tags: ["React", "Node.js", "PostgreSQL", "AI-ML"],
      stats: { users: "120K+", transactions: "2M+", rating: "4.8/5" },
      year: "2024",
    },
    {
      category: "Music",
      title: "BeatWave",
      description:
        "BeatWave is an online marketplace for discovering, licensing, and purchasing high-quality music beats.",
      image: "/projects/beatwave.png",
      tags: ["TypeScript", "WebRTC", "HIPAA", "Cloud Infrastructure"],
      stats: { consultations: "500K+", providers: "2K+", satisfaction: "96%" },
      year: "2023",
    },
  ];

  const categories = ["All", "Sports", "FinTech", "Music"];

  const [activeCategory, setActiveCategory] = useState("All");

  const Button = ({ children, variant, size, className, ...props }) => {
    return (
      <button
        className={cn(
          "bg-card focus-visible:ring-ring rounded-md border px-4 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  };

  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section with Pattern Background */}
        <Container>
          <HeroBgPattern />

          <section className="relative px-4 pt-32 pb-16 sm:px-6 md:pt-30 md:pb-24 lg:px-8">
            <div className="relative">
              <div className="space-y-6 text-center">
                <Badge className="bg-secondary/10 text-secondary hover:bg-secondary/20 border-secondary/20">
                  Our Portfolio
                </Badge>
                <h1 className="font-zalando mb-2 text-4xl font-semibold tracking-tight text-balance text-shadow-sm md:text-6xl lg:text-7xl">
                  Transforming Ideas into{" "}
                  <span className="text-secondary">Digital Reality</span>
                </h1>
                <TextBottomBeam />

                <p className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed text-balance md:text-xl">
                  Explore our portfolio of successful projects across
                  industries. Each solution is crafted with precision,
                  innovation, and a commitment to excellence.
                </p>
                <GetStartedBtn />
              </div>
            </div>
          </section>

          {/* Category Filter */}
          <section className="border-border bg-muted/30 border-b px-4 py-8 sm:px-6 lg:px-8">
            <Container className="relative">
              <div className="flex flex-wrap items-center justify-center gap-3">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === "All" ? "default" : "outline"}
                    size="sm"
                    className={
                      activeCategory === category
                        ? "bg-secondary hover:bg-secondary/90 scale-105 text-white transition-all duration-150"
                        : ""
                    }
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </Container>
          </section>

          {/* Projects Grid */}
          <section className="px-4 py-16 sm:px-6 lg:px-8">
            <Container className="relative">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
                {projects.filter(
                  (p) =>
                    activeCategory === "All" || p.category === activeCategory,
                ).length === 0 ? (
                  <div className="text-muted-foreground col-span-full text-center">
                    No projects found for {activeCategory}.
                  </div>
                ) : (
                  projects
                    .filter(
                      (p) =>
                        activeCategory === "All" ||
                        p.category === activeCategory,
                    )
                    .map((project, index) => (
                      <CardContainer className="inter-var" key={index}>
                        <CardBody className="group/card dark:bg-card relative h-auto w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
                          <CardItem translateZ="100" className="w-full">
                            <img
                              src={project.image}
                              className="h-60 w-full rounded-xl border border-neutral-400/40 group-hover/card:shadow-xl"
                              alt="thumbnail"
                            />
                          </CardItem>
                          <CardItem
                            translateZ="50"
                            className="mt-4 text-xl font-bold text-neutral-600 dark:text-white"
                          >
                            {project.title}
                          </CardItem>
                          <CardItem
                            as="p"
                            translateZ="30"
                            className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
                          >
                            {project.description}
                          </CardItem>
                 
                          <div className="mt-6 flex items-center justify-between">
                            <CardItem
                              translateZ={20}
                              as="a"
                              href="https://www.tritonsportsline.in/"
                              target="__blank"
                              className="border-border dark:border-border cursor-pointer rounded-xl border px-4 py-2 text-xs font-normal text-black dark:bg-zinc-900 dark:text-white"
                            >
                              Visit Site →
                            </CardItem>
                            <CardItem
                              translateZ={20}
                              as="button"
                              className="cursor-pointer rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
                            >
                              View
                            </CardItem>
                          </div>
                        </CardBody>
                      </CardContainer>
                    ))
                )}
              </div>
            </Container>
          </section>

          <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
            <Container className="relative">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                  Our Impact
                </h2>
                <p className="text-muted-foreground text-lg">
                  Measurable results that drive business success
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                {[
                  { value: "50+", label: "Projects Delivered" },
                  { value: "1M+", label: "Active Users" },
                  { value: "98%", label: "Client Satisfaction" },
                  { value: "15+", label: "Industries Served" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-secondary mb-2 text-4xl font-bold md:text-5xl">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground text-sm md:text-base">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          {/* CTA Section */}

          <Cta paragraph="Let's collaborate to build something exceptional. Our team is ready to bring your vision to life.">
            Ready to Start Your{" "}
            <span className="text-secondary">Next Project?</span>
          </Cta>
        </Container>
      </main>
    </>
  );
}
