'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Blog_post = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden"
      >
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            How Global Tech Helps Brands Stand Out
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-indigo-100 text-lg"
          >
            Cutting through the digital noise with measurable results
          </motion.p>
        </div>

        <div className="p-8">
          <motion.p
            className="text-gray-700 mb-6 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            The internet is saturated with brands fighting for attention. Scroll through your social media feed,
            and you'll see hundreds of ads, promotions, and content pieces competing for clicks. In this digital noise,
            how do you make your business stand out?
          </motion.p>

          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, type: 'spring' }}
            className="bg-indigo-50 border-l-4 border-indigo-600 p-6 mb-8 rounded-r-lg"
          >
            <p className="text-indigo-800 font-medium text-xl">
              That's the challenge we solve at{' '}
              <span className="font-bold">Global Tech Software Solutions</span>.
            </p>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Our Approach</h2>
              <p className="text-gray-700 leading-relaxed">
                We are a next-gen digital marketing agency built to deliver measurable growth through tailored strategies,
                creative storytelling, and cutting-edge technology. Our team brings together SEO specialists, content creators,
                designers, ad strategists, and developers under one roof—all working together to help your brand shine.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="bg-blue-50 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Understanding Your Brand DNA</h3>
              <p className="text-gray-700 leading-relaxed">
                We start with understanding your brand DNA. What are your values? Who are your customers?
                What are your competitors doing? Then, we build a plan of action—from a stunning website to Google ads,
                Facebook campaigns, and high-ranking blog content—crafted to reach, engage, and convert your ideal audience.
              </p>
            </motion.div>

            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-6 overflow-hidden"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Data-Driven Adaptation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    With platforms and algorithms changing rapidly, what worked yesterday may not work today.
                    That's why our approach is adaptive and data-driven. We constantly monitor, analyze,
                    and refine campaigns to make sure your business is not only visible but also impactful.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Services</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'B2B Lead Generation',
                      'Instagram Growth',
                      'eCommerce Optimization',
                      'Retargeting Campaigns',
                      'SEO Strategy',
                      'Content Marketing',
                    ].map((service, index) => (
                      <motion.li
                        key={service}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-center bg-white p-3 rounded-lg shadow-sm"
                      >
                        <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                        {service}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="bg-purple-50 p-6 rounded-lg border border-purple-100"
                >
                  <h3 className="text-xl font-semibold text-purple-800 mb-3">Building Digital Legacies</h3>
                  <p className="text-gray-700 leading-relaxed">
                    But it's not just about tactics—it's about relationships. At Global Tech Software Solutions,
                    we focus on long-term results and sustainable growth. We're not here for quick wins.
                    We're here to help you build a digital legacy.
                  </p>
                </motion.div>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="text-center mt-10"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Ready to stand out from the crowd?
              </h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                <Link href="/contact">Contact Global Tech Today</Link>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Blog_post;
