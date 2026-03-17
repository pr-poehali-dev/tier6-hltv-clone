import Icon from '@/components/ui/icon';

const liveMatches = [
  { team1: 'NIGHTFALL', team2: 'AXIOM', score1: 12, score2: 9, map: 'Mirage', status: 'LIVE' },
  { team1: 'GHOST5', team2: 'RECON', score1: 7, score2: 7, map: 'Inferno', status: 'LIVE' },
];

const topStats = [
  { label: 'Активных игроков', value: '2,847' },
  { label: 'Команд', value: '312' },
  { label: 'Турниров в 2025', value: '48' },
  { label: 'Матчей сыграно', value: '18,492' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-14 overflow-hidden grid-bg">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, var(--neon), transparent 70%)' }}
        />
        <div
          className="absolute top-0 left-0 w-full h-px opacity-20"
          style={{ background: 'linear-gradient(90deg, transparent, var(--neon), transparent)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — headline */}
          <div>
            <div className="section-label mb-4 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
              // КИБЕРСПОРТ TIER 6 СЦЕНА
            </div>
            <h1
              className="font-oswald font-bold text-5xl md:text-7xl leading-none tracking-tight mb-6 opacity-0 animate-fade-in-up delay-100"
              style={{ animationFillMode: 'forwards' }}
            >
              <span className="text-white">ВСЯ</span>
              <br />
              <span className="neon-text">TIER6</span>
              <br />
              <span className="text-white">СЦЕНА</span>
            </h1>
            <p
              className="font-rajdhani text-lg mb-8 max-w-md opacity-0 animate-fade-in-up delay-200"
              style={{ color: 'var(--text-muted)', animationFillMode: 'forwards' }}
            >
              Рейтинги, статистика, профили игроков и турниры андеграунд сцены Counter-Strike в одном месте.
            </p>
            <div
              className="flex flex-wrap gap-3 opacity-0 animate-fade-in-up delay-300"
              style={{ animationFillMode: 'forwards' }}
            >
              <button className="clip-corner neon-bg px-6 py-2.5 font-oswald font-semibold tracking-wider text-sm hover:opacity-90 transition-opacity flex items-center gap-2">
                <Icon name="Trophy" size={16} />
                РЕЙТИНГИ
              </button>
              <button
                className="clip-corner px-6 py-2.5 font-oswald font-semibold tracking-wider text-sm transition-colors flex items-center gap-2"
                style={{ border: '1px solid rgba(245,230,66,0.3)', color: 'var(--neon)' }}
              >
                <Icon name="Users" size={16} />
                КОМАНДЫ
              </button>
            </div>
          </div>

          {/* Right — live matches + stats */}
          <div className="space-y-4">
            <div className="section-label mb-3 flex items-center gap-2">
              <span className="live-dot" />
              МАТЧИ В ЭФИРЕ
            </div>
            {liveMatches.map((match, i) => (
              <div
                key={i}
                className="card-surface clip-corner p-4 hover-card-lift cursor-pointer opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.3 + i * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="font-oswald font-bold text-white text-lg">{match.team1}</div>
                  </div>
                  <div className="px-4 text-center">
                    <div className="font-mono-custom font-bold text-xl neon-text">
                      {match.score1} : {match.score2}
                    </div>
                    <div className="font-mono-custom text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                      {match.map}
                    </div>
                  </div>
                  <div className="flex-1 text-right">
                    <div className="font-oswald font-bold text-white text-lg">{match.team2}</div>
                  </div>
                </div>
              </div>
            ))}

            {/* Stats bar */}
            <div
              className="grid grid-cols-2 gap-3 mt-6 opacity-0 animate-fade-in-up delay-500"
              style={{ animationFillMode: 'forwards' }}
            >
              {topStats.map((s, i) => (
                <div key={i} className="card-surface-3 p-3 clip-corner">
                  <div className="font-oswald font-bold text-2xl neon-text">{s.value}</div>
                  <div className="font-rajdhani text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
