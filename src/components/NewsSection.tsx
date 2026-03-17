const news = [
  {
    tag: 'ТУРНИР',
    tagColor: '#f5e642',
    title: 'NIGHTFALL выигрывает Tier6 Open Series Season 3',
    excerpt: 'Команда из Екатеринбурга взяла первый крупный трофей андеграунд сцены в этом году, обыграв AXIOM в финале со счётом 2:0.',
    author: 'redactor_t6',
    date: '15 марта 2026',
    views: '4.2K',
    readTime: '3 мин',
  },
  {
    tag: 'ТРАНСФЕР',
    tagColor: '#44aaff',
    title: 'Легендарный AWPer s1mplef присоединяется к GHOST5',
    excerpt: 'Один из лучших снайперов tier6 сцены подписал контракт с новой организацией после расставания с ZERO IMPACT.',
    author: 'insidert6',
    date: '14 марта 2026',
    views: '7.8K',
    readTime: '2 мин',
  },
  {
    tag: 'АНАЛИТИКА',
    tagColor: '#ff6644',
    title: 'Рейтинг команд: кто вырвался в ТОП-10 за февраль',
    excerpt: 'Разбираем изменения в рейтинге за прошедший месяц — RECON ворвались в пятёрку лучших.',
    author: 'analyst_pro',
    date: '13 марта 2026',
    views: '3.1K',
    readTime: '5 мин',
  },
  {
    tag: 'ИНТЕРВЬЮ',
    tagColor: '#aa44ff',
    title: '"Мы готовились к этому полгода" — интервью с капитаном AXIOM',
    excerpt: 'Поговорили с IGL команды о подготовке к финалу, новой тактике и планах на следующий сезон.',
    author: 'journalist_t6',
    date: '12 марта 2026',
    views: '5.5K',
    readTime: '7 мин',
  },
];

export default function NewsSection() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4">
      <div className="flex items-end justify-between mb-8">
        <div>
          <div className="section-label mb-2">// ПОСЛЕДНИЕ НОВОСТИ</div>
          <h2 className="font-oswald font-bold text-3xl text-white">НОВОСТИ</h2>
        </div>
        <button className="font-oswald text-sm tracking-wider hover:opacity-70 transition-opacity flex items-center gap-1" style={{ color: 'var(--neon)' }}>
          ВСЕ НОВОСТИ →
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {news.map((item, i) => (
          <article
            key={i}
            className="card-surface clip-corner p-5 hover-card-lift cursor-pointer group"
          >
            <div className="flex items-center gap-3 mb-3">
              <span
                className="tag font-mono-custom text-black font-bold"
                style={{ background: item.tagColor }}
              >
                {item.tag}
              </span>
              <span className="font-mono-custom text-xs" style={{ color: 'var(--text-muted)' }}>
                {item.date}
              </span>
            </div>
            <h3 className="font-oswald font-bold text-lg text-white mb-2 leading-tight group-hover:text-yellow-300 transition-colors" style={{ '--tw-text-opacity': 1 } as React.CSSProperties}>
              {item.title}
            </h3>
            <p className="font-rajdhani text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              {item.excerpt}
            </p>
            <div className="flex items-center justify-between text-xs font-mono-custom" style={{ color: 'var(--text-muted)' }}>
              <span>@{item.author}</span>
              <div className="flex items-center gap-3">
                <span>{item.views} просмотров</span>
                <span>{item.readTime}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
