'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  const stats = [
    { value: 150, label: 'Systems Built', suffix: '+' },
    { value: 50, label: 'Happy Clients', suffix: '+' },
    { value: 95, label: 'Efficiency Gain', suffix: '%' },
    { value: 24, label: 'Hours Saved', suffix: '/day' },
  ];

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        let current = 0;
        const increment = stat.value / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(timer);
          }
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(current);
            return newCounts;
          });
        }, 30);
      });
    }
  }, [isInView]);

  return (
    <Section className="bg-black/50">
      <Container>
        <motion.div
          ref={ref}
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
            Real numbers from real systems we've built and deployed.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="glass rounded-2xl p-4 sm:p-6 md:p-8 text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text font-heading mb-2">
                  {counts[index]}{stat.suffix}
                </div>
                <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
