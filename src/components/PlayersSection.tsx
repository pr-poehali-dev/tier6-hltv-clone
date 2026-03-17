const players = [
  {
    nick: 'n1ghtmare',
    name: 'Артём Соколов',
    team: 'NIGHTFALL',
    role: 'Rifler',
    rating: 1.34,
    kd: 1.42,
    hs: 58,
    adr: 87.4,
    maps: 124,
    age: 21,
    flag: '🇷🇺',
  },
  {
    nick: 'axiom_igl',
    name: 'Денис Крылов',
    team: 'AXIOM',
    role: 'IGL',
    rating: 1.21,
    kd: 1.18,
    hs: 45,
    adr: 74.2,
    maps: 138,
    age: 23,
    flag: '🇷🇺',
  },
  {
    nick: 'gh0stAWP',
    name: 'Максим Волков',
    team: 'GHOST5',
    role: 'AWPer',
    rating: 1.29,
    kd: 1.31,
    hs: 37,
    adr: 79.8,
    maps: 112,
    age: 19,
    flag: '🇷🇺',
  },
  {
    nick: 'recon_entry',
    name: 'Иван Попов',
    team: 'RECON',
    role: 'Entry',
    rating: 1.18,
    kd: 1.15,
    hs: 64,
    adr: 82.1,
    maps: 99,
    age: 20,
    flag: '🇷🇺',
  },
  {
    nick: 'zeR0_lurk',
    name: 'Алексей Новиков',
    team: 'ZERO IMPACT',
    role: 'Lurker',
    rating: 1.16,
    kd: 1.12,
    hs: 49,
    adr: 71.3,
    maps: 107,
    age: 22,
    flag: '🇷🇺',
  },
  {
    nick: 'delta_support',
    name: 'Сергей Морозов',
    team: 'DELTA FORCE',
    role: 'Support',
    rating: 1.09,
    kd: 1.05,
    hs: 42,
    adr: 67.8,
    maps: 143,
    age: 25,
    flag: '🇷🇺',
  },
];

const roleColors: Record<string, string> = {
  Rifler: '#f5e642',
  IGL: '#44aaff',
  AWPer: '#ff4444',
  Entry: '#ff6644',
  Lurker: '#aa44ff',
  Support: '#44ff88',
};

export default function PlayersSection() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4">
      <div className="flex items-end justify-between mb-8">
        <div>
          <div className="section-label mb-2">// ТОП ПО РЕЙТИНГУ</div>
          <h2 className="font-oswald font-bold text-3xl text-white">ИГРОКИ</h2>
        </div>
        <button className="font-oswald text-sm tracking-wider hover:opacity-70 transition-opacity flex items-center gap-1" style={{ color: 'var(--neon)' }}>
          ВСЕ ИГРОКИ →
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {players.map((p, i) => (
          <div
            key={i}
            className="card-surface clip-corner p-5 hover-card-lift cursor-pointer group"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono-custom text-xs" style={{ color: 'var(--text-muted)' }}>#{i + 1}</span>
                  <span className="text-sm">{p.flag}</span>
                </div>
                <div className="font-oswald font-bold text-xl text-white group-hover:text-yellow-300 transition-colors">
                  {p.nick}
                </div>
                <div className="font-rajdhani text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>
                  {p.name} · {p.age} лет
                </div>
              </div>
              <div className="text-right">
                <div className="font-mono-custom font-bold text-2xl neon-text">{p.rating}</div>
                <div className="font-mono-custom text-xs" style={{ color: 'var(--text-muted)' }}>Rating 2.0</div>
              </div>
            </div>

            {/* Team + Role */}
            <div className="flex items-center gap-2 mb-4">
              <div
                className="text-xs font-mono-custom font-bold px-2 py-0.5 clip-corner"
                style={{ background: 'var(--surface-3)', color: 'var(--neon)' }}
              >
                {p.team}
              </div>
              <div
                className="text-xs font-mono-custom px-2 py-0.5 rounded"
                style={{ background: `${roleColors[p.role]}22`, color: roleColors[p.role], border: `1px solid ${roleColors[p.role]}44` }}
              >
                {p.role}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              <div>
                <div className="font-mono-custom font-bold text-sm text-white">{p.kd}</div>
                <div className="font-rajdhani text-xs" style={{ color: 'var(--text-muted)' }}>K/D</div>
              </div>
              <div>
                <div className="font-mono-custom font-bold text-sm text-white">{p.hs}%</div>
                <div className="font-rajdhani text-xs" style={{ color: 'var(--text-muted)' }}>HS%</div>
              </div>
              <div>
                <div className="font-mono-custom font-bold text-sm text-white">{p.adr}</div>
                <div className="font-rajdhani text-xs" style={{ color: 'var(--text-muted)' }}>ADR</div>
              </div>
            </div>

            {/* ADR bar */}
            <div className="mt-3">
              <div className="stat-bar">
                <div className="stat-bar-fill" style={{ width: `${(p.adr / 120) * 100}%` }} />
              </div>
            </div>

            <div className="mt-3 font-mono-custom text-xs" style={{ color: 'var(--text-muted)' }}>
              {p.maps} карт сыграно
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
