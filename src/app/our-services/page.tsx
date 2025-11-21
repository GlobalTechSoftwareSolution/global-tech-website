'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { Transition } from '@headlessui/react';

function DigitalAgencySection() {
  return (
    <section className="bg-gradient-to-br from-white to-blue-50 px-4 py-10 sm:px-6 sm:py-12 lg:px-20 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl lg:max-w-6xl mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-orange-600 mb-4">
          Full-Service Digital Agency
        </h2>
        <p className="text-gray-700 text-base sm:text-lg lg:text-xl mb-6 max-w-3xl">
          From strategy to execution – we build seamless digital experiences that drive measurable results
          and elevate your brand's presence in the digital landscape.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12">
          <div className="bg-white p-5 sm:p-6 lg:p-7 rounded-xl shadow-md border-l-4 border-blue-500 transition hover:shadow-xl hover:scale-[1.02]">
            <h3 className="text-xl font-bold text-blue-800 mb-2">💡 Strategy & Consulting</h3>
            <p className="text-gray-600">
              We help businesses identify opportunities, define goals, and craft strategies for success in the digital world.
            </p>
          </div>

          <div className="bg-white p-5 sm:p-6 lg:p-7 rounded-xl shadow-md border-l-4 border-orange-500 transition hover:shadow-xl hover:scale-[1.02]">
            <h3 className="text-xl font-bold text-orange-700 mb-2">🌐 Web & App Development</h3>
            <p className="text-gray-600">
              Build high-performing websites and apps that are scalable, responsive, and user-friendly.
            </p>
          </div>

          <div className="bg-white p-5 sm:p-6 lg:p-7 rounded-xl shadow-md border-l-4 border-green-500 transition hover:shadow-xl hover:scale-[1.02]">
            <h3 className="text-xl font-bold text-green-700 mb-2">📈 Digital Marketing</h3>
            <p className="text-gray-600">
              Drive traffic and conversions with tailored SEO, PPC, content marketing, and social campaigns.
            </p>
          </div>

          <div className="bg-white p-5 sm:p-6 lg:p-7 rounded-xl shadow-md border-l-4 border-purple-500 transition hover:shadow-xl hover:scale-[1.02]">
            <h3 className="text-xl font-bold text-purple-700 mb-2">🎨 UI/UX Design</h3>
            <p className="text-gray-600">
              Craft intuitive, elegant user experiences that enhance engagement and increase satisfaction.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default function CombinedPage() {
  return (
    <>
      <DigitalAgencySection />
    </>
  );
}