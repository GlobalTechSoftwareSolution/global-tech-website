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
            <img src="/logo/Global.jpg" alt="Logo" className="h-16 mb-5 mt-5 ml-0 rounded-full shadow z-50" />
            <span className="text-xl font-bold text-blue-700">
              Global Tech <br /> Software Solutions
            </span>
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
              <button className="flex items-center hover:text-blue-600 transition">
                Our Clients <ChevronDown size={16} className="ml-1" />
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
                  <Link href="/branding" className="block px-4 py-2 hover:bg-gray-300 transition">Branding</Link>
                  <Link href="/apollo-hospitl" className="block px-4 py-2 hover:bg-gray-300 transition">Apollo Hospital</Link>
                  <Link href="/mindfull" className="block px-4 py-2 hover:bg-gray-300 transition">Mindful TMS</Link>
                </div>
              </Transition>
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
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="transition transform hover:scale-110">
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
    </nav>
  );
}

function ApproachAndWhyUs() {
  return (
    <div className="bg-white text-gray-800">
      {/* Our Approach Section */}
      <motion.section
        className="p-8 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">
          Our Approach
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto text-gray-700">
          <div className="bg-blue-50 p-5 rounded-lg shadow hover:shadow-md transition duration-300">
            <p className="font-semibold text-blue-700 mb-1">📊 Audience Research</p>
            <p>We study your audience's interests and behavior to create engaging strategies.</p>
          </div>
          <div className="bg-purple-50 p-5 rounded-lg shadow hover:shadow-md transition duration-300">
            <p className="font-semibold text-purple-700 mb-1">✍️ Content Creation</p>
            <p>On-brand, goal-driven content that captivates and converts.</p>
          </div>
          <div className="bg-pink-50 p-5 rounded-lg shadow hover:shadow-md transition duration-300">
            <p className="font-semibold text-pink-700 mb-1">📈 Analytics & Optimization</p>
            <p>Performance tracking using KPIs like engagement and conversions.</p>
          </div>
          <div className="bg-green-50 p-5 rounded-lg shadow hover:shadow-md transition duration-300">
            <p className="font-semibold text-green-700 mb-1">💰 Social Media Advertising</p>
            <p>Precision-targeted ads for maximum ROI.</p>
          </div>
          <div className="bg-yellow-50 p-5 rounded-lg shadow hover:shadow-md transition duration-300 col-span-full">
            <p className="font-semibold text-yellow-700 mb-1">📆 Best Practices</p>
            <p>Consistent branding, data-backed decisions, and timely content scheduling.</p>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Our Agency Section */}
      <motion.section
        className="p-8 bg-gradient-to-t from-blue-50 to-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">
          Why Choose Our Agency?
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-gray-800">
          <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm hover:shadow-md transition">
            <p className="font-semibold text-indigo-700 mb-1">👨‍💼 Experienced Team</p>
            <p>Deep expertise across multiple industries.</p>
          </div>
          <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm hover:shadow-md transition">
            <p className="font-semibold text-indigo-700 mb-1">🎯 Tailored Strategies</p>
            <p>Custom plans aligned with your brand goals.</p>
          </div>
          <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm hover:shadow-md transition">
            <p className="font-semibold text-indigo-700 mb-1">🏆 Proven Results</p>
            <p>Measurable success in lead gen and visibility.</p>
          </div>
          <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm hover:shadow-md transition">
            <p className="font-semibold text-indigo-700 mb-1">📊 Transparent Reports</p>
            <p>Clear insights into ad spend, growth, and KPIs.</p>
          </div>
        </div>
      </motion.section>
    </div>
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

export default function SocialMediaAgencyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section
        className="text-center p-8 bg-gradient-to-r from-blue-100 to-purple-100 pt-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-extrabold text-blue-800 mb-4">
          Best Social Media Marketing Agency in Bangalore
        </h1>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg">
          We specialize in high-impact strategies designed to engage your target audience, increase followers, and promote your brand across major platforms like Facebook, Instagram, LinkedIn, Twitter, and more.
        </p>
      </motion.section>

      {/* Social Media Services Description */}
      <motion.section
        className="p-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* You can add additional content here if needed */}
      </motion.section>

      {/* Integrated ApproachAndWhyUs Component */}
      <ApproachAndWhyUs />

      <Footer />
    </div>
  );
}