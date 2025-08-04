'use client';

import React, { useState, useRef, useEffect, useCallback } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Transition } from '@headlessui/react';
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function CombinedPage() {
  return (
    <>
      <Navbar />
      <DesignShowcaseSection />
      <ServicesSection />
      <DigitalMarketingSection />
      {/* <ClientsCarousel /> */}
      <BlogPost />
      <ContactForm />
      <Footer />
    </>
  );
}

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 transition duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-2 ml-5">
            <Link href="/">
              <div className="flex items-center space-x-2 cursor-pointer">
                <img
                  src="/logo/Global.jpg"
                  alt="Logo"
                  className="h-16 mb-5 mt-5 ml-0 rounded-full shadow z-50"
                />
                <span className="text-xl font-bold text-blue-700 leading-tight">
                  Global Tech <br /> Software Solutions
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
            <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            <Link href="/about" className="hover:text-blue-600 transition">About Us</Link>

            <div className="relative group">
              <button className="flex items-center hover:text-blue-600 transition">
                Services <ChevronDown size={16} className="ml-1" />
              </button>
              <div className=" hidden group-hover:block mt-2 w-40 bg-white shadow-lg rounded-md z-10">
                <Link href="/webdesign" className="block px-4 py-2 hover:bg-gray-300 transition">Web Design</Link>
                <Link href="/seo" className="block px-4 py-2 hover:bg-gray-300 transition">SEO</Link>
                <Link href="/sem" className="block px-4 py-2 hover:bg-gray-300 transition">SEM</Link>
                <Link href="/social-media" className="block px-4 py-2 hover:bg-gray-300 transition">Social Media</Link>
              </div>
            </div>

            {/* <div className="relative group">
              <button className="flex items-center hover:text-blue-600 transition">
                <Link href='/clints'>Our Clients </Link>
              </button>
            </div> */}

            <Link href="/contact" className="hover:text-blue-600 transition">Contact Us</Link>

            {/* <button className="bg-orange-400 hover:bg-orange-600 text-white px-4 py-2 rounded font-semibold transform hover:scale-105 transition duration-200">
              📞
            </button>
            <button className="bg-orange-400 hover:bg-orange-600 text-white px-4 py-2 rounded font-semibold transform hover:scale-105 transition duration-200">
              📋
            </button> */}
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
            <Link href="/" className="block hover:text-blue-600">Home</Link>
            <Link href="/about" className="block hover:text-blue-600">About Us</Link>

            <div>
              <p className="font-semibold">Services</p>
              <div className="ml-4 space-y-1">
                <Link href="/webdesign" className="block hover:text-blue-600">Web Design</Link>
                <Link href="/seo" className="block hover:text-blue-600">SEO</Link>
                <Link href="/sem" className="block hover:text-blue-600">SEM</Link>
                <Link href="/social-media" className="block hover:text-blue-600">Social Media</Link>
              </div>
            </div>

            <div>
              <p className="font-semibold">Our Clients</p>
              <div className="ml-4 space-y-1">
                <Link href="/branding" className="block hover:text-blue-600">Branding</Link>
                <Link href="/apollo-hospitl" className="block hover:text-blue-600">Apollo Hospital</Link>
              </div>
            </div>

            <Link href="/contact" className="block hover:text-blue-600">Contact Us</Link>

            {/* <div className="flex space-x-2 pt-2">
              <button className="bg-orange-400 hover:bg-orange-600 text-white px-4 py-2 rounded font-semibold transform hover:scale-105 transition duration-200">
                📞
              </button>
              <button className="bg-orange-400 hover:bg-orange-600 text-white px-4 py-2 rounded font-semibold transform hover:scale-105 transition duration-200">
                📋
              </button>
            </div> */}
          </div>
        )}
      </div>
    </nav>
  );
}

function ServicesSection() {
  const services = [
    {
      title: 'SEO',
      description: 'We offer SEO strategies tailored to help you rank better and grow online visibility effectively.',
      icon: '/logo/seo.png',
      link: '/seo',
    },
    {
      title: 'SEM',
      description: 'Drive instant traffic using smartly targeted Search Engine Marketing (SEM) campaigns.',
      icon: '/logo/sem.png',
      link: '/sem',
    },
    {
      title: 'Social Media',
      description: 'Boost your brand awareness with our social media growth and engagement.',
      icon: '/logo/social-media.png',
      link: '/social-media',
    },
    {
      title: 'Web Design',
      description: 'Modern, responsive, and scalable websites designed to impress and convert your visitors.',
      icon: '/logo/web.png',
      link: '/webdesign',
    },
    {
      title: 'Education',
      description: 'Digitize learning experiences with user-friendly e-learning platforms and education tools.',
      icon: '/logo/education.png',
      link: '/education',
    },
    {
      title: 'Real Estate',
      description: 'Innovative web and marketing solutions for real estate listings, leads, and property showcases.',
      icon: '/logo/realestate.png',
      link: '/real-estate',
    },
    {
      title: 'Finance',
      description: 'Secure and scalable digital solutions for banking, fintech, accounting, and reporting.',
      icon: '/logo/finance.png',
      link: '/finance',
    },
    {
      title: 'E-commerce',
      description: 'Build high-converting online stores with seamless payment, inventory, and marketing features.',
      icon: '/logo/e-commerce.png',
      link: '/ecommerce',
    },
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-white py-16 px-4 sm:px-8">
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl font-extrabold text-blue-700 uppercase tracking-wide"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>
        <motion.p
          className="text-gray-600 mt-3 text-sm md:text-base max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Tailored digital solutions for every industry.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-2 md:px-16">
        {services.map((service, index) => (
          <Link href={service.link} key={index}>
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out border border-blue-100 group cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4">
                <motion.div
                  className="p-4 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300"
                  whileHover={{ rotate: 10 }}
                >
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={48}
                    height={48}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </motion.div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300 text-center">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed text-center">
                {service.description}
              </p>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function DigitalMarketingSection() {
  const services = [
    {
      title: 'Website Design & Development',
      link: '/webdesign',
      description: 'High-performing, mobile-optimized websites built on platforms like WordPress, Webflow, and Shopify with a focus on conversion and scalability.',
    },
    {
      title: 'Search Engine Optimization (SEO)',
      link: '/seo',
      description: 'Technical, on-page, and off-page SEO for local and global visibility, including voice search and mobile optimization.',
    },
    {
      title: 'Social Media Marketing',
      link: '/social-media',
      description: 'Create communities, drive engagement, and convert with integrated paid and organic strategies tailored to each platform.',
    },
    {
      title: 'Paid Media & PPC Advertising',
      link: '/advertaising',
      description: 'Maximize ROI with campaigns on Google, Meta, LinkedIn, and TikTok, powered by data and targeting precision.',
    },
    {
      title: 'Content Marketing & Strategy',
      link: '/content-marketing',
      description: 'Convert with blogs, emails, videos, and thought leadership that ranks, resonates, and scales.',
    },
    {
      title: 'Google My Business Optimization',
      link: '/branding',
      description: 'Capture local traffic with optimized GMB profiles, local SEO, and reputation management.',
    },
    {
      title: 'Creative Logo Design & Branding',
      link: '/creativity',
      description: 'Build strong brand identities through logos, taglines, visual systems, and marketing collateral.',
    },
    {
      title: 'Video Marketing & Creative Production',
      link: '/video-marketing',
      description: 'Engage with brand videos, reels, 2D animation, and tutorials across platforms.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 py-12 px-4 sm:px-8 md:px-16">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Digital Marketing Services
      </motion.h1>

      <motion.p
        className="text-center text-md md:text-lg text-gray-700 max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        At Global Tech Solutions, we combine data, creativity, and innovation to deliver business growth. From strategy to execution, our digital marketing and development solutions are built to scale.
      </motion.p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {services.map((service, index) => (
          <Link href={service.link} key={index} passHref>
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-xl border border-blue-100 hover:shadow-2xl hover:border-purple-300 transition-all duration-300 cursor-pointer hover:scale-105 h-full"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h2 className="text-xl font-semibold text-blue-800 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="mt-20 text-center">
        <motion.h2
          className="text-3xl font-bold text-purple-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let's Work Together
        </motion.h2>
        <motion.p
          className="mt-3 text-gray-700 text-sm md:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Digital marketing services and website development built to scale your business.
        </motion.p>

        <motion.button
          whileHover={{
            scale: 1.05,
            backgroundColor: 'rgb(99 102 241)',
          }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
        >
          <Link href="/contact">Book Us Now</Link>
        </motion.button>
      </div>
    </div>
  );
}

// const ClientsCarousel = () => {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const [isHovered, setIsHovered] = useState(false);
//   const [direction, setDirection] = useState<'left' | 'right'>('right');
//   const [activeIndex, setActiveIndex] = useState(0);

//   const logos = [
//     { src: '/clints/apollo.png', alt: 'Apollo' },
//     { src: '/clints/nu.png', alt: 'Nu' },
//     { src: '/clints/mindful.png', alt: 'Mindful' },
//     { src: '/clints/curls.png', alt: 'Curls' },
//     { src: '/clints/peps.png', alt: 'Peps' },
//     { src: '/clints/telehealth.png', alt: 'Telehealth' },
//     { src: '/clints/apollo.png', alt: 'Apollo' },
//     { src: '/clints/nu.png', alt: 'Nu' },
//     { src: '/clints/mindful.png', alt: 'Mindful' },
//     { src: '/clints/curls.png', alt: 'Curls' },
//     { src: '/clints/peps.png', alt: 'Peps' },
//     { src: '/clints/telehealth.png', alt: 'Telehealth' }
//   ];

//   const scroll = (dir: 'left' | 'right') => {
//     if (!scrollRef.current) return;
    
//     setDirection(dir);
//     const scrollAmount = dir === 'left' ? -300 : 300;
//     scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    
//     setActiveIndex(prev => {
//       return dir === 'right' 
//         ? (prev + 1) % (logos.length / 2)
//         : (prev - 1 + (logos.length / 2)) % (logos.length / 2);
//     });
//   };

//   useEffect(() => {
//     if (isHovered) return;

//     const autoScroll = () => {
//       if (!scrollRef.current) return;

//       const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
//       const isNearEnd = scrollLeft >= scrollWidth - clientWidth - 100;

//       if (isNearEnd) {
//         scrollRef.current.scrollTo({ left: 0, behavior: 'instant' });
//         setActiveIndex(0);
//       } else {
//         scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
//         setActiveIndex(prev => (prev + 1) % (logos.length / 2));
//       }
//     };

//     const interval = setInterval(autoScroll, 2000);
//     return () => clearInterval(interval);
//   }, [isHovered, logos.length]);

//   return (
//     <section className="bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
//       <motion.h2 
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="text-3xl font-bold text-center text-blue-700 mb-12 tracking-wide"
//       >
//         TRUSTED BY INDUSTRY LEADERS
//       </motion.h2>

//       <div 
//         className="relative max-w-7xl mx-auto"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <AnimatePresence>
//           <motion.button
//             key="left-arrow"
//             initial={{ opacity: 0.5, x: -10 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0 }}
//             whileHover={{ scale: 1.2, backgroundColor: '#2563eb' }}
//             onClick={() => scroll('left')}
//             className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-blue-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
//             aria-label="Previous client"
//           >
//             <ChevronLeft className="text-white w-6 h-6" />
//           </motion.button>
//         </AnimatePresence>

//         <div
//           ref={scrollRef}
//           className="flex overflow-x-auto gap-8 md:gap-12 px-12 scroll-smooth scrollbar-hide"
//           aria-live="polite"
//         >
//           {logos.map((logo, index) => (
//             <motion.div
//               key={`${logo.alt}-${index}`}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.05 }}
//               whileHover={{ scale: 1.1, y: -5 }}
//               className="flex-shrink-0 w-40 h-24 md:w-52 md:h-32 flex items-center justify-center bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all"
//             >
//               <Image
//                 src={logo.src}
//                 alt={logo.alt}
//                 width={208}
//                 height={128}
//                 className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
//                 loading="lazy"
//                 draggable="false"
//               />
//             </motion.div>
//           ))}
//         </div>

//         <AnimatePresence>
//           <motion.button
//             key="right-arrow"
//             initial={{ opacity: 0.5, x: 10 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0 }}
//             whileHover={{ scale: 1.2, backgroundColor: '#2563eb' }}
//             onClick={() => scroll('right')}
//             className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-blue-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
//             aria-label="Next client"
//           >
//             <ChevronRight className="text-white w-6 h-6" />
//           </motion.button>
//         </AnimatePresence>
//       </div>

//       <div className="flex justify-center mt-8 gap-2">
//         {Array.from({ length: logos.length / 2 }).map((_, index) => (
//           <motion.button
//             key={index}
//             animate={{
//               backgroundColor: index === activeIndex ? '#2563eb' : '#93c5fd',
//               scale: index === activeIndex ? 1.2 : 1
//             }}
//             transition={{ duration: 0.3 }}
//             className="w-3 h-3 rounded-full focus:outline-none"
//             onClick={() => {
//               if (scrollRef.current) {
//                 scrollRef.current.scrollTo({
//                   left: index * 300,
//                   behavior: 'smooth'
//                 });
//                 setActiveIndex(index);
//               }
//             }}
//             aria-label={`Go to client ${index + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };


interface Slide {
  id: number;
  headingTop: string;
  headingMain: string;
  description: string;
  image1: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

function DesignShowcaseSection() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const slides: Slide[] = [
    {
      id: 1,
      headingTop: 'Designs That Inspire',
      headingMain: 'Creativity That Speaks',
      description: 'Bringing Your Ideas to Life with Our Stunning Designs',
      image1: '/slide/slide1.png',
      ctaPrimary: 'View Portfolio',
      ctaSecondary: 'Our Process'
    },
    {
      id: 2,
      headingTop: 'Tailored For You',
      headingMain: 'Visuals That Connect',
      description: 'Your brand deserves designs that resonate with your audience',
      image1: '/slide/slide2.png',
      ctaPrimary: 'Get Started',
      ctaSecondary: 'See Case Studies'
    },
    {
      id: 3,
      headingTop: 'Engaging & Effective',
      headingMain: 'Build Brand Trust',
      description: 'Designs that not only attract but convert and build loyalty',
      image1: '/slide/slide3.png',
      ctaPrimary: 'Contact Us',
      ctaSecondary: 'Client Testimonials'
    },
    {
      id: 4,
      headingTop: 'Premium Quality',
      headingMain: 'Exceptional Results',
      description: 'Elevate your brand with our award-winning design team',
      image1: '/slide/slide4.png',
      ctaPrimary: 'Request Quote',
      ctaSecondary: 'Our Awards'
    }
  ];

  const { headingTop, headingMain, description, image1, ctaPrimary, ctaSecondary } = slides[current];

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  const handleSetCurrent = (index: number) => {
    setAutoPlay(false);
    setCurrent(index);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  useEffect(() => {
    if (!autoPlay || isHovered) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay, isHovered, nextSlide]);

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-gray-100 px-5 py-10 md:py-24">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-12 flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-between">
        {/* LEFT CONTENT */}
        <div 
          className="md:w-1/2 space-y-6 text-center md:text-left"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h4 className="text-xl md:text-2xl font-semibold text-blue-600 tracking-wide">
            {headingTop}
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold text-orange-500 leading-tight">
            {headingMain}
          </h2>
          <p className="text-gray-700 text-lg max-w-lg">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
            <button 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 border-2 border-blue-600 transition-all duration-300 shadow-md hover:shadow-lg font-medium"
              onClick={() => console.log('Primary CTA clicked')}
            >
              {ctaPrimary}
            </button>
            <button 
              className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg font-medium"
              onClick={() => console.log('Secondary CTA clicked')}
            >
              {ctaSecondary}
            </button>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-6 mt-12">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSetCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    current === index ? 'bg-orange-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div 
          className="md:w-1/2 flex justify-center relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative w-full max-w-md h-[400px] md:h-[500px] overflow-hidden rounded-[2rem] shadow-2xl transition-all duration-500 group-hover:scale-[1.03] group-hover:rotate-[-1.5deg]">
            <Image 
              src={image1}
              alt={`Slide ${current + 1} visual`}
              fill
              className="object-cover object-center transition-transform duration-700 ease-in-out scale-100 group-hover:scale-110"
              priority={current === 0}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-[2rem]" />
          </div>

          {/* Glow gradient effect */}
          <div className="absolute w-[90%] h-[90%] top-5 left-5 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 blur-3xl rounded-[2rem] opacity-30 -z-10" />

          {/* Decorative blobs */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-300 rounded-full blur-2xl opacity-20 -z-10 animate-pulse" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-400 rounded-full blur-2xl opacity-20 -z-10 animate-pulse" />
        </div>
      </div>
    </section>
  );
}


function BlogPost() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden"
      >
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-center">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            How Global Tech Helps Brands Stand Out
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-indigo-100 text-lg"
          >
            Cutting through the digital noise with measurable results
          </motion.p>
        </div>

        <div className="p-8">
          <motion.p 
            className="text-gray-700 mb-6 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            The internet is saturated with brands fighting for attention. Scroll through your social media feed, 
            and you'll see hundreds of ads, promotions, and content pieces competing for clicks. In this digital noise, 
            how do you make your business stand out?
          </motion.p>

          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
            className="bg-indigo-50 border-l-4 border-indigo-600 p-6 mb-8 rounded-r-lg"
          >
            <p className="text-indigo-800 font-medium text-xl">
              That's the challenge we solve at <span className="font-bold">Global Tech Software Solutions</span>.
            </p>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Our Approach</h2>
              <p className="text-gray-700 leading-relaxed">
                We are a next-gen digital marketing agency built to deliver measurable growth through tailored strategies, 
                creative storytelling, and cutting-edge technology. Our team brings together SEO specialists, content creators, 
                designers, ad strategists, and developers under one roof—all working together to help your brand shine.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="bg-blue-50 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Understanding Your Brand DNA</h3>
              <p className="text-gray-700 leading-relaxed">
                We start with understanding your brand DNA. What are your values? Who are your customers? 
                What are your competitors doing? Then, we build a plan of action—from a stunning website to Google ads, 
                Facebook campaigns, and high-ranking blog content—crafted to reach, engage, and convert your ideal audience.
              </p>
            </motion.div>

            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-6 overflow-hidden"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Data-Driven Adaptation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    With platforms and algorithms changing rapidly, what worked yesterday may not work today. 
                    That's why our approach is adaptive and data-driven. We constantly monitor, analyze, 
                    and refine campaigns to make sure your business is not only visible but also impactful.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Services</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "B2B Lead Generation",
                      "Instagram Growth",
                      "eCommerce Optimization",
                      "Retargeting Campaigns",
                      "SEO Strategy",
                      "Content Marketing"
                    ].map((service, index) => (
                      <motion.li
                        key={service}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-center bg-white p-3 rounded-lg shadow-sm"
                      >
                        <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                        {service}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="bg-purple-50 p-6 rounded-lg border border-purple-100"
                >
                  <h3 className="text-xl font-semibold text-purple-800 mb-3">Building Digital Legacies</h3>
                  <p className="text-gray-700 leading-relaxed">
                    But it's not just about tactics—it's about relationships. At Global Tech Software Solutions, 
                    we focus on long-term results and sustainable growth. We're not here for quick wins. 
                    We're here to help you build a digital legacy.
                  </p>
                </motion.div>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="text-center mt-10"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Ready to stand out from the crowd?
              </h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
              >
                <Link href="/contact">Contact Global Tech Today</Link>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
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
        href="https://wa.me/9844281875"
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