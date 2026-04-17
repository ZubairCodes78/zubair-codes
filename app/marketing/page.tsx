'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Target, Megaphone, BarChart, ArrowRight, Users } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import CTA from '@/components/sections/CTA';

export default function Marketing() {
  const funnel = [
    { step: '1', title: 'Awareness', description: 'Multi-channel campaigns to reach your target audience.' },
    { step: '2', title: 'Interest', description: 'Engaging content that captures attention.' },
    { step: '3', title: 'Consideration', description: 'Nurture campaigns that build trust.' },
    { step: '4', title: 'Conversion', description: 'Optimized funnels that drive action.' },
  ];

  const channels = [
    {
      icon: Megaphone,
      title: 'Social Media',
      description: 'Automated posting and engagement across all platforms.',
    },
    {
      icon: Target,
      title: 'Email Marketing',
      description: 'Personalized campaigns that convert subscribers.',
    },
    {
      icon: TrendingUp,
      title: 'Paid Ads',
      description: 'Data-driven campaigns with real-time optimization.',
    },
  ];

  const roi = [
    { metric: '300%', label: 'Average ROI' },
    { metric: '50%', label: 'Lower CPA' },
    { metric: '3x', label: 'More Leads' },
    { metric: '24/7', label: 'Automation' },
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
              Growth & Marketing
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white font-heading leading-tight mb-6">
              Scale Growth with{' '}
              <span className="gradient-text">Automation</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8">
              Build automated marketing systems that generate leads, nurture prospects, and drive conversions 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Growing
                  <ArrowRight size={16} />
                </Button>
              </Link>
              <a href="#case-studies" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  View Case Studies
                </Button>
              </a>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Funnel */}
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
              Conversion <span className="gradient-text">Funnel</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              A systematic approach to turn strangers into customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {funnel.map((item, index) => (
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

      {/* Channels */}
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
              Marketing <span className="gradient-text">Channels</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Multi-channel automation for maximum reach.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {channels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 mb-3 sm:mb-4 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-500 to-violet-500 flex items-center justify-center">
                    <channel.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-heading mb-2 sm:mb-3">
                    {channel.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base">{channel.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ROI */}
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
              Proven <span className="gradient-text">ROI</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Measurable returns from our marketing systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {roi.map((metric, index) => (
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

      {/* Case Studies Section */}
      <Section id="case-studies">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-heading mb-4">
              Marketing <span className="gradient-text">Case Studies</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Real results from our marketing automation systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                industry: 'E-Commerce',
                problem: 'Low conversion rates and high customer acquisition costs',
                solution: 'Implemented automated email sequences and social media retargeting campaigns',
                leads: '2,450',
                conversion: '340%',
                icon: TrendingUp,
              },
              {
                industry: 'SaaS',
                problem: 'Long sales cycles and poor lead nurturing',
                solution: 'Built automated funnel with personalized content and lead scoring',
                leads: '1,890',
                conversion: '280%',
                icon: Target,
              },
              {
                industry: 'Professional Services',
                problem: 'Inconsistent lead generation and manual follow-up processes',
                solution: 'Created automated marketing workflows and CRM integration',
                leads: '1,230',
                conversion: '420%',
                icon: Users,
              },
            ].map((study, index) => (
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
                      <study.icon size={20} className="text-white" />
                    </div>
                    <span className="text-xs font-medium text-cyan-400">{study.industry}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-heading mb-2 sm:mb-3">Challenge</h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">{study.problem}</p>
                  <h3 className="text-base sm:text-lg font-bold text-white font-heading mb-2 sm:mb-3">Solution</h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">{study.solution}</p>
                  <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <BarChart size={14} className="text-blue-400" />
                      <span className="text-xs text-gray-400">{study.leads} leads</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp size={14} className="text-green-400" />
                      <span className="text-xs text-gray-400">{study.conversion} conv.</span>
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
