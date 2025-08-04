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

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 transition duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className="text-xl font-bold text-blue-800">Global Tech Solutions</span>
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
                <div className="absolute hidden group-hover:block mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                  <Link href="/web-development" className="block px-4 py-2 hover:bg-gray-100 transition">Web Development</Link>
                  <Link href="/digital-marketing" className="block px-4 py-2 hover:bg-gray-100 transition">Digital Marketing</Link>
                  <Link href="/seo" className="block px-4 py-2 hover:bg-gray-100 transition">SEO Services</Link>
                  <Link href="/mobile-apps" className="block px-4 py-2 hover:bg-gray-100 transition">Mobile Apps</Link>
                </div>
              </Transition>
            </div>

            <Link href="/clients" className="text-blue-600 font-medium">Our Clients</Link>
            <Link href="/contact" className="hover:text-blue-600 transition">Contact Us</Link>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition duration-200">
              Get a Quote
            </button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <Transition
          show={mobileMenuOpen}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <div className="md:hidden mt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">Home</Link>
            <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">About Us</Link>
            
            <button 
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
            >
              Services
              <ChevronDown size={16} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {servicesOpen && (
              <div className="pl-4 space-y-1">
                <Link href="/web-development" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">Web Development</Link>
                <Link href="/digital-marketing" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">Digital Marketing</Link>
                <Link href="/seo" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">SEO Services</Link>
                <Link href="/mobile-apps" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">Mobile Apps</Link>
              </div>
            )}
            
            <Link href="/clients" className="block px-3 py-2 rounded-md text-base font-medium bg-blue-50 text-blue-600">Our Clients</Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">Contact Us</Link>
          </div>
        </Transition>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 px-4 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center mb-4">
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className="text-xl font-bold">Global Tech Solutions</span>
          </div>
          <p className="text-gray-400 mb-4">
            Delivering cutting-edge digital solutions since 2015. We help businesses grow through innovative technology and marketing strategies.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-400 hover:text-white transition">
              <Image src="/social/facebook.svg" alt="Facebook" width={24} height={24} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition">
              <Image src="/social/twitter.svg" alt="Twitter" width={24} height={24} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition">
              <Image src="/social/linkedin.svg" alt="LinkedIn" width={24} height={24} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition">
              <Image src="/social/instagram.svg" alt="Instagram" width={24} height={24} />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
            <li><Link href="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
            <li><Link href="/services" className="text-gray-400 hover:text-white transition">Services</Link></li>
            <li><Link href="/clients" className="text-gray-400 hover:text-white transition">Our Clients</Link></li>
            <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li><Link href="/web-development" className="text-gray-400 hover:text-white transition">Web Development</Link></li>
            <li><Link href="/digital-marketing" className="text-gray-400 hover:text-white transition">Digital Marketing</Link></li>
            <li><Link href="/seo" className="text-gray-400 hover:text-white transition">SEO Services</Link></li>
            <li><Link href="/mobile-apps" className="text-gray-400 hover:text-white transition">Mobile App Development</Link></li>
            <li><Link href="/ui-ux" className="text-gray-400 hover:text-white transition">UI/UX Design</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <address className="text-gray-400 not-italic">
            <div className="flex items-start mb-3">
              <Image src="/icons/location.svg" alt="Location" width={18} height={18} className="mt-1 mr-2" />
              <span>123 Tech Park, Bangalore, Karnataka 560001, India</span>
            </div>
            <div className="flex items-center mb-3">
              <Image src="/icons/phone.svg" alt="Phone" width={18} height={18} className="mr-2" />
              <a href="tel:+919876543210" className="hover:text-white">+91 98765 43210</a>
            </div>
            <div className="flex items-center">
              <Image src="/icons/email.svg" alt="Email" width={18} height={18} className="mr-2" />
              <a href="mailto:info@globaltech.com" className="hover:text-white">info@globaltech.com</a>
            </div>
          </address>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Global Tech Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function ClientsPage() {
  const clients = [
    {
      id: 1,
      name: "Apollo Hospitals",
      logo: "/logos/apollo-bangalore.png",
      description: "We partnered with Apollo to deliver a high-performance healthcare website tailored for accessibility, patient trust, and seamless experience.",
      projectImage: "/projects/apollo-preview.jpg",
      services: ["Web Development", "SEO", "Content Management"],
      delay: 0
    },
    {
      id: 2,
      name: "Apollo TeleHealth",
      logo: "/logos/apollo-telehealth.png",
      description: "Modernized their digital presence and enhanced virtual patient care through secure and responsive web platforms.",
      services: ["UI/UX Design", "Web Development", "Cloud Integration"],
      delay: 0.1
    },
    {
      id: 3,
      name: "TechStart Inc.",
      logo: "/logos/techstart.png",
      description: "Developed a cutting-edge SaaS platform that increased their operational efficiency by 40%.",
      projectImage: "/projects/techstart-preview.jpg",
      services: ["Web Application", "Database Design", "API Integration"],
      delay: 0.2
    },
    {
      id: 4,
      name: "GreenEarth Organics",
      logo: "/logos/greenearth.png",
      description: "Created an e-commerce platform that boosted their online sales by 300% in the first quarter.",
      services: ["E-commerce Development", "Digital Marketing", "Payment Gateway"],
      delay: 0.3
    },
    {
      id: 5,
      name: "EduLearn Academy",
      logo: "/logos/edulearn.png",
      description: "Built a comprehensive learning management system serving over 50,000 students nationwide.",
      projectImage: "/projects/edulearn-preview.jpg",
      services: ["LMS Development", "Mobile App", "Video Streaming"],
      delay: 0.4
    },
    {
      id: 6,
      name: "FinSecure Bank",
      logo: "/logos/finsecure.png",
      description: "Implemented secure online banking solutions with multi-factor authentication and fraud detection.",
      services: ["Web Security", "Mobile Banking", "Blockchain Integration"],
      delay: 0.5
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4 md:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Valued Clients</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Trusted by leading organizations across industries to deliver exceptional digital solutions
            </p>
          </motion.div>
        </section>

        {/* Clients Grid */}
        <section className="py-16 px-4 md:px-20 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We take pride in our partnerships with these innovative companies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: client.delay }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
              >
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={120}
                      height={80}
                      className="object-contain h-16"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">{client.name}</h3>
                  <p className="text-gray-600 text-center mb-4">{client.description}</p>
                  
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {client.services.map((service, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                        {service}
                      </span>
                    ))}
                  </div>

                  {client.projectImage && (
                    <div className="mt-4">
                      <Image
                        src={client.projectImage}
                        alt={`${client.name} project`}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 md:px-20 bg-gray-100">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center text-gray-800 mb-12"
            >
              What Our Clients Say
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <Image
                    src="/testimonials/client1.jpg"
                    alt="Client"
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Rajesh Kumar</h4>
                    <p className="text-sm text-gray-600">CEO, Apollo Hospitals</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Global Tech transformed our digital presence with a patient-friendly website that increased appointment bookings by 65%. Their team's healthcare expertise was evident throughout the project."
                </p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <Image
                    src="/testimonials/client2.jpg"
                    alt="Client"
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Priya Sharma</h4>
                    <p className="text-sm text-gray-600">Marketing Director, TechStart</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "The SaaS platform developed by Global Tech has revolutionized our operations. Their technical expertise and understanding of our business needs were exceptional."
                </p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}