'use client';

import { motion } from 'framer-motion';
import { Video, FileText, Image, BarChart, ArrowRight, Sparkles, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import CTA from '@/components/sections/CTA';

export default function AIContent() {
  const pipeline = [
    { step: '1', title: 'Research', description: 'AI analyzes your brand, audience, and content goals.' },
    { step: '2', title: 'Generate', description: 'AI creates content drafts optimized for your platforms.' },
    { step: '3', title: 'Review', description: 'Human review ensures quality and brand alignment.' },
    { step: '4', title: 'Publish', description: 'Automated publishing to all your channels.' },
  ];

  const examples = [
    {
      icon: FileText,
      title: 'Blog Posts',
      description: 'SEO-optimized articles that drive organic traffic.',
    },
    {
      icon: Video,
      title: 'Video Scripts',
      description: 'Engaging scripts for YouTube and social media.',
    },
    {
      icon: Image,
      title: 'Social Media',
      description: 'Platform-specific content for maximum engagement.',
    },
  ];

  const metrics = [
    { metric: '10x', label: 'Faster Production' },
    { metric: '80%', label: 'Cost Reduction' },
    { metric: '500+', label: 'Pieces/Month' },
    { metric: '95%', label: 'Quality Score' },
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
              AI Content System
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white font-heading leading-tight mb-6">
              Scale Content with{' '}
              <span className="gradient-text">AI</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8">
              Produce high-quality content at scale with AI-powered creation tools that maintain your brand voice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Creating
                  <ArrowRight size={16} />
                </Button>
              </Link>
              <a href="#examples" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  View Examples
                </Button>
              </a>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Pipeline */}
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
              Content <span className="gradient-text">Pipeline</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              A streamlined process from idea to published content.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {pipeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="glass rounded-2xl p-3 sm:p-4 md:p-6 text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-4 rounded-full bg-gradient-to-br from-blue-500 via-cyan-500 to-violet-500 flex items-center justify-center text-white font-bold text-lg sm:text-xl">
                    {item.step}
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-white font-heading mb-1 sm:mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Examples */}
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
              Content <span className="gradient-text">Types</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              AI-powered content for every platform and purpose.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {examples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 mb-3 sm:mb-4 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-500 to-violet-500 flex items-center justify-center">
                    <example.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-heading mb-2 sm:mb-3">
                    {example.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base">{example.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Metrics */}
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
              Performance <span className="gradient-text">Metrics</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Real results from our AI content systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="glass rounded-2xl p-3 sm:p-4 md:p-8 text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text font-heading mb-1 sm:mb-2">
                    {metric.metric}
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm">{metric.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Content Examples Section */}
      <Section id="examples">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-heading mb-4">
              Content <span className="gradient-text">Examples</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              See what our AI content systems can create for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                type: 'Blog Post',
                title: '10 Ways AI is Transforming Small Businesses',
                excerpt: 'Discover how artificial intelligence is revolutionizing operations, customer service, and growth strategies for small businesses across every industry.',
                views: '12.5K',
                engagement: '8.2%',
                icon: FileText,
              },
              {
                type: 'Social Media Campaign',
                title: 'Summer Product Launch Campaign',
                excerpt: 'A complete 30-day social media strategy including Instagram, LinkedIn, and Twitter content calendars designed to maximize product awareness and drive conversions.',
                views: '45.2K',
                engagement: '12.7%',
                icon: Video,
              },
              {
                type: 'Email Sequence',
                title: 'Welcome & Onboarding Email Series',
                excerpt: 'A 5-email onboarding sequence that nurtures new subscribers, introduces key product features, and drives activation rates by 340%.',
                views: '8.9K opens',
                engagement: '23.4% CTR',
                icon: MessageSquare,
              },
            ].map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-blue-500 via-cyan-500 to-violet-500 flex items-center justify-center">
                      <example.icon size={20} className="text-white" />
                    </div>
                    <span className="text-xs font-medium text-cyan-400">{example.type}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-heading mb-2 sm:mb-3 line-clamp-2">
                    {example.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3">
                    {example.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <BarChart size={14} className="text-blue-400" />
                      <span className="text-xs text-gray-400">{example.views}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sparkles size={14} className="text-violet-400" />
                      <span className="text-xs text-gray-400">{example.engagement}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <CTA />
    </main>
  );
}
