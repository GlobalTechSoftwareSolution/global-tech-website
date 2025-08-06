'use client';

import { motion } from 'framer-motion';

export default function LearnMorePage() {
  return (
    <section className="bg-gradient-to-br from-white to-blue-50 px-6 py-12 md:px-20" id="erp-details">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-6">
           Learn More: ERP System Integration
        </h2>

        <p className="text-lg text-gray-700 mb-6">
          <strong className="text-orange-600">What is ERP System Integration?</strong><br />
          ERP System Integration is the process of connecting different business departments—like finance, HR, inventory, supply chain, and customer service—into a single cohesive platform.
        </p>

        <h3 className="text-2xl font-bold text-blue-700 mb-3">Key Benefits:</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
          <li><strong>Real-Time Visibility:</strong> Get instant access to company-wide data and insights.</li>
          <li><strong>Efficiency:</strong> Automate manual tasks and improve productivity across departments.</li>
          <li><strong>Cost Reduction:</strong> Reduce redundancies, delays, and overhead costs.</li>
          <li><strong>Scalability:</strong> Easily add new modules or functionalities as your business grows.</li>
          <li><strong>Improved Customer Experience:</strong> Faster response times and better service delivery.</li>
        </ul>

        <h3 className="text-2xl font-bold text-blue-700 mb-3">What We Offer:</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6 text-gray-700">
          <div className="bg-white shadow-md p-4 rounded-xl border-l-4 border-blue-500">Finance & Accounting Automation</div>
          <div className="bg-white shadow-md p-4 rounded-xl border-l-4 border-green-500">Inventory & Warehouse Management</div>
          <div className="bg-white shadow-md p-4 rounded-xl border-l-4 border-purple-500">HR & Payroll Integration</div>
          <div className="bg-white shadow-md p-4 rounded-xl border-l-4 border-pink-500">Procurement & Vendor Management</div>
          <div className="bg-white shadow-md p-4 rounded-xl border-l-4 border-yellow-500">CRM & Customer Service Tools</div>
          <div className="bg-white shadow-md p-4 rounded-xl border-l-4 border-red-500">Business Intelligence Dashboards</div>
        </div>

        <h3 className="text-2xl font-bold text-blue-700 mb-3">Industries We Support:</h3>
        <p className="text-gray-700 mb-6">
          Our ERP integration solutions are trusted across sectors including:
          <span className="block mt-2">
            - Manufacturing<br />
            - Retail & E-commerce<br />
            - Healthcare<br />
            - Logistics<br />
            - Construction<br />
            - Education
          </span>
        </p>
      </motion.div>
    </section>
  );
}