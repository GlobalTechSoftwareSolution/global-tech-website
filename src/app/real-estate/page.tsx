'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { Transition } from '@headlessui/react';



export default function RealEstateServiceSection() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <section className="bg-gradient-to-br from-blue-50 to-green-100 py-16 px-4 md:px-20 flex-grow">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-blue-800 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Real Estate Digital Solutions
            </motion.h2>
            
            <motion.h4 
              className="text-lg font-semibold text-green-600 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Innovative, Scalable, and Results-Oriented
            </motion.h4>
            
            <motion.p 
              className="text-gray-700 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              We provide tailored digital solutions for real estate agencies, property developers, and brokers to maximize their online presence, generate qualified leads, and showcase properties with impact.
            </motion.p>
            
            <motion.p 
              className="text-gray-700 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Our platform solutions include immersive property showcases, virtual tours, dynamic listing pages, and CRM integrations. We build websites that are SEO-optimized and designed for both desktop and mobile users.
            </motion.p>
            
            <motion.p 
              className="text-gray-700 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Whether it's a single property site, real estate portal, or investor-facing platform, we focus on speed, performance, and great UI/UX. Let your properties shine through beautiful imagery, interactive maps, and intuitive design.
            </motion.p>

            {/* Real Estate DNA */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <h5 className="font-bold text-blue-700 mb-3">Our Real Estate DNA:</h5>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-blue-500">
                  <h6 className="font-semibold text-blue-600 mb-2">Property Showcases</h6>
                  <p className="text-sm text-gray-700">High-resolution galleries, virtual tours, and floor plans</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-green-500">
                  <h6 className="font-semibold text-green-600 mb-2">Lead Generation</h6>
                  <p className="text-sm text-gray-700">Smart contact forms and CRM integration</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-yellow-500">
                  <h6 className="font-semibold text-yellow-600 mb-2">Location Intelligence</h6>
                  <p className="text-sm text-gray-700">Interactive maps and neighborhood insights</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-orange-500">
                  <h6 className="font-semibold text-orange-600 mb-2">Investor Portals</h6>
                  <p className="text-sm text-gray-700">Secure document sharing and analytics</p>
                </div>
              </div>
            </motion.div>

            {/* Client Highlight */}
            <motion.div 
              className="bg-white p-4 rounded-xl shadow-md border-l-4 border-green-500 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-sm text-gray-800">
                <strong className="text-green-700">Client Highlight:</strong> We've helped leading property consultants build their online ecosystem, increasing qualified leads by 180% and reducing cost-per-lead by 40% through intelligent design and performance marketing.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <button className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-600 transition-all shadow-lg hover:shadow-xl">
                <Link href="/contact">Get Property Consultation</Link>
              </button>
              {/* <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors">
                View Case Studies
              </button> */}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-xl relative"
          >
            <Image
              src="/icons/real-estate.png"
              alt="Real Estate Services"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
            
            {/* Floating Stats */}
            <motion.div 
              className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-xl shadow-2xl w-4/5"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2">
                  <p className="text-2xl font-bold text-blue-600">180%</p>
                  <p className="text-xs text-gray-600">More Leads</p>
                </div>
                <div className="p-2">
                  <p className="text-2xl font-bold text-blue-600">40%</p>
                  <p className="text-xs text-gray-600">Cost Reduction</p>
                </div>
                <div className="p-2">
                  <p className="text-2xl font-bold text-blue-600">5.2x</p>
                  <p className="text-xs text-gray-600">ROI Increase</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}