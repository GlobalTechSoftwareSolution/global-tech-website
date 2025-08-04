'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function GoogleMyBusiness() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-6 md:px-20 sticky top-0 z-50">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Local SEO Agency Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className="text-xl font-bold text-blue-800">LocalSEOMasters</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition">Services</Link>
            <Link href="/gmb-optimization" className="text-blue-600 font-medium">GMB Optimization</Link>
            <Link href="/local-seo" className="text-gray-700 hover:text-blue-600 transition">Local SEO</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
          </div>

          <button 
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 pb-2">
            <Link href="/" className="block py-2 px-4 text-gray-700 hover:bg-blue-50 rounded">Home</Link>
            <Link href="/services" className="block py-2 px-4 text-gray-700 hover:bg-blue-50 rounded">Services</Link>
            <Link href="/gmb-optimization" className="block py-2 px-4 text-blue-600 bg-blue-50 rounded">GMB Optimization</Link>
            <Link href="/local-seo" className="block py-2 px-4 text-gray-700 hover:bg-blue-50 rounded">Local SEO</Link>
            <Link href="/contact" className="block py-2 px-4 text-gray-700 hover:bg-blue-50 rounded">Contact</Link>
          </div>
        )}
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
            src="/gmb-dashboard.png"
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="text-xl font-bold mb-4">LocalSEOMasters</h3>
            <p className="text-gray-400">
              Helping local businesses dominate their markets through expert Google My Business optimization.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/gmb-optimization" className="text-gray-400 hover:text-white transition">GMB Optimization</Link></li>
              <li><Link href="/local-seo" className="text-gray-400 hover:text-white transition">Local SEO</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition">Review Management</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition">Local Citations</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition">Blog</Link></li>
              <li><Link href="/case-studies" className="text-gray-400 hover:text-white transition">Case Studies</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition">Local SEO Checklist</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition">GMB Optimization Guide</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <address className="text-gray-400 not-italic">
              <p>123 Local Business Ave</p>
              <p>Bangalore, India 560001</p>
              <p className="mt-2">Email: hello@localseomasters.com</p>
              <p>Phone: +91 9876543210</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} LocalSEOMasters. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}