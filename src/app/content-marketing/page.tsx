'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function ContentMarketing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Content marketing services data
  const contentServices = [
    {
      title: "SEO-Optimized Blog Writing",
      description: "Data-driven blog content that ranks on Google and converts visitors into leads.",
      icon: "📝",
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Email Marketing Campaigns",
      description: "Automated email sequences that nurture leads and boost customer retention.",
      icon: "✉️",
      color: "bg-purple-100 text-purple-800"
    },
    {
      title: "Video Content Strategy",
      description: "Engaging video scripts and production for YouTube, social media, and ads.",
      icon: "🎥",
      color: "bg-red-100 text-red-800"
    },
    {
      title: "Thought Leadership",
      description: "Whitepapers, case studies and articles that establish your authority.",
      icon: "👔",
      color: "bg-green-100 text-green-800"
    },
    {
      title: "Social Media Content",
      description: "Platform-specific content calendars that drive engagement and followers.",
      icon: "📱",
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      title: "Content Audits",
      description: "Comprehensive analysis of existing content with optimization roadmap.",
      icon: "🔍",
      color: "bg-indigo-100 text-indigo-800"
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
              alt="Content Marketing Agency Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className="text-xl font-bold text-blue-800">ContentMasters</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition">Services</Link>
            <Link href="/content-marketing" className="text-blue-600 font-medium">Content Marketing</Link>
            <Link href="/case-studies" className="text-gray-700 hover:text-blue-600 transition">Case Studies</Link>
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
            <Link href="/content-marketing" className="block py-2 px-4 text-blue-600 bg-blue-50 rounded">Content Marketing</Link>
            <Link href="/case-studies" className="block py-2 px-4 text-gray-700 hover:bg-blue-50 rounded">Case Studies</Link>
            <Link href="/contact" className="block py-2 px-4 text-gray-700 hover:bg-blue-50 rounded">Contact</Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-6 text-center"
      >
        <motion.h1 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Content Marketing & Strategy
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl max-w-3xl mx-auto"
        >
          Convert with blogs, emails, videos, and thought leadership that ranks, resonates, and scales.
        </motion.p>
      </motion.section>

      {/* Services Grid */}
      <section className="py-16 px-6 md:px-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12 text-gray-800"
        >
          Our Content Marketing Services
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {contentServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-xl shadow-md ${service.color} transition-all duration-300 hover:shadow-lg`}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-opacity-90">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Strategy Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Proven Content Strategy Framework</h2>
            <p className="text-lg text-gray-600">
              We follow a data-driven 5-phase approach to ensure your content delivers measurable business results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Research", desc: "Audience & competitor analysis" },
              { step: "2", title: "Plan", desc: "Content calendar & SEO strategy" },
              { step: "3", title: "Create", desc: "High-quality content production" },
              { step: "4", title: "Promote", desc: "Distribution across channels" },
              { step: "5", title: "Analyze", desc: "Performance tracking & optimization" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center"
              >
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-br from-indigo-50 to-blue-50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Content Marketing That Delivers Results</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Our clients typically see 3-5x more organic traffic and 2-3x more leads within 6-12 months.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: "300%", label: "Increase in organic traffic" },
              { value: "5x", label: "Higher conversion rates" },
              { value: "10x", label: "ROI compared to ads" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <p className="text-5xl font-bold text-blue-600 mb-3">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="text-xl font-bold mb-4">ContentMasters</h3>
            <p className="text-gray-400">
              Strategic content marketing that drives growth and builds authority.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/content-marketing" className="text-gray-400 hover:text-white transition">Content Strategy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition">Blog Writing</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition">Email Marketing</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition">Video Content</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition">Blog</Link></li>
              <li><Link href="/case-studies" className="text-gray-400 hover:text-white transition">Case Studies</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition">Content Templates</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition">SEO Guides</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <address className="text-gray-400 not-italic">
              <p>123 Content Street</p>
              <p>Bangalore, India 560001</p>
              <p className="mt-2">Email: hello@contentmasters.com</p>
              <p>Phone: +91 9876543210</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} ContentMasters. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}