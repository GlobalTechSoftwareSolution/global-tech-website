'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'react-feather';



interface ClientCardProps {
  logo: string;
  name: string;
  description: string;
  image?: string;
  delay?: number;
}

const ClientCard: React.FC<ClientCardProps> = ({ 
  logo, 
  name, 
  description, 
  image, 
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center justify-center bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition duration-300 h-full"
    >
      <div className="h-24 flex items-center">
        <Image
          src={logo}
          alt={name}
          width={100}
          height={100}
          className="object-contain max-h-full"
        />
      </div>
      <h3 className="text-lg font-semibold text-blue-700 mb-1 mt-4">{name}</h3>
      <p className="text-sm text-gray-600 text-center mb-4">
        {description}
      </p>
      {image && (
        <div className="w-full mt-auto">
          <Image
            src={image}
            alt={`${name} Project Preview`}
            width={300}
            height={180}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </div>
      )}
    </motion.div>
  );
};
export default function ClientsPage() {
  const clients = [
    {
      logo: "/logos/apollo-bangalore.png",
      name: "Apollo Hospitals",
      description: "We partnered with Apollo to deliver a high-performance healthcare website tailored for accessibility, patient trust, and seamless experience. Our solution improved patient engagement by 40% and reduced bounce rates by 35%.",
      image: "/projects/apollo-preview.jpg"
    },
    {
      logo: "/logos/apollo-telehealth.png",
      name: "Apollo TeleHealth",
      description: "Apollo TeleHealth partnered with us to modernize their digital presence and enhance virtual patient care through secure and responsive web platforms. The new system handles 5000+ daily consultations with 99.9% uptime.",
      image: "/projects/apollo-tele-preview.jpg"
    },
    {
      logo: "/logos/fortis.png",
      name: "Fortis Healthcare",
      description: "Fortis Healthcare trusted us to redesign their patient portal, resulting in a 50% increase in online appointment bookings and improved patient satisfaction scores.",
      image: "/projects/fortis-preview.jpg"
    },
    {
      logo: "/logos/manipal.png",
      name: "Manipal Hospitals",
      description: "We developed a custom CMS solution for Manipal Hospitals that streamlined their content management process, reducing update times from hours to minutes.",
      image: "/projects/manipal-preview.jpg"
    },
    {
      logo: "/logos/narayana.png",
      name: "Narayana Health",
      description: "Narayana Health partnered with us for their digital transformation, implementing AI-powered chatbots that reduced call center volume by 30% while improving patient query resolution.",
      image: "/projects/narayana-preview.jpg"
    },
    {
      logo: "/logos/aster.png",
      name: "Aster DM Healthcare",
      description: "Our team created a multilingual platform for Aster DM Healthcare that expanded their reach across Middle Eastern and Indian markets, resulting in a 25% increase in international patients.",
      image: "/projects/aster-preview.jpg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20 px-4 md:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Valued Clients</h1>
          <p className="text-xl md:text-2xl mb-8">
            Trusted by leading organizations across healthcare, technology, and enterprise sectors
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              href="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300"
            >
              Become Our Client
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Clients Section */}
      <section className="bg-white py-16 px-4 md:px-20 flex-grow">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-blue-800"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Healthcare Partners
          </motion.h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            We've helped some of the biggest names in healthcare transform their digital presence, improve patient engagement, and streamline operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <ClientCard
              key={index}
              logo={client.logo}
              name={client.name}
              description={client.description}
              image={client.image}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-12">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 p-6 rounded-lg shadow"
            >
              <div className="flex items-center mb-4">
                <Image
                  src="/testimonials/testimonial1.jpg"
                  alt="Dr. Ramesh Kumar"
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Dr. Ramesh Kumar</h4>
                  <p className="text-gray-600 text-sm">CMO, Apollo Hospitals</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &quot;Global Tech transformed our digital presence completely. Their team understood our needs as a healthcare provider and delivered a solution that improved both patient experience and operational efficiency.&quot;
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 p-6 rounded-lg shadow"
            >
              <div className="flex items-center mb-4">
                <Image
                  src="/testimonials/testimonial2.jpg"
                  alt="Priya Sharma"
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Priya Sharma</h4>
                  <p className="text-gray-600 text-sm">Digital Head, Fortis Healthcare</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &quot;Working with Global Tech was a game-changer for our telehealth services. Their technical expertise and healthcare domain knowledge made all the difference in our digital transformation journey.&quot;
              </p>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-700 to-blue-500 rounded-xl p-8 md:p-12 text-white text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to transform your digital presence?
            </h3>
            <p className="mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your organization achieve its digital goals with our tailored solutions.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                href="/contact"
                className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}