import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { WhatsappIcon, LinkedinIcon, EmailIcon } from './ContactSection';
import {
  X,
  Send,
  CheckCircle2,
  Copy,
  Check,
  MessageSquare,
} from 'lucide-react';

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConnectModal: React.FC<ConnectModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    const subject = encodeURIComponent(
      `Contato de ${form.name}${form.company ? ` (${form.company})` : ''} - Portfólio Karen Silva`
    );
    const body = encodeURIComponent(
      `Olá Karen,\n\nMeu nome é ${form.name}.\nE-mail para contato: ${form.email}${
        form.company ? `\nEmpresa: ${form.company}` : ''
      }\n\nMensagem:\n${form.message}\n\nAtenciosamente,\n${form.name}`
    );

    window.open(`mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`, '_blank');
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="glass-card max-w-lg w-full p-6 sm:p-8 rounded-3xl border border-[#00f5ff]/30 shadow-2xl relative my-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#b9caca] hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
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
            Envie uma mensagem direta ou utilize os canais abaixo.
          </p>
        </div>

        {/* Quick Links with minimal outline icons */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 p-3 bg-[#171f33] hover:bg-[#00f5ff]/10 border border-[#3a494a]/50 hover:border-[#00f5ff]/40 rounded-xl text-xs font-bold text-[#dae2fd] hover:text-[#00f5ff] transition-all cursor-pointer"
          >
            <LinkedinIcon className="w-4 h-4 text-[#00f5ff]" />
            <span>Perfil LinkedIn</span>
          </a>

          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 p-3 bg-[#171f33] hover:bg-[#00f5ff]/10 border border-[#3a494a]/50 hover:border-[#00f5ff]/40 rounded-xl text-xs font-bold text-[#dae2fd] hover:text-[#00f5ff] transition-all cursor-pointer"
          >
            <WhatsappIcon className="w-4 h-4 text-[#00f5ff]" />
            <span>Iniciar WhatsApp</span>
          </a>
        </div>

        <div className="flex items-center gap-2 my-4">
          <div className="h-px bg-[#3a494a]/40 flex-1" />
          <span className="text-[11px] font-mono text-[#b9caca] uppercase">ou formulário</span>
          <div className="h-px bg-[#3a494a]/40 flex-1" />
        </div>

        {submitted ? (
          <div className="text-center py-8 space-y-4 bg-[#131b2e] rounded-2xl p-6 border border-[#00f5ff]/30">
            <div className="w-12 h-12 rounded-full bg-[#00f5ff]/20 text-[#00f5ff] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-white">Mensagem Enviada!</h4>
            <p className="text-xs text-[#b9caca]">
              Obrigada pelo contato! Responderei o mais breve possível via e-mail.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setForm({ name: '', email: '', company: '', message: '' });
              }}
              className="px-6 py-2 bg-[#2d3449] text-white text-xs font-bold rounded-xl hover:bg-[#00f5ff] hover:text-[#003739] transition-colors"
            >
              Enviar Nova Mensagem
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#b9caca] mb-1">
                Seu Nome:
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Ex: Dra. Ana Paula"
                className="w-full bg-[#131b2e] border border-[#3a494a]/50 focus:border-[#00f5ff] rounded-xl px-3.5 py-2.5 text-sm text-white outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#b9caca] mb-1">
                Seu E-mail Corporativo ou Pessoal:
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="nome@empresa.com"
                className="w-full bg-[#131b2e] border border-[#3a494a]/50 focus:border-[#00f5ff] rounded-xl px-3.5 py-2.5 text-sm text-white outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#b9caca] mb-1">
                Empresa / Organização (Opcional):
              </label>
              <input
                type="text"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                placeholder="Ex: Tech Solutions / Construtora"
                className="w-full bg-[#131b2e] border border-[#3a494a]/50 focus:border-[#00f5ff] rounded-xl px-3.5 py-2.5 text-sm text-white outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#b9caca] mb-1">
                Sua Mensagem:
              </label>
              <textarea
                required
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Gostaria de conversar sobre um projeto de inteligência de dados..."
                className="w-full bg-[#131b2e] border border-[#3a494a]/50 focus:border-[#00f5ff] rounded-xl px-3.5 py-2.5 text-sm text-white outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#00f5ff] text-[#003739] font-bold rounded-xl text-sm hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(0,245,255,0.3)]"
            >
              <Send className="w-4 h-4" />
              <span>Enviar Mensagem</span>
            </button>
          </form>
        )}

        {/* Copy email footer */}
        <div className="mt-6 pt-4 border-t border-[#3a494a]/30 flex items-center justify-between text-xs text-[#b9caca]">
          <span className="font-mono text-[11px] truncate">{PERSONAL_INFO.email}</span>
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer"
          >
            {copiedEmail ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-bold">Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copiar E-mail</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
