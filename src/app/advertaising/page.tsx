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

export default function PaidMediaSection() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="bg-gradient-to-br from-yellow-50 to-orange-100 py-16 px-4 md:px-20 flex-grow">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-orange-800 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Paid Media & PPC Advertising
            </motion.h2>
            
            <motion.h4 
              className="text-lg font-semibold text-red-500 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Maximize ROI with Precision Targeting
            </motion.h4>
            
            <motion.p 
              className="text-gray-700 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              We craft paid media strategies tailored to your unique audience and goals. Our PPC campaigns span across leading platforms like Google Ads, Meta (Facebook & Instagram), LinkedIn Ads, and TikTok to ensure maximum visibility and conversion.
            </motion.p>
            
            <motion.p 
              className="text-gray-700 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Using data-driven insights, we optimize ad performance in real-time, targeting the right people at the right time with compelling creative. From search and display ads to retargeting and shopping campaigns, every dollar is invested for optimal return.
            </motion.p>
            
            <motion.p 
              className="text-gray-700 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Whether you're a startup looking to scale or an established brand aiming to boost ROI, our paid media experts will guide you through budget allocation, A/B testing, audience segmentation, and detailed analytics reporting.
            </motion.p>
            
            <motion.p 
              className="text-gray-700 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Transparency, strategy, and creativity define our paid media services—helping businesses scale profitably with measurable outcomes.
            </motion.p>

            {/* Platform Highlights */}
            <motion.div 
              className="grid grid-cols-2 gap-4 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-blue-500">
                <h5 className="font-bold text-blue-600 mb-2">Google Ads</h5>
                <p className="text-sm text-gray-700">Search, Display, Shopping, and YouTube advertising</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-purple-500">
                <h5 className="font-bold text-purple-600 mb-2">Meta Ads</h5>
                <p className="text-sm text-gray-700">Facebook, Instagram, and Messenger campaigns</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-sky-500">
                <h5 className="font-bold text-sky-600 mb-2">LinkedIn Ads</h5>
                <p className="text-sm text-gray-700">B2B targeting and professional audience reach</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-pink-500">
                <h5 className="font-bold text-pink-600 mb-2">TikTok Ads</h5>
                <p className="text-sm text-gray-700">Engaging short-form video advertising</p>
              </div>
            </motion.div>

            {/* Client Highlight */}
            <motion.div 
              className="bg-white p-4 rounded-xl shadow-md border-l-4 border-orange-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <p className="text-sm text-gray-800">
                <strong className="text-orange-700">Client Highlight:</strong> We helped a leading Bangalore-based e-commerce brand achieve a 320% ROAS through hyper-targeted Google & Meta ads.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all shadow-lg hover:shadow-xl">
                Get Your Free PPC Audit
              </button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-xl relative"
          >
            <Image
              src="/ppc-ads-banner.jpg"
              alt="Paid Media Advertising"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
            
            {/* Floating Stats */}
            <motion.div 
              className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-xl shadow-2xl w-4/5"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2">
                  <p className="text-2xl font-bold text-orange-600">320%</p>
                  <p className="text-xs text-gray-600">Average ROAS</p>
                </div>
                <div className="p-2">
                  <p className="text-2xl font-bold text-orange-600">42%</p>
                  <p className="text-xs text-gray-600">Cost Reduction</p>
                </div>
                <div className="p-2">
                  <p className="text-2xl font-bold text-orange-600">5.8x</p>
                  <p className="text-xs text-gray-600">More Conversions</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}