'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { Transition } from '@headlessui/react';
import ContactPage from '../contact/page';



export default function SEOServices() {
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
      
      <section className="bg-gradient-to-br from-white via-blue-50 to-purple-100 py-16 px-6 md:px-24 flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-12 pt-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            SEO Services in Bangalore by a Trusted SEO Agency
          </h1>
          <p className="text-gray-700 text-md">
            We offer Search Engine Optimization (SEO) strategies that focus on increasing search engine rankings, gaining organic traffic,
            and growing your business. Our SEO experts deliver custom solutions from Local SEO to Technical SEO for startups and established
            companies across Bangalore.
          </p>
        </motion.div>

        {/* Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto mb-10"
        >
          <img
            src="/icons/seo.png"
            alt="SEO Strategy Banner"
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
          <h3 className="text-2xl font-bold text-blue-800">Our SEO Services in Bangalore</h3>
          <p>
            Are you having a hard time online? Our SEO specialists can help whether you're a startup or a growing company. We deliver Local SEO,
            Technical SEO, and other tailored strategies specifically designed for Bangalore-based businesses.
          </p>
          <p>
            With 90% of online experiences beginning with a search engine, it's vital to rank well. We offer fully customized, data-driven,
            and result-oriented campaigns that improve traffic, lead generation, and conversions.
          </p>
          <p className="font-semibold text-blue-700">
            Professional SEO Services to Boost Website Ranking and Traffic
          </p>
        </motion.div>
        <ContactPage/>
      </section>


      {/* Media Queries */}
      <style jsx global>{`
        /* Mobile First Approach */
        
        /* Small devices (phones, 600px and down) */
        @media only screen and (max-width: 600px) {
          /* Navbar adjustments */
          .flex-shrink-0 img {
            height: 12vw;
            margin-bottom: 2vw;
            margin-top: 2vw;
          }
          
          .flex-shrink-0 span {
            font-size: 4.5vw;
            line-height: 1.2;
          }
          
          /* SEO page specific */
          .py-16 {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
          
          .px-6 {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          .text-3xl {
            font-size: 1.8rem;
          }
          
          .mb-12 {
            margin-bottom: 2rem;
          }
          
          .pt-8 {
            padding-top: 1rem;
          }
          
          /* Form adjustments */
          .p-6 {
            padding: 1.5rem;
          }
          
          .gap-4 {
            gap: 1rem;
          }
          
          /* Footer adjustments */
          footer .grid-cols-1 {
            gap: 2rem;
          }
          
          footer h3 {
            font-size: 1.2rem;
          }
          
          footer h4 {
            font-size: 1.1rem;
            margin-bottom: 1rem;
          }
        }

        /* Medium devices (tablets, 601px to 768px) */
        @media only screen and (min-width: 601px) and (max-width: 768px) {
          .max-w-4xl {
            max-width: 95%;
          }
          
          .text-3xl {
            font-size: 2rem;
          }
          
          .px-6 {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
          
          .p-6 {
            padding: 2rem;
          }
        }

        /* Large devices (laptops/desktops, 769px to 992px) */
        @media only screen and (min-width: 769px) and (max-width: 992px) {
          .md\:px-24 {
            padding-left: 3rem;
            padding-right: 3rem;
          }
          
          .max-w-4xl {
            max-width: 90%;
          }
        }

        /* Extra large devices (large laptops and desktops, 993px and up) */
        @media only screen and (min-width: 993px) {
          .max-w-4xl {
            max-width: 56rem;
          }
          
          .md\:px-24 {
            padding-left: 6rem;
            padding-right: 6rem;
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
        }
        
        @media (min-width: 769px) {
          .md\:flex {
            display: flex !important;
          }
          
          .md\:hidden {
            display: none !important;
          }
        }

        /* Form specific responsive adjustments */
        @media (max-width: 640px) {
          .grid-cols-1 {
            grid-template-columns: 1fr !important;
          }
          
          .md\:grid-cols-2 {
            grid-template-columns: 1fr !important;
          }
          
          .gap-6 {
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
}