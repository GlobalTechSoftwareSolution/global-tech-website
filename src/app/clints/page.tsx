'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface ClientCardProps {
  logo: string;
  name: string;
  description: string;
  image?: string;
  delay?: number;
  website?: string;
}

const ClientCard: React.FC<ClientCardProps> = ({ 
  logo, 
  name, 
  description, 
  image, 
  delay = 0,
  website
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
      {website && (
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
        >
          Learn More
        </a>
      )}
    </motion.div>
  );
};

export default function ClientsPage() {
  const clients = [
    {
      logo: "/logo/namma.png",
      name: "Namma Uru Namma Hemme",
      description: "We developed a modern, user-friendly platform for Namma Uru Namma Hemme to promote local heritage, culture, and community initiatives with high engagement and accessibility.",
      website: "https://namma-uru-website.vercel.app/" 
    },
    {
      logo: "/logo/fincare.jpg",
      name: "Global Fincare",
      description: "Our team created a secure and scalable financial solutions platform for Global Fincare, enabling smooth transactions, client trust, and compliance with regulatory standards.",
      website: "https://www.globalfincare.in/" 
    },
    {
      logo: "/logo/harvest.png",
      name: "Farm Harvest to Home",
      description: "We built an e-commerce and logistics platform for Farm Harvest to Home, connecting farmers directly to consumers, improving efficiency and ensuring fresh produce delivery.",
      website: "https://farmharvesttohome.com/" 
    },
     {
    logo: "/logo/Global.webp",
    name: "HRMS – Human Resource Management System",
    description:
      "Our HRMS platform simplifies workforce management with features like employee onboarding, attendance tracking, payroll automation, and performance monitoring — helping organizations save time and boost productivity.",
    website: "https://globaltechsoftwaresolutions.cloud/", 
  },
  {
    logo: "/logo/Smart-school.png",
    name: "School ERP System",
    description:
      "School ERP solution that streamlines student information, academics, fees, attendance, and communication — empowering schools to manage operations digitally and efficiently.",
    website: "https://globaltechsoftwaresolutions.cloud/school/",
  },
  {
    logo: "/logo/agri-care.webp",
    name: "AgriCare – Agriculture Management Platform",
    description:
      "AgriCare connects farmers, suppliers, and consumers through a digital platform that enables efficient farm management, crop monitoring, and direct market access for sustainable growth.",
    website: "https://globalagricare.com/", 
  },
  {
  logo: "/logo/slvlogo.webp",
  name: "SLV Borewell Scanning",
  description:
    "SLV Borewell Scanning specializes in advanced borewell detection and groundwater exploration using modern geophysical scanning technologies. We help landowners, farmers, and contractors accurately locate water sources, ensuring efficient and reliable borewell drilling.",
  website: "https://slvborewellscanning.com/", 
},
{
  logo: "/logo/sbk.webp",
  name: "SBK Gold Company",
  description:
    "SBK Gold Company is a trusted provider of high-quality gold jewelry and investment-grade gold products. We offer certified designs, transparent pricing, and reliable services to deliver a safe and premium gold-buying experience.",
  website: "https://sbk-gold-company.netlify.app/", 
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
            Trusted by leading organizations across multiple sectors
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
            Our Clients
          </motion.h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            We are proud to work with forward-thinking brands that trust us to deliver innovative solutions tailored to their vision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <ClientCard
              key={index}
              logo={client.logo}
              name={client.name}
              description={client.description}
              website={client.website}
              delay={index * 0.1}
            />
          ))}
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
