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
            <div className="flex flex-col leading-none">
              <span className="font-mono-brand text-sm font-bold text-[hsl(var(--brand))] tracking-widest uppercase">ARDIVSIMF</span>
              <span className="font-mono-brand text-[10px] text-[hsl(var(--muted-foreground))] tracking-widest uppercase">Интернет-Провайдер</span>
            </div>
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

      {/* PROMO BANNER */}
      <section className="pt-16">
        <div className="relative w-full overflow-hidden" style={{ maxHeight: '520px' }}>
          <img
            src="https://cdn.poehali.dev/projects/cbfbf5f5-eecf-4afe-ba23-25fa47648f72/bucket/8900b1a9-f703-4605-8e1f-5c2efa5f1694.jpg"
            alt="Оформи заявку на подключение дома или МКД и получи 1 месяц бесплатного интернета"
            className="w-full object-cover object-center"
            style={{ maxHeight: '520px' }}
          />

        </div>
      </section>

      {/* QUICK ACTIONS */}
      <section className="py-6 px-6 border-b border-[hsl(var(--border))] bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
          <a
            href="#"
            className="flex flex-col items-center gap-2 py-5 px-4 border border-[hsl(var(--border))] hover:border-[hsl(var(--brand))] hover:bg-[hsl(var(--brand-light))] transition-colors group"
          >
            <Icon name="CreditCard" size={22} className="text-[hsl(var(--brand))]" />
            <span className="text-sm font-semibold text-center">Оплата</span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center gap-2 py-5 px-4 border border-[hsl(var(--border))] hover:border-[hsl(var(--brand))] hover:bg-[hsl(var(--brand-light))] transition-colors group"
          >
            <Icon name="Send" size={22} className="text-[hsl(var(--brand))]" />
            <span className="text-sm font-semibold text-center">Телеграм канал</span>
          </a>
          <a
            href="tel:88000000000"
            className="flex flex-col items-center gap-2 py-5 px-4 border border-[hsl(var(--border))] hover:border-[hsl(var(--brand))] hover:bg-[hsl(var(--brand-light))] transition-colors group"
          >
            <Icon name="Phone" size={22} className="text-[hsl(var(--brand))]" />
            <span className="text-sm font-semibold text-center">Позвонить</span>
          </a>
          <a
            href="#support"
            className="flex flex-col items-center gap-2 py-5 px-4 border border-[hsl(var(--brand))] bg-[hsl(var(--brand))] hover:bg-[hsl(216,80%,18%)] transition-colors group"
          >
            <Icon name="Headphones" size={22} className="text-white" />
            <span className="text-sm font-semibold text-center text-white">Тех. поддержка</span>
          </a>
        </div>
      </section>









      {/* CTA */}
      <section className="py-20 px-6 bg-[hsl(var(--brand))]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-black text-white mb-2">Оформить заявку на подключение</h2>
            <p className="text-white/70 text-sm">Оставьте заявку — мастер приедет в удобное время</p>
          </div>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-white text-[hsl(var(--brand))] font-semibold px-8 py-4 hover:bg-white/90 transition-colors whitespace-nowrap"
          >
            Оставить заявку
            <Icon name="ArrowRight" size={16} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6 border-t border-[hsl(var(--border))]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col leading-none">
            <span className="font-mono-brand text-sm font-bold text-[hsl(var(--brand))] tracking-widest uppercase">ARDIVSIMF</span>
            <span className="font-mono-brand text-[10px] text-[hsl(var(--muted-foreground))] tracking-widest uppercase">Интернет-Провайдер</span>
          </div>
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