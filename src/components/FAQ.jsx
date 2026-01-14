import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How long does it take to build a website?',
      answer: 'Our delivery times vary by project type: Basic websites take 7-10 days, Professional websites 10-20 days, and E-commerce or Custom Web Apps 15-30 days. We provide a detailed timeline during the discovery phase.'
    },
    {
      question: 'What is included in your website packages?',
      answer: 'All packages include responsive design, mobile optimization, SSL certificate, hosting setup, and basic SEO. Higher-tier packages include advanced features like custom animations, admin dashboards, payment integration, and more.'
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes! We offer ongoing support packages including 24/7 monitoring, regular updates, security patches, performance optimization, and priority support. We ensure your website stays secure and runs smoothly.'
    },
    {
      question: 'Can you redesign my existing website?',
      answer: 'Absolutely! We specialize in website redesigns and modernization. We can migrate your existing content, improve design and functionality, and enhance performance while maintaining your brand identity.'
    },
    {
      question: 'What technologies do you use?',
      answer: 'We use modern, industry-standard technologies including React, Next.js, Node.js, MongoDB, PostgreSQL, and more. We choose the best tech stack based on your specific project requirements.'
    },
    {
      question: 'Do you offer custom web application development?',
      answer: 'Yes! We build custom web applications tailored to your business needs, including SaaS platforms, dashboards, booking systems, and more. We handle everything from design to deployment.'
    },
    {
      question: 'What is your payment structure?',
      answer: 'We typically work with a 50% upfront payment and 50% upon completion. For larger projects, we can arrange milestone-based payments. We accept bank transfers, UPI, and international payments.'
    },
    {
      question: 'Will my website be mobile-friendly?',
      answer: 'Absolutely! All our websites are fully responsive and optimized for mobile devices, tablets, and desktops. We follow mobile-first design principles to ensure the best experience on all screen sizes.'
    }
  ];

  return (
    <section ref={ref} className="py-32 bg-darkGray relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #00d9ff 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
          >
            FAQ
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about our services
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <motion.div
                className="glass rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full p-6 flex items-center justify-between text-left group"
                >
                  <span className="text-lg font-semibold pr-8 group-hover:text-primary transition-colors">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-primary" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <motion.div
                          initial={{ y: -10 }}
                          animate={{ y: 0 }}
                          className="pt-2 border-t border-gray-800"
                        >
                          <p className="text-gray-400 leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Still have questions? We're here to help!
          </p>
          <motion.a
            href="/#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-secondary text-dark font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
