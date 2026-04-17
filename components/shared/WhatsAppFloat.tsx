'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/923167697273"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group"
      >
        {/* Pulse Animation Ring */}
        <motion.div
          className="absolute inset-0 rounded-full bg-[#25D366]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            boxShadow: '0 0 20px rgba(37, 211, 102, 0.5)',
          }}
        />
        
        {/* Main Button */}
        <motion.div
          className="relative w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300"
          whileHover={{ scale: 1.1 }}
          style={{
            boxShadow: '0 0 30px rgba(37, 211, 102, 0.6)',
          }}
        >
          <span className="flex items-center justify-center">
            <FaWhatsapp className="text-white" style={{ fontSize: '28px' }} />
          </span>
        </motion.div>

        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-white text-gray-900 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg">
            Chat on WhatsApp
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-white" />
          </div>
        </div>
      </a>
    </div>
  );
}
