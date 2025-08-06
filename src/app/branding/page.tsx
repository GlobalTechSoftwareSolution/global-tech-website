'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'react-feather';
import { Transition } from '@headlessui/react';
import ContactPage from '../contact/page';

export default function SEOAgencyBangalore() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Main Content */}
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
          <Image
            src="/icons/branding.png"
            alt="SEO Strategy in Bangalore"
            width={800}
            height={450}
            className="w-full rounded-xl shadow-md"
          />
        </motion.div>

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
      <ContactPage/>
    </div>
  );
}