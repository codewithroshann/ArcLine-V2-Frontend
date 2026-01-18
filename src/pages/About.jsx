import Container from "@/components/Container";
import CoreValues from "@/components/CoreValues";
import Cta from "@/components/Cta";
import OurProcess from "@/components/OurProcess";
import Badge from "@/components/ui/Badge";
import GetStartedBtn from "@/components/ui/GetStartedBtn";
import HeroBgPattern from "@/components/ui/HeroBgPattern";

import TextBottomBeam from "@/components/ui/TextBottomBeam";
import { CircleCheckBig } from "lucide-react";

export const metadata = {
  title: "About Us | Arcline Software Solutions",
  description:
    "Learn about Arcline, a software development company delivering web, app, and digital solutions.",
  keywords: [
    "software company",
    "web development",
    "app development",
    "IT services",
  ],
};

export default function AboutPage() {
  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "8+", label: "Years Experience" },
    { value: "25+", label: "Team Members" },
  ];

  return (
    <div className="w-full">
      <Container className="flex flex-col">
        <HeroBgPattern />
        <main className="px-4 pt-32 pb-16 sm:px-6 md:pt-30 md:pb-24 lg:px-8">
          {/* Hero Section */}

          <section className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <Badge className="mb-3" text="text-black dark:text-white">About ArcLine</Badge>

              <h1 className="font-zalando mt-3 mb-2 text-4xl font-semibold tracking-tight text-balance text-shadow-sm md:text-5xl lg:text-7xl">
                Building the <span className="text-secondary">Future</span> of
                Digital Innovation
              </h1>

              <TextBottomBeam />

              <p className="text-muted-foreground mb-8 leading-relaxed text-pretty">
                We transform ambitious ideas into exceptional digital products
                through innovative design, robust development, and strategic
                thinking. Your success is our mission.
              </p>

              <GetStartedBtn />
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-12 md:py-18">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-secondary mb-2 text-3xl font-bold text-shadow-sm md:text-4xl lg:text-5xl">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground text-sm md:text-base">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Our Story Section */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-4xl">
                <h2 className="font-zalando mb-6 text-center text-3xl font-semibold tracking-tight md:text-4xl">
                  Our Story
                </h2>

                <div className="text-muted-foreground space-y-6 text-lg leading-relaxed">
                  <p>
                    Founded with a vision to bridge the gap between complex
                    business challenges and elegant digital solutions, ArcLine
                    has grown from a small team of passionate developers into a
                    full-service software development company trusted by
                    businesses worldwide.
                  </p>
                  <p>
                    Our journey began with a simple belief: that technology
                    should empower, not complicate. Every project we undertake
                    is guided by this principle, ensuring that our solutions are
                    not only technically sophisticated but also intuitive and
                    user-friendly.
                  </p>
                  <p>
                    Today, we combine deep technical expertise with creative
                    problem-solving to deliver products that don&apos;t just
                    meet expectations—they exceed them. From startups to
                    enterprise organizations, we partner with businesses at
                    every stage of their digital transformation journey.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Core Values Section */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mx-auto">
                <div className="mb-12 text-center md:mb-16">
                  <h2 className="font-zalando semibold mb-4 text-3xl tracking-tight md:text-4xl">
                    Our Core Values
                  </h2>
                  <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                    The principles that guide our work and define our commitment
                    to excellence.
                  </p>
                </div>

                <CoreValues />
              </div>
            </div>
          </section>

          {/* Our Process Section */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-6xl">
                <div className="mb-12 text-center md:mb-16">
                  <h2 className="font-zalando mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
                    Our Process
                  </h2>
                  <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                    A proven methodology that ensures successful project
                    delivery from concept to launch.
                  </p>
                </div>

                <OurProcess />
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-4xl">
                <div className="mb-12 text-center">
                  <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                    Why Choose ArcLine
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    We bring more than just technical skills to the table.
                  </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    "Proven track record of successful project delivery",
                    "Deep expertise across multiple technologies and platforms",
                    "Agile development methodology for flexibility and transparency",
                    "Dedicated project management and communication",
                    "Comprehensive quality assurance and testing",
                    "Post-launch support and maintenance",
                    "Competitive pricing without compromising quality",
                    "Focus on long-term partnerships and mutual success",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CircleCheckBig className="text-secondary mt-0.5 h-6 w-6 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}

          <Cta paragraph="Ready to transform your vision into reality? Our team is here to help you navigate every step of your digital journey.">
            Let&apos;s Build Something <br />
            <span className="text-secondary">Exceptional</span> Together
          </Cta>
        </main>
      </Container>
    </div>
  );
}
