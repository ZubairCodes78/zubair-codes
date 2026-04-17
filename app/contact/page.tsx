'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Select from '@/components/ui/Select';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    systemNeeded: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        businessType: '',
        systemNeeded: '',
        budget: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

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
              Get In Touch
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white font-heading leading-tight mb-6">
              Let's Build Your{' '}
              <span className="gradient-text">System</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8">
              Ready to transform your business with intelligent systems? Let's discuss your project.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Contact Form */}
      <Section className="bg-black/50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading mb-6 sm:mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-3 sm:space-y-4 mb-6">
                {/* WhatsApp Card */}
                <div className="glass rounded-2xl p-4 sm:p-5 border border-green-500/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                      <FaWhatsapp size={20} className="text-green-400" />
                    </div>
                    <h3 className="text-white font-semibold">WhatsApp</h3>
                  </div>
                  <p className="text-white font-bold text-base sm:text-lg mb-3">+92 316 7697273</p>
                  <a
                    href="https://wa.me/923167697273"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-xs sm:text-sm font-medium hover:bg-green-500/30 hover:scale-105 transition-all duration-300"
                  >
                    <FaWhatsapp size={16} />
                    Chat on WhatsApp
                  </a>
                </div>

                {/* Email Card */}
                <div className="glass rounded-2xl p-4 sm:p-5 border border-blue-500/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <Mail size={20} className="text-blue-400" />
                    </div>
                    <h3 className="text-white font-semibold">Email</h3>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base">hello@zubair.codes</p>
                </div>

                {/* Location Card */}
                <div className="glass rounded-2xl p-4 sm:p-5 border border-white/10">
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-xl sm:text-2xl">🇵🇰</span>
                      <span className="text-white text-sm sm:text-base font-medium">Pakistan</span>
                      <span className="text-gray-400 text-xs sm:text-sm ml-auto">+92 316 7697273</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-xl sm:text-2xl">🇺🇸</span>
                      <span className="text-white text-sm sm:text-base font-medium">USA</span>
                      <span className="text-gray-500 italic text-xs sm:text-sm ml-auto">Coming Soon</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-2">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-green-500"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.7, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <h3 className="text-white text-sm sm:text-base font-medium">Response time: within 2 hours</h3>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">
                  We typically respond within 2 hours. For urgent matters, please WhatsApp us directly.
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {isSubmitted ? (
                <div className="glass rounded-2xl p-6 sm:p-8 text-center">
                  <CheckCircle size={64} className="text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base">
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass rounded-2xl p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <Input
                      name="name"
                      label="Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                    <Input
                      name="email"
                      label="Email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <Input
                    name="phone"
                    label="Phone (Optional)"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <Select
                      name="businessType"
                      value={formData.businessType}
                      onChange={(value) => handleSelectChange('businessType', value)}
                      label="Business Type"
                      required
                      placeholder="Select type"
                      options={[
                        { value: 'startup', label: 'Startup' },
                        { value: 'small-business', label: 'Small Business' },
                        { value: 'enterprise', label: 'Enterprise' },
                        { value: 'agency', label: 'Agency' },
                      ]}
                    />
                    
                    <Select
                      name="budget"
                      value={formData.budget}
                      onChange={(value) => handleSelectChange('budget', value)}
                      label="Budget Range"
                      required
                      placeholder="Select budget"
                      options={[
                        { value: '5k-10k', label: '$5,000 - $10,000' },
                        { value: '10k-25k', label: '$10,000 - $25,000' },
                        { value: '25k-50k', label: '$25,000 - $50,000' },
                        { value: '50k+', label: '$50,000+' },
                      ]}
                    />
                  </div>
                  
                  <Select
                    name="systemNeeded"
                    value={formData.systemNeeded}
                    onChange={(value) => handleSelectChange('systemNeeded', value)}
                    label="System Needed"
                    required
                    placeholder="Select system"
                    options={[
                      { value: 'automation', label: 'AI Automation' },
                      { value: 'web-development', label: 'Web Development' },
                      { value: 'ai-content', label: 'AI Content' },
                      { value: 'marketing', label: 'Marketing Automation' },
                      { value: 'custom', label: 'Custom Solution' },
                    ]}
                  />
                  
                  <Textarea
                    name="message"
                    label="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project and goals..."
                  />
                  
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2" size={20} />
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
