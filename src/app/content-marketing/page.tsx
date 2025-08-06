'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'react-feather';
import { Transition } from '@headlessui/react';




export default function SEOAgencyBangalore() {
  return (
    <div className="min-h-screen flex flex-col">
      
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
            src="/icons/branding.png" // Replace this with your actual image path
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

    </div>
  );
}