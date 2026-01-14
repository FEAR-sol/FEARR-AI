import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Lightbulb, Pencil, Code, Rocket, HeadphonesIcon, ArrowRight } from 'lucide-react';

const ProcessFlow = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState(null);



  const steps = [
    {
      icon: Lightbulb,
      number: '01',
      title: 'Discovery',
      description: 'We analyze your needs, goals, and target audience to create the perfect strategy.',
      color: 'from-yellow-400 to-orange-500',
      duration: '1-2 days',
    },
    {
      icon: Pencil,
      number: '02',
      title: 'Design',
      description: 'Our designers create stunning mockups and prototypes that bring your vision to life.',
      color: 'from-purple-400 to-pink-500',
      duration: '2-5 days',
    },
    {
      icon: Code,
      number: '03',
      title: 'Development',
      description: 'Expert developers build your project with clean, scalable code and best practices.',
      color: 'from-blue-400 to-cyan-500',
      duration: '3-20 days',
    },
    {
      icon: Rocket,
      number: '04',
      title: 'Launch',
      description: 'We deploy your project and ensure everything runs smoothly from day one.',
      color: 'from-green-400 to-emerald-500',
      duration: '1-2 days',
    },
    {
      icon: HeadphonesIcon,
      number: '05',
      title: 'Support',
      description: 'Ongoing maintenance and support to keep your project running at peak performance.',
      color: 'from-indigo-400 to-purple-500',
      duration: 'Ongoing',
    },
  ];

  return (
    <section ref={ref} className="py-32 bg-dark relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(#00d9ff 1px, transparent 1px),
              linear-gradient(90deg, #00d9ff 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '80px 80px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="text-primary"
            >
              ⚡
            </motion.span>
            <span className="text-primary font-semibold">How We Work</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Our <span className="text-gradient">Process</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            A systematic approach that transforms your ideas into exceptional digital experiences
          </p>
        </motion.div>

        {/* Horizontal Cards */}
        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group"
            >
              <motion.div
                className="glass rounded-2xl p-6 h-full relative overflow-hidden border-2 border-transparent"
                animate={{
                  borderColor: hoveredIndex === index ? 'rgba(0, 217, 255, 0.5)' : 'transparent',
                  y: hoveredIndex === index ? -10 : 0,
                }}
                transition={{ type: 'spring', stiffness: 300 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0`}
                  animate={{ opacity: hoveredIndex === index ? 0.1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Number Badge */}
                <motion.div
                  className={`absolute -top-3 -right-3 w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center font-bold text-white shadow-lg`}
                  animate={{
                    rotate: hoveredIndex === index ? 360 : 0,
                    scale: hoveredIndex === index ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {step.number}
                </motion.div>

                {/* Icon */}
                <motion.div
                  className="mb-4 relative z-10"
                  animate={{
                    rotate: hoveredIndex === index ? [0, -10, 10, 0] : 0,
                    scale: hoveredIndex === index ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${step.color}`}>
                    <step.icon size={32} className="text-white" />
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 relative z-10">{step.title}</h3>

                {/* Duration Badge */}
                <div className="mb-3">
                  <span className="text-xs px-3 py-1 rounded-full bg-dark/50 text-gray-400">
                    ⏱️ {step.duration}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed relative z-10 mb-4">
                  {step.description}
                </p>



                {/* Bottom Progress Bar */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color}`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: 'left' }}
                />

                {/* Floating Particles on Hover */}
                {hoveredIndex === index && (
                  <>
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-primary"
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${30 + (i % 2) * 20}%`,
                        }}
                        initial={{ opacity: 0, y: 0 }}
                        animate={{
                          opacity: [0, 1, 0],
                          y: [0, -40],
                          x: [0, Math.sin(i) * 10],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </>
                )}
              </motion.div>

              {/* Arrow Between Cards */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.15 }}
                >
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="text-primary" size={24} />
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-lg mb-6">
            Ready to start your project?
          </p>
          <motion.button
            className="glass px-8 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-primary/20 to-secondary/20 border-2 border-primary/30 inline-flex items-center gap-3"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Let's Build Together</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight size={20} />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessFlow;
