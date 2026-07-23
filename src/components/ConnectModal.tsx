import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { WhatsappIcon, LinkedinIcon, EmailIcon } from './ContactSection';
import {
  X,
  Copy,
  Check,
  MessageSquare,
  Mail,
  ExternalLink,
} from 'lucide-react';

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConnectModal: React.FC<ConnectModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="glass-card max-w-lg w-full p-6 sm:p-8 rounded-3xl border border-[#00f5ff]/30 shadow-[0_0_50px_rgba(0,245,255,0.15)] relative my-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#b9caca] hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
          title="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f5ff]/10 text-[#00f5ff] text-xs font-bold mb-2">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Contato Direto</span>
          </div>
          <h3 className="text-2xl font-bold text-[#e9feff]">Conectar com Karen Silva</h3>
          <p className="text-sm text-[#b9caca] mt-1">
            Escolha o canal de sua preferência para entrar em contato ou envie um e-mail diretamente.
          </p>
        </div>

        {/* Highlighted Email Card */}
        <div className="relative p-5 rounded-2xl bg-gradient-to-b from-[#172339] to-[#0e1626] border border-[#00f5ff]/50 shadow-[0_0_25px_rgba(0,245,255,0.12)] mb-6 overflow-hidden group">
          <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#00f5ff]/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-[#00f5ff]/15 text-[#00f5ff]">
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-[#00f5ff] uppercase tracking-wider">
                E-mail Principal
              </span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              Resposta Rápida
            </span>
          </div>

          <div className="mb-4 bg-[#0a1120]/80 p-3.5 rounded-xl border border-[#3a494a]/40 flex items-center justify-between gap-2">
            <span className="text-sm sm:text-base font-mono font-bold text-white truncate select-all">
              {PERSONAL_INFO.email}
            </span>
            <button
              onClick={handleCopyEmail}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg font-bold text-xs transition-all duration-200 shrink-0 cursor-pointer ${
                copiedEmail
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                  : 'bg-[#00f5ff] text-[#003739] hover:bg-[#57f8ff] hover:shadow-[0_0_20px_rgba(0,245,255,0.4)] active:scale-95'
              }`}
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copiar E-mail</span>
                </>
              )}
            </button>
          </div>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="w-full py-2.5 px-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00f5ff]/40 rounded-xl text-xs font-semibold text-[#e9feff] hover:text-[#00f5ff] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Abrir no seu aplicativo de e-mail</span>
          </a>
        </div>

        {/* Quick Social Links */}
        <div className="grid grid-cols-2 gap-3">
          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 p-3.5 bg-[#171f33] hover:bg-[#00f5ff]/10 border border-[#3a494a]/50 hover:border-[#00f5ff]/40 rounded-xl text-xs font-bold text-[#dae2fd] hover:text-[#00f5ff] transition-all cursor-pointer shadow-sm"
          >
            <LinkedinIcon className="w-4 h-4 text-[#00f5ff]" />
            <span>Perfil LinkedIn</span>
          </a>

          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 p-3.5 bg-[#171f33] hover:bg-[#00f5ff]/10 border border-[#3a494a]/50 hover:border-[#00f5ff]/40 rounded-xl text-xs font-bold text-[#dae2fd] hover:text-[#00f5ff] transition-all cursor-pointer shadow-sm"
          >
            <WhatsappIcon className="w-4 h-4 text-[#00f5ff]" />
            <span>Iniciar WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

