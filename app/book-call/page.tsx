'use client';

import { motion } from 'framer-motion';
import { Calendar, CheckCircle, ArrowRight, Clock, Target, Zap } from 'lucide-react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

export default function Booking() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <Section className="min-h-screen pt-20 flex items-center relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-violet-500/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block px-4 py-2 glass rounded-full text-sm text-blue-400 mb-6">
              Free Strategy Call
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-heading leading-tight mb-6">
              Book a Free 15 Min{' '}
              <span className="gradient-text">Strategy Call</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's understand your business and design a system that helps you grow faster.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <Button
                size="lg"
                className="group"
                onClick={() => document.getElementById('calendly')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Your Call Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Why Book This Call */}
      <Section className="bg-black/50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-heading mb-4">
              Why Book This Call?
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              Get clarity on how to transform your business with intelligent systems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Target,
                title: 'Understand Your Business',
                description: 'We analyze your current setup and identify what\'s working and what needs improvement.',
              },
              {
                icon: Zap,
                title: 'Identify Opportunities',
                description: 'Discover automation and growth opportunities specific to your industry.',
              },
              {
                icon: CheckCircle,
                title: 'Get Action Plan',
                description: 'Receive a clear roadmap with actionable steps to implement the right systems.',
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="glass rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center mb-4">
                    <benefit.icon size={28} className="text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white font-heading mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* What Happens on the Call */}
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-heading mb-4">
              What Happens on the Call
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              A structured 15-minute conversation to move you forward
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                step: '01',
                title: 'Quick Introduction',
                description: 'We start with a brief intro to understand who you are and what you do.',
              },
              {
                step: '02',
                title: 'Understanding Your Business',
                description: 'We dive deep into your current processes, challenges, and goals.',
              },
              {
                step: '03',
                title: 'Identifying Problems',
                description: 'We pinpoint the exact bottlenecks slowing down your growth.',
              },
              {
                step: '04',
                title: 'Suggesting the Right System',
                description: 'We recommend a tailored solution that fits your needs and budget.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-6"
              >
                <div className="glass rounded-2xl p-6 border border-white/10 flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white font-heading mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Trust Section */}
      <Section className="bg-black/50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="glass rounded-3xl p-8 sm:p-12 border border-white/10">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={32} className="text-blue-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-heading mb-4">
                We Focus on Real Systems
              </h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
                Not just design. We build intelligent automation systems that actually work and deliver measurable results for your business.
              </p>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Calendly Embed */}
      <Section id="calendly">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-8"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-heading mb-4">
              Choose Your Time
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              Select a time that works best for you
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="glass rounded-2xl p-4 sm:p-6 border border-white/10">
              <iframe
                src="https://calendly.com/zatechnicalzubair/free-15-min-strategy-call"
                width="100%"
                height="700"
                frameBorder="0"
                title="Book a Free 15 Min Strategy Call"
                className="rounded-xl"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="bg-black/50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-heading mb-4">
              Ready to Build a System That Actually Works?
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mb-8">
              Book your free strategy call and let's create something amazing together.
            </p>
            <div className="flex justify-center">
              <Button
                size="lg"
                className="group"
                onClick={() => document.getElementById('calendly')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Free Strategy Call
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}
