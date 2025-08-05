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
          <div className="flex-shrink-0 flex items-center space-x-2 ml-5">
            <Link href="/">
              <div className="flex items-center space-x-2 cursor-pointer">
                <img 
                  src="/logo/Global.jpg" 
                  alt="Logo" 
                  className="h-16 mb-5 mt-5 ml-0 rounded-full shadow z-50" 
                />
                <span className="text-xl font-bold text-blue-700">
                  Global Tech <br /> Software Solutions
                </span>
              </div>
            </Link>
          </div>

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

            <Link href="/contact" className="hover:text-blue-600 transition">Contact Us</Link>

            {/* <button className="bg-orange-400 hover:bg-orange-600 text-white px-4 py-2 rounded font-semibold transform hover:scale-105 transition duration-200">
              📞
            </button>
            <button className="bg-orange-400 hover:bg-orange-600 text-white px-4 py-2 rounded font-semibold transform hover:scale-105 transition duration-200">
              📋 
            </button> */}
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
          
          {/* <div className="flex space-x-2 pt-2">
            <button className="bg-orange-400 hover:bg-orange-600 text-white px-4 py-2 rounded font-semibold transform hover:scale-105 transition duration-200 w-full">
              📞 Call Us
            </button>
            <button className="bg-orange-400 hover:bg-orange-600 text-white px-4 py-2 rounded font-semibold transform hover:scale-105 transition duration-200 w-full">
              📋 Get Quote
            </button>
          </div> */}
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
              <a href="tel:+919844281875" className="hover:text-white">
                +91-9844281875
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
                No 10,4th floor, Gaduniya Complex Ramaiah Layout,Vidyaranyapura Banglore-560097
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
      <Navbar />
      
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

        {/* Form */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-md max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6 text-center">
            ENQUIRE NOW
          </h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="md:col-span-2">
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name *"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-blue-500"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Enter Mobile Number *"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-blue-500"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email Id *"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-blue-500"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="md:col-span-2">
              <input
                type="text"
                name="services"
                placeholder="Services"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-blue-500"
                value={formData.services}
                onChange={handleChange}
              />
            </div>
            <div className="md:col-span-2">
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-blue-500"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

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
      </section>

      <Footer />

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