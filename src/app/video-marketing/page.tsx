'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function VideoMarketing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const videoServices = [
    {
      title: "Brand Storytelling",
      description: "Compelling narratives that connect emotionally with your audience",
      icon: "🎬",
      color: "from-purple-100 to-purple-50"
    },
    {
      title: "Social Media Reels",
      description: "Short-form videos optimized for Instagram, TikTok, and YouTube Shorts",
      icon: "📱",
      color: "from-pink-100 to-pink-50"
    },
    {
      title: "2D Animation",
      description: "Eye-catching animated explainers and product demos",
      icon: "✏️",
      color: "from-blue-100 to-blue-50"
    },
    {
      title: "Tutorial Videos",
      description: "Step-by-step guides that educate and engage customers",
      icon: "🎓",
      color: "from-green-100 to-green-50"
    },
    {
      title: "Testimonial Videos",
      description: "Authentic customer stories that build trust",
      icon: "💬",
      color: "from-red-100 to-red-50"
    },
    {
      title: "Live Streaming",
      description: "Professional live video production for events and Q&A",
      icon: "📹",
      color: "from-yellow-100 to-yellow-50"
    }
  ];

  const productionProcess = [
    {
      step: "1",
      title: "Strategy",
      description: "Define goals, audience, and key messages"
    },
    {
      step: "2",
      title: "Scripting",
      description: "Develop engaging scripts and storyboards"
    },
    {
      step: "3",
      title: "Production",
      description: "High-quality filming and animation"
    },
    {
      step: "4",
      title: "Editing",
      description: "Professional post-production and effects"
    },
    {
      step: "5",
      title: "Distribution",
      description: "Platform optimization and promotion"
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
              alt="Video Production Agency Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className="text-xl font-bold text-purple-800">VideoCraft</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-purple-600 transition">Home</Link>
            <Link href="/services" className="text-gray-700 hover:text-purple-600 transition">Services</Link>
            <Link href="/video-marketing" className="text-purple-600 font-medium">Video Marketing</Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-purple-600 transition">Portfolio</Link>
            <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition">Contact</Link>
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
            <Link href="/" className="block py-2 px-4 text-gray-700 hover:bg-purple-50 rounded">Home</Link>
            <Link href="/services" className="block py-2 px-4 text-gray-700 hover:bg-purple-50 rounded">Services</Link>
            <Link href="/video-marketing" className="block py-2 px-4 text-purple-600 bg-purple-50 rounded">Video Marketing</Link>
            <Link href="/portfolio" className="block py-2 px-4 text-gray-700 hover:bg-purple-50 rounded">Portfolio</Link>
            <Link href="/contact" className="block py-2 px-4 text-gray-700 hover:bg-purple-50 rounded">Contact</Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20 px-6 text-center relative overflow-hidden"
      >
        <motion.div 
          initial={{ scale: 1.2, opacity: 0.1 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <circle cx="20" cy="20" r="15" fill="white" opacity="0.05" />
            <circle cx="80" cy="30" r="20" fill="white" opacity="0.05" />
            <circle cx="40" cy="70" r="25" fill="white" opacity="0.05" />
            <circle cx="75" cy="80" r="15" fill="white" opacity="0.05" />
          </svg>
        </motion.div>
        
        <motion.h1 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 relative z-10"
        >
          Video Marketing & Creative Production
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl max-w-3xl mx-auto relative z-10"
        >
          Engage with brand videos, reels, 2D animation, and tutorials across platforms.
        </motion.p>
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-10 relative z-10"
        >
          <div className="aspect-w-16 aspect-h-9 w-full max-w-4xl mx-auto rounded-xl shadow-2xl overflow-hidden border-4 border-white">
            <div className="bg-black w-full h-64 md:h-96 flex items-center justify-center">
              <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Video Impact */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Why Video Marketing Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500"
            >
              <h3 className="text-xl font-bold mb-3 text-purple-800">10x More Engagement</h3>
              <p className="text-gray-600">Videos generate significantly more shares and comments than text posts</p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-pink-50 p-6 rounded-xl border-l-4 border-pink-500"
            >
              <h3 className="text-xl font-bold mb-3 text-pink-800">85% of Businesses</h3>
              <p className="text-gray-600">Report that video gives them a good ROI</p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500"
            >
              <h3 className="text-xl font-bold mb-3 text-blue-800">92% of Marketers</h3>
              <p className="text-gray-600">Say video is an important part of their strategy</p>
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
          Our Video Production Services
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {videoServices.map((service, index) => (
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

      {/* Production Process */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our 5-Step Video Production Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From concept to final delivery, we ensure quality at every stage
            </p>
          </motion.div>

          <div className="space-y-8">
            {productionProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-6 ${index % 3 === 0 ? 'bg-purple-600' : index % 3 === 1 ? 'bg-pink-600' : 'bg-blue-600'}`}>
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Video Marketing Results You Can Expect</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { value: "80%", label: "Increase in conversions" },
              { value: "4x", label: "More website traffic" },
              { value: "3x", label: "Higher retention rates" },
              { value: "10x", label: "More shares on social" }
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
            <h3 className="text-xl font-bold mb-4">VideoCraft</h3>
            <p className="text-gray-400">
              Creating compelling video content that drives engagement and conversions.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/video-marketing" className="text-gray-400 hover:text-white transition">Video Marketing</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition">Animation</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition">Social Media Videos</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition">Live Streaming</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition">Blog</Link></li>
              <li><Link href="/portfolio" className="text-gray-400 hover:text-white transition">Portfolio</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition">Video Marketing Guide</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition">Content Calendar</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <address className="text-gray-400 not-italic">
              <p>123 Creative Lane</p>
              <p>Bangalore, India 560001</p>
              <p className="mt-2">Email: hello@videocraft.com</p>
              <p>Phone: +91 9876543210</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} VideoCraft. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}