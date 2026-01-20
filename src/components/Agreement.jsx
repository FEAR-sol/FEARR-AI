import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FileText, CheckCircle, AlertCircle, Download } from 'lucide-react';

const Agreement = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [agreed, setAgreed] = useState(false);

  const terms = [
    {
      icon: FileText,
      title: 'Clear Requirements',
      description: 'Clients must clearly define all project requirements before the project starts. This ensures we deliver exactly what you envision.',
    },
    {
      icon: AlertCircle,
      title: 'Additional Requests',
      description: 'Any additional requests after signing the agreement will require a new quote or project phase to maintain quality and timeline.',
    },
    {
      icon: CheckCircle,
      title: 'Maintenance Terms',
      description: 'Maintenance or future updates should be pre-decided in the agreement to ensure smooth ongoing support.',
    },
    {
      icon: CheckCircle,
      title: 'Communication',
      description: 'Clear communication and timeline commitments from both sides are mandatory for successful project completion.',
    },
  ];

  return (
    <section id="agreement" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
            Before We <span className="text-gradient">Begin</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="glass p-8 rounded-xl mb-8"
            >
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                To ensure a smooth and successful collaboration, I believe in transparency and clear expectations from the start. Here are the key terms that guide our working relationship:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {terms.map((term, index) => (
                  <motion.div
                    key={term.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6, type: 'spring', stiffness: 300, damping: 20 }}
                    className="flex gap-4 p-4 rounded-lg cursor-hover relative overflow-hidden group"
                    data-cursor="Important"
                    whileHover={{ 
                      x: 10,
                      backgroundColor: 'rgba(0, 217, 255, 0.05)'
                    }}
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6, ease: 'easeInOut' }}
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(0, 217, 255, 0.2), transparent)',
                      }}
                    />
                    
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <term.icon className="text-primary flex-shrink-0 mt-1" size={24} />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{term.title}</h3>
                      <p className="text-gray-400 text-sm">{term.description}</p>
                    </div>
                    
                    {/* Hover indicator */}
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-1 bg-primary"
                      initial={{ scaleY: 0 }}
                      whileHover={{ scaleY: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="glass p-6 rounded-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <input
                  type="checkbox"
                  id="agree"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="w-5 h-5 accent-primary cursor-pointer"
                />
                <label htmlFor="agree" className="text-gray-300 cursor-pointer">
                  I have read and agree to the terms and conditions
                </label>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Agreement;
