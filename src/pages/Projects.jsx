import Badge from "@/components/ui/Badge";
import Container from "@/components/Container";
import TextBottomBeam from "@/components/ui/TextBottomBeam";
import GetStartedBtn from "@/components/ui/GetStartedBtn";

import { CardBody, CardContainer, CardItem } from "@/components/ui/Card";
import Cta from "@/components/Cta";

export const metadata = {
  title: "Projects | ArcLine",
  description:
    "Explore our portfolio of successful digital products and innovative solutions across industries.",
};

export default function ProjectsPage() {
  const projects = [
    {
      category: "E-Commerce",
      title: "Luxury Fashion Marketplace",
      description:
        "A high-end e-commerce platform with advanced filtering, AR try-on features, and seamless checkout experience for premium fashion brands.",
      image: "/luxury-fashion-website-interface.jpg",
      tags: ["Next.js", "Shopify", "AR", "Payment Integration"],
      stats: { revenue: "+250%", conversion: "4.2%", users: "50K+" },
      year: "2024",
    },
    {
      category: "FinTech",
      title: "Digital Banking Platform",
      description:
        "Modern banking solution with real-time transactions, budgeting tools, and AI-powered financial insights for millennial users.",
      image: "/fintech-banking-dashboard-interface.jpg",
      tags: ["React", "Node.js", "PostgreSQL", "AI/ML"],
      stats: { users: "120K+", transactions: "2M+", rating: "4.8/5" },
      year: "2024",
    },
    {
      category: "HealthTech",
      title: "Telemedicine Platform",
      description:
        "HIPAA-compliant telehealth solution connecting patients with healthcare providers through secure video consultations.",
      image: "/telemedicine-video-call-interface.jpg",
      tags: ["TypeScript", "WebRTC", "HIPAA", "Cloud Infrastructure"],
      stats: { consultations: "500K+", providers: "2K+", satisfaction: "96%" },
      year: "2023",
    },
    {
      category: "SaaS",
      title: "Project Management Suite",
      description:
        "Collaborative workspace for distributed teams with real-time updates, Gantt charts, and advanced analytics.",
      image: "/project-management-dashboard.png",
      tags: ["Next.js", "MongoDB", "WebSockets", "Analytics"],
      stats: { teams: "5K+", projects: "100K+", efficiency: "+40%" },
      year: "2023",
    },
    {
      category: "EdTech",
      title: "Online Learning Platform",
      description:
        "Interactive e-learning platform with live classes, AI-powered assessments, and personalized learning paths.",
      image: "/elearning-course-interface.jpg",
      tags: ["React", "Python", "AI", "Video Streaming"],
      stats: { students: "200K+", courses: "1K+", completion: "85%" },
      year: "2023",
    },
    {
      category: "Logistics",
      title: "Supply Chain Management",
      description:
        "End-to-end logistics platform with real-time tracking, predictive analytics, and automated routing optimization.",
      image: "/logistics-tracking-dashboard.png",
      tags: ["Vue.js", "Python", "IoT", "Machine Learning"],
      stats: { shipments: "5M+", savings: "30%", accuracy: "99.2%" },
      year: "2022",
    },
  ];

  const categories = [
    "All",
    "E-Commerce",
    "FinTech",
    "HealthTech",
    "SaaS",
    "EdTech",
    "Logistics",
  ];

  return (
    <>
      <main className="min-h-screen ">
        {/* Hero Section with Pattern Background */}
        <Container>
          <div className="absolute inset-0 -z-10 h-full w-full bg-background dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_50%,#000_50%,transparent_100%)]"></div>

          <section className="pt-32 pb-16 md:pt-30 md:pb-24 px-4 sm:px-6 lg:px-8 relative  ">
            <div className=" relative">
              <div className="text-center space-y-6">
                <Badge className="bg-secondary/10 text-secondary hover:bg-secondary/20 border-secondary/20">
                  Our Portfolio
                </Badge>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold font-zalando text-shadow-sm tracking-tight text-balance mb-2">
                  Transforming Ideas into{" "}
                  <span className="text-secondary">Digital Reality</span>
                </h1>
                <TextBottomBeam />

                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
                  Explore our portfolio of successful projects across
                  industries. Each solution is crafted with precision,
                  innovation, and a commitment to excellence.
                </p>
                <GetStartedBtn />
              </div>
            </div>
          </section>

          {/* Category Filter */}
          <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-border bg-muted/30">
            <Container className=" relative">
              <div className="flex flex-wrap items-center justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    variant={category === "All" ? "default" : "outline"}
                    size="sm"
                    className={
                      category === "All"
                        ? "bg-secondary hover:bg-secondary/90"
                        : ""
                    }
                  >
                    {category}
                  </button>
                ))}
              </div>
            </Container>
          </section>

          {/* Projects Grid */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <Container className=" relative">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6">
                {projects.map((project, index) => (
                  <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto  h-auto rounded-xl p-6 border  ">
                      <CardItem translateZ="100" className="w-full ">
                        <img
                          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                          alt="thumbnail"
                        />
                      </CardItem>
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white mt-4"
                      >
                        {project.title}
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ="30"
                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                      >
                        {project.description}
                      </CardItem>
                      <div className="flex justify-between items-center mt-6">
                        <CardItem
                          translateZ={20}
                          as="a"
                          href="https://twitter.com/mannupaaji"
                          target="__blank"
                          className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white border"
                        >
                          Try now →
                        </CardItem>
                        <CardItem
                          translateZ={20}
                          as="button"
                          className="px-4 py-2 rounded-xl bg-black dark:bg-background dark:text-black text-white text-xs font-bold"
                        >
                          Sign up
                        </CardItem>
                      </div>
                    </CardBody>
                  </CardContainer>

                  // <GridCard
                  //   key={index}
                  //   className="group overflow-hidden border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-xl"
                  // >
                  //   <div className="relative overflow-hidden aspect-[3/2]">
                  //     <img
                  //       src={project.image || "/placeholder.svg"}
                  //       alt={project.title}
                  //       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  //     />
                  //     <div className="absolute top-4 left-4 flex gap-2">
                  //       <Badge className="bg-background/90 text-foreground border-border backdrop-blur-sm">
                  //         {project.category}
                  //       </Badge>
                  //       <Badge className="bg-background/90 text-foreground border-border backdrop-blur-sm">
                  //         <Calendar className="w-3 h-3 mr-1" />
                  //         {project.year}
                  //       </Badge>
                  //     </div>
                  //   </div>

                  //   <div className="p-6 space-y-4">
                  //     <div>
                  //       <h3 className="text-2xl font-bold mb-2 group-hover:text-secondary transition-colors">

                  //       </h3>
                  //       <p className="text-muted-foreground leading-relaxed">
                  //         {project.description}
                  //       </p>
                  //     </div>

                  //     <div className="flex flex-wrap gap-2">
                  //       {project.tags.map((tag, idx) => (
                  //         <span
                  //           key={idx}
                  //           className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-secondary/5 text-secondary text-xs font-medium border border-secondary/10"
                  //         >
                  //           <Tag className="w-3 h-3" />
                  //           {tag}
                  //         </span>
                  //       ))}
                  //     </div>

                  //     <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                  //       {Object.entries(project.stats).map(
                  //         ([key, value], idx) => (
                  //           <div key={idx} className="text-center">
                  //             <div className="text-lg font-bold text-secondary">
                  //               {value}
                  //             </div>
                  //             <div className="text-xs text-muted-foreground capitalize">
                  //               {key}
                  //             </div>
                  //           </div>
                  //         )
                  //       )}
                  //     </div>

                  //     <button
                  //       asChild
                  //       variant="outline"
                  //       className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground group-hover:border-secondary transition-all bg-transparent"
                  //     >
                  //       <a href={`/projects/${index}`}>
                  //         View Case Study
                  //         <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  //       </a>
                  //     </button>
                  //   </div>
                  // </GridCard>
                ))}
              </div>
            </Container>
          </section>

          {/* Stats Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
            <Container className=" relative">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  Our Impact
                </h2>
                <p className="text-lg text-muted-foreground">
                  Measurable results that drive business success
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: "50+", label: "Projects Delivered" },
                  { value: "1M+", label: "Active Users" },
                  { value: "98%", label: "Client Satisfaction" },
                  { value: "15+", label: "Industries Served" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm md:text-base text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          {/* CTA Section */}
  

          <Cta paragraph="Let's collaborate to build something exceptional. Our team is ready to bring your vision to life.">
            Ready to Start Your{" "}
            <span className="text-secondary">Next Project?</span>
          </Cta>
        </Container>
      </main>
    </>
  );
}
