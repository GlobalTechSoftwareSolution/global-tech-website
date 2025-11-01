"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const DigitalShowcase = () => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // ✅ All Slides (with HRMS)
  const slides = [
    
    {
      id: 1,
      headingTop: "Enterprise Solutions",
      headingMain: "ERP System Integration",
      description:
        "Unify and automate your core processes across departments with our end-to-end ERP integration solutions.",
      image1: "/slide/slide2.png",
      ctaPrimary: "Learn More",
      ctaSecondary: "Request Demo",
    },
    {
      id: 2,
      headingTop: "Enterprise School Solutions",
      headingMain: "Smart School System",
      description:
        "Streamline your institution’s operations with our comprehensive Smart School ERP solutions tailored for academic excellence.",
      image1: "/slide/school.webp",
      ctaPrimary: "View Features",
      ctaSecondary: "Request Demo",
    },
    {
      id: 3,
      headingTop: "Next-Gen Workforce Management",
      headingMain: "HRMS",
      description:
        "Simplify HR operations with intelligent employee management, attendance tracking, and automated payroll solutions built for modern enterprises.",
      image1: "/slide/hrms.png",
      ctaPrimary: "Explore HRMS",
      ctaSecondary: "Schedule Demo",
    },
    {
      id: 4,
      headingTop: "Global Tech Innovation",
      headingMain: "Custom Software Development",
      description:
        "Bespoke technology solutions designed to solve your unique business challenges with precision and scalability.",
      image1: "/slide/slide3.jpg",
      ctaPrimary: "Our Expertise",
      ctaSecondary: "Contact Team",
    },
    {
      id: 5,
      headingTop: "Digital Transformation",
      headingMain: "Full-Service Digital Agency",
      description:
        "From strategy to execution — we build digital experiences that engage users and deliver measurable business growth.",
      image1: "/slide/slide1.png",
      ctaPrimary: "Our Services",
      ctaSecondary: "Get Proposal",
    },
  ];

  const { headingTop, headingMain, description, image1, ctaPrimary, ctaSecondary } =
    slides[current];

  // ✅ Centralized Link Resolver
  const getCTAPath = (cta: string) => {
    const text = cta.toLowerCase();
    if (text.includes("view")) return "/school";
    if (text.includes("expertise")) return "/expertise";
    if (text.includes("our")) return "/our-services";
    if (text.includes("schedule")) return "/schedule";
    if (text.includes("explore")) return "/hrms";
    if (text.includes("learn")) return "/learn-more";
    return "/";
  };

  const getSecondaryPath = (cta: string) => {
    const text = cta.toLowerCase();
    if (text.includes("request") || text.includes("demo")) return "/contact";
    if (text.includes("contact") || text.includes("team")) return "/contact";
    if (text.includes("proposal") || text.includes("book")) return "/contact";
    return "/contact";
  };

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  const handleSetCurrent = (index: number) => {
    setAutoPlay(false);
    setCurrent(index);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  useEffect(() => {
    if (!autoPlay || isHovered) return;
    const interval = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(interval);
  }, [autoPlay, isHovered, nextSlide]);

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-gray-100 px-5 py-10 md:py-24">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-12 flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-between">

        {/* CONTENT */}
        <div
          className="w-full md:w-1/2 space-y-6 text-center md:text-left order-1"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h4 className="text-xl md:text-2xl font-semibold text-blue-600 tracking-wide">
            {headingTop}
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold text-orange-500 leading-tight">
            {headingMain}
          </h2>
          <p className="text-gray-700 text-lg max-w-lg mx-auto md:mx-0">
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
            <Link
              href={getCTAPath(ctaPrimary)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 border-2 border-blue-600 transition-all duration-300 shadow-md hover:shadow-lg font-medium text-center"
            >
              {ctaPrimary}
            </Link>

            <Link
              href={getSecondaryPath(ctaSecondary)}
              className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg font-medium text-center"
            >
              {ctaSecondary}
            </Link>
          </div>

          {/* Indicators & Controls */}
          <div className="flex items-center justify-center md:justify-start gap-6 mt-12">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSetCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    current === index ? "bg-orange-500 scale-125" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div
          className="w-full md:w-1/2 flex justify-center relative group order-2 md:order-2 mb-8 md:mb-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative w-full max-w-md h-[300px] md:h-[500px] overflow-hidden rounded-[2rem] shadow-2xl transition-all duration-500 group-hover:scale-[1.03] group-hover:rotate-[-1.5deg]">
            <Image
              src={image1}
              alt={`${headingMain} - ${headingTop}`}
              fill
              className="object-cover object-center transition-transform duration-700 ease-in-out scale-100 group-hover:scale-110"
              priority={current === 0 || isMobile}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={isMobile ? 75 : 85}
              unoptimized={process.env.NODE_ENV === "development"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-[2rem]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalShowcase;
