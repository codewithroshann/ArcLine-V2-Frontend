import React from "react";
import Container from "./Container";
import Silk from "./ui/Silk";
import GetStartedBtn from "./ui/GetStartedBtn";
import Badge from "./ui/Badge";
const Cta = ({ children, paragraph, badge = "Available For Work" }) => {
  return (
    <Container className="px-4 mb-6 ">
      <div className="shadow-lg w-full  rounded-xl bg-white relative overflow-hidden">
        <Silk
          speed={2}
          scale={1}
          color="#43cf5dff"
          noiseIntensity={1.5}
          rotation={2}
        />
        <div className="flex flex-col items-center justify-center relative z-[5] py-10 px-4 text-background">
          <Badge>{badge}</Badge>

          <h2 className="font-zalando text-shadow-md text-2xl xs:text-3xl sm:text-4xl   md:text-5xl text-center md:leading-14 py-5">
          {children}
          </h2>
          <p className="w-xl text-center mb-3 cta-para">{paragraph}</p>

          <GetStartedBtn />
        </div>
      </div>
    </Container>
  );
};

export default Cta;
