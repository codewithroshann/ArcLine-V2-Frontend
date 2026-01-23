import { useState } from "react";
import Container from "./Container";

const faqData = [
  {
    question: "What services does Arcline Softs offer?",
    answer:
      "We're a full-service software development company specializing in custom web and mobile applications, enterprise software, UI/UX design, branding, and digital marketing. We build scalable solutions tailored to your business needs using modern technologies.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity. A simple website takes 2-4 weeks, while custom applications typically take 2-6 months. We provide a detailed timeline during consultation and maintain transparent communication throughout development.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Our pricing depends on project scope, features, and technology requirements. We offer flexible models including fixed-price projects, hourly rates, and dedicated teams. Contact us for a free consultation and custom quote tailored to your budget.",
  },
  {
    question: "Do you provide support after project launch?",
    answer:
      "Yes. We offer comprehensive post-launch support including maintenance, bug fixes, security updates, performance optimization, and feature enhancements. Our flexible support plans ensure your product stays reliable and up-to-date.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "We use cutting-edge technologies like React, Next.js, Node.js, Flutter, React Native, Python, and cloud platforms like AWS and Azure. We select the best tech stack based on your specific requirements, scalability needs, and long-term goals.",
  },
];

function ChevronDownIcon({ className }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    setOpenItems((prev) => (prev.includes(index) ? [] : [index]));
  };

  return (
    <Container className="flex w-full items-start justify-center">
      <div className="flex flex-1 flex-col items-start justify-start gap-6 px-4 py-16 md:px-12 md:py-20 lg:flex-row lg:gap-12">
        {/* Left Column - Header */}
        <div className="flex w-full flex-col items-start justify-center gap-4 lg:flex-1 lg:py-5">
          <h2 className="font-zalando flex w-full flex-col justify-center text-4xl leading-tight tracking-tight md:leading-[44px]">
            <span className="text-secondary">Frequently </span>Asked Questions
          </h2>
          <p className="w-full text-base leading-7 font-normal">
            Explore your data, build your dashboard,
            <br className="hidden md:block" />
            bring your team together.
          </p>
        </div>

        {/* Right Column - FAQ Items */}
        <div className="flex w-full flex-col items-center justify-center lg:flex-1">
          <div className="flex w-full flex-col">
            {faqData.map((item, index) => {
              const isOpen = openItems.includes(index);

              return (
                <div
                  key={index}
                  className="w-full overflow-hidden border-b border-neutral-400/50 dark:border-neutral-600/50"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="flex w-full items-center justify-between gap-5 px-5 py-[18px] text-left transition-colors duration-200 hover:bg-[rgba(73,66,61,0.02)]"
                    aria-expanded={isOpen}
                  >
                    <div className="flex-1 text-base leading-6 font-medium">
                      {item.question}
                    </div>
                    <div className="flex items-center justify-center">
                      <ChevronDownIcon
                        className={`h-6 w-6 text-[rgba(73,66,61,0.60)] transition-transform duration-300 ease-in-out ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-[18px] text-sm leading-6 font-normal text-neutral-600 dark:text-neutral-400">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
}
