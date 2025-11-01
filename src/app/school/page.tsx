'use client';

import { motion } from 'framer-motion';

export default function LearnMorePage() {
  return (
    <section className="bg-gradient-to-br from-white to-blue-50 px-6 py-16 md:px-20" id="school-erp-details">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4">
            Complete School ERP Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your educational institution with our comprehensive digital management platform
          </p>
        </div>

        {/* What is School ERP */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-10 border border-blue-100">
          <h3 className="text-3xl font-bold text-orange-600 mb-6">What is a School ERP System?</h3>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The School ERP System is an all-in-one digital platform designed to streamline academic, 
            administrative, and communication processes in educational institutions. It centralizes 
            student data, automates daily operations, and enables seamless collaboration between 
            administrators, teachers, students, and parents.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏫</span>
              </div>
              <h4 className="font-semibold text-blue-800">Academic Excellence</h4>
              <p className="text-sm text-gray-600 mt-2">Enhance teaching and learning experiences</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold text-blue-800">Operational Efficiency</h4>
              <p className="text-sm text-gray-600 mt-2">Automate routine tasks and processes</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔗</span>
              </div>
              <h4 className="font-semibold text-blue-800">Seamless Collaboration</h4>
              <p className="text-sm text-gray-600 mt-2">Connect all stakeholders effectively</p>
            </div>

           <div className='mt-5 mb-4'>
             <a
              href="https://globaltechsoftwaresolutions.cloud/school/"
               target="_blank"
                rel="noopener noreferrer"
              className="border-2 border-blue-700 bg-blue-700 text-white px-8 py-4 rounded-lg text-center font-semibold hover:bg-blue-800 transition-all"
            >
              Vist Our Website
            </a>
           </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-blue-700 mb-8 text-center">Key Benefits</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Centralized Data Management",
                description: "Manage all student, staff, and academic data from a single dashboard",
                icon: "📊",
                color: "blue"
              },
              {
                title: "Smart Automation",
                description: "Simplify repetitive tasks like attendance, fees collection, and reports",
                icon: "🤖",
                color: "green"
              },
              {
                title: "Complete Transparency",
                description: "Improve communication between teachers, students, and parents",
                icon: "👁️",
                color: "purple"
              },
              {
                title: "Performance Tracking",
                description: "Real-time analytics for academic progress and institutional growth",
                icon: "📈",
                color: "orange"
              },
              {
                title: "Easy Scalability",
                description: "Add new modules as your institution grows",
                icon: "🚀",
                color: "red"
              },
              {
                title: "Cost Effective",
                description: "Reduce paperwork and manual effort significantly",
                icon: "💰",
                color: "emerald"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-all"
              >
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h4 className="font-bold text-gray-800 mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Core Modules */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-blue-700 mb-8 text-center">Core Modules</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Student Information Management", color: "border-blue-500", icon: "👨‍🎓" },
              { name: "Attendance & Timetable", color: "border-green-500", icon: "📅" },
              { name: "Exams & Grading Management", color: "border-purple-500", icon: "📝" },
              { name: "Fees Collection & Accounting", color: "border-pink-500", icon: "💳" },
              { name: "Teacher & Staff Management", color: "border-yellow-500", icon: "👩‍🏫" },
              { name: "Parent-Teacher Communication", color: "border-red-500", icon: "💬" },
              { name: "Library Management", color: "border-indigo-500", icon: "📚" },
              { name: "Transport Management", color: "border-teal-500", icon: "🚌" },
              { name: "Hostel Management", color: "border-orange-500", icon: "🏠" }
            ].map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white shadow-md p-6 rounded-xl border-l-4 hover:transform hover:-translate-y-1 transition-all ${module.color}`}
              >
                <div className="flex items-center">
                  <span className="text-2xl mr-4">{module.icon}</span>
                  <span className="font-semibold text-gray-800">{module.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-blue-700 mb-8 text-center">Advanced Features</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-blue-800 mb-4">📱 Mobile App Access</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Dedicated mobile apps for parents, teachers, and students</li>
                <li>• Push notifications for important updates</li>
                <li>• Offline access to essential features</li>
                <li>• Mobile fees payment integration</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-green-800 mb-4">🔒 Security & Compliance</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Role-based access control</li>
                <li>• GDPR and data protection compliance</li>
                <li>• Regular security audits</li>
                <li>• Data encryption and backup</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-purple-800 mb-4">📊 Analytics & Reports</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Customizable dashboard widgets</li>
                <li>• Automated report generation</li>
                <li>• Performance trend analysis</li>
                <li>• Export to PDF/Excel</li>
              </ul>
            </div>
            <div className="bg-orange-50 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-orange-800 mb-4">🔄 Integration Ready</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Third-party software integration</li>
                <li>• API access for custom development</li>
                <li>• Payment gateway integration</li>
                <li>• SMS and email service providers</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-12">
          <h3 className="text-3xl font-bold mb-6 text-center">Why Choose Our School ERP?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-semibold mb-4">🎯 Built for Educational Excellence</h4>
              <p className="mb-4">
                Our system is specifically designed for educational institutions, understanding 
                the unique challenges and requirements of the education sector.
              </p>
              <ul className="space-y-2">
                <li>• User-friendly interface for all age groups</li>
                <li>• Customizable to your institution's workflow</li>
                <li>• Regular updates with new features</li>
                <li>• 24/7 technical support</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">💡 Smart & Adaptive</h4>
              <p className="mb-4">
                Whether you manage a small private school or a large educational institution, 
                our system adapts to your needs.
              </p>
              <ul className="space-y-2">
                <li>• Cloud-based or on-premise deployment</li>
                <li>• Multi-branch support</li>
                <li>• Multi-language capability</li>
                <li>• Affordable pricing plans</li>
              </ul>
            </div>
          </div>
        </div>


        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Ready to Transform Your School Management?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of educational institutions that have streamlined their operations 
            and enhanced their educational delivery with our School ERP System.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl"
            >
              Get a Free Demo
            </a>
            <a
              href="https://globaltechsoftwaresolutions.cloud/school/"
               target="_blank"
    rel="noopener noreferrer"
              className="border-2 border-blue-700 text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all"
            >
              Vist Our Website
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}