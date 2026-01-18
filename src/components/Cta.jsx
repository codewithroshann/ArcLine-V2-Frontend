import React from "react";
import Container from "./Container";
import GetStartedBtn from "./ui/GetStartedBtn";
import Badge from "./ui/Badge";
const Cta = ({ children, paragraph, badge = "Available For Work" }) => {
  return (
    <Container className="mb-6 px-4">
      <div className="relative w-full overflow-hidden rounded-xl bg-cover bg-bottom bg-no-repeat shadow-lg [background:url('/cta-bg.png')]">
        <div className="text-background relative z-[5] flex flex-col items-center justify-center px-4 py-10">
          <Badge text="text-white">{badge}</Badge>

          <h2 className="font-zalando py-5 text-center text-lg text-white text-shadow-md sm:text-4xl md:text-6xl">
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
