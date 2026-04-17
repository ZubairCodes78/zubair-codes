'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Users, MessageSquare, BarChart, Globe, Zap } from 'lucide-react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';

export default function UseCases() {
  const useCases = [
    {
      icon: ShoppingCart,
      title: 'E-Commerce',
      problem: 'Manual order processing and customer support',
      solution: 'AI-powered automation that processes orders 24/7',
    },
    {
      icon: Users,
      title: 'HR & Recruiting',
      problem: 'Time-consuming candidate screening',
      solution: 'Automated resume analysis and scheduling',
    },
    {
      icon: MessageSquare,
      title: 'Customer Service',
      problem: 'Long wait times and inconsistent responses',
      solution: 'Intelligent chatbots that resolve 80% of queries',
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      problem: 'Manual report generation and analysis',
      solution: 'Real-time dashboards with automated insights',
    },
    {
      icon: Globe,
      title: 'Marketing',
      problem: 'Manual campaign management and reporting',
      solution: 'Automated multi-channel marketing systems',
    },
    {
      icon: Zap,
      title: 'Operations',
      problem: 'Repetitive tasks slowing down teams',
      solution: 'End-to-end workflow automation',
    },
  ];

  return (
    <Section>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-heading mb-4">
            Use <span className="gradient-text">Cases</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Industries we've transformed with intelligent systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card>
                <div className="w-12 h-12 mb-3 sm:mb-4 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-500 to-violet-500 flex items-center justify-center">
                  <useCase.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white font-heading mb-2 sm:mb-3">
                  {useCase.title}
                </h3>
                <div className="space-y-2 text-xs sm:text-sm">
                  <div>
                    <span className="text-gray-500">Problem:</span>
                    <p className="text-gray-400">{useCase.problem}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Solution:</span>
                    <p className="text-gray-300">{useCase.solution}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
