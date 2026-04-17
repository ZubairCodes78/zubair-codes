'use client';

import { motion } from 'framer-motion';
import { Bot, MessageSquare, Zap, CheckCircle, Clock, TrendingUp, ArrowRight, Database } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import CTA from '@/components/sections/CTA';

export default function Automation() {
  const features = [
    {
      icon: MessageSquare,
      title: 'AI Chatbots',
      description: '24/7 intelligent customer support that converts visitors into leads instantly.',
    },
    {
      icon: Bot,
      title: 'Process Automation',
      description: 'Automate repetitive tasks and workflows to free up your team for strategic work.',
    },
    {
      icon: Zap,
      title: 'Smart Workflows',
      description: 'Intelligent systems that learn and adapt to your business processes.',
    },
  ];

  const process = [
    { step: '1', title: 'Discovery', description: 'We analyze your current processes and identify automation opportunities.' },
    { step: '2', title: 'Design', description: 'We design custom automation workflows tailored to your needs.' },
    { step: '3', title: 'Build', description: 'We build and integrate automation systems with your existing tools.' },
    { step: '4', title: 'Optimize', description: 'We continuously monitor and optimize for maximum efficiency.' },
  ];

  const results = [
    { metric: '80%', label: 'Time Saved' },
    { metric: '60%', label: 'Cost Reduction' },
    { metric: '24/7', label: 'Availability' },
    { metric: '99%', label: 'Accuracy' },
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
              AI Automation System
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white font-heading leading-tight mb-6">
              Replace Manual Work with{' '}
              <span className="gradient-text">AI</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8">
              Build intelligent automation systems that work 24/7, handle complex tasks, and scale with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started
                  <ArrowRight size={16} />
                </Button>
              </Link>
              <a href="#demo" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  View Demo
                </Button>
              </a>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Features */}
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
              Powerful <span className="gradient-text">Features</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Everything you need to automate your business operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 mb-3 sm:mb-4 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-500 to-violet-500 flex items-center justify-center">
                    <feature.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-heading mb-2 sm:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process */}
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
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              A proven methodology for successful automation implementation.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {process.map((item, index) => (
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

      {/* Results */}
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
              Proven <span className="gradient-text">Results</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Measurable impact from our automation systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="glass rounded-2xl p-3 sm:p-4 md:p-8 text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text font-heading mb-1 sm:mb-2">
                    {result.metric}
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm">{result.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Demo Section */}
      <Section id="demo">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-heading mb-4">
              See Automation in <span className="gradient-text">Action</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Watch how our automation systems work in real-time.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {[
                { step: '1', title: 'Lead Captured', status: 'completed', icon: CheckCircle },
                { step: '2', title: 'AI Qualifier Running', status: 'processing', icon: Bot },
                { step: '3', title: 'CRM Updated', status: 'pending', icon: Database },
                { step: '4', title: 'Email Sent', status: 'pending', icon: MessageSquare },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="glass rounded-2xl p-3 sm:p-4 md:p-6 flex items-center gap-3 sm:gap-4 md:gap-6"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 via-cyan-500 to-violet-500 flex items-center justify-center flex-shrink-0">
                    <item.icon size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-white font-heading mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">Step {item.step} of the automation workflow</p>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    {item.status === 'completed' && (
                      <motion.div
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm font-medium"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <motion.div
                          className="w-2 h-2 rounded-full bg-green-500"
                          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.7, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        Completed
                      </motion.div>
                    )}
                    {item.status === 'processing' && (
                      <motion.div
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <motion.div
                          className="w-2 h-2 rounded-full bg-blue-500"
                          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.7, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        Processing...
                      </motion.div>
                    )}
                    {item.status === 'pending' && (
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-500/20 text-gray-400 text-sm font-medium">
                        <Clock size={16} />
                        Pending
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <CTA />
    </main>
  );
}
