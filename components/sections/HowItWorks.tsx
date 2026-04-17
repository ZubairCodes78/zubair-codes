'use client';

import { motion } from 'framer-motion';
import { Cpu, Workflow, Zap } from 'lucide-react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

export default function HowItWorks() {
  const steps = [
    {
      icon: Cpu,
      title: 'Analyze',
      description: 'We analyze your business processes and identify automation opportunities.',
    },
    {
      icon: Workflow,
      title: 'Design',
      description: 'We design custom systems tailored to your specific needs and goals.',
    },
    {
      icon: Zap,
      title: 'Deploy',
      description: 'We deploy and integrate systems that work seamlessly with your operations.',
    },
  ];

  return (
    <Section className="bg-black/50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-heading mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            A simple three-step process to transform your business with intelligent systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative z-10"
            >
              <div className="glass rounded-2xl p-6 sm:p-8 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-500 to-violet-500 flex items-center justify-center">
                  <step.icon size={28} className="text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white font-heading mb-2 sm:mb-3">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
