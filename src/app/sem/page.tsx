'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { Transition } from '@headlessui/react';



export default function SeoServicesSection() {
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
      
      <section className="bg-gradient-to-br from-blue-50 to-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Form Section */}
          <motion.div
            className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-6 md:p-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 md:mb-6">ENQUIRE NOW</h3>
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name *"
                className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Enter Mobile Number *"
                className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
                value={formData.phone}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email Id *"
                className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="services"
                placeholder="Services"
                className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={formData.services}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={formData.message}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="bg-blue-600 text-white w-full py-2 md:py-3 rounded-md hover:bg-blue-700 transition"
              >
                ENQUIRE NOW
              </button>
            </form>
          </motion.div>

          {/* Content + Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6"
          >
            <div className="w-full overflow-hidden rounded-lg shadow-md">
              <Image
                src="/icons/sem.png"
                alt="SEO Services in Bangalore"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800">
              Digital Marketing Agency in Bangalore – Expert SEO Services for Your Business
            </h2>
            <div className="space-y-3 md:space-y-4 text-gray-700">
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
        </div>
      </section>


      {/* Media Queries */}
      <style jsx global>{`
        /* Mobile First Approach */
        
        /* Extra small devices (phones, 320px and up) */
        @media (min-width: 320px) {
          .text-xl {
            font-size: 1.25rem;
            line-height: 1.4;
          }
          
          .flex-shrink-0 img {
            height: 3.5rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
          }
        }
        
        /* Small devices (phones, 576px and up) */
        @media (min-width: 576px) {
          .px-4 {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
          
          .py-12 {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
        }
        
        /* Medium devices (tablets, 768px and up) */
        @media (min-width: 768px) {
          .md\:grid-cols-2 {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .md\:gap-12 {
            gap: 3rem;
          }
          
          .md\:py-16 {
            padding-top: 4rem;
            padding-bottom: 4rem;
          }
          
          .md\:px-20 {
            padding-left: 5rem;
            padding-right: 5rem;
          }
        }
        
        /* Large devices (desktops, 992px and up) */
        @media (min-width: 992px) {
          .lg\:px-8 {
            padding-left: 2rem;
            padding-right: 2rem;
          }
          
          .lg\:text-4xl {
            font-size: 2.25rem;
            line-height: 2.5rem;
          }
        }
        
        /* Extra large devices (large desktops, 1200px and up) */
        @media (min-width: 1200px) {
          .max-w-6xl {
            max-width: 72rem;
          }
          
          .max-w-7xl {
            max-width: 80rem;
          }
        }
        
        /* Navigation responsive behaviors */
        @media (max-width: 767px) {
          .hidden.md\:flex {
            display: none !important;
          }
          
          .md\:hidden {
            display: block !important;
          }
        }
        
        @media (min-width: 768px) {
          .md\:flex {
            display: flex !important;
          }
          
          .md\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}