import { IconNorthStar } from "@tabler/icons-react";
import  Container  from "./Container";
import React from "react";

const Projects = () => {
  return (
    <Container className="px-4 selection:bg-highlight-secondry selection:text-white dark:selection:bg-highlight-primary">
      <div className="w-full">
        <div>
          <span className="font-normal text-highlight-secondry uppercase font-zalando">
            {" "}
            <IconNorthStar />
            My Projects
          </span>
          <h1 className="text-4xl font-zalando">Selected Projects</h1>
        </div>
  
      </div>
    </Container>
  );
};

export default Projects;
