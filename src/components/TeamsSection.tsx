const teams = [
  { name: 'ECHOFALL', rank: 1, region: 'RU', players: 1, rating: '—', wins: '—', losses: '—', change: '—' },
];

function ChangeTag({ change }: { change: string }) {
  if (change === '—') return <span className="font-mono-custom text-xs" style={{ color: 'var(--text-muted)' }}>—</span>;
  const isUp = change.startsWith('+');
  return (
    <span className="font-mono-custom text-xs font-bold" style={{ color: isUp ? '#44ff88' : '#ff4444' }}>
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
            <div className="section-label mb-2">// ОРГАНИЗАЦИИ</div>
            <h2 className="font-oswald font-bold text-3xl text-white">КОМАНДЫ</h2>
          </div>
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
                    <span className="font-mono-custom text-sm font-bold neon-text">
                      {String(team.rank).padStart(2, '0')}
                    </span>
                  </td>
                  <td className="py-4 pr-6">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 clip-corner flex items-center justify-center text-xs font-bold font-oswald"
                        style={{ background: 'var(--surface-3)', color: 'var(--neon)' }}
                      >
                        EC
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
                    <span className="font-mono-custom font-bold text-sm neon-text">{team.rating}</span>
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
                    <ChangeTag change={String(team.change)} />
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
