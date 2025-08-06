'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const ContentMarketingSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const services = [
    {
      title: "Blog Content",
      description: "SEO-optimized articles that rank and drive organic traffic",
      icon: "📝",
      color: "bg-purple-100 text-purple-800"
    },
    {
      title: "Email Campaigns",
      description: "Convert subscribers with strategic email sequences",
      icon: "✉️",
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Video Content",
      description: "Engaging video scripts and production for higher conversion",
      icon: "🎥",
      color: "bg-red-100 text-red-800"
    },
    {
      title: "Thought Leadership",
      description: "Establish authority with insightful industry content",
      icon: "💡",
      color: "bg-green-100 text-green-800"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Content Marketing & <span className="text-blue-600">Strategy</span>
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Convert with blogs, emails, videos, and thought leadership that ranks, resonates, and scales.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className={`p-6 rounded-xl shadow-md ${service.color} transition-all duration-300 hover:shadow-lg`}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Content Marketing Process</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-2 mr-3">1</span>
                  <span className="text-gray-700">Research & Strategy Development</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-2 mr-3">2</span>
                  <span className="text-gray-700">Content Creation & Optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-2 mr-3">3</span>
                  <span className="text-gray-700">Distribution & Promotion</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-2 mr-3">4</span>
                  <span className="text-gray-700">Performance Analysis & Refinement</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-8">
              <Image 
                src="/icons/content.jpg" 
                alt="Content Marketing Process"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Transform Your Content Strategy?</h3>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105">
            <Link href="/contact">Get Started Today</Link>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContentMarketingSection;