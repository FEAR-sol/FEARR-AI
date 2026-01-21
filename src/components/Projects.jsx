import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import TiltCard from './TiltCard';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: 'Zorr',
      description: 'AI-powered customer care bot for Zorr food delivery app, handling order inquiries, delivery tracking, and customer support with 95% accuracy.',
      tech: ['GPT-4', 'LangChain', 'Python', 'Vector DB'],
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80',
      live: 'https://zorr-customer-care.netlify.app/',
      github: '#',
    },
    {
      title: 'Roww',
      description: 'AI content generator specifically designed for Instagram reels, creating engaging scripts, captions, and content ideas for social media creators.',
      tech: ['GPT-4', 'Claude', 'React', 'Node.js'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      live: 'https://roww-content.netlify.app/',
      github: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-darkGray to-dark relative overflow-hidden">
      {/* Enhanced Floating Elements */}
      <motion.div
        className="absolute top-40 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"
        animate={{
          y: [0, 50, 0],
          x: [0, 30, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute bottom-20 right-10 w-48 h-48 bg-primary/10 rounded-full blur-2xl"
        animate={{
          y: [0, -40, 0],
          x: [0, -20, 0],
          scale: [1.2, 0.8, 1.2],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Animated Circuit Lines */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full">
          <motion.path
            d="M0,100 Q200,50 400,100 T800,100"
            stroke="#00d9ff"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,200 Q300,150 600,200 T1200,200"
            stroke="#0099ff"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </svg>
      </div>
      
      {/* Floating Code Symbols */}
      {['<>', '{}', '[]', '()', '//'].map((symbol, i) => (
        <motion.div
          key={symbol}
          className="absolute text-primary/20 font-mono text-2xl"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 2) * 40}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        >
          {symbol}
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <RevealOnScroll
                key={project.title}
                direction={index % 2 === 0 ? 'left' : 'right'}
                delay={index * 0.1}
              >
                <motion.div
                  onHoverStart={() => setHoveredProject(index)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="cursor-hover h-full"
                  data-cursor="View Project"
                >
                  <TiltCard className="h-full">
                <motion.div
                  className="glass rounded-xl overflow-hidden transition-all duration-300 group h-full flex flex-col relative"
                  whileHover={{ y: -10 }}
                  animate={{
                    boxShadow: hoveredProject === index 
                      ? '0 20px 40px rgba(0, 217, 255, 0.3)' 
                      : '0 0 0 rgba(0, 217, 255, 0)',
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {/* Shimmer effect on hover */}
                  <motion.div
                    className="absolute inset-0 z-10 pointer-events-none"
                    initial={{ x: '-100%' }}
                    animate={{ x: hoveredProject === index ? '100%' : '-100%' }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(0, 217, 255, 0.2), transparent)',
                    }}
                  />
                  <div className="relative overflow-hidden h-48">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      animate={{
                        scale: hoveredProject === index ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
                    
                    {/* Overlay on hover */}
                    <motion.div
                      className="absolute inset-0 bg-primary/20 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ 
                          scale: hoveredProject === index ? 1 : 0,
                          rotate: hoveredProject === index ? 0 : -180,
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        <ArrowUpRight size={48} className="text-white" />
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-gray-400 mb-4 flex-1">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span 
                          key={tech} 
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.6 + index * 0.1 + techIndex * 0.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary hover:text-secondary transition-colors cursor-hover"
                        data-cursor="Visit Site"
                        whileHover={{ x: 5 }}
                      >
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                      </motion.a>
                      <motion.a
                        href={project.github}
                        className="flex items-center gap-2 text-primary hover:text-secondary transition-colors cursor-hover"
                        data-cursor="View Code"
                        whileHover={{ x: 5 }}
                      >
                        <Github size={18} />
                        <span>Code</span>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
                </TiltCard>
              </motion.div>
            </RevealOnScroll>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
