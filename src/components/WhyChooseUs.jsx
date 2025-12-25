import {motion} from "motion/react"
import Container from "./Container";
import { IconNorthStar, IconTrendingUp2,IconEye, IconMap, IconPalette, IconCheck, IconRocket } from "@tabler/icons-react";
import ScrollStack, { ScrollStackItem } from './ui/ScrollStack'


const WhyChooseUs = () => {
    const whyUs = [
      {
        step: <IconEye />,
        title: "Understand Your Vision",
        description:
          "We start by understanding your business goals, target audience, and technical requirements to ensure the right solution.",
      },
      {
        step: <IconMap className="" />,
        title: "Strategic Planning",
        description:
          "Our team creates a clear roadmap, defining the right technologies, timelines, and scalable architecture for your project.",
      },
      {
        step: <IconPalette className="" />,
        title: "Design & Development",
        description:
          "We design intuitive user experiences and build high-performance websites, apps, and software tailored to your needs.",
      },
      {
        step: <IconCheck className="" />,
        title: "Testing & Quality Assurance",
        description:
          "Every feature is thoroughly tested to ensure security, performance, and a seamless user experience across devices.",
      },
      {
        step: <IconRocket className="" />,
        title: "Launch & Deployment",
        description:
          "We deploy your product smoothly using modern cloud infrastructure, ensuring reliability and scalability from day one.",
      },
      {
        step: <IconTrendingUp2 className="" />,
        title: "Support & Growth",
        description:
          "After launch, we provide ongoing support, optimization, and improvements to help your business scale confidently.",
      },
    ];
  return (
<>
        {/* How It Works Section */}
        <Container className="selection:bg-secondary selection:text-white dark:selection:bg-primary">
        <section className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <span className="font-normal text-secondary uppercase font-zalando">
              {" "}
              <IconNorthStar className="inline mr-2" />
              Our Approach
            </span>
              <h2 className="text-3xl md:text-4xl font-zalando tracking-tight">How We Deliver <span className="text-secondary">Results</span></h2>
              <p className="max-w-2xl text-muted-foreground md:text-lg">
            We build scalable digital solutions through a clear, results-driven process focused on performance and growth.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 z-0"></div>

              {whyUs
.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative z-10 flex flex-col items-center text-center space-y-4"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-primary-foreground text-xl font-bold shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-zalando">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
            
          </div>
        </section>  
        </Container>
        </>
  )
}

export default WhyChooseUs;