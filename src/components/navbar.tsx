'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileContactOpen, setMobileContactOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 transition duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-2 ml-5">
            <Link href="/" className="flex items-center space-x-2 cursor-pointer">
              <Image
                src="/logo/Global.jpg"
                alt="Logo"
                width={64}
                height={64}
                className="h-16 w-16 rounded-full shadow"
              />
              <span className="text-xl font-bold text-blue-700 leading-tight">
                Global Tech <br /> Software Solutions
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
            <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            <Link href="/about" className="hover:text-blue-600 transition">About Us</Link>

            {/* Desktop Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center hover:text-blue-600 transition">
                Services <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="hidden group-hover:block mt-16 w-40 bg-white shadow-lg rounded-md z-10">
                <Link href="/seo" className="block px-4 py-2 hover:bg-gray-300 transition">SEO</Link>
                <Link href="/sem" className="block px-4 py-2 hover:bg-gray-300 transition">SEM</Link>
                <Link href="/social-media" className="block px-4 py-2 hover:bg-gray-300 transition">Social Media</Link>
              </div>
            </div>


            <Link href="/clints" className="hover:text-blue-600 transition">Our Clients</Link>
            <Link href="/contact" className="hover:text-blue-600 transition">Contact Us</Link>

            {/* Call Us Button */}
            <a href="tel:+919844281875">
              <button className="bg-orange-400 hover:bg-orange-600 text-white px-4 py-2 rounded font-semibold transform hover:scale-105 transition duration-200">
                Call Us 📞
              </button>
            </a>

            {/* Request Quote Button */}
            <Link href="/contact">
              <button className="bg-orange-400 hover:bg-orange-600 text-white px-4 py-2 rounded font-semibold transform hover:scale-105 transition duration-200">
                Request For a Quote 📋
              </button>
            </Link>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="transition transform hover:scale-110"
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 px-4 pb-4 text-gray-700 font-medium">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-600">Home</Link>

            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-600">About Us</Link>

            <Link href="/clients" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-600">Our Clients</Link>


            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center hover:text-blue-600 transition w-full"
              >
                Services <ChevronDown size={16} className="ml-1" />
              </button>
              {mobileServicesOpen && (
                <div className="mt-2 w-40 bg-white shadow-lg rounded-md z-10">
                  <Link href="/seo" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); }} className="block px-4 py-2 hover:bg-gray-300 transition">SEO</Link>
                  <Link href="/sem" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); }} className="block px-4 py-2 hover:bg-gray-300 transition">SEM</Link>
                  <Link href="/social-media" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); }} className="block px-4 py-2 hover:bg-gray-300 transition">Social Media</Link>
                </div>
              )}
            </div>

            {/* Mobile Contact Dropdown */}
            <div>
              <button
                onClick={() => setMobileContactOpen(!mobileContactOpen)}
                className="flex items-center hover:text-blue-600 transition w-full"
              >
                Contact <ChevronDown size={16} className="ml-1" />
              </button>
              {mobileContactOpen && (
                <div className="mt-2 w-50 bg-white shadow-lg rounded-md z-10 justify-between">
                  <a href="tel:+919844281875">
                    <button className="bg-orange-400 hover:bg-orange-600 text-white px-4 py-2 rounded font-semibold transform hover:scale-105 transition duration-200 w-full">
                      Call Us 📞
                    </button>
                  </a>
                  <Link href="/contact">
                    <button className="bg-orange-400 mt-3 hover:bg-orange-600 text-white px-4 py-2 rounded font-semibold transform hover:scale-105 transition duration-200 w-full">
                      Request For a Quote 📋
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
