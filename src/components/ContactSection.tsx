import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const WhatsappIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
    <path d="M9.5 8.5c.3 0 .6.2.7.5l.7 1.7c.1.3.1.6-.1.8l-.6.7a7.2 7.2 0 0 0 3.3 3.3l.7-.6c.2-.2.5-.2.8-.1l1.7.7c.3.1.5.4.5.7v1c0 .6-.5 1-1.1 1a9.9 9.9 0 0 1-9-9c0-.6.4-1.1 1-1.1h1z" />
  </svg>
);

export const LinkedinIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="4" />
    <path d="M8 11v5" />
    <path d="M8 8v.01" />
    <path d="M12 16v-5" />
    <path d="M16 16v-3a2 2 0 0 0-4 0" />
  </svg>
);

export const EmailIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="3" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

interface ContactSectionProps {
  onOpenConnectModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenConnectModal }) => {
  return (
    <section className="py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-3xl mx-auto glass-card p-8 sm:p-12 rounded-3xl text-center relative overflow-hidden border border-[#00f5ff]/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        {/* Top gradient highlight bar */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#00f5ff] via-[#571bc1] to-[#00f5ff]" />

        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#e9feff] mb-4 tracking-tight">
          Vamos projetar algo <span className="text-[#00f5ff]">inteligente</span>?
        </h2>

        <p className="text-base sm:text-lg text-[#b9caca] mb-8 leading-relaxed max-w-xl mx-auto">
          Estou aberta a oportunidades de colaboração em análise de dados, BI e projetos que necessitem de visão técnica multidisciplinar.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-3.5 bg-[#00f5ff]/10 hover:bg-[#00f5ff]/20 border border-[#00f5ff]/40 rounded-xl transition-all duration-300 group cursor-pointer hover:border-[#00f5ff] hover:shadow-[0_0_25px_rgba(0,245,255,0.35)]"
          >
            <LinkedinIcon className="w-5 h-5 text-[#00f5ff]" />
            <span className="font-bold text-base text-[#e9feff] group-hover:text-[#00f5ff] transition-colors">
              LinkedIn
            </span>
          </a>

          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-3.5 bg-[#00f5ff]/10 hover:bg-[#00f5ff]/20 border border-[#00f5ff]/40 rounded-xl transition-all duration-300 group cursor-pointer hover:border-[#00f5ff] hover:shadow-[0_0_25px_rgba(0,245,255,0.35)]"
          >
            <WhatsappIcon className="w-5 h-5 text-[#00f5ff]" />
            <span className="font-bold text-base text-[#e9feff] group-hover:text-[#00f5ff] transition-colors">
              WhatsApp
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
