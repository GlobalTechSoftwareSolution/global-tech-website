'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ContactPage from '../contact/page';
import Image from 'next/image';
import { ChevronDown } from 'react-feather';
import { Transition } from '@headlessui/react';



export default function LogoBrandingPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Logo & Branding',
    message: ''
  });

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value
  }));
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // Handle form submission
  alert('Thank you for your inquiry! We will contact you soon.');
  setFormData({
    name: '',
    phone: '',
    email: '',
    service: 'Logo & Branding',
    message: ''
  });
};

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-blue-50">
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-r from-blue-900 to-purple-900 text-white">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('/icons/brand-pattern.png')] bg-repeat opacity-30"></div>
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Creative Logo Design <br className="hidden md:block" />& Branding Solutions
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10">
                Build strong brand identities through logos, taglines, visual systems, and marketing collateral
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link 
                  href="/contact" 
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition"
                >
                  Get Your Brand Identity
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Branding Process */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Branding Process
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a comprehensive process to create brands that resonate with your audience and stand the test of time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Discovery",
                desc: "We learn about your business, goals, and target audience",
                icon: "🔍",
                color: "from-blue-400 to-blue-600"
              },
              {
                title: "Strategy",
                desc: "We develop a brand strategy that aligns with your objectives",
                icon: "🧠",
                color: "from-purple-400 to-purple-600"
              },
              {
                title: "Design",
                desc: "We create visual identities that communicate your brand essence",
                icon: "🎨",
                color: "from-green-400 to-green-600"
              },
              {
                title: "Implementation",
                desc: "We apply your brand across all touchpoints consistently",
                icon: "🚀",
                color: "from-orange-400 to-orange-600"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} text-white text-2xl flex items-center justify-center mb-4 mx-auto`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-center mb-2 text-gray-800">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Logo Design Showcase */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Logo Design Styles
              </h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We create logos that are unique, memorable, and perfectly represent your brand identity.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  title: "Wordmark Logos",
                  desc: "Typography-based logos that focus on your brand name with custom lettering",
                  examples: ["Coca-Cola", "Google", "FedEx"],
                  color: "bg-blue-100"
                },
                {
                  title: "Symbol Logos",
                  desc: "Iconic symbols that become synonymous with your brand identity",
                  examples: ["Apple", "Twitter", "Nike"],
                  color: "bg-purple-100"
                },
                {
                  title: "Combination Marks",
                  desc: "Versatile logos combining both text and symbols for maximum impact",
                  examples: ["Adidas", "Burger King", "Lacoste"],
                  color: "bg-green-100"
                }
              ].map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`p-8 rounded-xl ${type.color} hover:shadow-md transition`}
                >
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{type.title}</h3>
                  <p className="text-gray-700 mb-6">{type.desc}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800">Examples:</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {type.examples.map((example, i) => (
                        <li key={i}>{example}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
       
      </main>
<ContactPage />
    </div>
  );
}