'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { Transition } from '@headlessui/react';


export default function EducationServiceSection() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <section className="bg-gradient-to-br from-purple-50 via-blue-50 to-white py-16 px-6 md:px-20 flex-grow">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-blue-800 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              E-Learning & Education Solutions
            </motion.h2>
            
            <motion.h4 
              className="text-lg font-semibold text-purple-600 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Empowering Education Through Technology
            </motion.h4>
            
            <motion.p 
              className="text-gray-700 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              At Global Tech Solutions, we specialize in designing and developing digital education platforms that are intuitive, accessible, and scalable. Our e-learning solutions cater to educational institutions, coaching centers, training companies, and corporate learning environments.
            </motion.p>
            
            <motion.p 
              className="text-gray-700 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              We build custom Learning Management Systems (LMS) that enable seamless content delivery, user engagement, progress tracking, and certification. Our platforms are mobile-friendly, feature-rich, and optimized for both instructors and learners.
            </motion.p>
            
            <motion.p 
              className="text-gray-700 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              From course creation tools, quizzes, gamification, and video integrations to AI-powered learning paths — we bring innovation and effectiveness into your education delivery.
            </motion.p>

            {/* Education DNA */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <h5 className="font-bold text-blue-800 mb-3">Our Education DNA:</h5>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-blue-500">
                  <h6 className="font-semibold text-blue-600 mb-2">Learning Management</h6>
                  <p className="text-sm text-gray-700">Custom LMS with course authoring tools</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-purple-500">
                  <h6 className="font-semibold text-purple-600 mb-2">Virtual Classrooms</h6>
                  <p className="text-sm text-gray-700">Live video sessions with interactive features</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-green-500">
                  <h6 className="font-semibold text-green-600 mb-2">Gamification</h6>
                  <p className="text-sm text-gray-700">Badges, leaderboards & rewards systems</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-orange-500">
                  <h6 className="font-semibold text-orange-600 mb-2">AI Learning</h6>
                  <p className="text-sm text-gray-700">Personalized learning path recommendations</p>
                </div>
              </div>
            </motion.div>

            {/* Features List */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <h5 className="font-bold text-blue-800 mb-3">Key Features We Implement:</h5>
              <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span> Course management
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span> Interactive quizzes
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span> Video conferencing
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span> Progress tracking
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span> Certification
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span> Discussion forums
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span> Mobile learning
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span> SCORM compliance
                </li>
              </ul>
            </motion.div>

            {/* Client Highlight */}
            <motion.div 
              className="bg-white p-4 rounded-xl shadow-md border-l-4 border-purple-500 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <p className="text-sm text-gray-800">
                <strong className="text-purple-700">Success Story:</strong> Developed a custom LMS for a university that increased student engagement by 65% and reduced administrative workload by 40% through automation.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <button className="bg-gradient-to-r from-blue-600 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl">
                <Link href="/contact">Education Demo</Link>
              </button>
              {/* <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors">
                View Case Studies
              </button> */}
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
              src="/icons/education.png"
              alt="Education Solutions"
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
                  <p className="text-2xl font-bold text-blue-600">65%</p>
                  <p className="text-xs text-gray-600">More Engagement</p>
                </div>
                <div className="p-2">
                  <p className="text-2xl font-bold text-blue-600">40%</p>
                  <p className="text-xs text-gray-600">Workload Reduced</p>
                </div>
                <div className="p-2">
                  <p className="text-2xl font-bold text-blue-600">90%</p>
                  <p className="text-xs text-gray-600">Completion Rate</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}