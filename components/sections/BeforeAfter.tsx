'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';

export default function BeforeAfter() {
  const [showAfter, setShowAfter] = useState(false);

  return (
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
            Before & <span className="gradient-text">After</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            See the transformation our systems bring to businesses.
          </p>
        </motion.div>

        <div className="flex justify-center mb-6 sm:mb-8">
          <button
            onClick={() => setShowAfter(!showAfter)}
            className="px-4 sm:px-6 py-2 sm:py-3 glass rounded-full text-white text-sm sm:text-base font-medium hover:scale-105 transition-transform"
          >
            {showAfter ? 'Show Before' : 'Show After'}
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={showAfter ? 'after' : 'before'}
            initial={{ opacity: 0, x: showAfter ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: showAfter ? 50 : -50 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-4 sm:p-6 md:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
                {showAfter ? (
                  <>
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl font-bold text-green-400 font-heading mb-2">80%</div>
                      <div className="text-gray-400 text-sm sm:text-base">Faster Response Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl font-bold text-green-400 font-heading mb-2">60%</div>
                      <div className="text-gray-400 text-sm sm:text-base">Cost Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl font-bold text-green-400 font-heading mb-2">24/7</div>
                      <div className="text-gray-400 text-sm sm:text-base">System Availability</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl font-bold text-red-400 font-heading mb-2">2-3 days</div>
                      <div className="text-gray-400 text-sm sm:text-base">Response Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl font-bold text-red-400 font-heading mb-2">High</div>
                      <div className="text-gray-400 text-sm sm:text-base">Operational Costs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl font-bold text-red-400 font-heading mb-2">9-5</div>
                      <div className="text-gray-400 text-sm sm:text-base">Business Hours Only</div>
                    </div>
                  </>
                )}
              </div>

              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-black/30 rounded-xl">
                <h4 className="text-lg sm:text-xl font-bold text-white font-heading mb-3 sm:mb-4">
                  {showAfter ? 'With Zubair Codes Systems' : 'Traditional Approach'}
                </h4>
                <p className="text-gray-400 text-sm sm:text-base">
                  {showAfter
                    ? 'Our AI-powered systems automate repetitive tasks, provide instant responses, and operate around the clock, giving your business a competitive edge.'
                    : 'Manual processes, slow response times, and limited availability lead to missed opportunities and frustrated customers.'}
                </p>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </Container>
    </Section>
  );
}
