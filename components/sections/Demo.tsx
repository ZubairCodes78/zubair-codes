'use client';

import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Users, Activity } from 'lucide-react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';

export default function Demo() {
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
            See It In <span className="gradient-text">Action</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            A glimpse of what our systems can do for your business.
          </p>
        </motion.div>

        <Card className="p-4 sm:p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Dashboard Mockup */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-white font-heading">Dashboard</h3>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="glass rounded-lg p-3 sm:p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp size={16} className="text-green-400" />
                    <span className="text-xs sm:text-sm text-gray-400">Revenue</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-white">$124,500</div>
                  <div className="text-xs text-green-400">+23% this month</div>
                </div>
                <div className="glass rounded-lg p-3 sm:p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Users size={16} className="text-blue-400" />
                    <span className="text-xs sm:text-sm text-gray-400">Users</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-white">8,432</div>
                  <div className="text-xs text-blue-400">+12% this month</div>
                </div>
              </div>

              {/* Chart Placeholder */}
              <div className="glass rounded-lg p-3 sm:p-4 h-40 sm:h-48">
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <BarChart3 size={16} className="text-violet-400" />
                  <span className="text-xs sm:text-sm text-gray-400">Analytics</span>
                </div>
                <div className="flex items-end justify-between h-28 sm:h-32 gap-1 sm:gap-2">
                  {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="flex-1 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-t"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Activity Feed */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-white font-heading mb-3 sm:mb-4">Live Activity</h3>
              {[
                { icon: Activity, text: 'New order processed', time: '2 min ago' },
                { icon: Users, text: 'User onboarded', time: '5 min ago' },
                { icon: TrendingUp, text: 'Revenue milestone reached', time: '15 min ago' },
                { icon: BarChart3, text: 'Report generated', time: '30 min ago' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass rounded-lg p-3 sm:p-4 flex items-center gap-3 sm:gap-4"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center">
                    <item.icon size={20} className="text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white text-sm sm:text-base font-medium">{item.text}</div>
                    <div className="text-xs sm:text-sm text-gray-400">{item.time}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Card>
      </Container>
    </Section>
  );
}
