'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
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

        {/* Branding Packages */}
        {/* <section className="py-20 px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Branding Packages
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the package that fits your business needs and budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "₹15,000",
                features: [
                  "1 Logo Concept",
                  "2 Revisions",
                  "Color Variations",
                  "Final Files (PNG, JPG)",
                  "Delivery in 5 Days"
                ],
                popular: false,
                color: "border-blue-400"
              },
              {
                name: "Professional",
                price: "₹30,000",
                features: [
                  "3 Logo Concepts",
                  "Unlimited Revisions",
                  "Brand Style Guide",
                  "Stationery Design (1 item)",
                  "Social Media Kit",
                  "Delivery in 7 Days"
                ],
                popular: true,
                color: "border-orange-500"
              },
              {
                name: "Complete",
                price: "₹60,000",
                features: [
                  "5 Logo Concepts",
                  "Unlimited Revisions",
                  "Comprehensive Brand Guide",
                  "Full Stationery Set",
                  "Social Media Kit",
                  "Brand Application Examples",
                  "Delivery in 10 Days"
                ],
                popular: false,
                color: "border-purple-500"
              }
            ].map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`border-2 rounded-xl overflow-hidden ${pkg.color} ${pkg.popular ? 'transform md:-translate-y-4 shadow-xl' : 'shadow-md'}`}
              >
                {pkg.popular && (
                  <div className="bg-orange-500 text-white text-center py-1 font-bold">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-6 bg-white">
                  <h3 className="text-2xl font-bold text-center mb-2">{pkg.name}</h3>
                  <p className="text-4xl font-bold text-center mb-6 text-gray-800">{pkg.price}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full py-3 rounded-lg font-bold ${pkg.popular ? 'bg-orange-500 hover:bg-orange-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'} transition`}
                  >
                    Get Started
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </section> */}

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                What Our Clients Say
              </h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Global Tech transformed our brand identity completely. The new logo and branding perfectly represent our company values and have helped us stand out in a crowded market.",
                  name: "Rajesh Kumar",
                  company: "TechStart India",
                  rating: 5
                },
                {
                  quote: "The branding package we received was comprehensive and professional. The team understood our vision and delivered beyond our expectations.",
                  name: "Priya Sharma",
                  company: "Organic Delights",
                  rating: 5
                },
                {
                  quote: "Working with Global Tech was a seamless experience. They captured our brand essence perfectly in the logo design and provided excellent follow-up support.",
                  name: "Amit Patel",
                  company: "FinEdge Solutions",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-8 rounded-xl shadow-md"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Ready to Build Your Brand?
              </h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get in touch with us to discuss your branding needs and get a free consultation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Your Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-blue-500 focus:ring-2 focus:ring-blue-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Mobile Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter Mobile Number"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-blue-500 focus:ring-2 focus:ring-blue-200"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email Id *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-blue-500 focus:ring-2 focus:ring-blue-200"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="service" className="block text-gray-700 mb-2">Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-blue-500 focus:ring-2 focus:ring-blue-200"
                  >
                    <option value="Logo & Branding">Logo & Branding</option>
                    <option value="Web Design">Web Design</option>
                    <option value="SEO Services">SEO Services</option>
                    <option value="Social Media Marketing">Social Media Marketing</option>
                    <option value="Complete Digital Package">Complete Digital Package</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your project"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-blue-500 focus:ring-2 focus:ring-blue-200"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition shadow-md"
                >
                  Submit Your Inquiry
                </motion.button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

    </div>
  );
}