'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { Transition } from '@headlessui/react';



export default function EcommerceServiceSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    services: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      
      <section className="bg-gradient-to-br from-yellow-50 via-pink-50 to-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2 
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-pink-700 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              E-Commerce Website Development
            </motion.h2>
            
            <motion.h4 
              className="text-lg md:text-xl font-semibold text-yellow-600 mb-4 md:mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Create. Sell. Grow Online.
            </motion.h4>
            
            <motion.p 
              className="text-gray-700 mb-3 md:mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Our eCommerce development services are designed to help businesses of all sizes create high-converting, user-friendly, and scalable online stores. Whether you're a small startup or a large retail enterprise, we provide tailored solutions that drive sales and improve user experience.
            </motion.p>
            
            <motion.p 
              className="text-gray-700 mb-3 md:mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              We work with leading platforms like Shopify, WooCommerce, Magento, and Headless CMS to provide flexibility and performance. Our services include store setup, custom UI/UX design, product catalog management, payment integration, and order processing systems.
            </motion.p>
            
            <motion.p 
              className="text-gray-700 mb-3 md:mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              We also focus on mobile optimization, SEO, speed performance, and analytics so your business can grow smarter and faster. Our approach ensures that customers enjoy seamless shopping experiences across all devices.
            </motion.p>
            
            <motion.p 
              className="text-gray-700 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Take your business online with confidence. We'll help you build the digital storefront you've always envisioned.
            </motion.p>

            {/* Platform Highlights */}
            <motion.div 
              className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="bg-white p-3 md:p-4 rounded-lg shadow-md border-t-4 border-blue-500">
                <h5 className="font-bold text-blue-600 mb-1 md:mb-2 text-sm md:text-base">Shopify</h5>
                <p className="text-xs md:text-sm text-gray-700">All-in-one eCommerce platform with powerful features</p>
              </div>
              <div className="bg-white p-3 md:p-4 rounded-lg shadow-md border-t-4 border-purple-500">
                <h5 className="font-bold text-purple-600 mb-1 md:mb-2 text-sm md:text-base">WooCommerce</h5>
                <p className="text-xs md:text-sm text-gray-700">Flexible WordPress eCommerce solution</p>
              </div>
              <div className="bg-white p-3 md:p-4 rounded-lg shadow-md border-t-4 border-orange-500">
                <h5 className="font-bold text-orange-600 mb-1 md:mb-2 text-sm md:text-base">Magento</h5>
                <p className="text-xs md:text-sm text-gray-700">Enterprise-grade eCommerce platform</p>
              </div>
              <div className="bg-white p-3 md:p-4 rounded-lg shadow-md border-t-4 border-green-500">
                <h5 className="font-bold text-green-600 mb-1 md:mb-2 text-sm md:text-base">Headless</h5>
                <p className="text-xs md:text-sm text-gray-700">Custom frontend with CMS backend</p>
              </div>
            </motion.div>

            {/* Features List */}
            <motion.div 
              className="mb-6 md:mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <h5 className="font-bold text-pink-700 mb-2 md:mb-3 text-base md:text-lg">Key Features We Implement:</h5>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 md:gap-2 text-xs md:text-sm text-gray-700">
                <li className="flex items-center">
                  <span className="text-pink-500 mr-1 md:mr-2">✓</span> Mobile-optimized design
                </li>
                <li className="flex items-center">
                  <span className="text-pink-500 mr-1 md:mr-2">✓</span> Secure payment gateways
                </li>
                <li className="flex items-center">
                  <span className="text-pink-500 mr-1 md:mr-2">✓</span> Product variants & filters
                </li>
                <li className="flex items-center">
                  <span className="text-pink-500 mr-1 md:mr-2">✓</span> Inventory management
                </li>
                <li className="flex items-center">
                  <span className="text-pink-500 mr-1 md:mr-2">✓</span> SEO optimization
                </li>
                <li className="flex items-center">
                  <span className="text-pink-500 mr-1 md:mr-2">✓</span> Multi-language support
                </li>
                <li className="flex items-center">
                  <span className="text-pink-500 mr-1 md:mr-2">✓</span> Analytics integration
                </li>
                <li className="flex items-center">
                  <span className="text-pink-500 mr-1 md:mr-2">✓</span> One-click checkout
                </li>
              </ul>
            </motion.div>

            {/* Client Highlight */}
            <motion.div 
              className="bg-white p-3 md:p-4 rounded-xl shadow-md border-l-4 border-pink-500 mb-6 md:mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <p className="text-xs md:text-sm text-gray-800">
                <strong className="text-pink-700">Featured Client:</strong> Helped an emerging fashion brand achieve a 3x increase in sales within 6 months through a fully customized eCommerce experience with Shopify Plus.
              </p>
            </motion.div>

            
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl relative order-first md:order-last"
          >
            <Image
              src="/icons/ecommerce.png"
              alt="E-commerce Solutions"
              width={600}
              height={400}
              className="object-cover w-full h-full"
              priority
            />
            
            {/* Floating Stats */}
            <motion.div 
              className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-white p-3 md:p-4 rounded-xl shadow-2xl w-11/12 md:w-4/5"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="grid grid-cols-3 gap-1 md:gap-2 text-center">
                <div className="p-1 md:p-2">
                  <p className="text-xl md:text-2xl font-bold text-pink-600">3x</p>
                  <p className="text-xs text-gray-600">Sales Growth</p>
                </div>
                <div className="p-1 md:p-2">
                  <p className="text-xl md:text-2xl font-bold text-pink-600">75%</p>
                  <p className="text-xs text-gray-600">Mobile Traffic</p>
                </div>
                <div className="p-1 md:p-2">
                  <p className="text-xl md:text-2xl font-bold text-pink-600">2.5s</p>
                  <p className="text-xs text-gray-600">Avg. Load Time</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* Media Queries */}
      <style jsx global>{`
        /* Base responsive styles */
        @media (max-width: 640px) {
          .flex-shrink-0 img {
            height: 3rem;
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
          }
          
          .text-xl {
            font-size: 1rem;
            line-height: 1.3;
          }
          
          .py-12 {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
          
          .px-4 {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          .gap-8 {
            gap: 1.5rem;
          }
          
          .text-2xl {
            font-size: 1.5rem;
          }
          
          .text-lg {
            font-size: 1rem;
          }
          
          .p-3 {
            padding: 0.75rem;
          }
          
          .rounded-xl {
            border-radius: 0.75rem;
          }
          
          .shadow-lg {
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          }
        }

        @media (min-width: 641px) and (max-width: 768px) {
          .max-w-6xl {
            max-width: 90%;
          }
          
          .py-16 {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
          
          .px-6 {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
          
          .text-3xl {
            font-size: 1.75rem;
          }
          
          .gap-12 {
            gap: 2.5rem;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .md\:px-20 {
            padding-left: 3rem;
            padding-right: 3rem;
          }
          
          .md\:py-16 {
            padding-top: 4rem;
            padding-bottom: 4rem;
          }
          
          .md\:grid-cols-2 {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .md\:gap-12 {
            gap: 3rem;
          }
        }

        @media (min-width: 1025px) {
          .lg\:px-8 {
            padding-left: 2rem;
            padding-right: 2rem;
          }
          
          .lg\:text-4xl {
            font-size: 2.25rem;
          }
          
          .max-w-6xl {
            max-width: 72rem;
          }
        }

        /* Navigation responsive behaviors */
        @media (max-width: 768px) {
          .hidden.md\:flex {
            display: none !important;
          }
          
          .md\:hidden {
            display: block !important;
          }
          
          .order-first {
            order: -1;
          }
        }
        
        @media (min-width: 769px) {
          .md\:flex {
            display: flex !important;
          }
          
          .md\:hidden {
            display: none !important;
          }
          
          .md\:order-last {
            order: 1;
          }
        }

        /* Button adjustments for small screens */
        @media (max-width: 400px) {
          .text-sm {
            font-size: 0.75rem;
          }
          
          .px-4 {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }
          
          .py-2 {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
}