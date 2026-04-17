'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Bot, Layout, Sparkles, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [highlightStyle, setHighlightStyle] = useState<{ left: number; width: number } | null>(null);
  const pathname = usePathname();
  const navRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Solutions', href: '#', isDropdown: true },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  const solutions = [
    {
      name: 'Automation Systems',
      description: 'Intelligent automation that works 24/7',
      href: '/automation',
      icon: Bot,
    },
    {
      name: 'Web Development',
      description: 'High-performance, scalable web applications',
      href: '/web-development',
      icon: Layout,
    },
    {
      name: 'AI Content',
      description: 'Scale content production with AI',
      href: '/ai-content',
      icon: Sparkles,
    },
    {
      name: 'Marketing Systems',
      description: 'Automated funnels that convert',
      href: '/marketing',
      icon: TrendingUp,
    },
  ];

  const activeIndex = navLinks.findIndex(link => {
    if (link.isDropdown) {
      return solutions.some(s => s.href === pathname) ? 1 : -1;
    }
    return link.href === pathname ? navLinks.indexOf(link) : -1;
  });

  useEffect(() => {
    const updateHighlight = (index: number) => {
      const navItem = navRefs.current[index];
      const container = containerRef.current;
      if (navItem && container) {
        const containerRect = container.getBoundingClientRect();
        const navItemRect = navItem.getBoundingClientRect();
        setHighlightStyle({
          left: navItemRect.left - containerRect.left,
          width: navItemRect.width,
        });
      }
    };

    if (isNavHovered && hoveredIndex !== null && hoveredIndex !== -1) {
      updateHighlight(hoveredIndex);
    } else {
      setHighlightStyle(null);
    }
  }, [hoveredIndex, isNavHovered]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/80 backdrop-blur-lg border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Mobile */}
            <Link href="/" className="md:hidden">
              <Image
                src="/logo2.png"
                alt="Zubair Codes Logo"
                width={120}
                height={32}
                style={{ background: 'transparent' }}
              />
            </Link>
            
            {/* Logo - Desktop */}
            <Link href="/" className="hidden md:block">
              <Image
                src="/logo.png"
                alt="Zubair Codes Logo"
                width={140}
                height={35}
                style={{ background: 'transparent' }}
              />
            </Link>

            {/* Desktop Navigation - Dynamic Pill Style */}
            <div 
              className="hidden md:flex items-center justify-center flex-1"
              onMouseEnter={() => setIsNavHovered(true)}
              onMouseLeave={() => setIsNavHovered(false)}
            >
              <div className="relative min-w-[470px] h-full" ref={containerRef}>
                <div className="flex items-center gap-9 justify-center mx-auto">
                  {navLinks.map((link, index) => (
                    <div
                      key={link.name}
                      ref={(el) => { navRefs.current[index] = el; }}
                      onMouseEnter={() => {
                        setHoveredIndex(index);
                        if (link.isDropdown) {
                          setIsSolutionsDropdownOpen(true);
                        }
                      }}
                      onMouseLeave={() => {
                        setHoveredIndex(null);
                        if (link.isDropdown) {
                          setIsSolutionsDropdownOpen(false);
                        }
                      }}
                      className="relative flex items-center justify-center"
                    >
                      <Link
                        href={link.href}
                        onClick={(e) => {
                          if (link.isDropdown) {
                            e.preventDefault();
                          }
                        }}
                        className="relative px-5 py-2 text-[15px] font-medium rounded-full transition-colors duration-200 z-10 whitespace-nowrap flex items-center gap-1"
                        style={{
                          color: hoveredIndex === index || activeIndex === index ? '#ffffff' : 'rgba(255, 255, 255, 0.6)',
                        }}
                      >
                        {link.name}
                        {link.isDropdown && (
                          <ChevronDown size={14} className={`transition-transform duration-200 ${isSolutionsDropdownOpen ? 'rotate-180' : ''}`} />
                        )}
                      </Link>
                    </div>
                  ))}
                </div>
                
                {/* Dynamic Pill Background */}
                <AnimatePresence>
                  {isNavHovered && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                      className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex items-center justify-center gap-6 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex-2"
                    >
                      {/* Sliding Highlight */}
                      <AnimatePresence>
                        {highlightStyle && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 30,
                            }}
                            className="absolute top-[6px] h-[calc(100%-12px)] bg-[rgba(255,255,255,0.1)] backdrop-blur-sm rounded-full border border-white/20 z-20"
                            style={{
                              left: highlightStyle.left + 6,
                              width: highlightStyle.width - 12,
                            }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-violet-500/20 rounded-full" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Solutions Mega Menu Dropdown */}
                <AnimatePresence>
                  {isSolutionsDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px]"
                      onMouseEnter={() => setIsSolutionsDropdownOpen(true)}
                      onMouseLeave={() => setIsSolutionsDropdownOpen(false)}
                    >
                      <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
                        <div className="grid grid-cols-2 gap-4">
                          {solutions.map((solution, index) => {
                            const Icon = solution.icon;
                            return (
                              <Link
                                key={solution.name}
                                href={solution.href}
                                className="group relative p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                              >
                                <div className="flex items-start gap-3">
                                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-violet-500/20 group-hover:from-blue-500/30 group-hover:via-cyan-500/30 group-hover:to-violet-500/30 transition-colors">
                                    <Icon size={20} className="text-blue-400" />
                                  </div>
                                  <div className="flex-1">
                                    <h3 className="text-white font-medium mb-1 group-hover:text-blue-300 transition-colors">
                                      {solution.name}
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                      {solution.description}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block flex-shrink-0">
              <Link
                href="/contact"
                className="px-6 py-2.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-violet-500 rounded-full text-white font-medium text-sm hover:scale-105 transition-transform glow-hover"
              >
                Book Free 15 Min Consultation
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 -mr-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40 md:hidden"
          >
            <div className="flex flex-col h-full px-6 py-6">
              {/* Mobile Menu Close Button */}
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Menu Items - Left Aligned */}
              <div className="flex flex-col space-y-4 flex-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="w-full"
                  >
                    {link.isDropdown ? (
                      <div>
                        <button
                          onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                          className={`w-full text-xl font-heading font-medium flex items-center justify-between text-left ${
                            solutions.some(s => s.href === pathname) ? 'text-white' : 'text-gray-400'
                          }`}
                        >
                          {link.name}
                          <ChevronDown size={20} className={`transition-transform duration-200 ${isMobileSolutionsOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {isMobileSolutionsOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-3 space-y-2 overflow-hidden pl-4"
                            >
                              {solutions.map((solution, sIndex) => {
                                const Icon = solution.icon;
                                return (
                                  <Link
                                    key={solution.name}
                                    href={solution.href}
                                    onClick={() => {
                                      setIsMobileMenuOpen(false);
                                      setIsMobileSolutionsOpen(false);
                                    }}
                                    className={`flex items-center gap-3 p-3 rounded-lg bg-white/5 text-left ${
                                      pathname === solution.href ? 'text-white' : 'text-gray-400'
                                    }`}
                                  >
                                    <Icon size={18} />
                                    <span className="text-base">{solution.name}</span>
                                  </Link>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`text-xl font-heading font-medium text-left ${
                          pathname === link.href ? 'text-white' : 'text-gray-400'
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* CTA Button - Bottom Centered */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full px-8 py-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-violet-500 rounded-full text-white font-medium text-lg text-center glow"
                >
                  Book Free 15 Min Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
