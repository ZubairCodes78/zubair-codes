'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      company: 'TechStart Inc',
      role: 'CEO',
      rating: 5,
      content: 'Zubair Codes transformed our entire customer support system. We went from 24-hour response times to instant AI responses that handle 80% of queries.',
      avatar: 'SC',
    },
    {
      name: 'Michael Roberts',
      company: 'E-Commerce Plus',
      role: 'Operations Director',
      rating: 5,
      content: 'The automation systems they built saved us 40 hours per week. Our team can now focus on strategy instead of repetitive tasks.',
      avatar: 'MR',
    },
    {
      name: 'John Davis',
      company: 'Growth Agency',
      role: 'Marketing Lead',
      rating: 5,
      content: 'Our marketing automation increased qualified leads by 300%. The ROI was visible within the first month of implementation.',
      avatar: 'ED',
    },
  ];

  return (
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
            What Clients <span className="gradient-text">Say</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Real results from businesses that trusted us with their systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card>
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">{testimonial.content}</p>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 via-cyan-500 to-violet-500 flex items-center justify-center text-white text-sm sm:text-base font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white text-sm sm:text-base font-medium">{testimonial.name}</div>
                    <div className="text-xs sm:text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
