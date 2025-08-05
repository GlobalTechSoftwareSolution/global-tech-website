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

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [clientsOpen, setClientsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 transition duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-2 ml-5">
            <Link href="/">
              <div className="flex items-center space-x-2 cursor-pointer">
                <img
                  src="/logo/Global.jpg"
                  alt="Logo"
                  className="h-16 mb-5 mt-5 ml-0 rounded-full shadow z-50"
                />
                <span className="text-xl font-bold text-blue-700 leading-tight">
                  Global Tech <br /> Software Solutions
                </span>
              </div>
            </Link>
          </div>
        
          <div className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
            <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            <Link href="/about" className="hover:text-blue-600 transition">About Us</Link>

            <div className="relative group">
              <button className="flex items-center hover:text-blue-600 transition">
                Services <ChevronDown size={16} className="ml-1" />
              </button>
              <Transition
                show={true}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 -translate-y-2"
                enterTo="transform opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="transform opacity-100 translate-y-0"
                leaveTo="transform opacity-0 -translate-y-2"
              >
                <div className=" hidden group-hover:block mt-2 w-40 bg-white shadow-lg rounded-md z-10">
                  <Link href="/seo" className="block px-4 py-2 hover:bg-gray-300 transition">SEO</Link>
                  <Link href="/sem" className="block px-4 py-2 hover:bg-gray-300 transition">SEM</Link>
                  <Link href="/social-media" className="block px-4 py-2 hover:bg-gray-300 transition">Social Media</Link>
                </div>
              </Transition>
            </div>

            {/* <div className="relative group">
              <button className="flex items-center hover:text-blue-600 transition">
                Our Clients 
              </button>
            </div> */}

            <Link href="/contact" className="hover:text-blue-600 transition">Contact Us</Link>

            {/* <button className="bg-orange-400 hover:bg-orange-600 text-white px-4 py-2 rounded font-semibold transform hover:scale-105 transition duration-200">
              📞
            </button>
            <button className="bg-orange-400 hover:bg-orange-600 text-white px-4 py-2 rounded font-semibold transform hover:scale-105 transition duration-200">
              📋 
            </button> */}
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="transition transform hover:scale-110">
              <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <Transition
        show={mobileMenuOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        // className="md:hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Home</Link>
          <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">About Us</Link>
          
          <div>
            <button 
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              Services
              <ChevronDown size={16} className={`ml-1 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            <Transition
              show={servicesOpen}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <div className="pl-4 space-y-1">
                <Link href="/seo" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50">SEO</Link>
                <Link href="/sem" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50">SEM</Link>
                <Link href="/social-media" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50">Social Media</Link>
              </div>
            </Transition>
          </div>

          <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Contact Us</Link>
          
          {/* <div className="flex space-x-2 pt-2">
            <button className="bg-orange-400 hover:bg-orange-600 text-white px-4 py-2 rounded font-semibold transform hover:scale-105 transition duration-200 w-full">
              📞 Call Us
            </button>
            <button className="bg-orange-400 hover:bg-orange-600 text-white px-4 py-2 rounded font-semibold transform hover:scale-105 transition duration-200 w-full">
              📋 Get Quote
            </button>
          </div> */}
        </div>
      </Transition>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-white py-10 px-6 md:px-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700 pb-10">
        <div>
          <Image
            src="/logo/Global.jpg"
            alt="logo"
            width={64}
            height={64}
            className="h-16 mb-4 rounded-full shadow z-50"
          />
          <h3 className="font-semibold text-lg mb-4 uppercase leading-relaxed">
            GLOBAL TECH SOFTWARE SOLUTION
            <br />
            <p className="text-center text-xs md:text-sm font-medium text-gray-400 italic tracking-wide">
              "MORE THAN A SERVICE - A SOLUTION"
            </p>
          </h3>
          <div className="space-y-3 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Image src="/icons/phone.png" alt="Phone" width={20} height={20} />
              <a href="tel:+919844281875" className="hover:text-white">
                +91-9844281875
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/icons/email.png" alt="Email" width={20} height={20} />
              <a
                href="mailto:Tech@globaltechsoftwaresolutions.com"
                className="hover:text-white"
              >
                Tech@globaltechsoftwaresolutions.com
              </a>
            </div>
            <div className="flex items-start gap-2">
              <Image src="/icons/location.png" alt="Location" width={20} height={20} className="mt-1" />
              <span>
               No 10,4th floor, Gaduniya Complex Ramaiah Layout,Vidyaranyapura Banglore-560097
              </span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold text-white mb-4 uppercase">Pages</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="/" className="hover:text-white">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">About</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white">Services</Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white">Blog</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold text-white mb-4 uppercase">Work Hours</h4>
          <div className="flex items-center gap-2 text-gray-300 mb-2">
            <Image src="/icons/time.png" alt="Clock" width={20} height={20} />
            <span>Mon–Sat 10:00 AM–06:00 PM</span>
          </div>
          <p className="text-gray-400 mb-4">
            Visit our office to get a free consultation
          </p>
          <Link
            href="/contact"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded"
          >
            CLICK HERE
          </Link>
        </div>
      </div>

      <Link
        href="https://wa.me/9844281875"
        className="fixed bottom-5 right-5 rounded-full shadow-lg z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/logo/whatsapp.png"
          alt="WhatsApp"
          width={48}
          height={48}
        />
      </Link>
    </footer>
  );
}

const AboutPage = () => {
  return (
    <>
      <Navbar />
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
      <Footer />
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