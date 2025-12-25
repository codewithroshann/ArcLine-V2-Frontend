import Container from "@/components/Container";
import Badge from "@/components/ui/Badge";
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
      <main className="min-h-screen ">
        <Container>
          <div className="absolute inset-0 -z-10 h-full w-full bg-background dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_50%,#000_50%,transparent_100%)]"></div>

          {/* Hero Section with Pattern Background */}
          <section className="relative pt-32 pb-16 md:pt-30 md:pb-24 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-6xl relative">
              <div className="text-center space-y-6">
                <Badge className="bg-secondary/10 text-secondary hover:bg-secondary/20 border-secondary/20">
                  Get in Touch
                </Badge>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-shadow-sm tracking-tight text-balance font-zalando mb-2">
                  Let's Build Something{" "}
                  <span className="text-secondary">Incredible</span> Together
                </h1>
                <TextBottomBeam />
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
                  Have a project in mind? We'd love to hear about it. Get in
                  touch and let's discuss how we can help bring your vision to
                  life.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Form and Info */}
          <section class="py-20 md:py-28">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
              <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                <div class="lg:col-span-2">
                  <div
                    data-slot="card"
                    class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm"
                  >
                    <div data-slot="card-content" class="px-6">
                      <h2 class="text-2xl font-bold mb-2">Send us a message</h2>
                      <p class="text-muted-foreground mb-6">
                        Fill out the form below and we'll get back to you within
                        24 hours.
                      </p>
                      <form class="space-y-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div class="space-y-2">
                            <label for="name" class="text-sm font-medium">
                              Full Name *
                            </label>
                            <input
                              data-slot="input"
                              class=" placeholder:text-muted-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] "
                              id="name"
                              placeholder="John Doe"
                              required=""
                              value=""
                              name="name"
                            />
                          </div>
                          <div class="space-y-2">
                            <label for="email" class="text-sm font-medium">
                              Email Address *
                            </label>
                            <input
                              data-slot="input"
                              class="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                              id="email"
                              placeholder="john@example.com"
                              required=""
                              type="email"
                              value=""
                              name="email"
                            />
                          </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div class="space-y-2">
                            <label for="company" class="text-sm font-medium">
                              Company Name
                            </label>
                            <input
                              data-slot="input"
                              class="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                              id="company"
                              placeholder="Your Company"
                              value=""
                              name="company"
                            />
                          </div>
                          <div class="space-y-2">
                            <label for="phone" class="text-sm font-medium">
                              Phone Number
                            </label>
                            <input
                              data-slot="input"
                              class="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                              id="phone"
                              placeholder="+1 (555) 123-4567"
                              type="tel"
                              value=""
                              name="phone"
                            />
                          </div>
                        </div>
                        <div class="space-y-2">
                          <label for="subject" class="text-sm font-medium">
                            Subject *
                          </label>
                          <input
                            data-slot="input"
                            class="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                            id="subject"
                            placeholder="How can we help you?"
                            required=""
                            value=""
                            name="subject"
                          />
                        </div>
                        <div class="space-y-2">
                          <label for="message" class="text-sm font-medium">
                            Message *
                          </label>
                          <textarea
                            data-slot="textarea"
                            class="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm min-h-32"
                            id="message"
                            name="message"
                            placeholder="Tell us about your project..."
                            required=""
                          ></textarea>
                        </div>
                        <button
                          data-slot="button"
                          class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-secondary text-white hover:bg-secondary/90 h-10 rounded-md px-6 has-[&gt;svg]:px-4 w-full md:w-auto"
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
                            class="lucide lucide-send w-4 h-4 ml-2"
                          >
                            <path d="m22 2-7 20-4-9-9-4Z"></path>
                            <path d="M22 2 11 13"></path>
                          </svg>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>

                <div class="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4">
                      Contact Information
                    </h3>
                    <div className="space-y-4">
                      {contactInfo.map((item, index) => (
                        <a
                          key={index}
                          href={item.link}
                          className="flex items-start gap-4 p-4 rounded-lg border border-border/50 hover:border-secondary/50 bg-background transition-all group"
                        >
                          <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                            <item.icon className="w-5 h-5 text-secondary" />
                          </div>
                          <div>
                            <div className="font-medium text-sm mb-1">
                              {item.title}
                            </div>
                            <div className="text-sm text-muted-foreground">
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
          <section class=" ">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
              <div class="aspect-[21/9] w-full rounded-xl overflow-hidden bg-muted border border-border">
                <div class="w-full h-full flex items-center justify-center text-muted-foreground">
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
                    class="lucide lucide-map-pin w-8 h-8 mr-2"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span class="text-sm">Map Integration Placeholder</span>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </main>
    </>
  );
}
