'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'react-feather';
import { Transition } from '@headlessui/react';



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
      <HomePageContent />
    </>
  );
}