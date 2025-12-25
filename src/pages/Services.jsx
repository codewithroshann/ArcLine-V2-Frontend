import Container from "@/components/Container";
import Cta from "@/components/Cta";
import Badge from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

import {
  Code,
  Smartphone,
  Cloud,
  Palette,
  Database,
  Zap,
  Shield,
  Workflow,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import TextBottomBeam from "@/components/ui/TextBottomBeam";
import GetStartedBtn from "@/components/ui/GetStartedBtn";
import FAQSection from "@/components/Faq";

export const metadata = {
  title: "Services | ArcLine",
  description:
    "Comprehensive software development services including web, mobile, cloud, and AI solutions for modern businesses.",
};

export default function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Custom web applications built with modern frameworks and best practices. From responsive landing pages to complex enterprise portals.",
      features: [
        "Next.js",
        "Progressive Web Apps",
        "E-commerce Solutions",
        "CMS Integration",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android devices.",
      features: [
        "iOS & Android",
        "React Native",
        "Flutter Development",
        "App Store Optimization",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description:
        "Scalable cloud solutions leveraging AWS, Azure, and Google Cloud. DevOps, CI/CD pipelines, and infrastructure as code.",
      features: [
        "AWS & Azure",
        "Kubernetes",
        "Serverless Architecture",
        "Infrastructure as Code",
      ],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "User-centered design that combines aesthetics with functionality. From wireframes to high-fidelity prototypes.",
      features: [
        "User Research",
        "Prototyping",
        "Design Systems",
        "Usability Testing",
      ],
    },
    {
      icon: Database,
      title: "Database Solutions",
      description:
        "Robust database architecture and optimization. SQL and NoSQL solutions tailored to your data requirements.",
      features: [
        "PostgreSQL & MongoDB",
        "Data Modeling",
        "Performance Optimization",
        "Migration Services",
      ],
    },
    {
      icon: Zap,
      title: "API Development",
      description:
        "RESTful and GraphQL APIs designed for performance and scalability. Complete documentation and integration support.",
      features: [
        "REST & GraphQL",
        "API Gateway",
        "Microservices",
        "Third-party Integration",
      ],
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description:
        "Comprehensive security audits, penetration testing, and compliance consulting for GDPR, HIPAA, and SOC 2.",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Compliance Consulting",
        "Data Protection",
      ],
    },
    {
      icon: Workflow,
      title: "Technical Consulting",
      description:
        "Strategic technology consulting to help you make informed decisions about architecture, tech stack, and scaling.",
      features: [
        "Architecture Review",
        "Technology Selection",
        "Performance Optimization",
        "Team Training",
      ],
    },
  ];

  const approach = [
    {
      step: "01",
      title: "Discovery & Consultation",
      description:
        "We begin by understanding your business goals, technical requirements, and user needs through in-depth consultation sessions.",
    },
    {
      step: "02",
      title: "Strategic Planning",
      description:
        "Our team develops a comprehensive roadmap with clear milestones, timelines, and deliverables aligned with your objectives.",
    },
    {
      step: "03",
      title: "Agile Development",
      description:
        "We build your solution using agile methodologies, ensuring continuous feedback, rapid iterations, and transparent progress tracking.",
    },
    {
      step: "04",
      title: "Quality Assurance",
      description:
        "Rigorous testing across multiple devices and scenarios ensures your product is reliable, secure, and performs exceptionally.",
    },
    {
      step: "05",
      title: "Deployment & Support",
      description:
        "Seamless deployment to production with comprehensive documentation, training, and ongoing maintenance support.",
    },
  ];


  return (
    <>
      <main className="min-h-screen  w-full">
        {/* Hero Section */}
        <Container>
          <div className="absolute inset-0 -z-10 h-full w-full bg-background dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_50%,#000_50%,transparent_100%)]"></div>
          <section className="pt-32 pb-16 md:pt-30 md:pb-24 px-4 sm:px-6 lg:px-8 relative  ">
            <div className="relative z-[10] ">
              <div className="text-center space-y-6">
                <Badge> Our Services</Badge>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-zalando font-semibold text-shadow-sm tracking-tight mb-2 mt-3 text-balance  mx-auto">
                  Comprehensive{" "}
                  <span className="text-secondary">Software </span>Solutions
                </h1>
                <TextBottomBeam />
                <p className=" text-muted-foreground max-w-3xl mx-auto text-balance">
                  From concept to deployment, we deliver end-to-end software
                  development services that transform your vision into powerful
                  digital products.
                </p>
                <GetStartedBtn />
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
            <div className="container mx-auto max-w-7xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="group bg-background border border-border rounded-lg p-6 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                        <service.icon className="w-6 h-6 text-secondary" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 font-zalando tracking-tight group-hover:text-secondary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-xs text-muted-foreground"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Our Approach */}
          <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-12 md:mb-16">
                <p className="text-sm font-semibold tracking-wide uppercase text-secondary mb-3">
                  Our Process
                </p>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                  How We Work
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A proven methodology that delivers exceptional results through
                  collaboration and excellence.
                </p>
              </div>

              <div className="space-y-8">
                {approach.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-6 bg-background md:gap-8 group hover:scale-101 hover:shadow-lg duration-150 p-6 rounded-lg transition-all ease-in-out"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                        <span className="text-2xl font-bold text-secondary">
                          {item.step}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold font-zalando mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <FAQSection />

          {/* CTA Section */}

          <Cta paragraph="Let's discuss how we can help transform your ideas into exceptional digital products.">
            Ready to transform your{" "} <br />
            <span className="text-secondary">ideas</span> into reality
          </Cta>
        </Container>
      </main>
    </>
  );
}

