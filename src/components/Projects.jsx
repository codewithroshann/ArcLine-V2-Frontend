import { IconNorthStar } from "@tabler/icons-react";
import Container from "./Container";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/Card";
import { cn } from "@/lib/utils";

const Projects = () => {
  return (
    <Container className="selection:bg-secondary dark:selection:bg-highlight-primary relative selection:text-white">
      <div className="w-full">
        <div className="text-center">
          <span className="text-secondary font-zalando font-normal uppercase">
            {" "}
            <IconNorthStar className="mr-2 inline" />
            Our Work{" "}
          </span>
          <h1 className="font-zalando text-4xl font-semibold">
            Featured Projects
          </h1>
          <p className="text-muted-foreground mx-auto mt-2 max-w-2xl md:text-lg">
            A showcase of our best work, demonstrating innovation, performance,
            and real business impact
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <CardContainer className="inter-var">
            <CardBody className="group/card relative h-auto w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
              <CardItem translateZ="100" className="w-full">
                <img
                  src="/projects/tritonsportsline.png"
                  className="h-60 w-full rounded-xl border border-neutral-400/40 object-cover group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <CardItem
                translateZ="50"
                className="mt-4 text-xl font-bold text-neutral-600 dark:text-white"
              >
                Triton Sportsline
              </CardItem>
              <CardItem
                as="p"
                translateZ="30"
                className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
              >
             Triton Sportsline empowers athletes through sports education, professional training, events, and partnerships nationwid
              </CardItem>
              <div className="mt-6 flex items-center justify-between">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="https://www.tritonsportsline.in/"
                  target="__blank"
                  className="rounded-xl border px-4 py-2 text-xs font-normal dark:text-white cursor-pointer"
                >
                  Visit Site →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="dark:bg-background rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:text-black cursor-pointer"
                >
                View
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var">
            <CardBody className="group/card relative h-auto w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
              <CardItem translateZ="100" className="w-full">
                <img
                  src="/projects/finusmart-fintech.png"
                  className="h-60 w-full rounded-xl border border-neutral-400/40 object-cover shadow-lg group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <CardItem
                translateZ="50"
                className="mt-4 text-xl font-bold text-neutral-600 dark:text-white"
              >
                Finusmart
              </CardItem>
              <CardItem
                as="p"
                translateZ="30"
                className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
              >
                FinuSmart delivers tailored insurance and assistance solutions for fintech, ecommerce, travel, health sectors.
              </CardItem>
              <div className="mt-6 flex items-center justify-between">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="https://www.finusmart.com/"
                  target="__blank"
                  className="rounded-xl border px-4 py-2 text-xs font-normal dark:text-white cursor-pointer"
                >
                  Visit Site →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="dark:bg-background rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:text-black cursor-pointer"
                >
                View
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var">
            <CardBody className="group/card relative h-auto w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
              <CardItem translateZ="100" className="w-full">
                <img
                  src="/projects/beatwave.png"
                  className="h-60 w-full rounded-xl border border-neutral-400/40 object-cover group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <CardItem
                translateZ="50"
                className="mt-4 text-xl font-bold text-neutral-600 dark:text-white"
              >
                BeatWave
              </CardItem>
              <CardItem
                as="p"
                translateZ="30"
                className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
              >
            BeatWave is an online marketplace for discovering, licensing, and purchasing high-quality music beats.
              </CardItem>
              <div className="mt-6 flex items-center justify-between">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="https://beat-wave-pink.vercel.app/"
                  target="__blank"
                  className="cursor-pointer rounded-xl border border-border px-4 py-2 text-xs font-normal text-black dark:text-white"
                >
                  Visit Site →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="dark:bg-background cursor-pointer rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:text-black"
                >
                  View
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </Container>
  );
};

export default Projects;
