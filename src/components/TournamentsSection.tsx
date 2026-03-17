const tournaments = [
  {
    name: 'Tier6 Open Series S4',
    status: 'РЕГИСТРАЦИЯ',
    statusColor: '#44ff88',
    date: '1–15 апреля 2026',
    prize: '50 000 ₽',
    teams: 32,
    format: 'Bo3 / Double Elim',
    location: 'Online',
  },
  {
    name: 'RU Underground Cup #12',
    status: 'СКОРО',
    statusColor: '#f5e642',
    date: '20–25 апреля 2026',
    prize: '30 000 ₽',
    teams: 16,
    format: 'Bo3 / Single Elim',
    location: 'Online',
  },
  {
    name: 'Tier6 LAN Spring 2026',
    status: 'СКОРО',
    statusColor: '#f5e642',
    date: '10 мая 2026',
    prize: '150 000 ₽',
    teams: 8,
    format: 'Bo5 / LAN',
    location: 'Москва',
  },
  {
    name: 'NIGHTFALL Invitational',
    status: 'ЗАВЕРШЁН',
    statusColor: '#6b7280',
    date: '1–10 марта 2026',
    prize: '25 000 ₽',
    teams: 8,
    format: 'Bo3 / Group + Playoffs',
    location: 'Online',
  },
];

export default function TournamentsSection() {
  return (
    <section className="py-16" style={{ background: 'var(--surface-2)' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="section-label mb-2">// СОРЕВНОВАНИЯ</div>
            <h2 className="font-oswald font-bold text-3xl text-white">ТУРНИРЫ</h2>
          </div>
          <button className="font-oswald text-sm tracking-wider hover:opacity-70 transition-opacity flex items-center gap-1" style={{ color: 'var(--neon)' }}>
            ВСЕ ТУРНИРЫ →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tournaments.map((t, i) => (
            <div key={i} className="card-surface clip-corner-lg p-6 hover-card-lift cursor-pointer group">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="font-mono-custom text-xs font-bold px-2 py-0.5 rounded"
                      style={{ background: `${t.statusColor}22`, color: t.statusColor, border: `1px solid ${t.statusColor}44` }}
                    >
                      {t.status}
                    </span>
                    <span className="font-mono-custom text-xs" style={{ color: 'var(--text-muted)' }}>
                      {t.location}
                    </span>
                  </div>
                  <h3 className="font-oswald font-bold text-xl text-white group-hover:text-yellow-300 transition-colors">
                    {t.name}
                  </h3>
                </div>
                <div className="text-right">
                  <div className="font-oswald font-bold text-xl neon-text">{t.prize}</div>
                  <div className="font-mono-custom text-xs" style={{ color: 'var(--text-muted)' }}>Призовые</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <div>
                  <div className="font-mono-custom text-xs mb-1" style={{ color: 'var(--text-muted)' }}>ДАТА</div>
                  <div className="font-rajdhani text-sm font-semibold text-white">{t.date}</div>
                </div>
                <div>
                  <div className="font-mono-custom text-xs mb-1" style={{ color: 'var(--text-muted)' }}>ФОРМАТ</div>
                  <div className="font-rajdhani text-sm font-semibold text-white">{t.format}</div>
                </div>
                <div>
                  <div className="font-mono-custom text-xs mb-1" style={{ color: 'var(--text-muted)' }}>КОМАНДЫ</div>
                  <div className="font-rajdhani text-sm font-semibold text-white">{t.teams} слотов</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
