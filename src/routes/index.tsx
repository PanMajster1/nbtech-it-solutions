import { createFileRoute } from "@tanstack/react-router";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import customPc from "@/assets/custom-pc.jpg";
import networkHero from "@/assets/network-hero.jpg";
import pcService from "@/assets/pc-service.jpg";
import serviceAreaMap from "@/assets/service-area-map.jpg";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

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
  "Diagnoza i naprawa usterek sprzętowych oraz programowych",
  "Składanie komputerów z podzespołów powierzonych przez klienta",
  "Czyszczenie, wymiana past termoprzewodzących i obniżanie temperatur pracy",
  "Instalacja i konfiguracja systemów operacyjnych",
];

const NETWORK_SERVICES = [
  "Projektowanie i prowadzenie okablowania dla domów i biur",
  "Estetyczny montaż szaf serwerowych",
  "Zarabianie gniazd sieciowych i paneli krosowych",
  "Konfiguracja routerów, przełączników i punktów dostępowych",
  "Podział i optymalizacja sieci VLAN",
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NB Tech — serwis PC i sieci | Słomniki" },
      {
        name: "description",
        content:
          "Serwis komputerów w Słomnikach oraz budowa sieci z dojazdem do 40 km. Diagnoza, konserwacja, okablowanie i konfiguracja.",
      },
      { property: "og:title", content: "NB Tech — serwis PC i budowa sieci" },
      {
        property: "og:description",
        content:
          "Naprawa komputerów w serwisie oraz infrastruktura sieciowa z dojazdem do klienta.",
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
    <div className="min-h-screen bg-background font-body text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Logistics />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("nbtech-motyw");
    const shouldUseDark = saved ? saved === "ciemny" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", shouldUseDark);
    setDark(shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("nbtech-motyw", next ? "ciemny" : "jasny");
  };

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label={dark ? "Włącz jasny motyw" : "Włącz ciemny motyw"}
      title={dark ? "Jasny motyw" : "Ciemny motyw"}
      className="shrink-0 rounded-full"
    >
      {dark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
    </Button>
  );
}

function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="flex min-w-0 items-center gap-7">
          <a href="#poczatek" className="shrink-0 text-xl font-bold font-display" aria-label="NB Tech — początek strony">
            NB <span className="font-normal text-muted-foreground">TECH</span>
          </a>
          <div className="hidden gap-6 text-sm font-medium text-muted-foreground lg:flex">
            <a href="#uslugi" className="transition-colors hover:text-foreground">Usługi</a>
            <a href="#realizacje" className="transition-colors hover:text-foreground">Realizacje</a>
            <a href="#obszar" className="transition-colors hover:text-foreground">Dojazd</a>
            <a href="#kontakt" className="transition-colors hover:text-foreground">Kontakt</a>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="rounded-full px-3 sm:px-5">
            <a href={`tel:${PHONE_TEL}`}><span className="hidden sm:inline">{PHONE}</span><span className="sm:hidden">Zadzwoń</span></a>
          </Button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="poczatek" className="relative overflow-hidden pb-24 pt-20 text-center sm:pb-28 sm:pt-24">
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10 opacity-60" />
      <div className="mx-auto max-w-4xl px-6">
        <p className="text-sm font-semibold text-signal">Serwis komputerowy i infrastruktura sieciowa</p>
        <h1 className="mt-5 text-4xl font-semibold leading-tight font-display sm:text-6xl md:text-7xl">
          Sprawny komputer.<br />Stabilna sieć.
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Naprawiamy i konserwujemy komputery w naszym serwisie. Sieci projektujemy, montujemy i konfigurujemy z dojazdem do domu lub firmy.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3 text-sm font-medium">
          <span className="rounded-full border border-line bg-surface px-5 py-2.5">Serwis PC — sprzęt dostarczasz do nas</span>
          <span className="rounded-full border border-line bg-surface px-5 py-2.5">Sieci — dojazd do 40 km od Słomnik</span>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="rounded-full"><a href={`tel:${PHONE_TEL}`}>Zadzwoń teraz</a></Button>
          <Button asChild size="lg" variant="outline" className="rounded-full"><a href="#uslugi">Zobacz usługi</a></Button>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="uslugi" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionLabel>Zakres usług</SectionLabel>
        <h2 className="mt-4 max-w-2xl text-4xl font-semibold font-display">Dwa obszary, konkretny zakres prac</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <ServiceCard title="Profesjonalny serwis PC" note="Naprawa w naszym serwisie" services={PC_SERVICES} />
          <ServiceCard title="Budowa i konfiguracja sieci" note="Realizacja z dojazdem" services={NETWORK_SERVICES} />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, note, services }: { title: string; note: string; services: string[] }) {
  return (
    <article className="rounded-lg border border-line bg-surface p-7 sm:p-9">
      <span className="inline-flex rounded-full bg-signal/10 px-3 py-1 text-xs font-semibold text-signal">{note}</span>
      <h3 className="mt-6 text-3xl font-semibold font-display">{title}</h3>
      <ul className="mt-7 space-y-4 text-sm leading-relaxed">
        {services.map((service) => <li key={service} className="flex items-start gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-signal" /><span>{service}</span></li>)}
      </ul>
    </article>
  );
}

function Gallery() {
  const photos = [
    { src: pcService, alt: "Komputer podczas profesjonalnej konserwacji w serwisie NB Tech", title: "Serwis i konserwacja" },
    { src: customPc, alt: "Komputer stacjonarny złożony i skonfigurowany przez NB Tech", title: "Składanie komputerów" },
  ];
  return (
    <section id="realizacje" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionLabel>Realizacje</SectionLabel>
        <h2 className="mt-4 text-4xl font-semibold font-display">Komputery, nad którymi pracujemy</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {photos.map((photo) => (
            <figure key={photo.title} className="overflow-hidden rounded-lg border border-line bg-background">
              <img src={photo.src} alt={photo.alt} width={1280} height={960} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <figcaption className="p-5 text-lg font-semibold">{photo.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Logistics() {
  return (
    <section id="obszar" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:grid-cols-2 md:items-center">
        <div>
          <SectionLabel>Dojazd przy usługach sieciowych</SectionLabel>
          <h2 className="mt-4 text-4xl font-semibold font-display">Sieci wykonujemy na miejscu</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">Przy projektowaniu, montażu i konfiguracji sieci dojeżdżamy do domów i firm w promieniu 40 km od Słomnik.</p>
          <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
            {SERVICE_CITIES.map((city) => <div key={city} className="flex items-center gap-3"><span className="size-1.5 rounded-full bg-signal" />{city}</div>)}
          </div>
          <p className="mt-8 text-sm font-medium text-muted-foreground">Naprawy komputerów wykonujemy w naszym serwisie — bez dojazdu do klienta.</p>
        </div>
        <div>
          <img src={serviceAreaMap} alt="Mapa obszaru dojazdu przy usługach sieciowych — 40 km od Słomnik" width={1024} height={768} loading="lazy" className="aspect-[4/3] w-full rounded-lg border border-line object-cover" />
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    ["01", "Zgłoszenie", "Dzwonisz lub wysyłasz formularz. Opisujesz problem albo planowane prace."],
    ["02", "Wstępna ocena", "Ustalamy zakres, sposób przekazania sprzętu lub termin wizyty przy pracach sieciowych."],
    ["03", "Realizacja", "Naprawiamy komputer w serwisie albo wykonujemy instalację sieciową na miejscu."],
    ["04", "Testy", "Sprawdzamy temperatury, stabilność sprzętu lub parametry sieci i przekazujemy wynik prac."],
  ];
  return (
    <section className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionLabel>Jak pracujemy</SectionLabel>
        <h2 className="mt-4 text-4xl font-semibold font-display">Od zgłoszenia do sprawdzonego rozwiązania</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([number, title, description]) => <div key={number} className="border-t border-line pt-5"><div className="text-sm font-semibold text-signal">{number}</div><h3 className="mt-3 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p></div>)}
        </div>
      </div>
    </section>
  );
}

type FormStatus = "idle" | "submitting" | "sent" | "error";

function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    const form = event.currentTarget;
    const data = new FormData(form);
    const { error } = await supabase.from("contact_requests").insert({
      full_name: String(data.get("full_name") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      request_type: String(data.get("request_type") ?? ""),
      message: String(data.get("message") ?? "").trim(),
    });
    if (error) {
      setStatus("error");
      return;
    }
    form.reset();
    setStatus("sent");
  }

  return (
    <section id="kontakt" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 lg:grid-cols-2">
        <div>
          <SectionLabel>Kontakt</SectionLabel>
          <h2 className="mt-4 text-4xl font-semibold font-display md:text-5xl">Opisz problem. Odezwiemy się z konkretną odpowiedzią.</h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">Odpowiadamy możliwie szybko — często jeszcze tego samego dnia, również poza dniami roboczymi.</p>
          <a href={`tel:${PHONE_TEL}`} className="mt-10 block text-3xl font-bold transition-colors hover:text-signal sm:text-4xl">{PHONE}</a>
          <a href={`mailto:${EMAIL}`} className="mt-3 inline-block text-lg text-muted-foreground transition-colors hover:text-foreground">{EMAIL}</a>
        </div>
        <form onSubmit={submitForm} className="rounded-lg border border-line bg-surface p-7 sm:p-9">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Imię i nazwisko"><input name="full_name" type="text" required minLength={2} maxLength={120} autoComplete="name" placeholder="Anna Kowalska" className="contact-input" /></Field>
            <Field label="Telefon"><input name="phone" type="tel" required minLength={7} maxLength={30} autoComplete="tel" placeholder="+48 000 000 000" className="contact-input" /></Field>
          </div>
          <div className="mt-5"><Field label="Rodzaj sprawy"><select name="request_type" className="contact-input"><option>Serwis PC</option><option>Budowa i konfiguracja sieci</option><option>Inna sprawa</option></select></Field></div>
          <div className="mt-5"><Field label="Opis problemu"><textarea name="message" rows={5} required minLength={10} maxLength={2000} placeholder="Napisz, czego dotyczy zgłoszenie..." className="contact-input resize-none" /></Field></div>
          <Button type="submit" disabled={status === "submitting" || status === "sent"} className="mt-6 h-11 w-full rounded-full">
            {status === "submitting" ? "Wysyłanie..." : status === "sent" ? "Zgłoszenie wysłane" : "Wyślij zgłoszenie"}
          </Button>
          <div aria-live="polite" className="mt-4 min-h-5 text-center text-sm">
            {status === "sent" && <p className="text-signal">Dziękujemy. Skontaktujemy się tak szybko, jak to możliwe.</p>}
            {status === "error" && <p className="text-destructive">Nie udało się wysłać zgłoszenia. Spróbuj ponownie lub zadzwoń.</p>}
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return <label className="block"><span className="text-sm font-medium text-muted-foreground">{label}</span><div className="mt-2">{children}</div></label>;
}

function SectionLabel({ children }: { children: ReactNode }) {
  return <div className="text-sm font-semibold text-signal">{children}</div>;
}

function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-center md:flex-row md:text-left">
        <div className="text-xl font-bold font-display">NB <span className="font-normal text-muted-foreground">TECH</span></div>
        <div className="text-sm text-muted-foreground">Serwis PC w Słomnikach · Sieci z dojazdem do 40 km</div>
        <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} NB Tech</div>
      </div>
    </footer>
  );
}