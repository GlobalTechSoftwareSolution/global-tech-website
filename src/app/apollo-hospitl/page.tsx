'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { Transition } from '@headlessui/react';



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

    </div>
  );
}