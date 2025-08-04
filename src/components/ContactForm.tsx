// src/components/ContactForm.jsx

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [title, setTitle] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    // Set current timestamp
    const currentTime = new Date().toLocaleString();

    // Append timestamp to hidden input
    e.target.time.value = currentTime;

    emailjs.sendForm(
      'service_5srsufu',      // ✅ Your Service ID
      'template_z4x4tyl',     // ✅ Your Template ID
      e.target,
      'PDVlmWWMhyGaSAHaH'     // ✅ Your Public Key
    ).then(
      (result) => {
        alert("✅ Message sent successfully!");
        console.log(result.text);
      },
      (error) => {
        alert("❌ Failed to send message.");
        console.error(error.text);
      }
    );

    e.target.reset(); // clear form
    setTitle('');     // reset title state
  };

  return (
    <form onSubmit={sendEmail} className="flex flex-col gap-4 w-full max-w-md mx-auto p-6 shadow-md rounded bg-white">
      <input type="text" name="name" placeholder="Your Name" className="p-2 border rounded" required />
      <input type="email" name="email" placeholder="Your Email" className="p-2 border rounded" required />
      <input
        type="text"
        name="title"
        placeholder="Subject"
        className="p-2 border rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea name="message" placeholder="Your Message" className="p-2 border rounded h-32" required />
      
      {/* Hidden field for timestamp */}
      <input type="hidden" name="time" />

      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
