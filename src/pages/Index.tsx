import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import NewsSection from '@/components/NewsSection';
import TeamsSection from '@/components/TeamsSection';
import PlayersSection from '@/components/PlayersSection';
import TournamentsSection from '@/components/TournamentsSection';
import RankingsSection from '@/components/RankingsSection';
import StatsSection from '@/components/StatsSection';
import Footer from '@/components/Footer';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigate = (id: string) => {
    setActiveSection(id);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const offset = 64;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--surface)' }}>
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      <main>
        <div id="home">
          <HeroSection />
        </div>

        <div id="news">
          <NewsSection />
        </div>

        <div id="teams">
          <TeamsSection />
        </div>

        <div id="players">
          <PlayersSection />
        </div>

        <div id="rankings">
          <RankingsSection />
        </div>

        <div id="tournaments">
          <TournamentsSection />
        </div>

        <div id="stats">
          <StatsSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
