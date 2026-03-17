const topStats = [
  { label: 'Игроков', value: '1' },
  { label: 'Команд', value: '1' },
  { label: 'Матчей сыграно', value: '—' },
  { label: 'Турниров', value: '—' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-14 overflow-hidden grid-bg">
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
              Рейтинги, статистика и профили игроков андеграунд сцены Counter-Strike.
            </p>
            <div
              className="flex flex-wrap gap-3 opacity-0 animate-fade-in-up delay-300"
              style={{ animationFillMode: 'forwards' }}
            >
              <button className="clip-corner neon-bg px-6 py-2.5 font-oswald font-semibold tracking-wider text-sm hover:opacity-90 transition-opacity">
                РЕЙТИНГИ
              </button>
              <button
                className="clip-corner px-6 py-2.5 font-oswald font-semibold tracking-wider text-sm transition-colors"
                style={{ border: '1px solid rgba(245,230,66,0.3)', color: 'var(--neon)' }}
              >
                КОМАНДЫ
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="section-label mb-3">// FEATURED PLAYER</div>
            <div
              className="card-surface clip-corner-lg p-6 opacity-0 animate-fade-in-up delay-300"
              style={{ animationFillMode: 'forwards' }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="font-oswald font-bold text-3xl neon-text">spokyso</div>
                  <div className="font-rajdhani text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
                    Echofall · 🇷🇺
                  </div>
                </div>
                <div
                  className="text-xs font-mono-custom font-bold px-3 py-1 clip-corner"
                  style={{ background: 'var(--surface-3)', color: 'var(--neon)', border: '1px solid rgba(245,230,66,0.3)' }}
                >
                  #1 RU
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'Rating 2.0', value: '—' },
                  { label: 'K/D', value: '—' },
                  { label: 'ADR', value: '—' },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="font-mono-custom font-bold text-xl text-white">{s.value}</div>
                    <div className="font-rajdhani text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="grid grid-cols-2 gap-3 opacity-0 animate-fade-in-up delay-400"
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
