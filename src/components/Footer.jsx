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
            <span>© 2025 FEAR — Built with</span>
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
              <Heart size={16} fill="currentColor" />
            </motion.div>
            <span>by FEAR Agency</span>
          </motion.div>

          <motion.div 
            className="flex gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {[
              { icon: Mail, label: "Email", delay: 0 },
              { icon: Send, label: "Contact", delay: 0.1 },
              { icon: Heart, label: "About", delay: 0.2 }
            ].map(({ icon: Icon, label, delay }) => (
              <motion.a 
                key={label}
                href="#" 
                className="text-gray-400 transition-colors cursor-hover relative group"
                data-cursor={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + delay }}
                whileHover={{ 
                  y: -5, 
                  color: '#00d9ff',
                  scale: 1.2
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={20} />
                

              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
