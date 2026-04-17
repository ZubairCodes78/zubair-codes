'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Globe, ShoppingCart, BarChart } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Modal from '@/components/ui/Modal';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Full-stack e-commerce platform with inventory management, payment processing, and analytics dashboard.',
      tags: ['Next.js', 'Stripe', 'PostgreSQL'],
      results: ['300% increase in sales', '60% faster checkout', '40% reduction in support tickets'],
      image: ShoppingCart,
    },
    {
      id: 2,
      title: 'AI Customer Service Bot',
      category: 'AI Automation',
      description: 'Intelligent chatbot that handles 80% of customer inquiries with 95% accuracy rate.',
      tags: ['Python', 'OpenAI', 'WhatsApp'],
      results: ['24/7 availability', '80% query resolution', '50% cost reduction'],
      image: BarChart,
    },
    {
      id: 3,
      title: 'SaaS Analytics Dashboard',
      category: 'Web Development',
      description: 'Real-time analytics dashboard with data visualization and automated reporting.',
      tags: ['React', 'D3.js', 'WebSocket'],
      results: ['Real-time insights', 'Automated reports', 'Custom dashboards'],
      image: Globe,
    },
    {
      id: 4,
      title: 'Marketing Automation System',
      category: 'Marketing',
      description: 'Multi-channel marketing automation with email, social media, and paid ads integration.',
      tags: ['HubSpot', 'Facebook Ads', 'Google Ads'],
      results: ['300% ROI', '50% lower CPA', '3x more leads'],
      image: TrendingUp,
    },
    {
      id: 5,
      title: 'Content Generation Platform',
      category: 'AI Content',
      description: 'AI-powered content generation for blogs, social media, and marketing materials.',
      tags: ['GPT-4', 'LangChain', 'Vector DB'],
      results: ['10x faster production', '80% cost reduction', '500+ pieces/month'],
      image: FileText,
    },
    {
      id: 6,
      title: 'Inventory Management System',
      category: 'AI Automation',
      description: 'Smart inventory management with demand forecasting and automated reordering.',
      tags: ['Python', 'TensorFlow', 'PostgreSQL'],
      results: ['95% accuracy forecasting', '30% less waste', 'Automated reordering'],
      image: Database,
    },
  ];

  return (
    <main className="flex-1">
      {/* Hero */}
      <Section className="min-h-screen pt-20 flex items-center">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-block px-4 py-2 glass rounded-full text-sm text-cyan-400 mb-6">
              Our Work
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white font-heading leading-tight mb-6">
              Projects That{' '}
              <span className="gradient-text">Deliver</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8">
              Real systems we've built that drive real results for our clients.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Projects Grid */}
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
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Click on any project to see detailed results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  className="cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="w-full h-40 sm:h-48 mb-3 sm:mb-4 rounded-xl bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-violet-500/20 flex items-center justify-center">
                    <project.image size={48} className="text-blue-400" />
                  </div>
                  <div className="mb-2 sm:mb-3">
                    <span className="px-2 sm:px-3 py-1 text-xs bg-white/10 rounded-full text-gray-300">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-heading mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-blue-500/20 rounded-full text-blue-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Project Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
      >
        {selectedProject && (
          <div className="space-y-4 sm:space-y-6">
            <div className="w-full h-48 sm:h-64 rounded-xl bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-violet-500/20 flex items-center justify-center">
              <selectedProject.image size={64} className="text-blue-400" />
            </div>
            
            <div>
              <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-white/10 rounded-full text-gray-300">
                {selectedProject.category}
              </span>
            </div>

            <p className="text-gray-300 text-sm sm:text-base">{selectedProject.description}</p>

            <div>
              <h4 className="text-base sm:text-lg font-bold text-white font-heading mb-2 sm:mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-blue-500/20 rounded-full text-blue-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-bold text-white font-heading mb-2 sm:mb-3">Results</h4>
              <ul className="space-y-2">
                {selectedProject.results.map((result: string, index: number) => (
                  <li key={index} className="flex items-center gap-2 sm:gap-3 text-gray-300 text-sm sm:text-base">
                    <ArrowRight size={16} className="text-green-400" />
                    {result}
                  </li>
                ))}
              </ul>
            </div>

            <Link href="/contact" className="w-full">
              <Button className="w-full">
                View Live Demo
                <ExternalLink className="ml-2" size={16} />
              </Button>
            </Link>
          </div>
        )}
      </Modal>
    </main>
  );
}

// Import icons at the top
import { TrendingUp, FileText, Database } from 'lucide-react';
