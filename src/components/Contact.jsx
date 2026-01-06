import React, { useState } from 'react';
import { motion }   from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Check } from 'lucide-react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: ["283 Deansgate", "Manchester M3 4EW", "Floor 0 · Great Northern"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+44 161 123 4567"], // UPDATE THIS WITH ACTUAL NUMBER
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["hello@gulfteahouse.co.uk"], // UPDATE THIS WITH ACTUAL EMAIL
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      details: ["Mon-Wed, Fri-Sun: 9AM - 10PM", "Thursday: Closed", "Holidays: Special Hours"],
      color: "from-purple-500 to-violet-500"
    }
  ];

  return (
    <section id="contact" className="scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full text-blue-600 font-semibold mb-6">
            GET IN TOUCH
          </span>
          <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            Visit or <span className="gradient-text">Contact Us</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We're here to make your tea experience exceptional
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="premium-card"
                >
                  <div className={`inline-flex p-3 bg-gradient-to-r ${info.color} rounded-2xl mb-4`}>
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600 dark:text-gray-400 mb-1">
                      {detail}
                    </p>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="premium-card p-0 overflow-hidden"
            >
              <div className="h-96 rounded-2xl overflow-hidden">
                <iframe
                  title="Gulf Tea House Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.437051909292!2d-2.250330323577717!3d53.47937297240983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1c09d0fe1f9%3A0xcd3918e8ea8e63bc!2s283%20Deansgate%2C%20Manchester%20M3%204EW%2C%20UK!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="filter grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold mb-2">Perfectly Located</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Find us in the heart of Deansgate, Manchester's premier destination
                </p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form with FormSubmit */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="premium-card"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-8">
                    Thank you for contacting Gulf Tea House. We'll respond within 24 hours.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsSubmitted(false)}
                    className="btn-premium"
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-3xl font-bold mb-8">Send us a message</h3>
                  
                  {/* FORM SUBMIT FORM */}
                  <form 
                    action="https://formsubmit.co/fawaznuhu93@gmail.com"  // CHANGE THIS TO YOUR/THEIR EMAIL
                    method="POST"
                    onSubmit={() => setTimeout(() => setIsSubmitted(true), 100)}
                    className="space-y-6"
                  >
                    {/* FormSubmit Hidden Fields */}
                    <input type="hidden" name="_subject" value="New Inquiry - Gulf Tea House Website" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value="" /> {/* Leave empty for same page */}
                    <input type="hidden" name="_autoresponse" value="Thank you for contacting Gulf Tea House! We'll get back to you within 24 hours." />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-premium-gold transition"
                          placeholder="Your Name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-premium-gold transition"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-premium-gold transition"
                          placeholder="+44 1234 567890"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Subject *
                        </label>
                        <select
                          name="subject"
                          required
                          className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-premium-gold transition"
                          defaultValue=""
                        >
                          <option value="" disabled>Select a subject</option>
                          <option value="booking">Table Booking</option>
                          <option value="event">Private Event</option>
                          <option value="wholesale">Wholesale Inquiry</option>
                          <option value="feedback">Feedback</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows="6"
                        className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-premium-gold transition resize-none"
                        placeholder="Tell us about your inquiry..."
                      />
                    </div>
                    
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full btn-premium text-lg py-4"
                    >
                      <Send className="inline-block w-5 h-5 mr-2" />
                      Send Message
                    </motion.button>
                  </form>
                  
                  {/* Alternative Contact Methods */}
                  <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-4">
                      Prefer to contact us directly?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a 
                        href="tel:+441611234567" 
                        className="px-6 py-3 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-xl font-medium hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors text-center"
                      >
                        📞 Call Now
                      </a>
                      <a 
                        href="https://instagram.com/gulf_mcr" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300 rounded-xl font-medium hover:bg-pink-200 dark:hover:bg-pink-900/50 transition-colors text-center"
                      >
                        📸 Instagram DM
                      </a>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
