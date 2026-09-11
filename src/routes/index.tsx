import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import serviceAreaMap from "@/assets/service-area-map.jpg";
import patrykPortrait from "@/assets/patryk-portrait.jpg";
import brykalskiPortrait from "@/assets/brykalski-portrait.jpg";
import networkHero from "@/assets/network-hero.jpg";

const PHONE = "+48 570 123 456";
const PHONE_TEL = "+48570123456";
const EMAIL = "kontakt@nbtech.pl";

const SERVICE_CITIES = [
  "Słomniki (baza)",
  "Kraków",
  "Miechów",
  "Proszowice",
  "Olkusz",
  "Skała",
  "Wolbrom",
  "okoliczne miejscowości",
];

const PC_SERVICES = [
  "Szybka diagnoza i naprawa usterek sprzętowych oraz programowych",
  "Składanie komputerów na zamówienie z podzespołów klienta",
  "Głęboka konserwacja — czyszczenie, wymiana past termoprzewodzących, obniżanie temperatur pracy (SPA dla PC)",
  "Instalacja i konfiguracja systemów operacyjnych",
];

const NETWORK_SERVICES = [
  "Projektowanie i prowadzenie okablowania strukturalnego dla domów i biur",
  "Estetyczny montaż szaf serwerowych (Rack)",
  "Zarabianie gniazd sieciowych i patchpaneli",
  "Zaawansowana konfiguracja sprzętu sieciowego: routery, switche, Access Pointy",
  "Podział i optymalizacja sieci (VLAN) — bezpieczeństwo i stabilność",
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NB Tech — Serwis PC i budowa sieci z dojazdem | Słomniki, Kraków" },
      {
        name: "description",
        content:
          "NB Tech — mobilny serwis PC i budowa sieci strukturalnych. Diagnoza, naprawa, konserwacja sprzętu oraz projektowanie infrastruktury sieciowej z dojazdem w promieniu 40 km od Słomnik (Kraków, Miechów, Proszowice).",
      },
      { property: "og:title", content: "NB Tech — Serwis PC i budowa sieci z dojazdem" },
      {
        property: "og:description",
        content:
          "Mobilny serwis PC i budowa sieci strukturalnych z dojazdem do klienta. Nowoczesne technologie, precyzja, pełna transparentność.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body antialiased selection:bg-white selection:text-black">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Logistics />
        <Process />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-8">
          <div className="text-xl font-bold tracking-tighter font-display">
            NB<span className="font-light text-muted-foreground">TECH</span>
          </div>
          <div className="hidden gap-6 text-[13px] font-medium text-muted-foreground md:flex">
            <a href="#uslugi" className="transition-colors hover:text-foreground">
              Usługi
            </a>
            <a href="#obszar" className="transition-colors hover:text-foreground">
              Obszar dojazdu
            </a>
            <a href="#zespol" className="transition-colors hover:text-foreground">
              Zespół
            </a>
            <a href="#kontakt" className="transition-colors hover:text-foreground">
              Kontakt
            </a>
          </div>
        </div>
        <a
          href={`tel:${PHONE_TEL}`}
          className="rounded-full bg-foreground px-5 py-2 text-[13px] font-medium text-background transition-all hover:bg-accent"
        >
          <span className="font-mono">{PHONE}</span>
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-28 text-center">
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10 opacity-60" />
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-4xl font-semibold tracking-tight font-display sm:text-6xl md:text-7xl">
          Profesjonalny serwis PC
          <br />
          i budowa sieci.
          <span className="text-muted-foreground"> Z dojazdem do Ciebie.</span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Kompleksowe wsparcie technologiczne dla klientów indywidualnych i firm.
          Diagnoza, naprawa i konserwacja sprzętu oraz projektowanie nowoczesnej
          infrastruktury sieciowej — opartej na aktualnych technologiach.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-foreground/5 px-6 py-3 text-sm font-medium">
            <span className="signal-dot size-2 rounded-full bg-signal"></span>
            Dostępni — dojazd w dniu zgłoszenia
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-foreground/5 px-6 py-3 text-sm font-medium font-mono text-muted-foreground">
            40 km od Słomnik
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`tel:${PHONE_TEL}`}
            className="rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-all hover:bg-accent"
          >
            Zadzwoń teraz
          </a>
          <a
            href="#uslugi"
            className="rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-muted-foreground"
          >
            Zobacz zakres usług
          </a>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="uslugi" className="mx-auto max-w-6xl border-t border-line px-6 py-24">
      <SectionLabel>Dwie dziedziny · jeden standard</SectionLabel>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {/* Serwis PC */}
        <article className="group relative overflow-hidden rounded-3xl bg-surface p-8 transition-all hover:bg-surface-hover sm:p-10">
          <div className="mb-8 flex items-center justify-between">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground font-mono">
              01 / Hardware
            </div>
            <span className="rounded-full border border-signal/20 bg-signal/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-signal">
              Dojazd do klienta
            </span>
          </div>
          <h3 className="text-3xl font-semibold leading-tight font-display">
            Profesjonalny serwis PC
          </h3>
          <p className="mt-4 text-muted-foreground">
            Szybka diagnoza i naprawa usterek sprzętowych oraz programowych.
            Przywracamy wydajność i stabilność komputera — od pasty
            termoprzewodzącej po konfigurację systemu.
          </p>
          <ul className="mt-8 space-y-4 text-sm">
            {PC_SERVICES.map((s) => (
              <li key={s} className="flex items-start gap-3">
                <span className="mt-1 text-muted-foreground font-mono">—</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-[12px] font-mono uppercase tracking-widest text-muted-foreground">
            Diagnoza · Konserwacja · Konfiguracja
          </div>
        </article>

        {/* Sieci */}
        <article className="group relative overflow-hidden rounded-3xl bg-surface p-8 transition-all hover:bg-surface-hover sm:p-10">
          <div className="mb-8 flex items-center justify-between">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground font-mono">
              02 / Infrastructure
            </div>
            <span className="rounded-full border border-signal/20 bg-signal/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-signal">
              Dojazd do klienta
            </span>
          </div>
          <h3 className="text-3xl font-semibold leading-tight font-display">
            Budowa i konfiguracja sieci
          </h3>
          <p className="mt-4 text-muted-foreground">
            Projektujemy i wdrażamy infrastrukturę sieciową bezpośrednio w Twoim
            domu lub biurze. Nowoczesne technologie, estetyczny montaż i
            zaawansowana konfiguracja zapewniająca bezpieczeństwo oraz stabilność.
          </p>
          <ul className="mt-8 space-y-4 text-sm">
            {NETWORK_SERVICES.map((s) => (
              <li key={s} className="flex items-start gap-3">
                <span className="mt-1 text-muted-foreground font-mono">—</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-[12px] font-mono uppercase tracking-widest text-muted-foreground">
            Okablowanie · Rack · VLAN
          </div>
        </article>
      </div>
    </section>
  );
}

function Logistics() {
  return (
    <section id="obszar" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col items-center gap-16 md:flex-row">
          <div className="flex-1">
            <SectionLabel>Obszar działania</SectionLabel>
            <h2 className="mt-4 text-4xl font-bold tracking-tight font-display">
              Dojeżdżamy. Ty nie ruszasz sprzętu.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Serwis mobilny w promieniu 40 km od Słomnik. Diagnozę i naprawę
              przeprowadzamy bezpośrednio u Ciebie — w domu lub firmie. Obsługujemy:
            </p>
            <div className="mt-8 grid grid-cols-1 gap-y-4 text-sm sm:grid-cols-2">
              {SERVICE_CITIES.map((c) => (
                <div key={c} className="flex items-center gap-3">
                  <div
                    className={`size-1.5 rounded-full ${
                      c.startsWith("Słomniki")
                        ? "bg-foreground"
                        : "bg-foreground/40"
                    }`}
                  ></div>
                  {c}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex-1">
            <div className="overflow-hidden rounded-3xl border border-line">
              <img
                src={serviceAreaMap}
                alt="Mapa obszaru dojazdu NB Tech — 40 km od Słomnik, Kraków, Miechów, Proszowice"
                width={1024}
                height={768}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover opacity-90"
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
              <span>Promień dojazdu</span>
              <span>40 km · Słomniki</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      n: "01",
      title: "Zgłoszenie",
      desc: "Dzwonisz lub piszesz. Opisujesz problem lub zakres prac — my proponujemy rozwiązanie i termin.",
    },
    {
      n: "02",
      title: "Dojazd i diagnoza",
      desc: "Przyjeżdżamy do Ciebie. Sprawdzamy sprzęt lub infrastrukturę i ustalamy transparentną wycenę.",
    },
    {
      n: "03",
      title: "Naprawa lub montaż",
      desc: "Wykonujemy pracę na miejscu: naprawa, konserwacja, okablowanie, konfiguracja sieci.",
    },
    {
      n: "04",
      title: "Test i przekazanie",
      desc: "Mierzymy temperatury, testujemy sieć i stability. Zostawiamy sprawny, udokumentowany sprzęt.",
    },
  ];
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionLabel>Jak pracujemy</SectionLabel>
        <h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight font-display">
          Nowoczesne technologie, pełna transparentność
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="border-t border-line pt-6">
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {s.n}
              </div>
              <h3 className="mt-3 text-xl font-semibold font-display">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section id="zespol" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionLabel>Zespół</SectionLabel>
        <h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight font-display">
          Dwóch specjalistów. Jeden standard pracy.
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <TeamCard
            img={patrykPortrait}
            name="Patryk"
            role="Serwis PC"
            desc="Diagnoza, składanie i głęboka konserwacja sprzętu. Każdy komponent sprawdzony, każda temperatura zmierzona — od diagnozy po pastę termoprzewodzącą."
          />
          <TeamCard
            img={brykalskiPortrait}
            name="Brykalski"
            role="Sieci i infrastruktura"
            desc="Okablowanie strukturalne, szafy rack i zaawansowana konfiguracja VLAN. Czyste patchpanele i sieć, która po prostu działa."
          />
        </div>
        <div className="mt-12 overflow-hidden rounded-3xl border border-line">
          <img
            src={networkHero}
            alt="Szafa rack i uporządkowane kable sieciowe — praca NB Tech"
            width={1024}
            height={1024}
            loading="lazy"
            className="aspect-[2/1] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function TeamCard({
  img,
  name,
  role,
  desc,
}: {
  img: string;
  name: string;
  role: string;
  desc: string;
}) {
  return (
    <article className="overflow-hidden rounded-3xl border border-line bg-background">
      <img
        src={img}
        alt={`${name} — ${role}, NB Tech`}
        width={640}
        height={640}
        loading="lazy"
        className="aspect-square w-full object-cover object-top"
      />
      <div className="p-7">
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal">
          {role}
        </div>
        <h3 className="mt-1.5 text-2xl font-semibold tracking-tight font-display">
          {name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
      </div>
    </article>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  return (
    <section id="kontakt" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionLabel>Kontakt</SectionLabel>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight font-display md:text-5xl">
              Zgłoś problem.
              <br />
              <span className="text-muted-foreground">Oddzwonimy z diagnozą.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Opisz krótko usterkę lub zakres prac. Oddzwonimy w dniu roboczym
              z konkretnym rozwiązaniem i terminem dojazdu.
            </p>
            <div className="mt-10">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                Telefon
              </div>
              <a
                href={`tel:${PHONE_TEL}`}
                className="mt-2 block text-4xl font-bold tracking-tighter font-mono transition-colors hover:text-muted-foreground md:text-5xl"
              >
                {PHONE}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="mt-4 inline-block border-b border-foreground/20 pb-1 text-lg transition-all hover:border-foreground"
              >
                {EMAIL}
              </a>
              <div className="mt-8 space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <span className="signal-dot size-1.5 rounded-full bg-signal"></span>
                  Dojazd w promieniu 40 km od Słomnik
                </div>
                <div className="flex items-center gap-3">
                  <span className="size-1.5 rounded-full bg-foreground/40"></span>
                  Kraków · Miechów · Proszowice i okolice
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setStatus("sent");
            }}
            className="rounded-3xl border border-line bg-surface p-7 sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Imię i nazwisko">
                <input
                  type="text"
                  required
                  placeholder="np. Anna Kowalska"
                  className="contact-input"
                />
              </Field>
              <Field label="Telefon">
                <input
                  type="tel"
                  required
                  placeholder="+48 ..."
                  className="contact-input"
                />
              </Field>
            </div>
            <div className="mt-5">
              <Field label="Rodzaj sprawy">
                <select className="contact-input">
                  <option>Serwis PC</option>
                  <option>Budowa i konfiguracja sieci</option>
                  <option>Inna sprawa</option>
                </select>
              </Field>
            </div>
            <div className="mt-5">
              <Field label="Opis problemu">
                <textarea
                  rows={4}
                  required
                  placeholder="Opisz krótko usterkę lub zakres prac..."
                  className="contact-input resize-none"
                />
              </Field>
            </div>
            <button
              type="submit"
              disabled={status === "sent"}
              className="mt-6 w-full rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-all hover:bg-accent disabled:opacity-60"
            >
              {status === "sent" ? "Dziękujemy — oddzwonimy" : "Wyślij zgłoszenie"}
            </button>
            <p className="mt-4 text-center text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
              Odpowiadamy tego samego dnia roboczego
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
        {label}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-signal font-mono">
      {children}
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <div className="text-xl font-bold tracking-tighter font-display">
          NB<span className="font-light text-muted-foreground">TECH</span>
        </div>
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono">
          Serwis PC · Budowa sieci · Słomniki i okolice
        </div>
        <div className="text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} NB Tech
        </div>
      </div>
    </footer>
  );
}
