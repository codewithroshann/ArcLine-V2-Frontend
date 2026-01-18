import React from "react";
import Container from "./Container";
import Silk from "./ui/Silk";
import GetStartedBtn from "./ui/GetStartedBtn";
import Badge from "./ui/Badge";
const Cta = ({ children, paragraph, badge = "Available For Work" }) => {
  return (
    <Container className="mb-6 px-4">
      <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
        <img
          src="/cta-bg.png"
          alt="cta-bg"
          className="absolute top-0 left-0 z-[3] h-full w-full object-cover object-center"
        />
        <div className="text-background relative z-[5] flex flex-col items-center justify-center px-4 py-10">
          <Badge text="text-white">{badge}</Badge>

          <h2 className="font-zalando py-5 text-center text-lg text-white text-shadow-md sm:text-4xl md:text-6xl ">
            {children}
          </h2>
          <p className="cta-para mb-3 px-2 text-center text-sm md:w-xl md:text-base">
            {paragraph}
          </p>

          <GetStartedBtn />
        </div>
      </div>
    </Container>
  );
};

export default Cta;
