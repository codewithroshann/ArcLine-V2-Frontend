import Container from "@/components/Container";
import CoreValues from "@/components/CoreValues";
import Cta from "@/components/Cta";
import OurProcess from "@/components/OurProcess";
import Badge from "@/components/ui/Badge";
import GetStartedBtn from "@/components/ui/GetStartedBtn";

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
      <Container className="flex flex-col ">
        <div className="absolute inset-0 -z-10 h-full w-full bg-background dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_50%,#000_50%,transparent_100%)]"></div>
        <main className=" pt-32 pb-16 md:pt-30 md:pb-24 px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}

          <section className=" mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto  text-center">
              <Badge className="mb-3">About ArcLine</Badge>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-zalando font-semibold text-shadow-sm tracking-tight mb-2 mt-3 text-balance">
                Building the <span className="text-secondary">Future</span> of
                Digital Innovation
              </h1>

              <TextBottomBeam />

              <p className="mb-8 text-muted-foreground leading-relaxed text-pretty">
                We transform ambitious ideas into exceptional digital products
                through innovative design, robust development, and strategic
                thinking. Your success is our mission.
              </p>

              <GetStartedBtn />
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-12 md:py-18 ">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-2 text-shadow-sm">
                      {stat.value}
                    </div>
                    <div className="text-sm md:text-base text-muted-foreground">
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
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-zalando font-semibold tracking-tight mb-6 text-center">
                  Our Story
                </h2>

                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
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
          <section className="py-16 md:py-24 ">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className=" mx-auto">
                <div className="text-center mb-12 md:mb-16">
                  <h2 className="text-3xl md:text-4xl font-zalando semibold tracking-tight mb-4">
                    Our Core Values
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12 md:mb-16">
                  <h2 className="text-3xl md:text-4xl font-semibold font-zalando tracking-tight mb-4">
                    Our Process
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    A proven methodology that ensures successful project
                    delivery from concept to launch.
                  </p>
                </div>

                <OurProcess />
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="py-16 md:py-24 ">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                    Why Choose ArcLine
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    We bring more than just technical skills to the table.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
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
                      <CircleCheckBig className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}

          <Cta paragraph="Ready to transform your vision into reality? Our team is here to help you navigate every step of your digital journey.">
            Let&apos;s Build Something{" "}
            <span className="text-secondary">Exceptional</span> Together
          </Cta>
        </main>
      </Container>
    </div>
  );
}
