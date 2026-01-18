import Container from "@/components/Container";
import Badge from "@/components/ui/Badge";
import HeroBgPattern from "@/components/ui/HeroBgPattern";
import TextBottomBeam from "@/components/ui/TextBottomBeam";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@arcline.com",
      link: "mailto:hello@arcline.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Innovation Street, Tech Hub, CA 94016",
      link: "#",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Fri: 9:00 AM - 6:00 PM PST",
      link: "#",
    },
  ];

  const offices = [
    {
      city: "San Francisco",
      address: "123 Innovation Street, Suite 500",
      country: "USA",
    },
    {
      city: "New York",
      address: "456 Tech Avenue, Floor 12",
      country: "USA",
    },
    {
      city: "London",
      address: "789 Digital Lane, Office 8",
      country: "UK",
    },
  ];

  return (
    <>
      <main className="min-h-screen">
        <Container>
  <HeroBgPattern/>

          {/* Hero Section with Pattern Background */}
          <section className="relative px-4 pt-32 pb-16 sm:px-6 md:pt-30 md:pb-24 lg:px-8">
            <div className="relative container mx-auto max-w-6xl">
              <div className="space-y-6 text-center">
                <Badge className="bg-secondary/10 text-secondary hover:bg-secondary/20 border-secondary/20">
                  Get in Touch
                </Badge>
                <h1 className="font-zalando mb-2 text-4xl font-semibold tracking-tight text-balance text-shadow-sm md:text-6xl lg:text-7xl">
                  Let's Build Something{" "}
                  <span className="text-secondary">Incredible</span> Together
                </h1>
                <TextBottomBeam />
                <p className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed text-balance md:text-xl">
                  Have a project in mind? We'd love to hear about it. Get in
                  touch and let's discuss how we can help bring your vision to
                  life.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Form and Info */}
          <section className="py-20 md:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
                <div className="lg:col-span-2">
                  <div
                    data-slot="card"
                    className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm"
                  >
                    <div data-slot="card-content" className="px-6">
                      <h2 className="mb-2 text-2xl font-bold">
                        Send us a message
                      </h2>
                      <p className="text-muted-foreground mb-6">
                        Fill out the form below and we'll get back to you within
                        24 hours.
                      </p>
                      <form className="space-y-6">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <label for="name" className="text-sm font-medium">
                              Full Name *
                            </label>
                            <input
                              data-slot="input"
                              className="placeholder:text-muted-foreground dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                              id="name"
                              placeholder="John Doe"
                              required=""
                              value=""
                              name="name"
                            />
                          </div>
                          <div className="space-y-2">
                            <label for="email" className="text-sm font-medium">
                              Email Address *
                            </label>
                            <input
                              data-slot="input"
                              className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                              id="email"
                              placeholder="john@example.com"
                              required=""
                              type="email"
                              value=""
                              name="email"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <label
                              for="company"
                              className="text-sm font-medium"
                            >
                              Company Name
                            </label>
                            <input
                              data-slot="input"
                              className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                              id="company"
                              placeholder="Your Company"
                              value=""
                              name="company"
                            />
                          </div>
                          <div className="space-y-2">
                            <label for="phone" className="text-sm font-medium">
                              Phone Number
                            </label>
                            <input
                              data-slot="input"
                              className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                              id="phone"
                              placeholder="+1 (555) 123-4567"
                              type="tel"
                              value=""
                              name="phone"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label for="subject" className="text-sm font-medium">
                            Subject *
                          </label>
                          <input
                            data-slot="input"
                            className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                            id="subject"
                            placeholder="How can we help you?"
                            required=""
                            value=""
                            name="subject"
                          />
                        </div>
                        <div className="space-y-2">
                          <label for="message" className="text-sm font-medium">
                            Message *
                          </label>
                          <textarea
                            data-slot="textarea"
                            className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-32 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                            id="message"
                            name="message"
                            placeholder="Tell us about your project..."
                            required=""
                          ></textarea>
                        </div>
                        <button
                          data-slot="button"
                          className="[&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-secondary hover:bg-secondary/90 has-[&gt;svg]:px-4 inline-flex h-10 w-full shrink-0 items-center justify-center gap-2 rounded-md px-6 text-sm font-medium whitespace-nowrap text-white transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 md:w-auto"
                          type="submit"
                        >
                          Send Message
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-send ml-2 h-4 w-4"
                          >
                            <path d="m22 2-7 20-4-9-9-4Z"></path>
                            <path d="M22 2 11 13"></path>
                          </svg>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="mb-4 text-xl font-bold">
                      Contact Information
                    </h3>
                    <div className="space-y-4">
                      {contactInfo.map((item, index) => (
                        <a
                          key={index}
                          href={item.link}
                          className="border-border/50 hover:border-secondary/50 bg-card group flex items-start gap-4 rounded-lg border p-4 transition-all"
                        >
                          <div className="bg-secondary/10 group-hover:bg-secondary/20 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full transition-colors">
                            <item.icon className="text-secondary h-5 w-5" />
                          </div>
                          <div>
                            <div className="mb-1 text-sm font-medium">
                              {item.title}
                            </div>
                            <div className="text-muted-foreground text-sm">
                              {item.content}
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Map */}
          <section className=" ">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-muted border-border aspect-[21/9] w-full overflow-hidden rounded-xl border">
                <div className="text-muted-foreground flex h-full w-full items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin mr-2 h-8 w-8"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span className="text-sm">Map Integration Placeholder</span>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </main>
    </>
  );
}
