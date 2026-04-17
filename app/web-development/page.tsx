'use client';

import { motion } from 'framer-motion';
import { Code, Database, Layout, Zap, ArrowRight, Globe, Smartphone } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import CTA from '@/components/sections/CTA';

export default function WebDevelopment() {
  const techStack = [
    { name: 'Next.js', icon: '⚛️' },
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'PostgreSQL', icon: '🐘' },
  ];

  const portfolio = [
    {
      title: 'SaaS Platform',
      description: 'Full-stack subscription management platform with billing and analytics.',
      tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    },
    {
      title: 'E-Commerce Site',
      description: 'High-conversion online store with inventory and payment processing.',
      tags: ['React', 'Shopify', 'Node.js'],
    },
    {
      title: 'Dashboard App',
      description: 'Real-time analytics dashboard with data visualization.',
      tags: ['TypeScript', 'D3.js', 'WebSocket'],
    },
  ];

  const packages = [
    {
      name: 'Starter',
      price: '$5,000',
      features: ['Landing Page', 'Contact Form', 'Basic SEO', '1 Week Delivery'],
    },
    {
      name: 'Business',
      price: '$15,000',
      features: ['Full Website', 'CMS Integration', 'Advanced SEO', '2 Weeks Delivery'],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$30,000',
      features: ['Custom Web App', 'Database Design', 'API Integration', '4 Weeks Delivery'],
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
              Web Development
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white font-heading leading-tight mb-6">
              High-Performance{' '}
              <span className="gradient-text">Web Apps</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8">
              Build scalable, fast, and beautiful web applications that convert visitors into customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Project
                  <ArrowRight size={16} />
                </Button>
              </Link>
              <Link href="/portfolio" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  View Portfolio
                </Button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Tech Stack */}
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
              Our <span className="gradient-text">Tech Stack</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Modern technologies for building future-proof applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="glass rounded-2xl p-3 sm:p-4 md:p-6 text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3">{tech.icon}</div>
                  <div className="text-white text-xs sm:text-sm md:text-base font-medium">{tech.name}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Portfolio */}
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
              Recent <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Web applications we've built and deployed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {portfolio.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <div className="w-full h-40 sm:h-48 mb-3 sm:mb-4 rounded-xl bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-violet-500/20 flex items-center justify-center">
                    <Globe size={48} className="text-blue-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-heading mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs bg-white/10 rounded-full text-gray-300"
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

      {/* Packages */}
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
              Pricing <span className="gradient-text">Packages</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Transparent pricing for projects of all sizes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`${pkg.popular ? 'border-2 border-blue-500' : ''}`}>
                  {pkg.popular && (
                    <div className="text-center mb-3 sm:mb-4">
                      <span className="px-3 sm:px-4 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-xs sm:text-sm text-white font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mb-2">
                    {pkg.name}
                  </h3>
                  <div className="text-3xl sm:text-4xl font-bold gradient-text font-heading mb-4 sm:mb-6">
                    {pkg.price}
                  </div>
                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 sm:gap-3 text-gray-300 text-sm sm:text-base">
                        <Zap size={16} className="text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="w-full">
                    <Button className="w-full" variant={pkg.popular ? 'primary' : 'secondary'}>
                      Get Started
                    </Button>
                  </Link>
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
