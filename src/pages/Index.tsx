import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { label: "Услуги", href: "#services" },
  { label: "Тарифы", href: "#pricing" },
  { label: "Поддержка", href: "#support" },
];

const SERVICES = [
  {
    icon: "Zap",
    tag: "ОПТОВОЛОКНО",
    title: "Скорость без компромиссов",
    desc: "Симметричный канал до 1 Гбит/с. Стабильное соединение 24/7 без просадок в часы пик.",
    speed: "до 1000 Мбит/с",
  },
  {
    icon: "Radio",
    tag: "5G",
    title: "Свобода подключения",
    desc: "Беспроводной интернет нового поколения. Идеально для частных домов и дач.",
    speed: "до 300 Мбит/с",
  },
  {
    icon: "Wifi",
    tag: "ADSL",
    title: "Надёжный базовый тариф",
    desc: "Доступное подключение по телефонной линии. Работает там, где ещё нет оптоволокна.",
    speed: "до 24 Мбит/с",
  },
];

const PLANS = [
  {
    name: "Старт",
    speed: "100",
    price: "390",
    tech: "ADSL",
    features: ["Безлимитный трафик", "Техподдержка 9–21", "Статический IP — 150 ₽/мес"],
    accent: false,
  },
  {
    name: "Оптимум",
    speed: "500",
    price: "690",
    tech: "Оптоволокно",
    features: ["Безлимитный трафик", "Техподдержка 24/7", "Статический IP включён", "Wi-Fi роутер в аренду"],
    accent: true,
  },
  {
    name: "Максимум",
    speed: "1000",
    price: "990",
    tech: "Оптоволокно",
    features: ["Безлимитный трафик", "Приоритетная поддержка", "Статический IP включён", "Wi-Fi роутер в подарок"],
    accent: false,
  },
];

const FAQ = [
  {
    q: "Как подключить интернет?",
    a: "Оставьте заявку на сайте или позвоните нам. Мастер приедет в удобное время и подключит всё бесплатно.",
  },
  {
    q: "Сколько времени занимает подключение?",
    a: "Подключение занимает от 1 до 3 рабочих дней после обработки заявки.",
  },
  {
    q: "Можно ли сменить тариф?",
    a: "Да, смена тарифа доступна в личном кабинете или по звонку. Изменения вступают в силу с 1-го числа следующего месяца.",
  },
  {
    q: "Что делать, если пропал интернет?",
    a: "Позвоните на горячую линию 8-800-000-00-00 (звонок бесплатный) или напишите в чат. Среднее время ответа — 3 минуты.",
  },
];

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[hsl(var(--border))]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="font-mono-brand text-xs font-medium text-[hsl(var(--brand-accent))] tracking-widest uppercase">ВолнаНет</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#pricing"
            className="hidden md:inline-flex items-center gap-2 bg-[hsl(var(--brand))] text-white text-sm font-medium px-5 py-2.5 hover:bg-[hsl(216,80%,18%)] transition-colors"
          >
            Подключиться
          </a>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-[hsl(var(--border))] px-6 py-4 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#pricing"
              className="inline-flex justify-center bg-[hsl(var(--brand))] text-white text-sm font-medium px-5 py-2.5"
              onClick={() => setMenuOpen(false)}
            >
              Подключиться
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-mono-brand text-xs tracking-widest text-[hsl(var(--brand-accent))] uppercase mb-6 block animate-fade-in">
              Интернет-провайдер
            </span>
            <h1 className="text-5xl md:text-6xl font-black leading-[1.05] tracking-tight mb-6 animate-fade-in-up delay-100">
              Интернет,<br />
              которому<br />
              <span className="text-[hsl(var(--brand))]">доверяют</span>
            </h1>
            <p className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed mb-10 animate-fade-in-up delay-200">
              Оптоволокно, 5G и ADSL — выберите технологию,
              подходящую именно вашему дому или офису.
            </p>
            <div className="flex flex-wrap gap-3 animate-fade-in-up delay-300">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 bg-[hsl(var(--brand))] text-white font-semibold px-7 py-3.5 hover:bg-[hsl(216,80%,18%)] transition-colors"
              >
                Выбрать тариф
                <Icon name="ArrowRight" size={16} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 border border-[hsl(var(--border))] text-[hsl(var(--foreground))] font-medium px-7 py-3.5 hover:border-[hsl(var(--brand))] transition-colors"
              >
                Узнать больше
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-px bg-[hsl(var(--border))] animate-fade-in-up delay-400">
            {[
              { num: "15+", label: "лет на рынке" },
              { num: "120К", label: "абонентов" },
              { num: "99.9%", label: "uptime сети" },
              { num: "24/7", label: "поддержка" },
            ].map((stat) => (
              <div key={stat.num} className="bg-white p-8 flex flex-col gap-1">
                <span className="text-3xl font-black text-[hsl(var(--brand))]">{stat.num}</span>
                <span className="text-sm text-[hsl(var(--muted-foreground))]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 h-px bg-[hsl(var(--border))]" />
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <span className="font-mono-brand text-xs tracking-widest text-[hsl(var(--brand-accent))] uppercase mb-3 block">
              Технологии
            </span>
            <h2 className="text-4xl font-black tracking-tight">Наши услуги</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-[hsl(var(--border))]">
            {SERVICES.map((s, i) => (
              <div key={i} className="bg-white p-8 flex flex-col gap-4 group hover:bg-[hsl(var(--brand-light))] transition-colors">
                <div className="w-10 h-10 flex items-center justify-center border border-[hsl(var(--border))] group-hover:border-[hsl(var(--brand))] transition-colors">
                  <Icon name={s.icon} size={18} />
                </div>
                <span className="font-mono-brand text-[10px] tracking-widest text-[hsl(var(--brand-accent))] uppercase">
                  {s.tag}
                </span>
                <h3 className="text-xl font-bold leading-tight">{s.title}</h3>
                <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed flex-1">{s.desc}</p>
                <div className="pt-4 border-t border-[hsl(var(--border))]">
                  <span className="font-mono-brand text-sm font-medium text-[hsl(var(--brand))]">{s.speed}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 px-6 bg-[hsl(0,0%,97%)]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <span className="font-mono-brand text-xs tracking-widest text-[hsl(var(--brand-accent))] uppercase mb-3 block">
              Стоимость
            </span>
            <h2 className="text-4xl font-black tracking-tight">Тарифы</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PLANS.map((plan, i) => (
              <div
                key={i}
                className={`flex flex-col p-8 border ${
                  plan.accent
                    ? "bg-[hsl(var(--brand))] text-white border-[hsl(var(--brand))]"
                    : "bg-white border-[hsl(var(--border))]"
                }`}
              >
                {plan.accent && (
                  <span className="font-mono-brand text-[10px] tracking-widest text-[hsl(var(--brand-accent))] uppercase mb-4 inline-block bg-white/10 px-2 py-1 self-start">
                    Популярный
                  </span>
                )}
                <div className="mb-2">
                  <span className={`font-mono-brand text-xs tracking-widest uppercase ${plan.accent ? "text-white/60" : "text-[hsl(var(--muted-foreground))]"}`}>
                    {plan.tech}
                  </span>
                </div>
                <h3 className="text-2xl font-black mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-5xl font-black">{plan.speed}</span>
                  <span className={`text-sm ${plan.accent ? "text-white/70" : "text-[hsl(var(--muted-foreground))]"}`}>Мбит/с</span>
                </div>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-3xl font-bold">{plan.price} ₽</span>
                  <span className={`text-sm ${plan.accent ? "text-white/70" : "text-[hsl(var(--muted-foreground))]"}`}>/мес</span>
                </div>

                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-2.5 text-sm">
                      <Icon
                        name="Check"
                        size={14}
                        className={`mt-0.5 shrink-0 ${plan.accent ? "text-[hsl(var(--brand-accent))]" : "text-[hsl(var(--brand))]"}`}
                      />
                      <span className={plan.accent ? "text-white/85" : "text-[hsl(var(--muted-foreground))]"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3.5 text-sm font-semibold transition-colors ${
                    plan.accent
                      ? "bg-white text-[hsl(var(--brand))] hover:bg-white/90"
                      : "border border-[hsl(var(--brand))] text-[hsl(var(--brand))] hover:bg-[hsl(var(--brand-light))]"
                  }`}
                >
                  Подключить
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section id="support" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <span className="font-mono-brand text-xs tracking-widest text-[hsl(var(--brand-accent))] uppercase mb-3 block">
              Помощь
            </span>
            <h2 className="text-4xl font-black tracking-tight">Поддержка</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="flex flex-col gap-4">
              {[
                { icon: "Phone", label: "Горячая линия", value: "8-800-000-00-00", note: "Звонок бесплатный, 24/7" },
                { icon: "MessageSquare", label: "Онлайн-чат", value: "Написать в чат", note: "Среднее время ответа — 3 мин" },
                { icon: "Mail", label: "Электронная почта", value: "help@volnanet.ru", note: "Ответ в течение 1 рабочего дня" },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-4 p-6 bg-white border border-[hsl(var(--border))]">
                  <div className="w-10 h-10 flex items-center justify-center border border-[hsl(var(--border))] shrink-0">
                    <Icon name={c.icon} size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-[hsl(var(--muted-foreground))] mb-0.5">{c.label}</p>
                    <p className="font-semibold text-[hsl(var(--brand))]">{c.value}</p>
                    <p className="text-xs text-[hsl(var(--muted-foreground))] mt-0.5">{c.note}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-0 divide-y divide-[hsl(var(--border))]">
              {FAQ.map((item, i) => (
                <div key={i}>
                  <button
                    className="w-full flex items-start justify-between gap-4 py-5 text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-medium text-sm leading-snug">{item.q}</span>
                    <Icon
                      name={openFaq === i ? "Minus" : "Plus"}
                      size={16}
                      className="shrink-0 mt-0.5 text-[hsl(var(--muted-foreground))]"
                    />
                  </button>
                  {openFaq === i && (
                    <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed pb-5">
                      {item.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[hsl(var(--brand))]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-black text-white mb-2">Готовы подключиться?</h2>
            <p className="text-white/70 text-sm">Оставьте заявку — мастер приедет в удобное время</p>
          </div>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-white text-[hsl(var(--brand))] font-semibold px-8 py-4 hover:bg-white/90 transition-colors whitespace-nowrap"
          >
            Выбрать тариф
            <Icon name="ArrowRight" size={16} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6 border-t border-[hsl(var(--border))]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-mono-brand text-xs tracking-widest text-[hsl(var(--brand-accent))] uppercase">
            ВолнаНет
          </span>
          <nav className="flex gap-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <span className="text-xs text-[hsl(var(--muted-foreground))]">© 2026 ВолнаНет</span>
        </div>
      </footer>
    </div>
  );
}
