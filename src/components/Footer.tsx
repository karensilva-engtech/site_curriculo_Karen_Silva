import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenConnect: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConnect }) => {
  return (
    <footer className="bg-[#060e20] border-t border-[#3a494a]/20 w-full py-8 mt-12">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 md:px-8 max-w-[1200px] mx-auto gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-xl font-bold tracking-tighter text-[#dae2fd]">
            {PERSONAL_INFO.handle}
          </span>
          <p className="text-[#b9caca] text-xs mt-1 font-mono opacity-70">
            Engineering Intelligence
          </p>
        </div>

        <p className="text-xs text-[#b9caca] text-center md:text-left opacity-80">
          © {new Date().getFullYear()} Karen Silva • Engenharia & Análise de Dados
        </p>

        <div className="flex gap-6 text-xs text-[#b9caca]">
          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00f5ff] transition-colors cursor-pointer"
          >
            LinkedIn
          </a>
          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00f5ff] transition-colors cursor-pointer"
          >
            WhatsApp
          </a>
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00f5ff] transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};
