import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, memo } from 'react';
import { Brain, Zap, MessageSquare, TrendingUp, Sparkles, Shield } from 'lucide-react';
import TiltCard from './TiltCard';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState(null);



  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const services = [
    {
      icon: Brain,
      title: 'AI Customization',
      description: 'Custom AI models and solutions tailored specifically for your business needs and industry requirements.',
      color: 'from-purple-500 to-pink-500',
      features: [
        { icon: '🧠', text: 'Custom AI Model Development', detail: 'Build tailored AI solutions from scratch for your specific use case' },
        { icon: '🎯', text: 'AI Fine-tuning on Client Data', detail: 'Train existing models on your proprietary data for better accuracy' },
        { icon: '💡', text: 'AI Recommendation Systems', detail: 'Smart product, content, and service recommendation engines' },
        { icon: '🏥', text: 'Industry-Specific AI Solutions', detail: 'Specialized AI for healthcare, finance, e-commerce, education' },
      ],
      tools: ['GPT-4', 'Claude', 'TensorFlow', 'PyTorch', 'LangChain', 'Hugging Face'],
      deliverables: ['Custom AI Models', 'Fine-tuned Solutions', 'Recommendation Engines', 'Industry AI']
    },
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Intelligent automation solutions that streamline workflows and boost productivity across your organization.',
      color: 'from-blue-500 to-cyan-500',
      features: [
        { icon: '⚡', text: 'Workflow Automation using AI', detail: 'Automate repetitive tasks and complex business processes with AI' },
        { icon: '📧', text: 'Email & Customer Support Automation', detail: 'AI-powered email responses and customer service automation' },
        { icon: '📄', text: 'Document Processing Automation', detail: 'Intelligent data extraction, classification, and processing' },
        { icon: '💰', text: 'Invoice & Billing Automation', detail: 'Automated invoice processing, billing, and financial workflows' },
      ],
      tools: ['Zapier', 'Make', 'Python', 'Node.js', 'OpenAI API', 'UiPath'],
      deliverables: ['Automated Workflows', 'Email Automation', 'Document Processing', 'Billing Systems']
    },
    {
      icon: MessageSquare,
      title: 'AI Chatbot',
      description: 'Intelligent conversational AI assistants trained on your data for 24/7 customer engagement and support.',
      color: 'from-green-500 to-emerald-500',
      features: [
        { icon: '💬', text: 'Website AI Chatbots', detail: 'Intelligent customer support chatbots for your website, 24/7' },
        { icon: '📱', text: 'WhatsApp / Instagram AI Bots', detail: 'Multi-platform AI assistants for social media and messaging' },
        { icon: '📚', text: 'Chatbots Trained on Company Data', detail: 'Custom-trained bots with your company knowledge and FAQs' },
        { icon: '🎤', text: 'Voice-Based AI Assistants', detail: 'Voice-enabled conversational AI with natural speech' },
      ],
      tools: ['GPT-4', 'Claude', 'Gemini', 'LangChain', 'Pinecone', 'Whisper AI'],
      deliverables: ['Website Chatbots', 'Voice Assistants', 'Social Media Bots', 'Custom Training']
    },
    {
      icon: Shield,
      title: 'AI Security & Detection',
      description: 'Advanced AI-powered security systems for fraud detection, threat monitoring, and anomaly identification.',
      color: 'from-red-500 to-orange-500',
      features: [
        { icon: '🔐', text: 'AI Fraud Detection Systems', detail: 'Real-time transaction monitoring and fraud prevention with AI' },
        { icon: '🛡️', text: 'Threat & Intrusion Detection', detail: 'AI-powered network security and intrusion prevention systems' },
        { icon: '👤', text: 'AI Face Recognition Systems', detail: 'Secure biometric authentication and identity verification' },
        { icon: '⚠️', text: 'Behavior Anomaly Detection', detail: 'Identify unusual patterns, threats, and security breaches' },
      ],
      tools: ['TensorFlow', 'OpenCV', 'PyTorch', 'YOLO', 'AWS Rekognition', 'Scikit-learn'],
      deliverables: ['Fraud Detection', 'Face Recognition', 'Threat Detection', 'Anomaly Systems']
    },
  ];

  return (
    <section id="services" className="py-20 bg-dark relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <motion.div 
        className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        style={{ y }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-1/4 left-10 w-20 h-20 border border-primary/20 rotate-45"
        animate={{
          rotate: [45, 225, 45],
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-10 w-16 h-16 bg-secondary/10 rounded-full"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(#00d9ff 1px, transparent 1px),
              linear-gradient(90deg, #00d9ff 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-display font-bold text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            AI <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative cursor-hover"
              >
                <TiltCard className="h-full">
                  <motion.div
                    className="glass p-6 rounded-xl transition-all duration-300 group h-full relative overflow-hidden flex flex-col"
                    whileHover={{ scale: 1.02, y: -5 }}
                    animate={{
                      boxShadow: hoveredIndex === index 
                        ? '0 20px 40px rgba(0, 217, 255, 0.3)' 
                        : '0 0 0 rgba(0, 217, 255, 0)',
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />
                    
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6, ease: 'easeInOut' }}
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(0, 217, 255, 0.1), transparent)',
                      }}
                    />

                    {/* Enhanced Icon with Particle Effects */}
                    <motion.div
                      animate={{ 
                        rotate: hoveredIndex === index ? [0, -10, 10, 0] : 0,
                        scale: hoveredIndex === index ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.5 }}
                      className="relative z-10 mb-4"
                    >
                      <motion.div 
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} p-3 flex items-center justify-center relative overflow-hidden`}
                        whileHover={{
                          boxShadow: `0 0 30px rgba(0, 217, 255, 0.5)`,
                        }}
                      >
                        <service.icon className="text-white relative z-10" size={32} />
                        
                        {/* Floating Particles on Hover */}
                        {hoveredIndex === index && (
                          <>
                            {[...Array(6)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-white rounded-full"
                                style={{
                                  left: `${20 + i * 10}%`,
                                  top: `${30 + (i % 2) * 40}%`,
                                }}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{
                                  opacity: [0, 1, 0],
                                  scale: [0, 1, 0],
                                  y: [0, -20],
                                  x: [0, Math.sin(i) * 5],
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
                        
                        {/* Pulsing Ring Effect */}
                        <motion.div
                          className="absolute inset-0 rounded-xl border-2 border-white/30"
                          animate={hoveredIndex === index ? {
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0, 0.3],
                          } : {}}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                          }}
                        />
                      </motion.div>
                    </motion.div>
                    
                    {/* Title and Description */}
                    <h3 className="text-2xl font-bold mb-2 relative z-10">{service.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 relative z-10">{service.description}</p>

                    {/* Features List */}
                    <div className="space-y-2 mb-4 relative z-10 flex-grow">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={hoveredIndex === index ? { opacity: 1, x: 0 } : { opacity: 0.7, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                          className="flex items-start gap-2 group/feature"
                        >
                          <span className="text-lg mt-0.5">{feature.icon}</span>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-white">{feature.text}</p>
                            <motion.p 
                              className="text-xs text-gray-500 overflow-hidden"
                              initial={{ height: 0, opacity: 0 }}
                              animate={hoveredIndex === index ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {feature.detail}
                            </motion.p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Tools Badge */}
                    <motion.div
                      className="relative z-10 pt-4 border-t border-gray-800"
                      initial={{ opacity: 0 }}
                      animate={hoveredIndex === index ? { opacity: 1 } : { opacity: 0.5 }}
                    >
                      <div className="flex flex-wrap gap-1">
                        {service.tools.slice(0, 3).map((tool, toolIndex) => (
                          <motion.span
                            key={toolIndex}
                            initial={{ scale: 0 }}
                            animate={hoveredIndex === index ? { scale: 1 } : { scale: 0.9 }}
                            transition={{ delay: toolIndex * 0.05 }}
                            className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {tool}
                          </motion.span>
                        ))}
                        {service.tools.length > 3 && (
                          <span className="text-xs px-2 py-1 text-gray-500">
                            +{service.tools.length - 3}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  </motion.div>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          {/* Detailed Service Info - Shows on Hover */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, height: 0 }}
            animate={hoveredIndex !== null ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
          >
            {hoveredIndex !== null && (
              <motion.div
                key={hoveredIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="glass p-8 rounded-2xl"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column - Deliverables */}
                  <div>
                    <motion.h4 
                      className="text-2xl font-bold mb-4 flex items-center gap-2"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${services[hoveredIndex].color}`} />
                      What You Get
                    </motion.h4>
                    <div className="space-y-3">
                      {services[hoveredIndex].deliverables.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.2 + idx * 0.1 }}
                          className="flex items-center gap-3 group/item"
                        >
                          <motion.div
                            className={`w-8 h-8 rounded-lg bg-gradient-to-br ${services[hoveredIndex].color} flex items-center justify-center`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <span className="text-white text-sm font-bold">✓</span>
                          </motion.div>
                          <span className="text-gray-300 group-hover/item:text-white transition-colors">
                            {item}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column - Tools & Technologies */}
                  <div>
                    <motion.h4 
                      className="text-2xl font-bold mb-4 flex items-center gap-2"
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${services[hoveredIndex].color}`} />
                      Tools & Technologies
                    </motion.h4>
                    <div className="flex flex-wrap gap-2">
                      {services[hoveredIndex].tools.map((tool, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ 
                            delay: 0.2 + idx * 0.05,
                            type: 'spring',
                            stiffness: 200,
                            damping: 15
                          }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className={`px-4 py-2 rounded-lg bg-gradient-to-br ${services[hoveredIndex].color} text-white font-medium shadow-lg`}
                        >
                          {tool}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Services);
