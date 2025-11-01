"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const HRMSPage = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const features = [
    {
      icon: "👥",
      title: "Employee Management",
      description: "Complete employee lifecycle management from onboarding to exit",
      details: ["Digital employee records", "Document management", "Organization chart", "Employee self-service"]
    },
    {
      icon: "💰",
      title: "Payroll Processing",
      description: "Automated payroll with tax compliance and direct deposit",
      details: ["Auto-calculation", "Tax filing", "Payslip generation", "Multi-currency support"]
    },
    {
      icon: "📊",
      title: "Attendance & Leave",
      description: "Smart tracking of attendance, leaves, and time-off requests",
      details: ["Biometric integration", "Leave balance tracking", "Shift management", "Overtime calculation"]
    },
    {
      icon: "🎯",
      title: "Performance Management",
      description: "360-degree performance reviews and goal tracking",
      details: ["KPI tracking", "Performance reviews", "Goal setting", "Feedback system"]
    },
    {
      icon: "📱",
      title: "Mobile App",
      description: "Dedicated mobile application for employees and managers",
      details: ["iOS & Android apps", "Push notifications", "Offline access", "Mobile approvals"]
    },
    {
      icon: "🔒",
      title: "Security & Compliance",
      description: "Enterprise-grade security with regulatory compliance",
      details: ["GDPR compliant", "Role-based access", "Data encryption", "Audit trails"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc",
      role: "HR Director",
      content: "This HRMS reduced our administrative work by 60% and improved employee satisfaction significantly.",
      avatar: "👩‍💼"
    },
    {
      name: "Mike Chen",
      company: "Global Solutions",
      role: "CEO",
      content: "The analytics dashboard helped us make data-driven decisions about our workforce.",
      avatar: "👨‍💼"
    },
    {
      name: "Emily Davis",
      company: "StartUp Ventures",
      role: "HR Manager",
      content: "Implementation was smooth and the support team is incredibly responsive.",
      avatar: "👩‍🎓"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">

      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl p-10"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold text-gray-800 mb-6">
                  <span className="text-blue-600">HRMS</span> System
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Transform your HR operations with our comprehensive Human Resource Management System. 
                  Automate processes, engage employees, and make data-driven decisions—all in one platform.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                    ✅ 95% Time Saved
                  </div>
                  <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                    🚀 500+ Companies
                  </div>
                  <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                    ⭐ 4.9/5 Rating
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                   <a
              href="https://globaltechsoftwaresolutions.cloud/"
               target="_blank"
    rel="noopener noreferrer"
              className="border-2 border-blue-700 bg-blue-700  text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-all"
            >
             Visit Our Website
            </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Why Choose Our HRMS?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">✓</div>
                    <span>Reduce HR administrative costs by up to 40%</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">✓</div>
                    <span>Improve employee satisfaction and retention</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">✓</div>
                    <span>Ensure 100% compliance with labor regulations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">✓</div>
                    <span>Real-time analytics and reporting</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Comprehensive HR Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage your workforce efficiently in one integrated platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your HR Operations?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of companies that have streamlined their HR processes with our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <a
              href="https://globaltechsoftwaresolutions.cloud/"
               target="_blank"
    rel="noopener noreferrer"
              className="border-2 border-white bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all"
            >
              Vist Our Website
            </a>
               <a
              href="/contact"
              className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl"
            >
              Get a Free Demo
            </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HRMSPage;