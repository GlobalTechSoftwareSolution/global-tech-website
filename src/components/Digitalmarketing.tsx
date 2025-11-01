"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Digitalmarketing = () => {
  const services = [
    {
      title: "Website Design & Development",
      link: "/webdesign",
      description:
        "High-performing, mobile-optimized websites built on platforms like WordPress, Webflow, and Shopify with a focus on conversion and scalability.",
    },
    {
      title: "Search Engine Optimization (SEO)",
      link: "/seo",
      description:
        "Technical, on-page, and off-page SEO for local and global visibility, including voice search and mobile optimization.",
    },
    {
      title: "Social Media Marketing",
      link: "/social-media",
      description:
        "Create communities, drive engagement, and convert with integrated paid and organic strategies tailored to each platform.",
    },
    {
      title: "Paid Media & PPC Advertising",
      link: "/advertaising",
      description:
        "Maximize ROI with campaigns on Google, Meta, LinkedIn, and TikTok, powered by data and targeting precision.",
    },
    {
      title: "Content Marketing & Strategy",
      link: "/content-marketing",
      description:
        "Convert with blogs, emails, videos, and thought leadership that ranks, resonates, and scales.",
    },
    {
      title: "Google My Business Optimization",
      link: "/branding",
      description:
        "Capture local traffic with optimized GMB profiles, local SEO, and reputation management.",
    },
    {
      title: "Creative Logo Design & Branding",
      link: "/creativity",
      description:
        "Build strong brand identities through logos, taglines, visual systems, and marketing collateral.",
    },
    {
      title: "Video Marketing & Creative Production",
      link: "/video-marketing",
      description:
        "Engage with brand videos, reels, 2D animation, and tutorials across platforms.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 py-12 px-4 sm:px-8 md:px-16">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Digital Marketing Services
      </motion.h1>

      <motion.p
        className="text-center text-md md:text-lg text-gray-700 max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        At Global Tech Solutions, we combine data, creativity, and innovation to
        deliver business growth. From strategy to execution, our digital
        marketing and development solutions are built to scale.
      </motion.p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {services.map((service, index) => (
          <Link href={service.link} key={index} passHref>
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-xl border border-blue-100 hover:shadow-2xl hover:border-purple-300 transition-all duration-300 cursor-pointer hover:scale-105 h-full"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h2 className="text-xl font-semibold text-blue-800 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="mt-20 text-center">
        <motion.h2
          className="text-3xl font-bold text-purple-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let's Work Together
        </motion.h2>
        <motion.p
          className="mt-3 text-gray-700 text-sm md:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Digital marketing services and website development built to scale your
          business.
        </motion.p>

        <motion.button
          whileHover={{
            scale: 1.05,
            backgroundColor: "rgb(99 102 241)",
          }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
        >
          <Link href="/contact">Book Us Now</Link>
        </motion.button>
      </div>
    </div>
  );
};

export default Digitalmarketing;
