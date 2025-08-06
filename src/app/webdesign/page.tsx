'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { Transition } from '@headlessui/react';


export default function WebsiteDevelopmentSection() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="bg-gradient-to-br from-blue-50 to-purple-100 py-16 px-4 md:px-20 flex-grow">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              Website Design & Development
            </h2>
            <h4 className="text-lg font-semibold text-orange-500 mb-6">
              Beautiful. Fast. Built to Convert.
            </h4>
            <p className="text-gray-700 mb-4">
              At Global Tech Solutions, we focus on creating high-performing websites that align precisely with your business goals while exceeding user expectations. Because each site is mobile-optimized and designed for lightning-fast performance, visitors enjoy seamless experiences on any device.
            </p>
            <p className="text-gray-700 mb-4">
              Our expertise covers custom web design (UI/UX), which crafts engaging experiences that delight users and reflect your unique brand identity. We also work extensively with flexible platforms like WordPress, Webflow, and Headless CMS.
            </p>
            <p className="text-gray-700 mb-4">
              We develop scalable online stores on Shopify and other eCommerce platforms. Targeted landing pages and microsites help drive campaigns and lead generation.
            </p>
            <p className="text-gray-700 mb-6">
              Expand your reach with multilingual and location-based sites. We prioritize performance and accessibility optimization to deliver fast-loading, inclusive, and SEO-friendly websites.
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/icons/web-desgn.png" // Replace with your actual image path
              alt="Website Development"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </section>

    </div>
  );
}