import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { GoogleBadgeCard } from './components/GoogleBadgeCard';
import { PortfolioSection } from './components/PortfolioSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ConnectModal } from './components/ConnectModal';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [connectModalOpen, setConnectModalOpen] = useState(false);

  const handleScrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd] font-['Inter',sans-serif] selection:bg-[#00f5ff]/20 selection:text-[#00f5ff] flex flex-col justify-between">
      <div>
        {/* Navigation Bar */}
        <Navbar onOpenConnect={() => setConnectModalOpen(true)} />

        {/* Hero Section */}
        <Hero
          onExploreProjects={() => handleScrollTo('portfolio')}
          onExploreJourney={() => handleScrollTo('about')}
        />

        <main className="engineering-grid">
          {/* About / Transition Section */}
          <AboutSection />

          {/* Technical Skills Section */}
          <SkillsSection />

          {/* Experience & Education Section */}
          <ExperienceSection />

          {/* Google Professional Certificate Widget */}
          <GoogleBadgeCard />

          {/* Hybrid Portfolio Section */}
          <PortfolioSection onSelectProject={(p) => setSelectedProject(p)} />

          {/* Call To Action / Contact Section */}
          <ContactSection onOpenConnectModal={() => setConnectModalOpen(true)} />
        </main>
      </div>

      {/* Footer */}
      <Footer onOpenConnect={() => setConnectModalOpen(true)} />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ConnectModal
        isOpen={connectModalOpen}
        onClose={() => setConnectModalOpen(false)}
      />
    </div>
  );
}
