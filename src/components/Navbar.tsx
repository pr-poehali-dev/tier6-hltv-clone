import { useState } from 'react';
import Icon from '@/components/ui/icon';

const navItems = [
  { label: 'Главная', id: 'home' },
  { label: 'Новости', id: 'news' },
  { label: 'Команды', id: 'teams' },
  { label: 'Игроки', id: 'players' },
  { label: 'Рейтинги', id: 'rankings' },
  { label: 'Турниры', id: 'tournaments' },
  { label: 'Статистика', id: 'stats' },
];

interface NavbarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ background: 'rgba(10,11,15,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(245,230,66,0.1)' }}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
        {/* Logo */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 clip-corner neon-bg flex items-center justify-center text-sm font-bold font-oswald">
            T6
          </div>
          <span className="font-oswald font-bold text-lg tracking-widest text-white group-hover:neon-text transition-colors">
            TIER<span className="neon-text">6</span>.GG
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
            <span className="live-dot" />
            <span>LIVE</span>
          </div>
          <button className="hidden md:flex items-center gap-1 clip-corner neon-bg px-3 py-1.5 text-xs font-oswald font-semibold tracking-wider hover:opacity-90 transition-opacity">
            ВОЙТИ
          </button>
          <button
            className="md:hidden p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: 'var(--text-muted)' }}
          >
            <Icon name={mobileOpen ? 'X' : 'Menu'} size={20} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t" style={{ borderColor: 'rgba(245,230,66,0.1)', background: 'rgba(10,11,15,0.98)' }}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { onNavigate(item.id); setMobileOpen(false); }}
              className={`block w-full text-left px-4 py-3 font-oswald text-sm tracking-wider uppercase transition-colors ${activeSection === item.id ? 'text-yellow-300' : 'text-gray-400 hover:text-white'}`}
              style={activeSection === item.id ? { color: 'var(--neon)' } : {}}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
