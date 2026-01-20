import { motion } from 'framer-motion';
import { Mail, Send, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-darkGray py-8 border-t border-gray-800 relative overflow-hidden">
      {/* Static Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #00d9ff 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, #0099ff 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div 
            className="flex items-center gap-2 text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span>© FEAR 2026 </span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                color: ['#ef4444', '#f97316', '#ef4444'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.a 
              href="/TERMS AND POLICIES (2).pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors cursor-hover"
              data-cursor="Terms & Conditions"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ 
                y: -2, 
                color: '#00d9ff',
                scale: 1.05
              }}
              whileTap={{ scale: 0.95 }}
            >
              Terms & Conditions
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
