import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Send, Facebook, Linkedin, Instagram, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // EmailJS configuration
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'fear.agency.contact@gmail.com',
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('Message sent successfully! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setStatus('Failed to send message. Please try again or email us directly.');
        setTimeout(() => setStatus(''), 5000);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-dark relative overflow-hidden">
      {/* Simple Static Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #00d9ff 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, #0099ff 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>
      
      {/* Animated Background Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/5 rounded-full blur-2xl"
        animate={{
          scale: [1.2, 0.8, 1.2],
          opacity: [0.4, 0.7, 0.4],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Morphing Geometric Shapes */}
      <motion.div
        className="absolute top-1/2 left-5 w-20 h-20 bg-gradient-to-r from-primary/10 to-secondary/10"
        animate={{
          borderRadius: ["20%", "50%", "20%"],
          rotate: [0, 180, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
            Let's Build Your <span className="text-gradient">AI Solution</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Ready to transform your business with AI? Let's discuss how we can create intelligent solutions tailored to your needs. Fill out the form and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="text-primary" size={24} />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a href="mailto:fear.agency.contact@gmail.com" className="text-lg hover:text-primary transition-colors">
                      fear.agency.contact@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="text-primary" size={24} />
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <div className="space-y-1">
                      <a href="tel:+918125644388" className="text-lg hover:text-primary transition-colors block">
                        +91 81256 44388
                      </a>
                      <a href="tel:+919108753694" className="text-lg hover:text-primary transition-colors block">
                        +91 91087 53694
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-gray-400 mb-4">Follow me on social media:</p>
                <div className="flex gap-4">
                  <motion.a 
                    href="https://www.facebook.com/profile.php?id=61585103735284" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass p-3 rounded-lg transition-all duration-300 cursor-hover"
                    data-cursor="Facebook"
                    whileHover={{ scale: 1.1, y: -5, boxShadow: '0 10px 30px rgba(0, 217, 255, 0.3)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Facebook size={24} />
                  </motion.a>
                  <motion.a 
                    href="https://www.linkedin.com/feed/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass p-3 rounded-lg transition-all duration-300 cursor-hover"
                    data-cursor="LinkedIn"
                    whileHover={{ scale: 1.1, y: -5, boxShadow: '0 10px 30px rgba(0, 217, 255, 0.3)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin size={24} />
                  </motion.a>
                  <motion.a 
                    href="https://www.instagram.com/fear_agency/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass p-3 rounded-lg transition-all duration-300 cursor-hover"
                    data-cursor="Instagram"
                    whileHover={{ scale: 1.1, y: -5, boxShadow: '0 10px 30px rgba(0, 217, 255, 0.3)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Instagram size={24} />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="glass p-8 rounded-xl space-y-6 relative overflow-hidden">
                {/* Shimmer effect on form */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(0, 217, 255, 0.05) 50%, transparent 100%)',
                    backgroundSize: '200% 100%',
                  }}
                />
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-darkGray border border-gray-700 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="John Doe"
                    whileFocus={{ scale: 1.01 }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-darkGray border border-gray-700 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="john@example.com"
                    whileFocus={{ scale: 1.01 }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Project Description
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-darkGray border border-gray-700 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    placeholder="Tell me about your project..."
                    whileFocus={{ scale: 1.01 }}
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full bg-primary text-dark font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-hover relative overflow-hidden"
                  data-cursor="Send!"
                  whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(0, 217, 255, 0.4)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.span
                    className="absolute inset-0 bg-secondary"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">Send Message</span>
                  <Send size={18} className="relative z-10" />
                </motion.button>

                {status && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-primary text-center"
                  >
                    {status}
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
