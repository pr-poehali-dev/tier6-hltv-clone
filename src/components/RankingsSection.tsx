const rankingData = [
  { pos: 1, team: 'NIGHTFALL', points: 3240, prev: 3, diff: '+2', region: 'УФО' },
  { pos: 2, team: 'AXIOM', points: 3115, prev: 1, diff: '-1', region: 'ЦФО' },
  { pos: 3, team: 'GHOST5', points: 2980, prev: 7, diff: '+4', region: 'СЗФО' },
  { pos: 4, team: 'RECON', points: 2870, prev: 11, diff: '+7', region: 'ПФО' },
  { pos: 5, team: 'ZERO IMPACT', points: 2745, prev: 3, diff: '-2', region: 'СФО' },
  { pos: 6, team: 'DELTA FORCE', points: 2640, prev: 6, diff: '0', region: 'ЮФО' },
  { pos: 7, team: 'CIPHER', points: 2510, prev: 5, diff: '-2', region: 'ЦФО' },
  { pos: 8, team: 'PULSE.GG', points: 2430, prev: 10, diff: '+2', region: 'УФО' },
];

const maxPoints = rankingData[0].points;

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
        {rankingData.map((item, i) => {
          const isUp = item.diff.startsWith('+');
          const isDown = item.diff.startsWith('-');
          const barWidth = (item.points / maxPoints) * 100;

          return (
            <div
              key={i}
              className="card-surface hover-card-lift cursor-pointer group relative overflow-hidden"
              style={{ borderRadius: 'var(--radius)' }}
            >
              {/* Progress bar background */}
              <div
                className="absolute left-0 top-0 bottom-0 opacity-10"
                style={{ width: `${barWidth}%`, background: 'var(--neon)', transition: 'width 1s ease' }}
              />

              <div className="relative flex items-center gap-4 px-5 py-4">
                {/* Rank */}
                <div className="w-8 text-center">
                  <span
                    className="font-mono-custom font-bold text-sm"
                    style={{ color: item.pos <= 3 ? 'var(--neon)' : 'var(--text-muted)' }}
                  >
                    {String(item.pos).padStart(2, '0')}
                  </span>
                </div>

                {/* Team avatar */}
                <div
                  className="w-9 h-9 clip-corner flex items-center justify-center text-xs font-bold font-oswald flex-shrink-0"
                  style={{ background: 'var(--surface-3)', color: 'var(--neon)' }}
                >
                  {item.team.slice(0, 2)}
                </div>

                {/* Name + region */}
                <div className="flex-1 min-w-0">
                  <div className="font-oswald font-bold text-white group-hover:text-yellow-300 transition-colors truncate">
                    {item.team}
                  </div>
                  <div className="font-mono-custom text-xs" style={{ color: 'var(--text-muted)' }}>
                    {item.region}
                  </div>
                </div>

                {/* Change */}
                <div className="w-12 text-center">
                  <span
                    className="font-mono-custom text-xs font-bold"
                    style={{ color: isUp ? '#44ff88' : isDown ? '#ff4444' : 'var(--text-muted)' }}
                  >
                    {item.diff === '0' ? '—' : item.diff}
                  </span>
                </div>

                {/* Points */}
                <div className="w-20 text-right">
                  <span className="font-mono-custom font-bold text-sm neon-text">
                    {item.points.toLocaleString()}
                  </span>
                  <div className="font-mono-custom text-xs" style={{ color: 'var(--text-muted)' }}>pts</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
