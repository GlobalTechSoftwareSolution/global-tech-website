'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { Transition } from '@headlessui/react';


export default function FinanceServiceSection() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <section className="bg-gradient-to-br from-blue-50 to-gray-100 py-16 px-4 md:px-20 flex-grow">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Finance & Fintech Solutions
            </motion.h2>
            
            <motion.h4 
              className="text-lg font-semibold text-indigo-600 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Secure. Scalable. Smart.
            </motion.h4>
            
            <motion.p 
              className="text-gray-700 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              We specialize in building secure, high-performing platforms for the finance and fintech sector. From digital banking interfaces to automated accounting dashboards, we deliver trust and usability.
            </motion.p>
            
            <motion.p 
              className="text-gray-700 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Our finance digital solutions include custom web apps, mobile interfaces, data visualization tools, and compliance-focused features that meet the regulatory requirements.
            </motion.p>
            
            <motion.p 
              className="text-gray-700 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Whether you're a startup or an enterprise, our tailored fintech tools are designed for performance, user-friendliness, and robust data handling across banking, insurance, lending, and investment sectors.
            </motion.p>

            {/* Finance DNA */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <h5 className="font-bold text-blue-900 mb-3">Our Finance DNA:</h5>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-blue-600">
                  <h6 className="font-semibold text-blue-600 mb-2">Banking Solutions</h6>
                  <p className="text-sm text-gray-700">Digital banking platforms with multi-layer security</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-indigo-500">
                  <h6 className="font-semibold text-indigo-600 mb-2">Payment Gateways</h6>
                  <p className="text-sm text-gray-700">Seamless payment processing integrations</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-purple-500">
                  <h6 className="font-semibold text-purple-600 mb-2">Wealth Tech</h6>
                  <p className="text-sm text-gray-700">Investment tracking and portfolio management</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-green-500">
                  <h6 className="font-semibold text-green-600 mb-2">RegTech</h6>
                  <p className="text-sm text-gray-700">Compliance automation and reporting tools</p>
                </div>
              </div>
            </motion.div>

            {/* Features List */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <h5 className="font-bold text-blue-900 mb-3">Key Features We Implement:</h5>
              <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span> Multi-factor authentication
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span> Real-time transaction processing
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span> AI-powered fraud detection
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span> Custom dashboard analytics
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span> Open banking APIs
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span> Blockchain integration
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span> Automated reporting
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span> KYC/AML compliance
                </li>
              </ul>
            </motion.div>

            {/* Client Highlight */}
            <motion.div 
              className="bg-white p-4 rounded-xl shadow-md border-l-4 border-indigo-500 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <p className="text-sm text-gray-800">
                <strong className="text-indigo-700">Client Highlight:</strong> Partnered with a fintech startup to develop a user-centric dashboard and payment gateway integration, increasing customer onboarding by 40% and reducing transaction failures by 65%.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <button className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-600 transition-all shadow-lg hover:shadow-xl">
                Schedule Fintech Consultation
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors">
                Explore Solutions
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
              src="/icons/finance.png"
              alt="Finance Services"
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
                  <p className="text-2xl font-bold text-blue-600">40%</p>
                  <p className="text-xs text-gray-600">More Onboarding</p>
                </div>
                <div className="p-2">
                  <p className="text-2xl font-bold text-blue-600">65%</p>
                  <p className="text-xs text-gray-600">Fewer Failures</p>
                </div>
                <div className="p-2">
                  <p className="text-2xl font-bold text-blue-600">99.9%</p>
                  <p className="text-xs text-gray-600">Uptime</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}