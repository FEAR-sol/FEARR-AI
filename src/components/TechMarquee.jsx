import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const TechMarquee = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  
  const technologies = [
    { name: 'GPT-4', icon: '🤖' },
    { name: 'Claude', icon: '🧠' },
    { name: 'Gemini', icon: '✨' },
    { name: 'TensorFlow', icon: '🔥' },
    { name: 'PyTorch', icon: '⚡' },
    { name: 'LangChain', icon: '🔗' },
    { name: 'Python', icon: '🐍' },
    { name: 'OpenAI API', icon: '🎯' },
    { name: 'Vector DB', icon: '💾' },
    { name: 'Hugging Face', icon: '🤗' },
    { name: 'Stable Diffusion', icon: '🎨' },
    { name: 'AWS AI', icon: '☁️' },
  ];

  const duplicatedTech = [...technologies, ...technologies];

  return (
    <section ref={ref} className="py-16 bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="mb-8 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-300">
          AI Tools We <span className="text-gradient">Master</span>
        </h3>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark to-transparent z-10" />

        <motion.div
          className="flex gap-8"
          animate={isInView ? {
            x: [0, -50 * technologies.length],
          } : {}}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedTech.map((tech, index) => (
            <motion.div
              key={`${tech.name}-${index}`}
              className="flex-shrink-0 glass px-8 py-4 rounded-full flex items-center gap-3 min-w-fit"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <span className="text-3xl">{tech.icon}</span>
              <span className="text-lg font-semibold text-gray-300 whitespace-nowrap">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
    </section>
  );
};

export default TechMarquee;
