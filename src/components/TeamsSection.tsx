const teams = [
  { name: 'NIGHTFALL', rank: 1, region: 'УФО', players: 5, rating: 1847, wins: 34, losses: 8, change: '+2' },
  { name: 'AXIOM', rank: 2, region: 'ЦФО', players: 5, rating: 1812, wins: 31, losses: 10, change: '-1' },
  { name: 'GHOST5', rank: 3, region: 'СЗФО', players: 5, rating: 1778, wins: 29, losses: 12, change: '+4' },
  { name: 'RECON', rank: 4, region: 'ПФО', players: 5, rating: 1754, wins: 27, losses: 14, change: '+7' },
  { name: 'ZERO IMPACT', rank: 5, region: 'СФО', players: 5, rating: 1721, wins: 25, losses: 15, change: '-2' },
  { name: 'DELTA FORCE', rank: 6, region: 'ЮФО', players: 5, rating: 1695, wins: 23, losses: 17, change: '0' },
];

function ChangeTag({ change }: { change: string }) {
  if (change === '0') return <span className="font-mono-custom text-xs" style={{ color: 'var(--text-muted)' }}>—</span>;
  const isUp = change.startsWith('+');
  return (
    <span
      className="font-mono-custom text-xs font-bold"
      style={{ color: isUp ? '#44ff88' : '#ff4444' }}
    >
      {change}
    </span>
  );
}

export default function TeamsSection() {
  return (
    <section className="py-16" style={{ background: 'var(--surface-2)' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="section-label mb-2">// ТОП ОРГАНИЗАЦИИ</div>
            <h2 className="font-oswald font-bold text-3xl text-white">КОМАНДЫ</h2>
          </div>
          <button className="font-oswald text-sm tracking-wider hover:opacity-70 transition-opacity flex items-center gap-1" style={{ color: 'var(--neon)' }}>
            ВСЕ КОМАНДЫ →
          </button>
        </div>

        <div className="overflow-x-auto scrollbar-thin">
          <table className="w-full">
            <thead>
              <tr className="text-left" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                {['#', 'КОМАНДА', 'РЕГИОН', 'РЕЙТИНГ', 'ПОБЕДЫ', 'ПОРАЖЕНИЯ', 'ИЗМЕНЕНИЕ'].map((h) => (
                  <th key={h} className="pb-3 pr-6 font-mono-custom text-xs" style={{ color: 'var(--text-muted)' }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {teams.map((team, i) => (
                <tr
                  key={i}
                  className="hover-card-lift cursor-pointer group"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
                >
                  <td className="py-4 pr-6">
                    <span className="font-mono-custom text-sm font-bold" style={{ color: team.rank <= 3 ? 'var(--neon)' : 'var(--text-muted)' }}>
                      {String(team.rank).padStart(2, '0')}
                    </span>
                  </td>
                  <td className="py-4 pr-6">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 clip-corner flex items-center justify-center text-xs font-bold font-oswald"
                        style={{ background: 'var(--surface-3)', color: 'var(--neon)' }}
                      >
                        {team.name.slice(0, 2)}
                      </div>
                      <span className="font-oswald font-bold text-white group-hover:text-yellow-300 transition-colors">
                        {team.name}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 pr-6">
                    <span className="rank-badge">{team.region}</span>
                  </td>
                  <td className="py-4 pr-6">
                    <span className="font-mono-custom font-bold text-sm" style={{ color: 'var(--neon)' }}>
                      {team.rating.toLocaleString()}
                    </span>
                  </td>
                  <td className="py-4 pr-6">
                    <span className="font-mono-custom text-sm text-white">{team.wins}</span>
                  </td>
                  <td className="py-4 pr-6">
                    <span className="font-mono-custom text-sm" style={{ color: 'var(--text-muted)' }}>
                      {team.losses}
                    </span>
                  </td>
                  <td className="py-4 pr-6">
                    <ChangeTag change={team.change} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
