'use client';

import { motion } from 'framer-motion';
import { Cpu, Lightbulb, TrendingUp } from 'lucide-react';
import Container from '@/components/ui/Container';

export default function About() {
  const team = [
    {
      name: 'Zubair',
      role: 'Founder and Web Dev + Ai Expert',
      bio: 'Passionate about AI systems and automation, building the future of digital business.',
      color: 'from-blue-500 via-cyan-500 to-violet-500',
      initial: 'Z',
    },
    {
      name: 'Hashir',
      role: 'Co-Founder and Creative Strategist',
      bio: 'The creative force behind every system, turning ideas into intelligent solutions.',
      color: 'from-purple-500 via-pink-500 to-red-500',
      initial: 'H',
    },
  ];

  const values = [
    {
      icon: Cpu,
      title: 'Systems Over Services',
      description: 'We build intelligent systems that work 24/7, not one-off services that require constant attention.',
    },
    {
      icon: Lightbulb,
      title: 'Intelligence First',
      description: 'Every solution we create leverages AI and automation to deliver smarter, more efficient outcomes.',
    },
    {
      icon: TrendingUp,
      title: 'Results That Matter',
      description: 'We measure success by real business impact - increased revenue, saved time, and scalable growth.',
    },
  ];

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="min-h-screen pt-20 flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-violet-500/10" />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white font-heading leading-tight mb-6">
              The Minds Behind{' '}
              <span className="gradient-text">Zubair Codes</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              We're building intelligent systems that transform how businesses operate in the digital age.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Who We Are Section */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading mb-6">
                Who We Are
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-400 text-sm sm:text-base">
                <p>
                  Zubair Codes is an AI systems agency founded by two passionate builders who believe businesses deserve smarter digital infrastructure, not just pretty websites.
                </p>
                <p>
                  We don't build websites — we build systems. Systems that capture leads automatically, nurture prospects while you sleep, and scale your operations without adding headcount.
                </p>
                <p>
                  Our mission is to democratize AI-powered automation for businesses of all sizes, giving you the same competitive advantages that enterprise companies have been enjoying for years.
                </p>
              </div>
            </motion.div>

            {/* Right Team Cards */}
            <div className="space-y-6">
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  className="glass rounded-2xl p-4 sm:p-6"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <span className="text-xl sm:text-2xl font-bold text-white">{member.initial}</span>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white font-heading mb-1">{member.name}</h3>
                      <p className="text-blue-400 text-xs sm:text-sm font-medium mb-1 sm:mb-2">{member.role}</p>
                      <p className="text-gray-400 text-xs sm:text-sm">{member.bio}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black/50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading mb-4">
              Our Core <span className="gradient-text">Values</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              The principles that guide every system we build and every client we serve.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="glass rounded-2xl p-4 sm:p-6 md:p-8 text-center"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-xl bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-violet-500/20 flex items-center justify-center">
                  <value.icon size={32} className="text-blue-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white font-heading mb-2 sm:mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
