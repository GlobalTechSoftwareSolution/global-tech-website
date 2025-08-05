'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'react-feather';
import { Transition } from '@headlessui/react';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 transition duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-2 ml-5">
            <Link href="/">
              <motion.div 
                className="flex items-center space-x-2 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="/logo/Global.jpg"
                  alt="Logo"
                  className="h-16 mb-5 mt-5 ml-0 rounded-full shadow z-50"
                />
                <span className="text-xl font-bold text-blue-700 leading-tight">
                  Global Tech <br /> Software Solutions
                </span>
              </motion.div>
            </Link>
          </div>
        
          <div className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
            <Link href="/" className="hover:text-blue-600 transition hover:underline hover:underline-offset-8">Home</Link>
            <Link href="/about" className="hover:text-blue-600 transition hover:underline hover:underline-offset-8">About Us</Link>

            <div className="relative group">
              <button className="flex items-center hover:text-blue-600 transition hover:underline hover:underline-offset-8">
                Services <ChevronDown size={16} className="ml-1" />
              </button>
              <Transition
                show={true}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 -translate-y-2"
                enterTo="transform opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="transform opacity-100 translate-y-0"
                leaveTo="transform opacity-0 -translate-y-2"
              >
                <div className=" hidden group-hover:block mt-2 w-48 bg-white shadow-lg rounded-md z-10 border border-gray-100">
                  <Link href="/webdesign" className="block px-4 py-2 hover:bg-blue-50 transition text-gray-700">Web Design</Link>
                  <Link href="/seo" className="block px-4 py-2 hover:bg-blue-50 transition text-gray-700">SEO</Link>
                  <Link href="/sem" className="block px-4 py-2 hover:bg-blue-50 transition text-gray-700">SEM</Link>
                  <Link href="/social-media" className="block px-4 py-2 hover:bg-blue-50 transition text-gray-700">Social Media</Link>
                </div>
              </Transition>
            </div>

            <Link href="/contact" className="hover:text-blue-600 transition hover:underline hover:underline-offset-8">Contact Us</Link>

            {/* <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-400 hover:bg-orange-600 text-white px-4 py-2 rounded font-semibold transition duration-200 shadow-md"
            >
              📞 Call Us
            </motion.button> */}
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="transition transform hover:scale-110 focus:outline-none"
            >
              <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <Transition
        show={mobileMenuOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Home</Link>
          <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">About Us</Link>
          
          <div>
            <button 
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              Services
              <ChevronDown size={16} className={`ml-1 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            <Transition
              show={servicesOpen}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <div className="pl-4 space-y-1">
                <Link href="/webdesign" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50">Web Design</Link>
                <Link href="/seo" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50">SEO</Link>
                <Link href="/sem" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50">SEM</Link>
                <Link href="/social-media" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50">Social Media</Link>
              </div>
            </Transition>
          </div>

          <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Contact Us</Link>
          
          {/* <div className="pt-2">
            <motion.button 
              whileTap={{ scale: 0.95 }}
              className="bg-orange-400 hover:bg-orange-600 text-white px-4 py-2 rounded font-semibold transition duration-200 w-full shadow-md mb-2"
            >
              📞 Call Us
            </motion.button>
          </div> */}
        </div>
      </Transition>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-white py-10 px-6 md:px-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src="/logo/Global.jpg"
              alt="logo"
              width={80}
              height={80}
              className="h-16 mb-4 rounded-full shadow-lg"
            />
            <h3 className="font-semibold text-lg mb-4 uppercase leading-relaxed">
              GLOBAL TECH SOFTWARE SOLUTION
              <br />
              <p className="text-center text-xs md:text-sm font-medium text-gray-400 italic tracking-wide">
                "MORE THAN A SERVICE - A SOLUTION"
              </p>
            </h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Image src="/icons/phone.png" alt="Phone" width={20} height={20} />
                <a href="tel:+919844281875" className="hover:text-white transition">
                  +91-9844281875
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/icons/email.png" alt="Email" width={20} height={20} />
                <a
                  href="mailto:Tech@globaltechsoftwaresolutions.com"
                  className="hover:text-white transition"
                >
                  Tech@globaltechsoftwaresolutions.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Image src="/icons/location.png" alt="Location" width={20} height={20} className="mt-1" />
                <span>
                  No 10,4th floor, Gaduniya Complex Ramaiah Layout,Vidyaranyapura Banglore-560097
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className='ml-10'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold text-white mb-4 uppercase">Pages</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/" className="hover:text-white transition">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">About</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition">Services</Link>
             </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">Contact</Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold text-white mb-4 uppercase">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/webdesign" className="hover:text-white transition">Web Design</Link>
              </li>
              <li>
                <Link href="/seo" className="hover:text-white transition">SEO Services</Link>
              </li>
              <li>
                <Link href="/sem" className="hover:text-white transition">Digital Marketing</Link>
              </li>
              <li>
                <Link href="/social-media" className="hover:text-white transition">Social Media</Link>
              </li>
              <li>
                <Link href="/logo-branding" className="hover:text-white transition">Logo & Branding</Link>
              </li>
            </ul>
          </motion.div>
        </div> */}

        <div className='mr-10'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold text-white mb-4 uppercase">Work Hours</h4>
            <div className="flex items-center gap-2 text-gray-300 mb-2">
              <Image src="/icons/time.png" alt="Clock" width={20} height={20} />
              <span>Mon–Sat 10:00 AM–06:00 PM</span>
            </div>
            <p className="text-gray-400 mb-4">
              Visit our office to get a free consultation
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded shadow-md transition"
              >
                GET FREE QUOTE
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto pt-8 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Global Tech Software Solutions. All rights reserved.</p>
      </div>

      <Link
        href="https://wa.me/919844281875"
        className="fixed bottom-5 right-5 rounded-full shadow-lg z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-green-500 p-2 rounded-full shadow-xl"
        >
          <Image
            src="/logo/whatsapp.png"
            alt="WhatsApp"
            width={48}
            height={48}
          />
        </motion.div>
      </Link>
    </footer>
  );
}

export default function LogoBrandingPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Logo & Branding',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
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
      <Navbar />
      
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

      <Footer />
    </div>
  );
}