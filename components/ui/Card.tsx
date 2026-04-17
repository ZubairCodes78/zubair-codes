import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export default function Card({ children, className = '', hover = true, onClick }: CardProps) {
  return (
    <div
      className={`glass rounded-2xl p-6 ${hover ? 'transition-all duration-300 hover:scale-105' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
