"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      title: "SEO",
      description:
        "We offer SEO strategies tailored to help you rank better and grow online visibility effectively.",
      icon: "/logo/seo.png",
      link: "/seo",
    },
    {
      title: "SEM",
      description:
        "Drive instant traffic using smartly targeted Search Engine Marketing (SEM) campaigns.",
      icon: "/logo/sem.png",
      link: "/sem",
    },
    {
      title: "Social Media",
      description:
        "Boost your brand awareness with our social media growth and engagement.",
      icon: "/logo/social-media.png",
      link: "/social-media",
    },
    {
      title: "Web Design",
      description:
        "Modern, responsive, and scalable websites designed to impress and convert your visitors.",
      icon: "/logo/web.png",
      link: "/webdesign",
    },
    {
      title: "Education",
      description:
        "Digitize learning experiences with user-friendly e-learning platforms and education tools.",
      icon: "/logo/education.png",
      link: "/education",
    },
    {
      title: "Real Estate",
      description:
        "Innovative web and marketing solutions for real estate listings, leads, and property showcases.",
      icon: "/logo/realestate.png",
      link: "/real-estate",
    },
    {
      title: "Finance",
      description:
        "Secure and scalable digital solutions for banking, fintech, accounting, and reporting.",
      icon: "/logo/finance.png",
      link: "/finance",
    },
    {
      title: "E-commerce",
      description:
        "Build high-converting online stores with seamless payment, inventory, and marketing features.",
      icon: "/logo/e-commerce.png",
      link: "/ecommerce",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="text-center mb-12">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-blue-700 uppercase tracking-wide"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>
        <motion.p
          className="text-gray-600 mt-3 text-sm sm:text-base max-w-xl mx-auto px-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Tailored digital solutions for every industry.
        </motion.p>
      </div>

      {/* FIXED RESPONSIVE GRID */}
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          gap-6 
          md:gap-8 
          px-2 sm:px-4 md:px-8 lg:px-10
        "
      >
        {services.map((service, index) => (
          <Link href={service.link} key={index}>
            <motion.div
              className="
                bg-white 
                rounded-2xl 
                p-6 
                shadow-md 
                border 
                border-blue-100
                hover:shadow-2xl 
                hover:-translate-y-2 
                transition-all 
                duration-300 
                ease-in-out 
                group 
                cursor-pointer
                flex 
                flex-col 
                items-center 
                text-center
              "
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="
                  p-4 
                  bg-gradient-to-tr 
                  from-blue-100 
                  to-purple-100 
                  rounded-full 
                  group-hover:from-blue-200 
                  group-hover:to-purple-200 
                  transition-all 
                  duration-300
                "
                whileHover={{ rotate: 10 }}
              >
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={48}
                  height={48}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </motion.div>

              <h3
                className="
                  text-lg 
                  font-semibold 
                  text-gray-800 
                  mt-4 
                  mb-1 
                  group-hover:text-blue-600 
                  transition-colors 
                  duration-300
                "
              >
                {service.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
