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
            <Link href="/" className="flex items-center space-x-2">
              <img 
                src="/logo/Global.jpg" 
                alt="Logo" 
                className="h-16 mb-5 mt-5 ml-0 rounded-full shadow z-50" 
              />
              <span className="text-xl font-bold text-blue-700">
                Global Tech <br /> Software Solutions
              </span>
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
                <div className="absolute hidden group-hover:block mt-2 w-40 bg-white shadow-lg rounded-md z-10">
                  <Link href="/webdesign" className="block px-4 py-2 hover:bg-gray-300 transition">Web Design</Link>
                  <Link href="/seo" className="block px-4 py-2 hover:bg-gray-300 transition">SEO</Link>
                  <Link href="/sem" className="block px-4 py-2 hover:bg-gray-300 transition">SEM</Link>
                  <Link href="/social-media" className="block px-4 py-2 hover:bg-gray-300 transition">Social Media</Link>
                </div>
              </Transition>
            </div>

            <div className="relative group">
              <Link href="/" className="flex items-center hover:text-blue-600 transition">
                Our Clients
              </Link>
            </div>

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
      <Navbar />
      
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
                src="/icons/seo.png"
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

      <Footer />

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