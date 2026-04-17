'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Circle } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

export default function Hero() {
  const [leadCount, setLeadCount] = useState(47);

  useEffect(() => {
    const interval = setInterval(() => {
      setLeadCount(prev => prev + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const pipelineEntries = [
    { company: 'TechCorp Inc', value: '$12,500', status: 'green' },
    { company: 'DataFlow Systems', value: '$8,200', status: 'blue' },
    { company: 'CloudBase AI', value: '$15,800', status: 'purple' },
  ];

  const barHeights = [60, 45, 80, 55, 70, 40, 65];

  return (
    <section className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-violet-500/10" />
      
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-heading leading-tight mb-6">
              Building{' '}
              <span className="gradient-text">Systems</span>
              <br />
              Not Services.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 max-w-lg">
              Transform your business with AI-powered systems, web development, and marketing automation that work 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Building
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

          {/* Right Floating Dashboard Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              y: [0, -12, 0],
            }}
            transition={{ 
              opacity: { duration: 0.8, delay: 0.2 },
              x: { duration: 0.8, delay: 0.2 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
            className="relative"
          >
            {/* Soft Blue Glow Behind */}
            <div 
              className="absolute inset-0 blur-3xl opacity-40"
              style={{
                background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)',
              }}
            />

            {/* Dashboard Card */}
            <div 
              className="relative glass rounded-2xl p-4 sm:p-6"
              style={{
                width: '100%',
                maxWidth: '480px',
                boxShadow: '0 0 40px rgba(59, 130, 246, 0.2)',
                border: '1px solid rgba(59, 130, 246, 0.3)',
              }}
            >
              {/* Top Bar */}
              <div className="flex items-center gap-3 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-white/10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs text-gray-400 font-mono">ZC System — Live</span>
              </div>

              {/* Leads Section */}
              <div className="mb-4 sm:mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs sm:text-sm text-gray-400">Leads Captured Today</span>
                  <div className="flex items-center gap-2">
                    <motion.div
                      className="w-2 h-2 rounded-full bg-green-500"
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0.7, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <span className="text-xs text-green-400 font-medium">Active</span>
                  </div>
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white font-heading">{leadCount}</div>
              </div>

              {/* Bar Chart */}
              <div className="mb-4 sm:mb-6">
                <div className="flex items-end gap-1 sm:gap-2 h-16 sm:h-20">
                  {barHeights.map((height, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 bg-blue-500/30 rounded-t"
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                      style={{ minHeight: '8px' }}
                    />
                  ))}
                </div>
              </div>

              {/* Pipeline Entries */}
              <div className="space-y-2 sm:space-y-3">
                {pipelineEntries.map((entry, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center justify-between p-2 sm:p-3 rounded-lg bg-white/5"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 1 + i * 0.15 }}
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div 
                        className={`w-2 h-2 rounded-full ${
                          entry.status === 'green' ? 'bg-green-500' :
                          entry.status === 'blue' ? 'bg-blue-500' :
                          'bg-purple-500'
                        }`}
                      />
                      <span className="text-xs sm:text-sm text-white truncate">{entry.company}</span>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-400 font-mono">{entry.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
