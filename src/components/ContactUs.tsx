"use client";
import { ArrowRight, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const ContactUs = () => {
  const sliderItems = [
    {
      id: 1,
      text: "THE BEST SOLUTION",
      icon: Sparkles,
    },
    {
      id: 2,
      text: "EXPERIENCE THE DIFFERENCE",
      icon: Sparkles,
    },
    {
      id: 3,
      text: "INNOVATION AT ITS BEST",
      icon: Sparkles,
    },
  ];
  const containerRef = useRef<HTMLDivElement>(null);
  const [animationSpeed, setAnimationSpeed] = useState(60); // seconds to complete one cycle

  const sliderItemsData = sliderItems;

  // Create enough clones to fill the screen width plus some extra
  const items = sliderItemsData.map((item: any) => {
    const Icon = item.icon;
    return (
      <div
        key={item.id}
        className="flex items-center gap-2 mx-4 whitespace-nowrap"
      >
        <Icon size={20} className="text-primary sm:hidden" />
        <Icon size={24} className="text-primary hidden sm:block" />
        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold uppercase text-foreground">
          {item.text}
        </p>
      </div>
    );
  });

  const duplicatedItems = [...items, ...items];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Calculate the width of one item
    const firstItem = container.firstChild as HTMLElement;
    if (!firstItem) return;

    const itemWidth = firstItem.offsetWidth;

    // Set animation duration based on content width
    const totalContentWidth = itemWidth * items.length;
    const newSpeed = (totalContentWidth / 100) * 2; // Adjust speed based on width
    setAnimationSpeed(newSpeed);

    container.style.animationDuration = `${newSpeed}s`;

    // Recalculate on resize
    const handleResize = () => {
      const updatedItemWidth = firstItem.offsetWidth;
      const updatedTotalWidth = updatedItemWidth * items.length;
      const updatedSpeed = (updatedTotalWidth / 100) * 2;
      setAnimationSpeed(updatedSpeed);
      container.style.animationDuration = `${updatedSpeed}s`;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [items.length]);

  return (
    <section className="bg-section-color">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="flex flex-col xl:flex-row items-stretch justify-between gap-6 sm:gap-8 lg:gap-12">
          {/* Left Side - Header and Contact Info */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-12 w-full xl:w-[50%] order-1 xl:order-1">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium max-w-2xl leading-[1.1] text-center xl:text-left">
              <span className="text-primary">Go</span> ahead -{" "}
              <span className="italic font-light">Ask us anything</span>{" "}
            </h3>

            <div className="bg-background rounded-2xl p-4 sm:p-6 lg:p-8">
              <h3 className="text-foreground text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6">
                Contact Information
              </h3>

              {/* Contact Items - Responsive Grid */}
              <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4 lg:gap-6">
                <div className="flex items-center gap-3 sm:gap-4 border border-foreground/10 p-3 sm:p-4 rounded-xl sm:col-span-1">
                  <Phone
                    size={20}
                    className="text-primary sm:hidden flex-shrink-0"
                  />
                  <Phone
                    size={24}
                    className="text-primary hidden sm:block flex-shrink-0"
                  />
                  <p className="text-foreground text-sm sm:text-base lg:text-lg font-medium truncate">
                    +123 456 789
                  </p>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 border border-foreground/10 p-3 sm:p-4 rounded-xl sm:col-span-1">
                  <Mail
                    size={20}
                    className="text-primary sm:hidden flex-shrink-0"
                  />
                  <Mail
                    size={24}
                    className="text-primary hidden sm:block flex-shrink-0"
                  />
                  <p className="text-foreground text-sm sm:text-base lg:text-lg font-medium truncate">
                    contact@example.com
                  </p>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 border border-foreground/10 p-3 sm:p-4 rounded-xl sm:col-span-2">
                  <MapPin
                    size={20}
                    className="text-primary sm:hidden flex-shrink-0"
                  />
                  <MapPin
                    size={24}
                    className="text-primary hidden sm:block flex-shrink-0"
                  />
                  <p className="text-foreground text-sm sm:text-base lg:text-lg font-medium">
                    St 123, New York
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full xl:w-[50%] bg-background rounded-2xl p-4 sm:p-6 lg:p-8 order-2 xl:order-2">
            <h3 className="text-foreground text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 sm:mb-8 lg:mb-12">
              Get in Touch
            </h3>

            <form className="space-y-4 sm:space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm sm:text-base lg:text-lg font-medium"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="J Smith"
                    className="bg-section-color p-3 sm:p-4 rounded-xl placeholder:text-foreground/30 outline-none border border-foreground/10 focus:outline-none focus:border-primary transition-colors duration-200 text-sm sm:text-base"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm sm:text-base lg:text-lg font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Write email here"
                    className="bg-section-color p-3 sm:p-4 rounded-xl placeholder:text-foreground/30 outline-none border border-foreground/10 focus:outline-none focus:border-primary transition-colors duration-200 text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="phone"
                  className="text-sm sm:text-base lg:text-lg font-medium"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Write phone number here"
                  className="bg-section-color p-3 sm:p-4 rounded-xl placeholder:text-foreground/30 outline-none border border-foreground/10 focus:outline-none focus:border-primary transition-colors duration-200 text-sm sm:text-base"
                />
              </div>

              {/* Website Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="website"
                  className="text-sm sm:text-base lg:text-lg font-medium"
                >
                  Website
                </label>
                <input
                  type="url"
                  name="website"
                  id="website"
                  placeholder="Write website url here"
                  className="bg-section-color p-3 sm:p-4 rounded-xl placeholder:text-foreground/30 outline-none border border-foreground/10 focus:outline-none focus:border-primary transition-colors duration-200 text-sm sm:text-base"
                />
              </div>

              {/* Budget Field */}
              <div className="flex flex-col gap-2">
                <label
                  className="text-sm sm:text-base lg:text-lg font-medium"
                  htmlFor="budget"
                >
                  What is your budget for this project?
                </label>
                <select
                  name="budget"
                  id="budget"
                  className="bg-section-color p-3 sm:p-4 rounded-xl placeholder:text-foreground/30 outline-none border border-foreground/10 focus:outline-none focus:border-primary transition-colors duration-200 text-sm sm:text-base"
                >
                  <option>less than $1000</option>
                  <option>$1000 - $5000</option>
                  <option>$5000 - $10000</option>
                  <option>more than $10000</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="pt-2 sm:pt-4">
                <button
                  type="submit"
                  className="group flex items-center w-full sm:w-auto justify-center sm:justify-between bg-foreground text-background py-2 sm:py-3 px-4 sm:px-6 rounded-full gap-3 sm:gap-4 font-semibold cursor-pointer hover:bg-primary hover:text-background transition-all duration-300 ease-in-out"
                >
                  <span className="text-base sm:text-lg lg:text-xl">
                    Submit
                  </span>
                  <div className="p-1.5 sm:p-2 flex items-center justify-center bg-primary rounded-full group-hover:bg-foreground group-hover:text-primary-dark transition-all duration-300 ease-in-out border-2 border-primary group-hover:border-primary-dark">
                    <ArrowRight size={16} className="sm:hidden" />
                    <ArrowRight size={20} className="hidden sm:block" />
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Animated Banner */}
      <div className="border-t border-foreground/10 min-h-[8vh] sm:min-h-[10vh] w-full bg-secondary overflow-hidden relative">
        <div
          ref={containerRef}
          className="flex absolute top-0 left-0 h-full items-center"
          style={{
            animation: `scroll ${animationSpeed}s linear infinite`,
          }}
        >
          {duplicatedItems.map((item, index) => (
            <div key={index} className="mx-2 sm:mx-4 lg:mx-8">
              {item}
            </div>
          ))}
        </div>
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default ContactUs;
