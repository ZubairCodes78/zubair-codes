'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 relative overflow-hidden">
      {/* Gradient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-violet-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Zubair Codes Logo"
                width={140}
                height={35}
                style={{ background: 'transparent' }}
              />
            </Link>
            <p className="text-gray-400 text-sm mb-6 -mt-2">
              Building Systems. Not Services.
            </p>
            <div className="flex gap-5">
              <a 
                href="https://www.instagram.com/zubair_code/" 
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-gradient-to-br hover:from-blue-500/20 hover:via-cyan-500/20 hover:to-violet-500/20 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-110" 
                title="Instagram"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/zubair-codes/" 
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-gradient-to-br hover:from-blue-500/20 hover:via-cyan-500/20 hover:to-violet-500/20 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-110" 
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a 
                href="https://wa.me/923167697273" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-gradient-to-br hover:from-green-500/20 hover:via-emerald-500/20 hover:to-cyan-500/20 hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 hover:scale-110" 
                title="WhatsApp"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Systems */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 font-heading">Systems</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/automation" className="text-gray-400 text-sm hover:text-white transition-colors">
                  AI Automation
                </Link>
              </li>
              <li>
                <Link href="/web-development" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/ai-content" className="text-gray-400 text-sm hover:text-white transition-colors">
                  AI Content
                </Link>
              </li>
              <li>
                <Link href="/marketing" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Growth & Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 font-heading">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 text-sm hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 font-heading">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Zubair Codes. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Built with Zubair Codes
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
