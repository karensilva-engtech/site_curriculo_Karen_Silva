import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquareCode } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenConnect: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConnect }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'experience', 'portfolio'];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Sobre mim', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Currículo', href: '#experience', id: 'experience' },
    { label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0b1326]/85 backdrop-blur-xl border-b border-[#3a494a]/30 shadow-lg shadow-black/40 py-3'
          : 'bg-[#0b1326]/60 backdrop-blur-xl border-b border-[#3a494a]/20 py-4'
      }`}
    >
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 max-w-[1200px] mx-auto">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#hero');
          }}
          className="text-xl sm:text-2xl font-bold tracking-tighter text-[#e9feff] hover:text-[#00f5ff] transition-colors flex items-center gap-2 group"
        >
          <span className="w-2 h-2 rounded-full bg-[#00f5ff] group-hover:animate-ping"></span>
          <span>{PERSONAL_INFO.handle}</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 text-base">
          {navItems.map((item) => {
            const isActive =
              activeSection === item.id ||
              (item.id === 'hero' && activeSection === 'about');
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`transition-all duration-200 font-medium ${
                  isActive
                    ? 'text-[#e9feff] border-b-2 border-[#00f5ff] pb-1 font-semibold text-[#00f5ff]'
                    : 'text-[#b9caca] hover:text-[#00f5ff]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenConnect}
            className="bg-[#00f5ff] text-[#003739] px-5 sm:px-6 py-2 rounded-full font-semibold text-xs sm:text-sm tracking-wide hover:scale-105 active:scale-95 transition-all duration-200 shadow-[0_0_15px_rgba(0,245,255,0.3)] hover:shadow-[0_0_25px_rgba(0,245,255,0.5)] flex items-center gap-2 cursor-pointer"
          >
            <MessageSquareCode className="w-4 h-4" />
            <span>Contato</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#b9caca] hover:text-[#e9feff] rounded-lg bg-[#171f33]/60 border border-[#3a494a]/40"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0b1326]/95 border-b border-[#3a494a]/40 backdrop-blur-2xl px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="block py-2 text-base font-medium text-[#dae2fd] hover:text-[#00f5ff] border-b border-[#171f33]"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
