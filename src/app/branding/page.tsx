'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function SEOAgencyBangalore() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-6 md:px-20 sticky top-0 z-50">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png" // Replace with your logo path
              alt="SEO Agency Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className="text-xl font-bold text-blue-800">SEO Agency Bangalore</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition">Services</Link>
            <Link href="/seo" className="text-blue-600 font-medium">SEO</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 pb-2">
            <Link href="/" className="block py-2 px-4 text-gray-700 hover:bg-blue-50 rounded">Home</Link>
            <Link href="/services" className="block py-2 px-4 text-gray-700 hover:bg-blue-50 rounded">Services</Link>
            <Link href="/seo" className="block py-2 px-4 text-blue-600 bg-blue-50 rounded">SEO</Link>
            <Link href="/about" className="block py-2 px-4 text-gray-700 hover:bg-blue-50 rounded">About</Link>
            <Link href="/contact" className="block py-2 px-4 text-gray-700 hover:bg-blue-50 rounded">Contact</Link>
          </div>
        )}
      </nav>

      {/* Your existing content */}
      <section className="bg-gradient-to-br from-white via-blue-50 to-purple-100 py-16 px-6 md:px-24 flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-blue-800 mb-4">
            Digital Marketing Agency in Bangalore – Expert SEO Services for Your Business
          </h1>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto mb-10"
        >
          <img
            src="/seo-services-banner.jpg" // Replace this with your actual image path
            alt="SEO Strategy in Bangalore"
            className="w-full rounded-xl shadow-md"
          />
        </motion.div>

        {/* Form */}
        <div className="bg-white p-8 rounded-xl shadow-md max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6 text-center">
            ENQUIRE NOW
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Enter Your Name *"
              className="p-3 border border-gray-300 rounded-lg focus:outline-blue-500"
              required
            />
            <input
              type="tel"
              placeholder="Enter Mobile Number *"
              className="p-3 border border-gray-300 rounded-lg focus:outline-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Enter Your Email Id *"
              className="p-3 border border-gray-300 rounded-lg focus:outline-blue-500 md:col-span-2"
              required
            />
            <input
              type="text"
              placeholder="Services"
              className="p-3 border border-gray-300 rounded-lg focus:outline-blue-500 md:col-span-2"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="p-3 border border-gray-300 rounded-lg focus:outline-blue-500 md:col-span-2"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg md:col-span-2 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* SEO Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 max-w-4xl mx-auto text-gray-700 space-y-6"
        >
          <p>
            Are you having a hard time online? We offer Search Engine Optimization (SEO) strategies that are focused on your increasing search engine rankings, gaining organic traffic, and growing your business with our Digital Marketing Agency in Bangalore. Our SEO specialists can assist you in either case if your company is a startup or one already existing to optimize your online performance and reach the targets that you have set. Our SEO services incorporate Local SEO, Technical SEO, and all the other types of SEO that are customized for the specific requirements of the companies in Bangalore.
          </p>
          <p>
            Being an SEO-focused digital marketing agency, we are well aware of the importance of better rankings in search engines. With 90% of online experiences starting with a search engine, it must be clear for you that search engine optimization is the only way for your business to be successful. Our SEO campaign is data-driven and is results-oriented thus, you will have a measurable increase in traffic, leads, and conversions.
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="text-xl font-bold mb-4">SEO Agency Bangalore</h3>
            <p className="text-gray-400">
              Helping businesses grow through strategic digital marketing solutions since 2015.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition">Services</Link></li>
              <li><Link href="/seo" className="text-gray-400 hover:text-white transition">SEO Services</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white transition">SEO Optimization</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition">PPC Advertising</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition">Social Media Marketing</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition">Content Marketing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <address className="text-gray-400 not-italic">
              <p>123 MG Road</p>
              <p>Bangalore, Karnataka 560001</p>
              <p className="mt-2">Email: info@seoagencybangalore.com</p>
              <p>Phone: +91 9876543210</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} SEO Agency Bangalore. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}