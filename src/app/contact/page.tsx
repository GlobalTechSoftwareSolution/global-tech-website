"use client"
import { useState, useRef, FormEvent, useEffect } from "react"
import { FaCheckCircle, FaExclamationCircle, FaTimes, FaPaperPlane } from "react-icons/fa"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  })

  const [isLoading, setIsLoading] = useState(false)
  const [popup, setPopup] = useState<{ show: boolean; message: string; type: "success" | "error" }>(
    { show: false, message: "", type: "success" }
  )

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // ✅ Send with our custom API
  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    setIsLoading(true)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setPopup({
          show: true,
          message: "Thank you for your message! We'll get back to you within 24 hours.",
          type: "success"
        })
        setFormData({ name: "", phone: "", email: "", service: "", message: "" })
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error("API error:", error)
      setPopup({
        show: true,
        message: `Error: ${(error as Error).message || "We apologize, but there was an error sending your message. Please try again or contact us directly."}`,
        type: "error"
      })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (popup.show) {
      const timer = setTimeout(() => {
        setPopup(prev => ({ ...prev, show: false }))
      }, 6000)
      return () => clearTimeout(timer)
    }
  }, [popup.show])

  const closePopup = () => {
    setPopup(prev => ({ ...prev, show: false }))
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12 px-4">
      {/* Page Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Contact <span className="text-blue-500">Global Tech Software Solutions</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get in touch with us for any inquiries about our services. We're here to help you grow your business.
        </p>
      </div>

      {/* Contact Form */}
      <div className="bg-white/95 backdrop-blur-lg p-8 md:p-10 rounded-2xl shadow-2xl relative w-full max-w-2xl border border-yellow-400 hover:shadow-yellow-500/50 transition duration-500">
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 rounded-b-2xl"></div>

        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 text-center">
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Get in Touch with Global Tech Software Solutions
          </span>
        </h2>

        <form onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Name */}
          <div className="col-span-2 md:col-span-1">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg text-base placeholder:text-gray-400 focus:ring-2 focus:ring-yellow-500 outline-none transition-colors"
            />
          </div>

          {/* Phone */}
          <div className="col-span-2 md:col-span-1">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg text-base placeholder:text-gray-400 focus:ring-2 focus:ring-yellow-500 outline-none transition-colors"
            />
          </div>

          {/* Email */}
          <div className="col-span-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg text-base placeholder:text-gray-400 focus:ring-2 focus:ring-yellow-500 outline-none transition-colors"
            />
          </div>

          {/* Services Dropdown */}
          <div className="col-span-2">
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
              Service Interested In *
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg text-base text-gray-700 focus:ring-2 focus:ring-yellow-500 outline-none transition-colors"
            >
              <option value="">-- Select Service --</option>
              <option value="SEO">SEO (Search Engine Optimization)</option>
              <option value="SEM">SEM (Search Engine Marketing)</option>
              <option value="Social Media">Social Media Marketing</option>
              <option value="Web Development">Web Development</option>
              <option value="App Development">App Development</option>
            </select>
          </div>

          {/* Message */}
          <div className="col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your project or inquiry..."
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              className="w-full p-3 border border-gray-300 rounded-lg text-base placeholder:text-gray-400 focus:ring-2 focus:ring-yellow-500 outline-none transition-colors resize-vertical"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="col-span-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white font-semibold py-3 rounded-lg shadow-md hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane className="text-sm" />
                  Send Message
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Professional Popup Notification */}
      {popup.show && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
            onClick={closePopup}
          ></div>
          
          {/* Notification Card */}
          <div className="relative bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden transform transition-all duration-300 scale-95 animate-scale-in">
            {/* Header with gradient */}
            <div className={`h-2 w-full ${popup.type === "success" ? 'bg-gradient-to-r from-green-400 to-green-600' : 'bg-gradient-to-r from-red-400 to-red-600'}`}></div>
            
            {/* Content */}
            <div className="p-6">
              <div className="flex items-start">
                {/* Icon */}
                <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${popup.type === "success" ? 'bg-green-100' : 'bg-red-100'}`}>
                  {popup.type === "success" ? (
                    <FaCheckCircle className="h-6 w-6 text-green-600" />
                  ) : (
                    <FaExclamationCircle className="h-6 w-6 text-red-600" />
                  )}
                </div>
                
                {/* Message */}
                <div className="ml-4">
                  <h3 className={`text-lg font-semibold ${popup.type === "success" ? 'text-green-800' : 'text-red-800'}`}>
                    {popup.type === "success" ? 'Message Sent Successfully' : 'Something Went Wrong'}
                  </h3>
                  <p className="mt-1 text-gray-600">{popup.message}</p>
                </div>
                
                {/* Close Button */}
                <button
                  onClick={closePopup}
                  className="ml-4 flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <FaTimes className="h-4 w-4 text-gray-500" />
                </button>
              </div>
              
              {/* Progress Bar */}
              <div className="mt-4">
                <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${popup.type === "success" ? 'bg-green-500' : 'bg-red-500'} transition-all duration-5000 ease-linear`}
                    style={{ animation: 'shrink 5s linear forwards' }}
                  ></div>
                </div>
              </div>
            </div>
            
            {/* Action Button */}
            <div className="px-6 py-4 bg-gray-50 flex justify-end">
              <button
                onClick={closePopup}
                className={`px-4 py-2 rounded-lg font-medium ${popup.type === "success" ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'} text-white transition-colors`}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes scaleIn {
          0% {
            transform: scale(0.9);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes shrink {
          0% {
            width: 100%;
          }
          100% {
            width: 0%;
          }
        }
        .animate-scale-in {
          animation: scaleIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  )
}