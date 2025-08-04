'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { Transition } from '@headlessui/react';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [clientsOpen, setClientsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 transition duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex-shrink-0 flex items-center space-x-2 ml-5">
            <img 
              src="/logo/Global.jpg" 
              alt="Logo" 
              className="h-16 mb-5 mt-5 ml-0 rounded-full shadow z-50" 
            />
            <span className="text-xl font-bold text-blue-700">
              Global Tech <br /> Software Solutions
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
            <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            <Link href="/about" className="hover:text-blue-600 transition">About Us</Link>

            <div className="relative group">
              <button className="flex items-center hover:text-blue-600 transition">
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
                <div className=" hidden group-hover:block mt-2 w-40 bg-white shadow-lg rounded-md z-10">
                  <Link href="/webdesign" className="block px-4 py-2 hover:bg-gray-300 transition">Web Design</Link>
                  <Link href="/seo" className="block px-4 py-2 hover:bg-gray-300 transition">SEO</Link>
                  <Link href="/sem" className="block px-4 py-2 hover:bg-gray-300 transition">SEM</Link>
                  <Link href="/social-media" className="block px-4 py-2 hover:bg-gray-300 transition">Social Media</Link>
                </div>
              </Transition>
            </div>

            {/* <div className="relative group">
              <Link href="/clients" className="flex items-center hover:text-blue-600 transition">
                Our Clients
              </Link>
            </div> */}

            <Link href="/contact" className="hover:text-blue-600 transition">Contact Us</Link>

            <button className="bg-orange-400 hover:bg-orange-600 text-white px-4 py-2 rounded font-semibold transform hover:scale-105 transition duration-200">
              📞
            </button>
            <button className="bg-orange-400 hover:bg-orange-600 text-white px-4 py-2 rounded font-semibold transform hover:scale-105 transition duration-200">
              📋 
            </button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="transition transform hover:scale-110"
              aria-label="Toggle menu"
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
        // className="md:hidden"
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
          
          <div className="flex space-x-2 pt-2">
            <button className="bg-orange-400 hover:bg-orange-600 text-white px-4 py-2 rounded font-semibold transform hover:scale-105 transition duration-200 w-full">
              📞 Call Us
            </button>
            <button className="bg-orange-400 hover:bg-orange-600 text-white px-4 py-2 rounded font-semibold transform hover:scale-105 transition duration-200 w-full">
              📋 Get Quote
            </button>
          </div>
        </div>
      </Transition>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-white py-10 px-6 md:px-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700 pb-10">
        <div>
          <Image
            src="/logo/Global.jpg"
            alt="logo"
            width={64}
            height={64}
            className="h-16 mb-4 rounded-full shadow z-50"
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
              <a href="tel:+918495862494" className="hover:text-white">
                +91-8495862494
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/icons/email.png" alt="Email" width={20} height={20} />
              <a
                href="mailto:Tech@globaltechsoftwaresolutions.com"
                className="hover:text-white"
              >
                Tech@globaltechsoftwaresolutions.com
              </a>
            </div>
            <div className="flex items-start gap-2">
              <Image src="/icons/location.png" alt="Location" width={20} height={20} className="mt-1" />
              <span>
                No 10c, Gaduniya Complex Ramaiah Layout,
                <br />
                Vidyaranyapura, Bangalore - 560097
              </span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold text-white mb-4 uppercase">Pages</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="/" className="hover:text-white">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">About</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white">Services</Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white">Blog</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold text-white mb-4 uppercase">Work Hours</h4>
          <div className="flex items-center gap-2 text-gray-300 mb-2">
            <Image src="/icons/time.png" alt="Clock" width={20} height={20} />
            <span>Mon–Sat 10:00 AM–06:00 PM</span>
          </div>
          <p className="text-gray-400 mb-4">
            Visit our office to get a free consultation
          </p>
          <Link
            href="/contact"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded"
          >
            CLICK HERE
          </Link>
        </div>
      </div>

      <Link
        href="https://wa.me/918495862494"
        className="fixed bottom-5 right-5 rounded-full shadow-lg z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/logo/whatsapp.png"
          alt="WhatsApp"
          width={48}
          height={48}
        />
      </Link>
    </footer>
  );
}

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
      <Navbar />
      
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

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 md:gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <button className="bg-gradient-to-r from-pink-600 to-yellow-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:from-pink-700 hover:to-yellow-600 transition-all shadow-lg hover:shadow-xl text-sm md:text-base">
                Get Free Consultation
              </button>
              <button className="border-2 border-pink-600 text-pink-600 hover:bg-pink-50 px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-colors text-sm md:text-base">
                View Portfolio
              </button>
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

      <Footer />

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