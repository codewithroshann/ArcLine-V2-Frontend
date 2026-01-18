import { IconNorthStar } from "@tabler/icons-react";
import Container from "./Container";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/Card";

const Projects = () => {
  return (
    <Container className="selection:bg-secondary dark:selection:bg-primary px-4 selection:text-white">
      <div className="w-full">
        <div className="text-center">
          <span className="text-secondary font-zalando font-normal uppercase">
            {" "}
            <IconNorthStar className="mr-2 inline" />
            Our Work{" "}
          </span>
          <h2 className="font-zalando text-4xl">Featured Projects</h2>
          <p className="text-muted-foreground mx-auto mt-2 max-w-2xl md:text-lg">
            A showcase of our best work, demonstrating innovation, performance,
            and real business impact
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <CardContainer className="inter-var">
            <CardBody className="bg-card group/card relative h-auto w-auto rounded-xl border border-black/[0.1] p-6 dark:border-white/[0.2] dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
              <CardItem translateZ="100" className="w-full">
                <img
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <CardItem
                translateZ="50"
                className="mt-4 text-xl font-bold text-neutral-600 dark:text-white"
              >
                Make things float in air
              </CardItem>
              <CardItem
                as="p"
                translateZ="30"
                className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
              >
                Hover over this card to unleash the power of CSS perspective
              </CardItem>
              <div className="mt-6 flex items-center justify-between">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="https://twitter.com/mannupaaji"
                  target="__blank"
                  className="bg-background rounded-xl border px-4 py-2 text-xs font-normal dark:text-white text-black"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
                >
                  Sign up
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
