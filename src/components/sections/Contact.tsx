"use client";

import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "your_service_id", // thay bằng ID thực tế
        "your_template_id", // thay bằng ID thực tế
        form.current,
        "your_user_id" // thay bằng public key từ EmailJS dashboard
      )
      .then(
        () => {
          setIsSent(true);
          form.current?.reset();
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-white to-sky-50 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4">
              <Phone className="text-blue-600 w-6 h-6" />
              <span className="text-gray-700 text-lg">0329 265 343</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-blue-600 w-6 h-6" />
              <span className="text-gray-700 text-lg">atu3012@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-blue-600 w-6 h-6" />
              <span className="text-gray-700 text-lg">District 10, Ho Chi Minh City</span>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Send Message
            </button>

            {isSent && (
              <p className="text-green-600 text-sm mt-2">Message sent successfully!</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
