const topStats = [
  { label: 'Топ K/D', nick: 'spokyso', team: 'ECHOFALL', value: '—', sub: 'K/D Ratio' },
  { label: 'Топ ADR', nick: 'spokyso', team: 'ECHOFALL', value: '—', sub: 'Урон/раунд' },
  { label: 'Топ HS%', nick: 'spokyso', team: 'ECHOFALL', value: '—', sub: 'Headshot %' },
  { label: 'Топ Rating', nick: 'spokyso', team: 'ECHOFALL', value: '—', sub: 'Rating 2.0' },
];

const mapStats = [
  { map: 'Mirage', pick: 0, ban: 0 },
  { map: 'Inferno', pick: 0, ban: 0 },
  { map: 'Dust2', pick: 0, ban: 0 },
  { map: 'Nuke', pick: 0, ban: 0 },
  { map: 'Overpass', pick: 0, ban: 0 },
  { map: 'Ancient', pick: 0, ban: 0 },
  { map: 'Anubis', pick: 0, ban: 0 },
];

export default function StatsSection() {
  return (
    <section className="py-16" style={{ background: 'var(--surface-2)' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <div className="section-label mb-2">// ГЛОБАЛЬНАЯ АНАЛИТИКА</div>
          <h2 className="font-oswald font-bold text-3xl text-white">СТАТИСТИКА</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                  <div className="font-oswald font-bold text-2xl mb-1" style={{ color: 'var(--text-muted)' }}>
                    {s.value}
                  </div>
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
                      <div className="stat-bar-fill" style={{ width: '0%' }} />
                    </div>
                    <div className="stat-bar">
                      <div className="stat-bar-fill" style={{ width: '0%', background: '#ff4444' }} />
                    </div>
                  </div>
                  <div className="w-20 text-right font-mono-custom text-xs" style={{ color: 'var(--text-muted)' }}>
                    P:— B:—
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

            <div className="mt-6 card-surface clip-corner p-4 text-center">
              <div className="font-mono-custom text-xs neon-text mb-1">// ДАННЫЕ ОТСУТСТВУЮТ</div>
              <div className="font-rajdhani text-sm" style={{ color: 'var(--text-muted)' }}>
                Статистика появится после первых сыгранных матчей
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
