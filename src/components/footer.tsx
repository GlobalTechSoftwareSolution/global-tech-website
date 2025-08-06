import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] text-white py-10 px-6 md:px-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700 pb-10">
        
        {/* Logo & Contact */}
        <div>
          <Image
            src="/logo/Global.jpg"
            alt="logo"
            width={64}
            height={64}
            className="h-16 mb-4 rounded-full shadow z-50"
          />
          <h3 className="font-semibold text-lg mb-1 uppercase leading-relaxed">
            GLOBAL TECH SOFTWARE SOLUTION
          </h3>
          <p className="text-center text-xs md:text-sm font-medium text-gray-400 italic tracking-wide mb-4">
            "MORE THAN A SERVICE - A SOLUTION"
          </p>

          <div className="space-y-3 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Image src="/icons/phone.png" alt="Phone" width={20} height={20} />
              <a href="tel:+919844281875" className="hover:text-white">
                +91-9844281875
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/icons/email.png" alt="Email" width={20} height={20} />
              <a
                href="mailto:hrglobaltechsoftwaresolutions@gmail.com"
                className="hover:text-white"
              >
                hrglobaltechsoftwaresolutions@gmail.com
              </a>
            </div>
            <div className="flex items-start gap-2">
              <Image src="/icons/location.png" alt="Location" width={20} height={20} className="mt-1" />
              <span>
                No 10, 4th Floor, Gaduniya Complex, Ramaiah Layout, Vidyaranyapura, Bangalore - 560097
              </span>
            </div>
          </div>
        </div>

        {/* Pages */}
        <div>
          <h4 className="text-lg font-bold text-white mb-4 uppercase">Visit</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="/" className="hover:text-white">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">About</Link>
            </li>
            
           
            <li>
              <Link href="/contact" className="hover:text-white">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Work Hours */}
        <div>
          <h4 className="text-lg font-bold text-white mb-4 uppercase">Work Hours</h4>
          <div className="flex items-center gap-2 text-gray-300 mb-2">
            <Image src="/icons/time.png" alt="Clock" width={20} height={20} />
            <span>Mon–Sat 10:00 AM–06:00 PM</span>
          </div>
          <p className="text-gray-400 mb-4">
            Visit our office to get a free consultation
          </p>
          <Link
            href="/contact"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded"
          >
            CLICK HERE
          </Link>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <Link
        href="https://wa.me/9844281875"
        className="fixed bottom-5 right-5 rounded-full shadow-lg z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/logo/whatsapp.png"
          alt="WhatsApp"
          width={48}
          height={48}
        />
      </Link>
    </footer>
  );
};

export default Footer;