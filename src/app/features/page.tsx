'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function FeaturesPage() {
  const services = [
    { 
      name: "SEO Optimization", 
      desc: "Boost your online visibility with our comprehensive search engine optimization strategies.", 
      link: "/seo",
      icon: "/logo/seo.png",
      features: [
        "Keyword research & analysis",
        "On-page optimization",
        "Technical SEO audits",
        "Content strategy"
      ]
    },
    { 
      name: "SEM Campaigns", 
      desc: "Drive targeted traffic and maximize ROI with our data-driven search engine marketing.", 
      link: "/sem",
      icon: "/logo/sem.png",
      features: [
        "PPC campaign management",
        "Ad copy optimization",
        "Conversion tracking",
        "Remarketing strategies"
      ]
    },
    { 
      name: "Social Media Marketing", 
      desc: "Build brand awareness and engagement through strategic social media management.", 
      link: "/social-media",
      icon: "/logo/social-media.png",
      features: [
        "Content creation & scheduling",
        "Community management",
        "Influencer partnerships",
        "Performance analytics"
      ]
    },
    {
      name: "Web Development",
      desc: "Custom websites and web applications tailored to your business needs.",
      link: "/web-development",
      icon: "/icons/web.png",
      features: [
        "Responsive design",
        "E-commerce solutions",
        "CMS integration",
        "Performance optimization"
      ]
    },
    {
      name: "UX/UI Design",
      desc: "Create intuitive digital experiences that delight your users.",
      link: "/design",
      icon: "/icons/ui.png",
      features: [
        "User research",
        "Wireframing & prototyping",
        "Usability testing",
        "Design systems"
      ]
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-24 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-yellow-300">Global Tech</span> Software Solutions
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Delivering innovative technology solutions to accelerate your business growth
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="inline-block bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started
            </Link>
            <Link 
              href="#services" 
              className="inline-block border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Comprehensive Services</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer end-to-end digital solutions to help your business thrive in the digital landscape
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative w-16 h-16 mb-6">
                <Image 
                  src={service.icon} 
                  alt={service.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                {service.name}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.desc}
              </p>
              
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                href={service.link}
                className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-800 transition-colors"
              >
                Learn more
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital goals
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="inline-block bg-white hover:bg-gray-100 text-blue-700 font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get a Free Consultation
            </Link>
           
          </div>
        </div>
      </section>

      
    </main>
  );
}