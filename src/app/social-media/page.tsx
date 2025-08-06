'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { Transition } from '@headlessui/react';



function ApproachAndWhyUs() {
  return (
    <div className="bg-white text-gray-800">
      {/* Our Approach Section */}
      <motion.section
        className="p-8 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">
          Our Approach
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto text-gray-700">
          <div className="bg-blue-50 p-5 rounded-lg shadow hover:shadow-md transition duration-300">
            <p className="font-semibold text-blue-700 mb-1"> Audience Research</p>
            <p>We study your audience's interests and behavior to create engaging strategies.</p>
          </div>
          <div className="bg-purple-50 p-5 rounded-lg shadow hover:shadow-md transition duration-300">
            <p className="font-semibold text-purple-700 mb-1"> Content Creation</p>
            <p>On-brand, goal-driven content that captivates and converts.</p>
          </div>
          <div className="bg-pink-50 p-5 rounded-lg shadow hover:shadow-md transition duration-300">
            <p className="font-semibold text-pink-700 mb-1"> Analytics & Optimization</p>
            <p>Performance tracking using KPIs like engagement and conversions.</p>
          </div>
          <div className="bg-green-50 p-5 rounded-lg shadow hover:shadow-md transition duration-300">
            <p className="font-semibold text-green-700 mb-1"> Social Media Advertising</p>
            <p>Precision-targeted ads for maximum ROI.</p>
          </div>
          <div className="bg-yellow-50 p-5 rounded-lg shadow hover:shadow-md transition duration-300 col-span-full">
            <p className="font-semibold text-yellow-700 mb-1">Best Practices</p>
            <p>Consistent branding, data-backed decisions, and timely content scheduling.</p>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Our Agency Section */}
      <motion.section
        className="p-8 bg-gradient-to-t from-blue-50 to-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">
          Why Choose Our Agency?
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-gray-800">
          <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm hover:shadow-md transition">
            <p className="font-semibold text-indigo-700 mb-1"> Experienced Team</p>
            <p>Deep expertise across multiple industries.</p>
          </div>
          <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm hover:shadow-md transition">
            <p className="font-semibold text-indigo-700 mb-1"> Tailored Strategies</p>
            <p>Custom plans aligned with your brand goals.</p>
          </div>
          <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm hover:shadow-md transition">
            <p className="font-semibold text-indigo-700 mb-1"> Proven Results</p>
            <p>Measurable success in lead gen and visibility.</p>
          </div>
          <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm hover:shadow-md transition">
            <p className="font-semibold text-indigo-700 mb-1">Transparent Reports</p>
            <p>Clear insights into ad spend, growth, and KPIs.</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}



export default function SocialMediaAgencyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      
      {/* Hero Section */}
      <motion.section
        className="text-center p-8 bg-gradient-to-r from-blue-100 to-purple-100 pt-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-extrabold text-blue-800 mb-4">
          Best Social Media Marketing Agency in Bangalore
        </h1>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg">
          We specialize in high-impact strategies designed to engage your target audience, increase followers, and promote your brand across major platforms like Facebook, Instagram, LinkedIn, Twitter, and more.
        </p>
      </motion.section>

      {/* Social Media Services Description */}
      <motion.section
        className="p-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* You can add additional content here if needed */}
      </motion.section>

      {/* Integrated ApproachAndWhyUs Component */}
      <ApproachAndWhyUs />

    </div>
  );
}