const rankingData = [
  { pos: 1, team: 'ECHOFALL', points: null, diff: '—', region: 'RU' },
];

export default function RankingsSection() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4">
      <div className="flex items-end justify-between mb-8">
        <div>
          <div className="section-label mb-2">// МИРОВАЯ ТАБЛИЦА</div>
          <h2 className="font-oswald font-bold text-3xl text-white">РЕЙТИНГИ</h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono-custom text-xs" style={{ color: 'var(--text-muted)' }}>Обновлено: 17.03.2026</span>
        </div>
      </div>

      <div className="space-y-2">
        {rankingData.map((item, i) => (
          <div
            key={i}
            className="card-surface hover-card-lift cursor-pointer group relative overflow-hidden"
            style={{ borderRadius: 'var(--radius)' }}
          >
            <div
              className="absolute left-0 top-0 bottom-0 opacity-10"
              style={{ width: '100%', background: 'var(--neon)', transition: 'width 1s ease' }}
            />

            <div className="relative flex items-center gap-4 px-5 py-4">
              <div className="w-8 text-center">
                <span className="font-mono-custom font-bold text-sm neon-text">
                  {String(item.pos).padStart(2, '0')}
                </span>
              </div>

              <div
                className="w-9 h-9 clip-corner flex items-center justify-center text-xs font-bold font-oswald flex-shrink-0"
                style={{ background: 'var(--surface-3)', color: 'var(--neon)' }}
              >
                EC
              </div>

              <div className="flex-1 min-w-0">
                <div className="font-oswald font-bold text-white group-hover:text-yellow-300 transition-colors truncate">
                  {item.team}
                </div>
                <div className="font-mono-custom text-xs" style={{ color: 'var(--text-muted)' }}>
                  {item.region}
                </div>
              </div>

              <div className="w-12 text-center">
                <span className="font-mono-custom text-xs" style={{ color: 'var(--text-muted)' }}>
                  {item.diff}
                </span>
              </div>

              <div className="w-20 text-right">
                <span className="font-mono-custom font-bold text-sm" style={{ color: 'var(--text-muted)' }}>
                  {item.points ?? '—'}
                </span>
                <div className="font-mono-custom text-xs" style={{ color: 'var(--text-muted)' }}>pts</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 card-surface clip-corner p-6 text-center">
        <div className="font-mono-custom text-xs mb-2 neon-text">// РЕЙТИНГ ФОРМИРУЕТСЯ</div>
        <div className="font-rajdhani text-sm" style={{ color: 'var(--text-muted)' }}>
          По мере добавления матчей и команд рейтинговая таблица будет заполняться автоматически.
        </div>
      </div>
    </section>
  );
}
