const topStats = [
  { label: 'Топ K/D', nick: 'n1ghtmare', team: 'NIGHTFALL', value: '1.42', sub: 'K/D Ratio' },
  { label: 'Топ ADR', nick: 'n1ghtmare', team: 'NIGHTFALL', value: '87.4', sub: 'Урон/раунд' },
  { label: 'Топ HS%', nick: 'recon_entry', team: 'RECON', value: '64%', sub: 'Headshot %' },
  { label: 'Топ Rating', nick: 'n1ghtmare', team: 'NIGHTFALL', value: '1.34', sub: 'Rating 2.0' },
];

const mapStats = [
  { map: 'Mirage', pick: 78, ban: 12 },
  { map: 'Inferno', pick: 71, ban: 18 },
  { map: 'Dust2', pick: 65, ban: 24 },
  { map: 'Nuke', pick: 48, ban: 41 },
  { map: 'Overpass', pick: 42, ban: 38 },
  { map: 'Ancient', pick: 39, ban: 45 },
  { map: 'Anubis', pick: 35, ban: 52 },
];

const maxPick = Math.max(...mapStats.map((m) => m.pick));

export default function StatsSection() {
  return (
    <section className="py-16" style={{ background: 'var(--surface-2)' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <div className="section-label mb-2">// ГЛОБАЛЬНАЯ АНАЛИТИКА</div>
          <h2 className="font-oswald font-bold text-3xl text-white">СТАТИСТИКА</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top performers */}
          <div>
            <div className="font-mono-custom text-xs mb-4" style={{ color: 'var(--text-muted)' }}>
              ЛУЧШИЕ ПОКАЗАТЕЛИ СЕЗОНА
            </div>
            <div className="grid grid-cols-2 gap-3">
              {topStats.map((s, i) => (
                <div key={i} className="card-surface clip-corner p-4 hover-card-lift cursor-pointer group">
                  <div className="font-mono-custom text-xs mb-2" style={{ color: 'var(--text-muted)' }}>
                    {s.label}
                  </div>
                  <div className="font-oswald font-bold text-2xl neon-text mb-1">{s.value}</div>
                  <div className="font-oswald font-semibold text-sm text-white group-hover:text-yellow-300 transition-colors">
                    {s.nick}
                  </div>
                  <div className="font-mono-custom text-xs" style={{ color: 'var(--text-muted)' }}>
                    {s.team} · {s.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map stats */}
          <div>
            <div className="font-mono-custom text-xs mb-4" style={{ color: 'var(--text-muted)' }}>
              ПИКИ/БАНЫ КАРТ ЗА СЕЗОН
            </div>
            <div className="space-y-3">
              {mapStats.map((m, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-20 font-oswald font-bold text-sm text-white">{m.map}</div>
                  <div className="flex-1 space-y-1">
                    <div className="stat-bar">
                      <div
                        className="stat-bar-fill"
                        style={{ width: `${(m.pick / maxPick) * 100}%` }}
                      />
                    </div>
                    <div className="stat-bar">
                      <div
                        className="stat-bar-fill"
                        style={{ width: `${(m.ban / maxPick) * 100}%`, background: '#ff4444' }}
                      />
                    </div>
                  </div>
                  <div className="w-20 text-right">
                    <span className="font-mono-custom text-xs neon-text font-bold">P:{m.pick}</span>
                    <span className="font-mono-custom text-xs ml-2" style={{ color: '#ff4444' }}>B:{m.ban}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-2 rounded-sm" style={{ background: 'var(--neon)' }} />
                <span className="font-mono-custom text-xs" style={{ color: 'var(--text-muted)' }}>Пики</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-2 rounded-sm" style={{ background: '#ff4444' }} />
                <span className="font-mono-custom text-xs" style={{ color: 'var(--text-muted)' }}>Баны</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
