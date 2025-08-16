'use client';

import { motion } from 'framer-motion';
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Transition } from '@headlessui/react';
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};




const AboutPage = () => {
  return (
    <>
      <main className="bg-gradient-to-tr from-white via-blue-50 to-orange-50 px-6 sm:px-12 lg:px-32 py-16 text-gray-800">
        {/* Header */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 mb-4">
            About Us
          </h1>
          <p className="text-lg text-gray-600">
            Digital Marketing Agency in Vidyaranyapura Bangalore | <span className="font-semibold">Global Tech Software Solutions</span>
          </p>
        </motion.section>

        {/* Intro Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
          className="bg-white/70 backdrop-blur-md rounded-xl p-8 shadow-lg mb-12"
        >
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            We Power Digital Transformation at a Global Scale
          </h2>
          <p className="mb-2">
            At <strong>Global Tech Software Solutions</strong>, we're not just a digital agency — we're your innovation partner in a fast-paced digital world.
          </p>
          <p className="mb-2">
            We combine advanced software development with cutting-edge digital marketing to help businesses of all sizes reach new heights — from startups to enterprises.
          </p>
          <p className="mb-2">
            Our approach is transparent, creative, results-driven — and above all, client-centric.
          </p>
        </motion.section>

        {/* Services */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={2}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-orange-600 mb-6 text-center">
            What We Do
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Search Engine Optimization (SEO)",
              "Social Media Marketing",
              "Performance Marketing (Google & Meta Ads)",
              "Content Strategy & Copywriting",
              "Email Marketing & Automation",
              "Influencer & Affiliate Marketing",
              "Video Marketing & YouTube Ads",
              "Analytics & Campaign Optimization"
            ].map((service, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="bg-white rounded-lg p-5 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-orange-400"
              >
                <h3 className="text-lg font-semibold text-gray-800">{service}</h3>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Process */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={3}
          className="bg-blue-50 p-8 rounded-xl shadow-inner mb-12"
        >
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            How We Work
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Discovery & Consultation:</strong> Understanding your vision and business needs.</li>
            <li><strong>Design & Development:</strong> Building custom digital solutions and testing for perfection.</li>
            <li><strong>Launch & Optimize:</strong> Real-time monitoring and ongoing improvements.</li>
          </ul>
          <p className="mt-4 italic">We work openly, together, and flexibly at every phase.</p>
        </motion.section>

        {/* Vision + Mission */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={4}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Our Vision & Mission</h2>
          <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-purple-600">VISION</h3>
              <p>
                To be the world's most trusted digital innovation partner, enabling organizations to unlock their full potential through technology, creativity, and customer-centric solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-purple-600">MISSION</h3>
              <p>
                To deliver high-impact digital products and marketing strategies that drive transformation, growth, and long-term success for businesses around the world.
              </p>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={5}
          className="text-center"
        >
          <button className="bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-transform transform hover:scale-105">
          <Link href="/contact" > Request More Info</Link>
          </button>
        </motion.div>
      </main>
    </>
  );
};

export default AboutPage;

// Media Queries
const styles = `
  @media (max-width: 767px) {
    /* Navbar adjustments */
    nav .flex-shrink-0 {
      margin-left: 0;
    }
    
    nav img {
      height: 12vw;
      margin-bottom: 2vw;
      margin-top: 2vw;
    }
    
    nav span.text-xl {
      font-size: 4.5vw;
      line-height: 1.2;
    }
    
    /* About page adjustments */
    main {
      padding-left: 4vw;
      padding-right: 4vw;
      padding-top: 8vw;
      padding-bottom: 8vw;
    }
    
    h1.text-4xl {
      font-size: 8vw;
    }
    
    h2.text-2xl {
      font-size: 6vw;
    }
    
    .bg-white\\/70 {
      padding: 6vw;
    }
    
    /* Footer adjustments */
    footer {
      padding-left: 4vw;
      padding-right: 4vw;
      padding-top: 6vw;
      padding-bottom: 6vw;
    }
    
    footer .grid-cols-1 {
      gap: 8vw;
    }
    
    footer h3 {
      font-size: 5vw;
    }
    
    footer h4 {
      font-size: 5.5vw;
      margin-bottom: 3vw;
    }
    
    footer .text-sm {
      font-size: 3.8vw;
    }
    
    footer .fixed {
      bottom: 3vw;
      right: 3vw;
    }
    
    footer img[alt="WhatsApp"] {
      width: 12vw;
      height: 12vw;
    }
  }
  
  @media (min-width: 768px) and (max-width: 1023px) {
    /* Tablet-specific adjustments */
    main {
      padding-left: 8vw;
      padding-right: 8vw;
    }
    
    h1.text-4xl {
      font-size: 5.5vw;
    }
    
    h2.text-2xl {
      font-size: 4vw;
    }
    
    /* Footer tablet adjustments */
    footer {
      padding-left: 8vw;
      padding-right: 8vw;
    }
    
    footer .grid-cols-3 {
      grid-template-columns: repeat(2, 1fr);
    }
    
    footer > div:last-child {
      grid-column: span 2;
    }
  }
  
  @media (max-width: 1023px) {
    /* General small screen adjustments */
    .hidden-md {
      display: none;
    }
    
    .md\\:flex {
      display: none;
    }
    
    .md\\:hidden {
      display: block;
    }
  }
  
  @media (min-width: 1024px) {
    /* Large screen adjustments */
    .md\\:flex {
      display: flex;
    }
    
    .md\\:hidden {
      display: none;
    }
  }
`;

// Add styles to the head
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.innerHTML = styles;
  document.head.appendChild(styleElement);
}