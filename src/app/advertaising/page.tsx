'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { Transition } from '@headlessui/react';



export default function PaidMediaSection() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <section className="bg-gradient-to-br from-yellow-50 to-orange-100 py-16 px-4 md:px-20 flex-grow">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-orange-800 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Paid Media & PPC Advertising
            </motion.h2>
            
            <motion.h4 
              className="text-lg font-semibold text-red-500 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Maximize ROI with Precision Targeting
            </motion.h4>
            
            <motion.p 
              className="text-gray-700 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              We craft paid media strategies tailored to your unique audience and goals. Our PPC campaigns span across leading platforms like Google Ads, Meta (Facebook & Instagram), LinkedIn Ads, and TikTok to ensure maximum visibility and conversion.
            </motion.p>
            
            <motion.p 
              className="text-gray-700 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Using data-driven insights, we optimize ad performance in real-time, targeting the right people at the right time with compelling creative. From search and display ads to retargeting and shopping campaigns, every dollar is invested for optimal return.
            </motion.p>
            
            <motion.p 
              className="text-gray-700 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Whether you're a startup looking to scale or an established brand aiming to boost ROI, our paid media experts will guide you through budget allocation, A/B testing, audience segmentation, and detailed analytics reporting.
            </motion.p>
            
            <motion.p 
              className="text-gray-700 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Transparency, strategy, and creativity define our paid media services—helping businesses scale profitably with measurable outcomes.
            </motion.p>

            {/* Platform Highlights */}
            <motion.div 
              className="grid grid-cols-2 gap-4 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-blue-500">
                <h5 className="font-bold text-blue-600 mb-2">Google Ads</h5>
                <p className="text-sm text-gray-700">Search, Display, Shopping, and YouTube advertising</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-purple-500">
                <h5 className="font-bold text-purple-600 mb-2">Meta Ads</h5>
                <p className="text-sm text-gray-700">Facebook, Instagram, and Messenger campaigns</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-sky-500">
                <h5 className="font-bold text-sky-600 mb-2">LinkedIn Ads</h5>
                <p className="text-sm text-gray-700">B2B targeting and professional audience reach</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-pink-500">
                <h5 className="font-bold text-pink-600 mb-2">TikTok Ads</h5>
                <p className="text-sm text-gray-700">Engaging short-form video advertising</p>
              </div>
            </motion.div>

            {/* Client Highlight */}
            <motion.div 
              className="bg-white p-4 rounded-xl shadow-md border-l-4 border-orange-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <p className="text-sm text-gray-800">
                <strong className="text-orange-700">Client Highlight:</strong> We helped a leading Bangalore-based e-commerce brand achieve a 320% ROAS through hyper-targeted Google & Meta ads.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all shadow-lg hover:shadow-xl">
                Get Your Free PPC Audit
              </button>
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
              src="/icons/ppc.png"
              alt="Paid Media Advertising"
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
                  <p className="text-2xl font-bold text-orange-600">320%</p>
                  <p className="text-xs text-gray-600">Average ROAS</p>
                </div>
                <div className="p-2">
                  <p className="text-2xl font-bold text-orange-600">42%</p>
                  <p className="text-xs text-gray-600">Cost Reduction</p>
                </div>
                <div className="p-2">
                  <p className="text-2xl font-bold text-orange-600">5.8x</p>
                  <p className="text-xs text-gray-600">More Conversions</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}