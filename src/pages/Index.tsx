import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const slides = [
  {
    id: 1,
    tag: "01 / ВВЕДЕНИЕ",
    title: "Образование будущего",
    subtitle: "начинается сегодня",
    description:
      "Каждый студент уникален. Но традиционные учебные программы игнорируют это, предлагая один путь для всех.",
    accent: "Персонализация — это не тренд. Это необходимость.",
    visual: "intro",
    stats: [
      { value: "73%", label: "студентов теряют мотивацию" },
      { value: "2×", label: "медленнее учатся без персонализации" },
      { value: "40%", label: "бросают курсы на полпути" },
    ],
  },
  {
    id: 2,
    tag: "02 / ПРОБЛЕМА",
    title: "Один размер",
    subtitle: "не подходит всем",
    description:
      "Стандартные программы не учитывают скорость обучения, интересы и цели каждого человека. Студенты скучают или не успевают.",
    accent: "Результат — упущенный потенциал миллионов людей.",
    visual: "problem",
    problems: [
      { icon: "Clock", text: "Неподходящий темп обучения" },
      { icon: "Target", text: "Нет связи с личными целями" },
      { icon: "Frown", text: "Низкая вовлечённость" },
      { icon: "TrendingDown", text: "Высокий процент отсева" },
    ],
  },
  {
    id: 3,
    tag: "03 / ТЕХНОЛОГИЯ",
    title: "Как работает",
    subtitle: "наш ИИ",
    description:
      "Алгоритм анализирует ваш прогресс, стиль обучения и цели в реальном времени — и строит уникальный путь именно для вас.",
    accent: "Нейросеть обучается вместе с вами.",
    visual: "tech",
    steps: [
      { num: "01", title: "Анализ", desc: "ИИ изучает ваши сильные и слабые стороны" },
      { num: "02", title: "Планирование", desc: "Строит персональный маршрут из тысяч материалов" },
      { num: "03", title: "Адаптация", desc: "Корректирует план каждый день по вашим результатам" },
      { num: "04", title: "Результат", desc: "Вы достигаете цели в 3× быстрее" },
    ],
  },
  {
    id: 4,
    tag: "04 / ВОЗМОЖНОСТИ",
    title: "Ключевые",
    subtitle: "функции платформы",
    description:
      "Инструменты, которые делают обучение умным, интересным и эффективным для каждого студента.",
    accent: "",
    visual: "features",
    features: [
      { icon: "Brain", title: "ИИ-куратор", desc: "Персональный помощник 24/7" },
      { icon: "Map", title: "Умный маршрут", desc: "Индивидуальный учебный план" },
      { icon: "BarChart2", title: "Аналитика", desc: "Прогресс в реальном времени" },
      { icon: "Zap", title: "Адаптация", desc: "План меняется под вас ежедневно" },
      { icon: "Users", title: "Совместная работа", desc: "Группы по интересам и целям" },
      { icon: "Award", title: "Геймификация", desc: "Достижения и мотивация" },
    ],
  },
  {
    id: 5,
    tag: "05 / ПРЕИМУЩЕСТВА",
    title: "Что получают",
    subtitle: "ученики и педагоги",
    description:
      "Платформа создана для обеих сторон образовательного процесса.",
    accent: "",
    visual: "benefits",
    benefits: {
      students: [
        "Учишься в своём темпе",
        "Видишь свой прогресс каждый день",
        "Материалы подобраны под тебя",
        "Достигаешь цели быстрее",
      ],
      teachers: [
        "Автоматическое отслеживание прогресса",
        "Больше времени на живое общение",
        "Аналитика по каждому студенту",
        "Снижение административной нагрузки",
      ],
    },
  },
  {
    id: 6,
    tag: "06 / СТАРТ",
    title: "Начни учиться",
    subtitle: "по-новому",
    description:
      "Присоединяйся к тысячам студентов, которые уже открыли для себя персонализированное образование.",
    accent: "Твой путь. Твой темп. Твой результат.",
    visual: "cta",
    contacts: [
      { icon: "Mail", text: "hello@eduai.ru" },
      { icon: "Globe", text: "eduai.ru" },
      { icon: "MessageCircle", text: "@eduai_ru" },
    ],
  },
];

const GeoBg = ({ type }: { type: string }) => {
  if (type === "intro") return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="geo-circle geo-c1" />
      <div className="geo-circle geo-c2" />
      <div className="geo-hex" />
      <div className="geo-line geo-l1" />
      <div className="geo-line geo-l2" />
      <div className="geo-dot-grid" />
    </div>
  );
  if (type === "problem") return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="geo-triangle geo-t1" />
      <div className="geo-triangle geo-t2" />
      <div className="geo-ring" />
      <div className="geo-line geo-l3" />
    </div>
  );
  if (type === "tech") return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="geo-grid-lines" />
      <div className="geo-circle geo-c3" />
      <div className="geo-pulse" />
    </div>
  );
  if (type === "features") return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="geo-hex geo-hex2" />
      <div className="geo-circle geo-c4" />
      <div className="geo-dot-grid geo-dot2" />
    </div>
  );
  if (type === "benefits") return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="geo-ring geo-ring2" />
      <div className="geo-line geo-l4" />
      <div className="geo-triangle geo-t3" />
    </div>
  );
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="geo-circle geo-c1" />
      <div className="geo-circle geo-c5" />
      <div className="geo-hex geo-hex3" />
      <div className="geo-pulse geo-pulse2" />
    </div>
  );
};

export default function Index() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [dir, setDir] = useState<"next" | "prev">("next");

  const goTo = (idx: number) => {
    if (animating || idx === current) return;
    setDir(idx > current ? "next" : "prev");
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 380);
  };

  const next = () => goTo(Math.min(current + 1, slides.length - 1));
  const prev = () => goTo(Math.max(current - 1, 0));

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current, animating]);

  const slide = slides[current];

  return (
    <div className="pres-root">
      {/* Background */}
      <div className="pres-bg" />
      <div className="pres-bg-mesh" />

      {/* Header nav */}
      <nav className="pres-nav">
        <div className="pres-logo">EDU<span>AI</span></div>
        <div className="pres-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`pres-dot ${i === current ? "active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Слайд ${i + 1}`}
            />
          ))}
        </div>
        <div className="pres-counter">{String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</div>
      </nav>

      {/* Main slide */}
      <main className={`pres-slide ${animating ? (dir === "next" ? "slide-out-left" : "slide-out-right") : "slide-in"}`}>
        <GeoBg type={slide.visual} />

        <div className="pres-content">
          {/* Left column */}
          <div className="pres-left">
            <span className="pres-tag">{slide.tag}</span>
            <h1 className="pres-title">
              {slide.title}<br />
              <span className="pres-title-accent">{slide.subtitle}</span>
            </h1>
            <p className="pres-desc">{slide.description}</p>
            {slide.accent && (
              <div className="pres-accent-line">
                <div className="pres-accent-bar" />
                <span>{slide.accent}</span>
              </div>
            )}

            {/* Slide 1: stats */}
            {slide.stats && (
              <div className="pres-stats">
                {slide.stats.map((s, i) => (
                  <div key={i} className="pres-stat">
                    <div className="pres-stat-val">{s.value}</div>
                    <div className="pres-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Slide 6: contacts */}
            {slide.contacts && (
              <div className="pres-contacts">
                {slide.contacts.map((c, i) => (
                  <div key={i} className="pres-contact">
                    <Icon name={c.icon} size={18} />
                    <span>{c.text}</span>
                  </div>
                ))}
                <button className="pres-cta-btn">Попробовать бесплатно</button>
              </div>
            )}
          </div>

          {/* Right column */}
          <div className="pres-right">
            {/* Slide 2: problems */}
            {slide.problems && (
              <div className="pres-problems">
                {slide.problems.map((p, i) => (
                  <div key={i} className="pres-problem-card" style={{ animationDelay: `${i * 0.1}s` }}>
                    <div className="pres-problem-icon">
                      <Icon name={p.icon} size={22} fallback="AlertCircle" />
                    </div>
                    <span>{p.text}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Slide 3: steps */}
            {slide.steps && (
              <div className="pres-steps">
                {slide.steps.map((s, i) => (
                  <div key={i} className="pres-step" style={{ animationDelay: `${i * 0.1}s` }}>
                    <div className="pres-step-num">{s.num}</div>
                    <div>
                      <div className="pres-step-title">{s.title}</div>
                      <div className="pres-step-desc">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Slide 4: features */}
            {slide.features && (
              <div className="pres-features">
                {slide.features.map((f, i) => (
                  <div key={i} className="pres-feature-card" style={{ animationDelay: `${i * 0.08}s` }}>
                    <div className="pres-feature-icon">
                      <Icon name={f.icon} size={24} fallback="Star" />
                    </div>
                    <div className="pres-feature-title">{f.title}</div>
                    <div className="pres-feature-desc">{f.desc}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Slide 5: benefits */}
            {slide.benefits && (
              <div className="pres-benefits">
                <div className="pres-benefit-col">
                  <div className="pres-benefit-header">
                    <Icon name="GraduationCap" size={20} />
                    <span>Ученики</span>
                  </div>
                  {slide.benefits.students.map((b, i) => (
                    <div key={i} className="pres-benefit-item">
                      <div className="pres-benefit-check">✓</div>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
                <div className="pres-benefit-col">
                  <div className="pres-benefit-header">
                    <Icon name="BookOpen" size={20} />
                    <span>Педагоги</span>
                  </div>
                  {slide.benefits.teachers.map((b, i) => (
                    <div key={i} className="pres-benefit-item">
                      <div className="pres-benefit-check">✓</div>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Slide 1: visual orbit */}
            {slide.visual === "intro" && (
              <div className="pres-orbit">
                <div className="orbit-core">
                  <Icon name="Brain" size={36} />
                </div>
                <div className="orbit-ring orbit-r1">
                  <div className="orbit-planet op1"><Icon name="BookOpen" size={16} /></div>
                </div>
                <div className="orbit-ring orbit-r2">
                  <div className="orbit-planet op2"><Icon name="Lightbulb" size={14} /></div>
                </div>
                <div className="orbit-ring orbit-r3">
                  <div className="orbit-planet op3"><Icon name="Star" size={12} /></div>
                </div>
              </div>
            )}

            {/* Slide 6: visual */}
            {slide.visual === "cta" && (
              <div className="pres-cta-visual">
                <div className="cta-big-num">3×</div>
                <div className="cta-big-label">быстрее к цели</div>
                <div className="cta-ring" />
                <div className="cta-ring cta-ring2" />
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Bottom controls */}
      <footer className="pres-footer">
        <button className="pres-arrow" onClick={prev} disabled={current === 0}>
          <Icon name="ChevronLeft" size={22} />
        </button>
        <div className="pres-progress">
          <div className="pres-progress-bar" style={{ width: `${((current + 1) / slides.length) * 100}%` }} />
        </div>
        <button className="pres-arrow" onClick={next} disabled={current === slides.length - 1}>
          <Icon name="ChevronRight" size={22} />
        </button>
      </footer>
    </div>
  );
}
