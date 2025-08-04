'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'react-feather';
import { Transition } from '@headlessui/react';

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
              <a href="tel:+918495862494" className="hover:text-white">
                +91-8495862494
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
                No 10c, Gaduniya Complex Ramaiah Layout,
                <br />
                Vidyaranyapura, Bangalore - 560097
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
        href="https://wa.me/918495862494"
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

export default function GoogleMyBusiness() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const gmbServices = [
    {
      title: "Profile Optimization",
      description: "Complete GMB setup with keywords, categories, and business attributes",
      icon: "📊",
      color: "from-blue-100 to-blue-50"
    },
    {
      title: "Local SEO",
      description: "NAP consistency, local citations, and neighborhood keywords",
      icon: "📍",
      color: "from-green-100 to-green-50"
    },
    {
      title: "Review Management",
      description: "Review generation strategy and professional responses",
      icon: "⭐",
      color: "from-yellow-100 to-yellow-50"
    },
    {
      title: "Posting Strategy",
      description: "Weekly posts with offers, events and updates",
      icon: "📅",
      color: "from-purple-100 to-purple-50"
    },
    {
      title: "Photo Optimization",
      description: "Professional photos with geo-tagging and alt text",
      icon: "📸",
      color: "from-red-100 to-red-50"
    },
    {
      title: "Performance Tracking",
      description: "Monthly reports with calls, direction requests, and impressions",
      icon: "📈",
      color: "from-indigo-100 to-indigo-50"
    }
  ];

  const optimizationSteps = [
    {
      step: "1",
      title: "Audit",
      description: "Analyze current profile strength and competitors"
    },
    {
      step: "2",
      title: "Optimize",
      description: "Enhance every profile section with keywords"
    },
    {
      step: "3",
      title: "Localize",
      description: "Build local citations and neighborhood backlinks"
    },
    {
      step: "4",
      title: "Engage",
      description: "Generate & respond to reviews"
    },
    {
      step: "5",
      title: "Maintain",
      description: "Monthly updates and performance tracking"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
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
                    <Link href="/webdesign" className="block px-4 py-2 hover:bg-gray-300 transition">Web Design</Link>
                    <Link href="/seo" className="block px-4 py-2 hover:bg-gray-300 transition">SEO</Link>
                    <Link href="/sem" className="block px-4 py-2 hover:bg-gray-300 transition">SEM</Link>
                    <Link href="/social-media" className="block px-4 py-2 hover:bg-gray-300 transition">Social Media</Link>
                  </div>
                </Transition>
              </div>

              {/* <Link href="/clients" className="hover:text-blue-600 transition">Our Clients</Link> */}
              <Link href="/contact" className="hover:text-blue-600 transition">Contact Us</Link>

              <button className="bg-orange-400 hover:bg-orange-600 text-white px-4 py-2 rounded font-semibold transform hover:scale-105 transition duration-200">
                📞
              </button>
              <button className="bg-orange-400 hover:bg-orange-600 text-white px-4 py-2 rounded font-semibold transform hover:scale-105 transition duration-200">
                📋 
              </button>
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
                  <Link href="/webdesign" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50">Web Design</Link>
                  <Link href="/seo" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50">SEO</Link>
                  <Link href="/sem" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50">SEM</Link>
                  <Link href="/social-media" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50">Social Media</Link>
                </div>
              </Transition>
            </div>

            <Link href="/clients" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Our Clients</Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Contact Us</Link>
            
            <div className="flex space-x-2 pt-2">
              <button className="bg-orange-400 hover:bg-orange-600 text-white px-4 py-2 rounded font-semibold transform hover:scale-105 transition duration-200 w-full">
                📞 Call Us
              </button>
              <button className="bg-orange-400 hover:bg-orange-600 text-white px-4 py-2 rounded font-semibold transform hover:scale-105 transition duration-200 w-full">
                📋 Get Quote
              </button>
            </div>
          </div>
        </Transition>
      </nav>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-6 text-center"
      >
        <motion.h1 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Google My Business Optimization
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl max-w-3xl mx-auto"
        >
          Capture local traffic with optimized GMB profiles, local SEO, and reputation management.
        </motion.p>
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-10"
        >
          <Image 
            src="/icons/business.png"
            alt="Google My Business Dashboard"
            width={800}
            height={400}
            className="mx-auto rounded-lg shadow-xl border-4 border-white"
          />
        </motion.div>
      </motion.section>

      {/* Why GMB Matters */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Why Google My Business Optimization Matters
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500"
            >
              <h3 className="text-xl font-bold mb-3 text-blue-800">76% of Local Searches</h3>
              <p className="text-gray-600">Result in phone calls or store visits within 24 hours when GMB is optimized</p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500"
            >
              <h3 className="text-xl font-bold mb-3 text-green-800">2.7x More Likely</h3>
              <p className="text-gray-600">Customers trust businesses with complete GMB profiles</p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500"
            >
              <h3 className="text-xl font-bold mb-3 text-purple-800">5-10% CTR Boost</h3>
              <p className="text-gray-600">With regular GMB posts and photo updates</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12 text-gray-800"
        >
          Our GMB Optimization Services
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {gmbServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className={`bg-gradient-to-br ${service.color} p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300`}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Optimization Process */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our 5-Step GMB Optimization Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Proven methodology to maximize your local search visibility and conversions
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-green-500 -ml-0.5"></div>
            
            {optimizationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`mb-8 md:flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
              >
                <div className={`md:w-5/12 p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'bg-blue-50' : 'bg-green-50'} border-t-4 ${index % 2 === 0 ? 'border-blue-500' : 'border-green-500'}`}>
                  <div className="flex items-center mb-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mr-4 ${index % 2 === 0 ? 'bg-blue-600' : 'bg-green-600'}`}>
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-gray-700 pl-14">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Typical Results After GMB Optimization</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { value: "80%", label: "More profile views" },
              { value: "3x", label: "More calls" },
              { value: "2.5x", label: "More direction requests" },
              { value: "5-10", label: "Higher map rankings" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm border border-white border-opacity-20"
              >
                <p className="text-4xl font-bold mb-2">{stat.value}</p>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}