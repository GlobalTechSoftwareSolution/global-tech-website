"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'react-feather';
import { Transition } from '@headlessui/react';
import { motion } from 'framer-motion';



function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transforming Businesses Through Technology
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            We deliver cutting-edge software solutions that drive growth and innovation for your business
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition duration-300"
            >
              Get Started
            </Link>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications tailored to your business needs",
      icon: "/icons/web.png"
    },
    {
      title: "Mobile Apps",
      description: "iOS and Android apps built with the latest technologies",
      icon: "/icons/mobile-phone.png"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services",
      icon: "/icons/could.png"
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that enhance user experience",
      icon: "/icons/ui.png"
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions to help your business thrive in the digital world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Image 
                  src={service.icon} 
                  alt={service.title} 
                  width={32} 
                  height={32} 
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <Image 
              src="/logo/Global.jpg" 
              alt="Our Team" 
              width={600} 
              height={400} 
              className="rounded-xl shadow-xl"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About Global Tech</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2010, Global Tech Software Solutions has been at the forefront of digital transformation, 
              helping businesses of all sizes leverage technology to achieve their goals.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our team of experienced developers, designers, and strategists work collaboratively to deliver 
              solutions that are not just technically sound but also aligned with your business objectives.
            </p>
            <Link 
              href="/about-us" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}



export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
      </main>
    </div>
  );
}