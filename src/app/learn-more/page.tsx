'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'react-feather';
import { Transition } from '@headlessui/react';
import { motion } from 'framer-motion';

// interface Slide {
//   id: number;
//   headingTop: string;
//   headingMain: string;
//   description: string;
//   image1: string;
//   ctaPrimary: string;
//   ctaSecondary: string;
// }

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 transition duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex-shrink-0 flex items-center space-x-2 ml-5">
            <img src="/logo/Global.jpg" alt="Logo" className="h-16 mb-5 mt-5 ml-0 rounded-full shadow z-50" />
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
                <div className="hidden group-hover:block mt-2 w-40 bg-white shadow-lg rounded-md z-10">
                  <Link href="/seo" className="block px-4 py-2 hover:bg-gray-300 transition">SEO</Link>
                  <Link href="/sem" className="block px-4 py-2 hover:bg-gray-300 transition">SEM</Link>
                  <Link href="/social-media" className="block px-4 py-2 hover:bg-gray-300 transition">Social Media</Link>
                </div>
              </Transition>
            </div>

            <Link href="/contact" className="hover:text-blue-600 transition">Contact Us</Link>
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
                <Link href="/seo" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50">SEO</Link>
                <Link href="/sem" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50">SEM</Link>
                <Link href="/social-media" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50">Social Media</Link>
              </div>
            </Transition>
          </div>

          <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Contact Us</Link>
        </div>
      </Transition>
    </nav>
  );
}

export function Footer() {
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
                hrglobaltechsoftwaresolutions@gmail.com
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

export function ERPDetails() {
  return (
    <section className="bg-gradient-to-br from-white to-blue-50 px-6 py-12 md:px-20" id="erp-details">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-6">
           Learn More: ERP System Integration
        </h2>

        <p className="text-lg text-gray-700 mb-6">
          <strong className="text-orange-600">What is ERP System Integration?</strong><br />
          ERP System Integration is the process of connecting different business departments—like finance, HR, inventory, supply chain, and customer service—into a single cohesive platform. This integration streamlines workflows, eliminates manual errors, and gives decision-makers a unified view of operations.
        </p>

        <h3 className="text-2xl font-bold text-blue-700 mb-3"> Key Benefits:</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
          <li><strong>Real-Time Visibility:</strong> Get instant access to company-wide data and insights.</li>
          <li><strong>Efficiency:</strong> Automate manual tasks and improve productivity across departments.</li>
          <li><strong>Cost Reduction:</strong> Reduce redundancies, delays, and overhead costs.</li>
          <li><strong>Scalability:</strong> Easily add new modules or functionalities as your business grows.</li>
          <li><strong>Improved Customer Experience:</strong> Faster response times and better service delivery.</li>
        </ul>

        <h3 className="text-2xl font-bold text-blue-700 mb-3"> What We Offer:</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6 text-gray-700">
          <div className="bg-white shadow-md p-4 rounded-xl border-l-4 border-blue-500">
             Finance & Accounting Automation
          </div>
          <div className="bg-white shadow-md p-4 rounded-xl border-l-4 border-green-500">
             Inventory & Warehouse Management
          </div>
          <div className="bg-white shadow-md p-4 rounded-xl border-l-4 border-purple-500">
             HR & Payroll Integration
          </div>
          <div className="bg-white shadow-md p-4 rounded-xl border-l-4 border-pink-500">
             Procurement & Vendor Management
          </div>
          <div className="bg-white shadow-md p-4 rounded-xl border-l-4 border-yellow-500">
             CRM & Customer Service Tools
          </div>
          <div className="bg-white shadow-md p-4 rounded-xl border-l-4 border-red-500">
             Business Intelligence Dashboards
          </div>
        </div>

        <h3 className="text-2xl font-bold text-blue-700 mb-3"> Industries We Support:</h3>
        <p className="text-gray-700 mb-6">
          Our ERP integration solutions are trusted across diverse sectors including:
          <span className="block mt-2">
            - Manufacturing<br />
            - Retail & E-commerce<br />
            - Healthcare<br />
            - Logistics<br />
            - Construction<br />
            - Education
          </span>
        </p>
{/* 
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-md transition-all duration-300 text-center"
          >
             Request Your Demo
          </Link>
          <Link
            href="/contact"
            className="bg-white hover:bg-gray-100 text-blue-700 border border-blue-500 px-6 py-3 rounded-md shadow-md transition-all duration-300 text-center"
          >
            📞 Contact Sales
          </Link>
        </div> */}
      </motion.div>
    </section>
  );
}


export function HomePage() {
  return (
    <>
      <Navbar />
      <ERPDetails />
      <Footer />
    </>
  );
}

export default HomePage;