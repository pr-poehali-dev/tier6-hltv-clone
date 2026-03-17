const players = [
  {
    nick: 'spokyso',
    name: '—',
    team: 'ECHOFALL',
    role: 'Rifler',
    rating: '—',
    kd: '—',
    hs: '—',
    adr: '—',
    maps: '—',
    age: '—',
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
          <div className="section-label mb-2">// РОСТЕР</div>
          <h2 className="font-oswald font-bold text-3xl text-white">ИГРОКИ</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {players.map((p, i) => (
          <div
            key={i}
            className="card-surface clip-corner p-5 hover-card-lift cursor-pointer group"
          >
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
                  {p.name !== '—' ? `${p.name} · ${p.age} лет` : 'Данные не заполнены'}
                </div>
              </div>
              <div className="text-right">
                <div className="font-mono-custom font-bold text-2xl neon-text">{p.rating}</div>
                <div className="font-mono-custom text-xs" style={{ color: 'var(--text-muted)' }}>Rating 2.0</div>
              </div>
            </div>

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

            <div className="grid grid-cols-3 gap-3">
              <div>
                <div className="font-mono-custom font-bold text-sm text-white">{p.kd}</div>
                <div className="font-rajdhani text-xs" style={{ color: 'var(--text-muted)' }}>K/D</div>
              </div>
              <div>
                <div className="font-mono-custom font-bold text-sm text-white">{p.hs}{p.hs !== '—' ? '%' : ''}</div>
                <div className="font-rajdhani text-xs" style={{ color: 'var(--text-muted)' }}>HS%</div>
              </div>
              <div>
                <div className="font-mono-custom font-bold text-sm text-white">{p.adr}</div>
                <div className="font-rajdhani text-xs" style={{ color: 'var(--text-muted)' }}>ADR</div>
              </div>
            </div>

            <div className="mt-3">
              <div className="stat-bar">
                <div className="stat-bar-fill" style={{ width: '0%' }} />
              </div>
            </div>

            <div className="mt-3 font-mono-custom text-xs" style={{ color: 'var(--text-muted)' }}>
              {p.maps !== '—' ? `${p.maps} карт сыграно` : 'Статистика будет добавлена'}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
