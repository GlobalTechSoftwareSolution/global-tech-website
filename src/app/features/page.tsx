'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'react-feather';
import { Transition } from '@headlessui/react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 transition duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex-shrink-0 flex items-center space-x-2 ml-5">
            <Image 
              src="/logo/Global.jpg" 
              alt="Logo" 
              width={64}
              height={64}
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
              <div className="hidden group-hover:block mt-2 w-40 bg-white shadow-lg rounded-md z-10">
                <Link href="/seo" className="block px-4 py-2 hover:bg-gray-100 transition">SEO</Link>
                <Link href="/sem" className="block px-4 py-2 hover:bg-gray-100 transition">SEM</Link>
                <Link href="/social-media" className="block px-4 py-2 hover:bg-gray-100 transition">Social Media</Link>
              </div>
            </div>

            <Link href="/contact" className="hover:text-blue-600 transition">Contact Us</Link>
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
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg md:hidden">
          <Link 
            href="/" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </Link>
          
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
                <Link 
                  href="/seo" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  SEO
                </Link>
                <Link 
                  href="/sem" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  SEM
                </Link>
                <Link 
                  href="/social-media" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Social Media
                </Link>
              </div>
            </Transition>
          </div>

          <Link 
            href="/contact" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
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
                href="mailto:hrglobaltechsoftwaresolutions@gmail.com"
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
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded transition duration-300"
          >
            CLICK HERE
          </Link>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto pt-6 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Global Tech Software Solutions. All rights reserved.</p>
      </div>

      <Link
        href="https://wa.me/919844281875"
        className="fixed bottom-5 right-5 rounded-full shadow-lg z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/logo/whatsapp.png"
          alt="WhatsApp"
          width={48}
          height={48}
          className="hover:scale-105 transition-transform"
        />
      </Link>
    </footer>
  );
}

export function HomePageContent() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
          Global Tech Software Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Delivering innovative technology solutions to help your business grow
        </p>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
  <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">Our Services</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      { 
        name: "SEO", 
        desc: "Search Engine Optimization services",
        link: "/seo"
      },
      { 
        name: "SEM", 
        desc: "Search Engine Marketing solutions",
        link: "/sem"
      },
      { 
        name: "Social Media", 
        desc: "Social media management and marketing",
        link: "/social-media"
      }
    ].map((service, index) => (
      <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-semibold text-blue-600 mb-2">{service.name}</h3>
        <p className="text-gray-600 mb-6">{service.desc}</p>
        <Link
          href={service.link}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-300"
        >
          View Details
        </Link>
      </div>
    ))}
  </div>
</section>
    </main>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePageContent />
      <Footer />
    </>
  );
}