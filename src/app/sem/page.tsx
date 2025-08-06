'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ContactPage from '../contact/page';

export default function SeoServicesSection() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4 sm:px-6 lg:px-8 py-12">
      <section className="w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8 text-center"
        >
          <div className="w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-md">
            <Image
              src="/icons/sem.png"
              alt="SEO Services in Bangalore"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800">
            Digital Marketing Agency in Bangalore
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-600">
            Expert SEO Services for Your Business Growth
          </h2>

          <div className="max-w-4xl mx-auto space-y-6 text-gray-700 text-lg">
            <p>
              Are you having a hard time online? We offer Search Engine Optimization (SEO) strategies that are focused on increasing your search engine rankings, gaining organic traffic, and growing your business.
            </p>
            <p>
              Our SEO specialists can assist startups and established businesses alike, optimizing your online presence to meet your goals. We provide Local SEO, Technical SEO, and tailored solutions for businesses in Bangalore.
            </p>
            <p>
              With 90% of online experiences starting with a search engine, SEO is key to your success. Our campaigns are data-driven and results-oriented, ensuring measurable growth in traffic, leads, and conversions.
            </p>
          </div>

        </motion.div>
      <ContactPage/>
      </section>
    </div>
  );
}