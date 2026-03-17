export default function Footer() {
  return (
    <footer className="py-10 mt-0" style={{ borderTop: '1px solid rgba(245,230,66,0.1)', background: 'var(--surface)' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="font-oswald font-bold text-xl tracking-widest text-white mb-1">
              TIER<span className="neon-text">6</span>.GG
            </div>
            <div className="font-rajdhani text-sm" style={{ color: 'var(--text-muted)' }}>
              Независимый портал андеграунд CS сцены России
            </div>
          </div>

          <div className="flex flex-wrap gap-6">
            {['О проекте', 'Правила', 'Контакт', 'API', 'Вакансии'].map((link) => (
              <button
                key={link}
                className="font-rajdhani text-sm transition-colors hover:text-white"
                style={{ color: 'var(--text-muted)' }}
              >
                {link}
              </button>
            ))}
          </div>
        </div>

        <div
          className="mt-8 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-2"
          style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
        >
          <span className="font-mono-custom text-xs" style={{ color: 'var(--text-muted)' }}>
            © 2026 TIER6.GG — Все права защищены
          </span>
          <span className="font-mono-custom text-xs" style={{ color: 'var(--text-muted)' }}>
            Данные обновляются каждые 15 минут
          </span>
        </div>
      </div>
    </footer>
  );
}
