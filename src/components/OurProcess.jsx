import React from 'react'
import { CircleCheckBig } from 'lucide-react';

const OurProcess = () => {
  const process = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description:
        "We begin by understanding your vision, goals, and challenges to create a comprehensive strategy.",
    },
    {
      step: "02",
      title: "Design & Planning",
      description:
        "Our team crafts detailed designs and technical architecture that align with your objectives.",
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "We build your solution using agile methodologies, with continuous testing and quality assurance.",
    },
    {
      step: "04",
      title: "Launch & Support",
      description:
        "We ensure a smooth deployment and provide ongoing support to guarantee your success.",
    },
  ];

  return (
   <>
   
    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                  {process.map((item, index) => (
                    <div key={index} className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center">
                          <span className="text-lg font-bold text-secondary">
                            {item.step}
                          </span>
                        </div>
                      </div>
                      <div>
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
   
   
   </>
  )
}

export default OurProcess