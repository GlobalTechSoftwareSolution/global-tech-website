'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
          and elevate your brand's presence in the digital landscape. We specialize in creating websites, mobile applications,
          and custom software solutions that help businesses thrive in today's competitive market.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12">
          <div className="bg-white p-5 sm:p-6 lg:p-7 rounded-xl shadow-md border-l-4 border-blue-500 transition hover:shadow-xl hover:scale-[1.02]">
            <h3 className="text-xl font-bold text-blue-800 mb-2">💡 Strategy & Consulting</h3>
            <p className="text-gray-600">
              We help businesses identify opportunities, define goals, and craft strategies for success in the digital world.
              Our consulting services cover digital transformation, technology roadmap planning, and market analysis.
            </p>
          </div>

          <div className="bg-white p-5 sm:p-6 lg:p-7 rounded-xl shadow-md border-l-4 border-orange-500 transition hover:shadow-xl hover:scale-[1.02]">
            <h3 className="text-xl font-bold text-orange-700 mb-2">🌐 Web & App Development</h3>
            <p className="text-gray-600">
              Build high-performing websites and apps that are scalable, responsive, and user-friendly.
              We create stunning websites, powerful e-commerce platforms, iOS and Android mobile applications,
              and progressive web apps that deliver exceptional user experiences.
            </p>
          </div>

          <div className="bg-white p-5 sm:p-6 lg:p-7 rounded-xl shadow-md border-l-4 border-green-500 transition hover:shadow-xl hover:scale-[1.02]">
            <h3 className="text-xl font-bold text-green-700 mb-2">📈 Digital Marketing</h3>
            <p className="text-gray-600">
              Drive traffic and conversions with tailored SEO, PPC, content marketing, and social campaigns.
              Our data-driven marketing strategies help you reach your target audience and achieve your business goals.
            </p>
          </div>

          <div className="bg-white p-5 sm:p-6 lg:p-7 rounded-xl shadow-md border-l-4 border-purple-500 transition hover:shadow-xl hover:scale-[1.02]">
            <h3 className="text-xl font-bold text-purple-700 mb-2">🎨 UI/UX Design</h3>
            <p className="text-gray-600">
              Craft intuitive, elegant user experiences that enhance engagement and increase satisfaction.
              Our design team creates beautiful interfaces that are both aesthetically pleasing and highly functional.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function SoftwareDevelopmentSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 px-4 py-10 sm:px-6 sm:py-12 lg:px-20 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl lg:max-w-6xl mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-indigo-700 mb-4 text-center">
          Custom Software Development
        </h2>
        <p className="text-gray-700 text-base sm:text-lg lg:text-xl mb-10 max-w-3xl mx-auto text-center">
          We build tailor-made software solutions that address your unique business challenges and drive innovation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10">
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-500 transition hover:shadow-xl hover:scale-[1.02]">
            <div className="text-blue-600 text-4xl mb-4">💻</div>
            <h3 className="text-xl font-bold text-blue-800 mb-3">Web Applications</h3>
            <p className="text-gray-600 mb-3">
              Custom web applications built with modern technologies like React, Next.js, Node.js, and more.
              Scalable, secure, and designed to meet your specific business requirements.
            </p>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Enterprise Resource Planning (ERP)</li>
              <li>• Customer Relationship Management (CRM)</li>
              <li>• Content Management Systems (CMS)</li>
              <li>• Business Intelligence Dashboards</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-500 transition hover:shadow-xl hover:scale-[1.02]">
            <div className="text-green-600 text-4xl mb-4">📱</div>
            <h3 className="text-xl font-bold text-green-800 mb-3">Mobile Applications</h3>
            <p className="text-gray-600 mb-3">
              Native and cross-platform mobile apps for iOS and Android that deliver exceptional user experiences.
              From concept to deployment, we handle the entire mobile app development lifecycle.
            </p>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• iOS App Development (Swift)</li>
              <li>• Android App Development (Kotlin/Java)</li>
              <li>• Cross-Platform (React Native, Flutter)</li>
              <li>• App Store Optimization & Deployment</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-purple-500 transition hover:shadow-xl hover:scale-[1.02]">
            <div className="text-purple-600 text-4xl mb-4">⚙️</div>
            <h3 className="text-xl font-bold text-purple-800 mb-3">Software Solutions</h3>
            <p className="text-gray-600 mb-3">
              End-to-end software development services including desktop applications, APIs, and backend systems.
              We focus on creating robust, maintainable, and future-proof solutions.
            </p>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Desktop Applications (Electron, .NET)</li>
              <li>• API Development & Integration</li>
              <li>• Cloud-Based Solutions (AWS, Azure)</li>
              <li>• Database Design & Management</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 sm:p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-3">Our Development Process</h3>
            <p className="mb-5 text-blue-100">
              We follow a proven agile methodology to ensure transparent communication, iterative development,
              and timely delivery of high-quality software products.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Discovery</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Design</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Development</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Testing</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Deployment</span>
            </div>
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
      <SoftwareDevelopmentSection />
    </>
  );
}