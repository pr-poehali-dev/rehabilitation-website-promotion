import { useState } from "react";
import Icon from "@/components/ui/icon";

const PHONE = "+7 (982) 758-90-40";
const PHONE_RAW = "+79827589040";
const WHATSAPP = `https://vk.me/79827589040`;
const HERO_IMAGE = "https://cdn.poehali.dev/projects/8b21d949-9bbf-49dd-b35d-700c3bbd0388/bucket/473a2234-fc8b-42d2-9d68-4c0ac3e74605.png";

const services = [
  "Реабилитация после травм и операций",
  "Реабилитация после инсульта",
  "Реабилитация при рассеянном склерозе",
  "Реабилитация при остеохондрозе, протрузиях и грыжах МП дисков",
  "Реабилитация при артрозах",
];

const reviews = [
  {
    name: "Игорь",
    date: "24.03.2026",
    text: "Илья отличный реабилитолог! У меня рассеянный склероз, 18 лет я не ходил 5 лет. Когда мы начали заниматься, я не мог сидеть не держась за ноги, был сильный тремор и спастики всего тела. За пол года занятий спастики стали значительно меньше, появилось чувство баланса, и я не только начал сидеть без тремора, но и начал стоять, приседаю по 30 раз с жилетом 5 кг, и наконец-то я пошёл, пока с ходунками, но пошёл. Спасибо тебе большое!",
  },
  {
    name: "Жиделев",
    date: "22.03.2026",
    text: "Хороший врач, знает что делает. Мне вылечил руку когда другие врачи сказали что из-за спазма руку не разогнёшь — он не смотря на это начал смело работать и разогнул. Видно что действительно учился хорошо и не зря, лечит людей. Есть результат, сразу говорит что у всех индивидуально — надо сначала смотреть.",
  },
  {
    name: "Ира",
    date: "20.03.2026",
    text: "Занимаемся с Ильей 4 месяца. У меня остеохондроз поясничного отдела и протрузии. Болевые ощущения прошли после 3-го занятия. На 4-м месяце повторный снимок показал что протрузии ушли на 3,5 мм! Появилась лёгкость в спине, укрепили мышечный корсет. В занятия входит целый комплекс: ЛФК, кинезиотерапия, точечная мануальная терапия, электромиостимуляция и растяжка. Спасибо огромное!!!",
  },
];

export default function Index() {
  const [activePage, setActivePage] = useState<"home" | "contacts">("home");

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "hsl(var(--background))" }}>
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-border">
        <div className="max-w-lg mx-auto px-5 h-14 flex items-center justify-between">
          <span className="font-bold text-base tracking-tight" style={{ color: "var(--green-dark)" }}>
            Реабилитолог
          </span>
          <div className="flex gap-1">
            <button
              onClick={() => setActivePage("home")}
              className="px-4 py-1.5 rounded-full text-sm font-medium transition-all"
              style={activePage === "home"
                ? { background: "var(--green-dark)", color: "white" }
                : { color: "#6b7280" }}
            >
              Главная
            </button>
            <button
              onClick={() => setActivePage("contacts")}
              className="px-4 py-1.5 rounded-full text-sm font-medium transition-all"
              style={activePage === "contacts"
                ? { background: "var(--green-dark)", color: "white" }
                : { color: "#6b7280" }}
            >
              Контакты
            </button>
          </div>
        </div>
      </nav>

      {activePage === "home" ? (
        <HomePage onContactClick={() => setActivePage("contacts")} />
      ) : (
        <ContactsPage />
      )}

      <footer className="border-t border-border mt-auto">
        <div className="max-w-lg mx-auto px-5 py-5 text-center text-xs text-muted-foreground">
          © 2026 Реабилитолог Илья Поляков · Все права защищены
        </div>
      </footer>
    </div>
  );
}

function HomePage({ onContactClick }: { onContactClick: () => void }) {
  return (
    <main className="flex-1">
      {/* HERO */}
      <section className="max-w-lg mx-auto px-5 pt-12 pb-10 text-center">
        <div className="animate-fade-up opacity-0-init">
          <div
            className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden shadow-lg"
            style={{ border: "3px solid var(--green-mid)" }}
          >
            <img src={HERO_IMAGE} alt="Илья Поляков" className="w-full h-full object-cover" />
          </div>
        </div>

        <h1
          className="text-3xl font-black uppercase tracking-tight mb-1 animate-fade-up opacity-0-init delay-100"
          style={{ color: "var(--green-dark)" }}
        >
          Илья Поляков
        </h1>
        <p
          className="text-sm font-semibold uppercase tracking-widest mb-2 animate-fade-up opacity-0-init delay-200"
          style={{ color: "var(--green-mid)" }}
        >
          Реабилитолог · 35 лет
        </p>
        <p className="text-xs text-muted-foreground mb-6 animate-fade-up opacity-0-init delay-200">
          Мануальный терапевт · Кинезиотерапевт · Инструктор ЛФК
        </p>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 justify-center mb-8 animate-fade-up opacity-0-init delay-200">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
            style={{ background: "var(--green-light)", color: "var(--green-dark)" }}>
            <Icon name="Home" size={12} />
            Выезд на дом
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
            style={{ background: "var(--green-light)", color: "var(--green-dark)" }}>
            <Icon name="Gift" size={12} />
            Первая консультация бесплатно
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
            style={{ background: "var(--green-light)", color: "var(--green-dark)" }}>
            <Icon name="MapPin" size={12} />
            Свердловская область
          </span>
        </div>

        <div className="flex flex-col items-center gap-3 animate-fade-up opacity-0-init delay-300">
          <button
            onClick={onContactClick}
            className="flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-base shadow-md transition-transform hover:scale-105 active:scale-95"
            style={{ background: "var(--green-dark)" }}
          >
            Записаться на консультацию
            <Icon name="ChevronRight" size={18} />
          </button>
          <a
            href={`tel:${PHONE_RAW}`}
            className="text-base font-medium transition-opacity hover:opacity-70"
            style={{ color: "var(--green-dark)" }}
          >
            {PHONE}
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-lg mx-auto px-5 pb-6">
        <div
          className="rounded-2xl p-6 animate-fade-up opacity-0-init delay-300"
          style={{ background: "white", boxShadow: "0 2px 20px rgba(0,0,0,0.06)" }}
        >
          <h2 className="font-bold text-xl mb-4" style={{ color: "var(--green-dark)" }}>О специалисте</h2>
          <p className="text-sm leading-relaxed text-foreground mb-4">
            Реабилитолог, кинезиотерапевт, специалист по мануальной терапии, инструктор-методист ЛФК, специалист по общей и специальной физической подготовке и спортивной реабилитации.
          </p>
          <div
            className="flex items-start gap-3 p-3.5 rounded-xl"
            style={{ background: "var(--green-light)" }}
          >
            <Icon name="GraduationCap" size={18} style={{ color: "var(--green-dark)", flexShrink: 0, marginTop: 1 }} />
            <p className="text-sm" style={{ color: "var(--green-dark)" }}>
              Уральский Федеральный Университет им. Б.Н. Ельцина — адаптивная физическая культура
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-lg mx-auto px-5 pb-6">
        <div
          className="rounded-2xl p-6 animate-fade-up opacity-0-init delay-400"
          style={{ background: "white", boxShadow: "0 2px 20px rgba(0,0,0,0.06)" }}
        >
          <h2 className="font-bold text-xl mb-5" style={{ color: "var(--green-dark)" }}>
            Услуги
          </h2>
          <ul className="space-y-3.5">
            {services.map((s, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ background: "var(--green-light)" }}
                >
                  <Icon name="Check" size={12} style={{ color: "var(--green-dark)" }} />
                </span>
                <span className="text-sm leading-snug">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="max-w-lg mx-auto px-5 pb-8">
        <h2 className="font-bold text-xl mb-4 animate-fade-up opacity-0-init" style={{ color: "var(--green-dark)" }}>
          Отзывы
        </h2>
        <div className="space-y-4">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="rounded-2xl p-5 animate-fade-up opacity-0-init"
              style={{ background: "white", boxShadow: "0 2px 20px rgba(0,0,0,0.06)", animationDelay: `${0.1 * i}s` }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                    style={{ background: "var(--green-dark)" }}
                  >
                    {r.name[0]}
                  </div>
                  <span className="font-semibold text-sm">{r.name}</span>
                </div>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(s => (
                    <Icon key={s} name="Star" size={12} style={{ color: "#f59e0b", fill: "#f59e0b" }} />
                  ))}
                </div>
              </div>
              <p className="text-sm leading-relaxed text-foreground mb-2">{r.text}</p>
              <p className="text-xs text-muted-foreground">{r.date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-lg mx-auto px-5 pb-12">
        <div
          className="rounded-2xl p-6 text-center animate-fade-up opacity-0-init delay-500"
          style={{ background: "var(--green-dark)" }}
        >
          <p className="text-sm mb-1" style={{ color: "rgba(255,255,255,0.75)" }}>Первая консультация — бесплатно</p>
          <p className="font-bold text-xl mb-0.5 text-white">Илья Поляков</p>
          <p className="font-bold text-2xl mb-5 text-white">{PHONE}</p>
          <div className="flex gap-3 justify-center">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm text-white"
              style={{ background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.3)" }}
            >
              <Icon name="MessageCircle" size={16} />
              WhatsApp
            </a>
            <a
              href={`tel:${PHONE_RAW}`}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm"
              style={{ background: "white", color: "var(--green-dark)" }}
            >
              <Icon name="Phone" size={16} />
              Позвонить
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactsPage() {
  return (
    <main className="flex-1 max-w-lg mx-auto px-5 pt-10 pb-12 w-full">
      <h1
        className="text-2xl font-black mb-8 animate-fade-up opacity-0-init"
        style={{ color: "var(--green-dark)" }}
      >
        Контакты
      </h1>

      {/* Specialist card */}
      <div
        className="rounded-2xl p-6 mb-4 animate-fade-up opacity-0-init delay-100"
        style={{ background: "white", boxShadow: "0 2px 20px rgba(0,0,0,0.06)" }}
      >
        <div className="flex items-center gap-4 mb-5">
          <div
            className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0"
            style={{ border: "2px solid var(--green-mid)" }}
          >
            <img src={HERO_IMAGE} alt="Илья Поляков" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="font-bold text-lg leading-tight" style={{ color: "var(--green-dark)" }}>Илья Поляков</p>
            <p className="text-sm text-muted-foreground">Реабилитолог · Мануальный терапевт · Кинезиотерапевт</p>
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-5">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
            style={{ background: "var(--green-light)", color: "var(--green-dark)" }}>
            <Icon name="Home" size={11} />
            Выезд на дом
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
            style={{ background: "var(--green-light)", color: "var(--green-dark)" }}>
            <Icon name="Gift" size={11} />
            Первая консультация бесплатно
          </span>
        </div>

        <div className="space-y-3">
          <a
            href={`tel:${PHONE_RAW}`}
            className="flex items-center gap-3 p-3.5 rounded-xl"
            style={{ background: "var(--green-light)" }}
          >
            <span
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "var(--green-dark)" }}
            >
              <Icon name="Phone" size={16} style={{ color: "white" }} />
            </span>
            <div>
              <p className="text-xs text-muted-foreground leading-none mb-0.5">Телефон</p>
              <p className="font-semibold text-sm" style={{ color: "var(--green-dark)" }}>{PHONE}</p>
            </div>
          </a>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3.5 rounded-xl"
            style={{ background: "var(--green-light)" }}
          >
            <span
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "var(--green-dark)" }}
            >
              <Icon name="MessageCircle" size={16} style={{ color: "white" }} />
            </span>
            <div>
              <p className="text-xs text-muted-foreground leading-none mb-0.5">WhatsApp</p>
              <p className="font-semibold text-sm" style={{ color: "var(--green-dark)" }}>Написать сообщение</p>
            </div>
          </a>

          <div
            className="flex items-center gap-3 p-3.5 rounded-xl"
            style={{ background: "var(--green-light)" }}
          >
            <span
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "var(--green-dark)" }}
            >
              <Icon name="MapPin" size={16} style={{ color: "white" }} />
            </span>
            <div>
              <p className="text-xs text-muted-foreground leading-none mb-0.5">Район работы</p>
              <p className="font-semibold text-sm" style={{ color: "var(--green-dark)" }}>Свердловская область</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div
        className="rounded-2xl p-6 text-center animate-fade-up opacity-0-init delay-200"
        style={{ background: "var(--green-dark)" }}
      >
        <p className="font-bold text-lg mb-1 text-white">Готовы к восстановлению?</p>
        <p className="text-sm mb-1" style={{ color: "rgba(255,255,255,0.75)" }}>
          Первая консультация — бесплатно. Выезд на дом.
        </p>
        <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.75)" }}>
          Обсудим вашу ситуацию и составим план реабилитации
        </p>
        <div className="flex gap-3 justify-center">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm text-white"
            style={{ background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.3)" }}
          >
            <Icon name="MessageCircle" size={16} />
            WhatsApp
          </a>
          <a
            href={`tel:${PHONE_RAW}`}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm"
            style={{ background: "white", color: "var(--green-dark)" }}
          >
            <Icon name="Phone" size={16} />
            Позвонить
          </a>
        </div>
      </div>
    </main>
  );
}