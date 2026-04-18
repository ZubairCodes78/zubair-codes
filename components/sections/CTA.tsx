'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export default function CTA() {
  return (
    <Section className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-violet-500/20" />
      
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white font-heading mb-4 sm:mb-6">
            Ready to Build Your{' '}
            <span className="gradient-text">System?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let's discuss how we can transform your business with intelligent automation and custom systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-call">
              <Button size="lg" className="glow w-full sm:w-auto hover:scale-105 transition-transform">
                Book Free 15 Min Consultation
                <ArrowRight size={16} />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                View Our Work
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
