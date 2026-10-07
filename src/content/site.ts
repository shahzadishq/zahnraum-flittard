/**
 * Central content & configuration for the Zahnraum Flittard landing page.
 *
 * Everything visitor-facing (practice details, services, image paths,
 * integration settings) lives here so it can be reviewed and updated in one place.
 *
 * Source: zahnraum-flittard.de (the practice's own website), October 2026.
 * `confirmed: false` marks content written as a sensible default that still needs
 * sign-off by the practice. Set NEXT_PUBLIC_REVIEW_MODE=1 to highlight these on the page.
 */

/**
 * Path prefix when the site is served from a sub-path (e.g. GitHub Pages at
 * /zahnraum-flittard). Empty for a normal root deployment. Set at build time.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";

/** Prefix a root-relative path with the base path. */
export const withBase = (path: string) => `${basePath}${path}`;

export const practice = {
  name: "Zahnraum Flittard",
  shortName: "Zahnraum Flittard",
  owner: "Dr. Shiwa Kadir",
  address: {
    street: "Rungestraße 5A",
    postalCode: "51061",
    city: "Köln-Flittard",
    country: "DE",
  },
  phone: {
    display: "0221 664982",
    href: "tel:+49221664982",
    e164: "+49221664982",
  },
  email: "info@zahnraum-flittard.de",
  openingHours: [
    { label: "Montag & Dienstag", short: "Mo & Di", hours: "8–14 & 15–18 Uhr" },
    { label: "Mittwoch", short: "Mi", hours: "geschlossen" },
    { label: "Donnerstag & Freitag", short: "Do & Fr", hours: "8–15 Uhr" },
    { label: "Samstag & Sonntag", short: "Sa & So", hours: "geschlossen" },
  ],
  // Machine-readable opening hours for structured data (schema.org).
  openingHoursSpec: [
    { days: ["Monday", "Tuesday"], opens: "08:00", closes: "14:00" },
    { days: ["Monday", "Tuesday"], opens: "15:00", closes: "18:00" },
    { days: ["Thursday", "Friday"], opens: "08:00", closes: "15:00" },
  ],
} as const;

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `${practice.name}, ${practice.address.street}, ${practice.address.postalCode} ${practice.address.city}`,
)}`;

/** Online appointment booking via Doctolib (the practice's booking platform). */
const doctolibUrl =
  "https://www.doctolib.de/gemeinschaftspraxis/koeln/zahnraum-flittard-zahnarztpraxis-dr-shiwa-kadir";

/** Social media profiles. */
export const social = {
  instagram: "https://www.instagram.com/zahnraum_flittard",
  facebook: "https://www.facebook.com/share/199qycAp3h/",
  whatsapp: "https://wa.me/49221664982",
};

/** Integration settings – all optional, read from environment variables. */
export const integrations = {
  /** Public site URL, e.g. https://www.zahnraum-flittard.de – enables canonical + OG URLs. */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || null,
  /** External online booking URL (Doctolib). Falls back to the practice's Doctolib page. */
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || doctolibUrl,
  /** Google Tag Manager container ID. Only loaded after consent. */
  gtmId: process.env.NEXT_PUBLIC_GTM_ID || null,
  /**
   * Where the enquiry form posts to. Defaults to this site's own API route.
   * Static hosting (e.g. GitHub Pages) has no server, so set this to an external
   * form endpoint that accepts JSON and answers `{ "ok": true }` on success
   * (e.g. a Formspree form URL).
   */
  enquiryEndpoint: process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT || withBase("/api/anfrage"),
  /** Keeps preview deployments out of search engines. */
  noindex: process.env.NEXT_PUBLIC_NOINDEX === "1",
  /** Highlights unconfirmed content for client review. Never enable in production. */
  reviewMode: process.env.NEXT_PUBLIC_REVIEW_MODE === "1",
};

export const appointmentHref = integrations.bookingUrl ?? "#kontakt";
export const appointmentIsExternal = Boolean(integrations.bookingUrl);

/** Legal pages – content lives in src/content/legal.ts. */
export const legal = {
  impressumHref: withBase("/impressum/"),
  datenschutzHref: withBase("/datenschutz/"),
};

export const navigation = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Praxis", href: "#praxis" },
  { label: "Team", href: "#team" },
  { label: "Kontakt", href: "#kontakt" },
] as const;

export const images = {
  consultation: {
    src: withBase("/images/zahnraum-hero.webp"),
    width: 1536,
    height: 1024,
    alt: "Zahnärztliche Instrumente – Mundspiegel und Sonde – auf einer hellen Fläche in der Zahnarztpraxis Zahnraum Flittard",
  },
} as const;

export const hero = {
  eyebrow: "Ihre Zahnarztpraxis in Köln-Flittard",
  title: "Herzlich und *auf Augenhöhe*.",
  intro:
    "Wir begleiten Sie von der Vorsorge bis zur Behandlung – transparent, modern und mit ruhiger Hand. Bei Zahnraum Flittard nehmen wir uns Zeit für Sie und erklären jeden Schritt verständlich.",
  trustPoints: [
    "Moderne, barrierefreie Praxis",
    "Termine online über Doctolib",
    "Herzlich & auf Augenhöhe",
  ],
};

export const intro = {
  eyebrow: "Die Praxis",
  title: "Willkommen bei *Zahnraum Flittard*",
  paragraphs: [
    "In unserer Praxis in Köln-Flittard verbinden wir moderne Zahnmedizin mit Menschlichkeit, Vertrauen und einer individuellen Betreuung. Vom Empfang bis zur Behandlung arbeiten wir ruhig, transparent und auf Augenhöhe.",
    "Uns ist wichtig, dass Sie sich nicht nur medizinisch bestmöglich versorgt, sondern auch verstanden, ernst genommen und gut aufgehoben fühlen – denn ein schönes Lächeln beginnt mit einem guten Gefühl beim Zahnarztbesuch.",
  ],
  points: [
    "Verständliche Erklärungen – ohne Fachchinesisch",
    "Moderne, klimatisierte und barrierefreie Praxis",
    "Von der Vorsorge bis zur Behandlung unter einem Dach",
  ],
  confirmed: true,
};

export type ServiceIcon =
  | "sparkle"
  | "gum"
  | "shield"
  | "crown"
  | "implant"
  | "surgery"
  | "child"
  | "smile";

export type Service = {
  id: string;
  name: string;
  icon: ServiceIcon;
  summary: string;
  details: string;
  includes?: string[];
  source: string[];
  confirmed: boolean;
};

export const services: Service[] = [
  {
    id: "vorsorge",
    name: "Vorsorge & Prophylaxe",
    icon: "shield",
    summary:
      "Regelmäßige Kontrolle von Zähnen und Zahnfleisch, um Veränderungen früh zu erkennen – damit Probleme gar nicht erst entstehen.",
    details:
      "Regelmäßige Vorsorgeuntersuchungen sind der wichtigste Schritt, um Zähne und Zahnfleisch langfristig gesund zu halten. Dabei kontrollieren wir auch die Mundschleimhaut auf auffällige Veränderungen (Mundkrebsvorsorge).",
    includes: ["Kontrolluntersuchung", "Mundkrebsvorsorge"],
    source: [],
    confirmed: true,
  },
  {
    id: "zahnreinigung",
    name: "Professionelle Zahnreinigung",
    icon: "sparkle",
    summary:
      "Gründliche Entfernung von Belägen, Verfärbungen und Bakterien, die Sie mit der Zahnbürste nicht erreichen – für ein strahlendes Lächeln.",
    details:
      "Unsere professionelle Zahnreinigung entfernt gründlich alle Beläge, Verfärbungen und Bakterien. So bleiben Ihre Zähne sauber, glatt und das Zahnfleisch gesund.",
    source: [],
    confirmed: true,
  },
  {
    id: "zahnerhaltung",
    name: "Füllungen & Wurzelkanal",
    icon: "gum",
    summary:
      "Wir erhalten Ihre eigenen Zähne so lange wie möglich – mit zahnfarbenen Füllungen und präziser Wurzelkanal-Behandlung.",
    details:
      "Ist ein Zahn durch Karies beschädigt, versorgen wir ihn schonend mit hochwertigen, zahnfarbenen Materialien. Bei einer Entzündung im Zahninneren können wir den Zahn durch eine präzise Wurzelkanal-Behandlung erhalten und Schmerzen beseitigen.",
    includes: ["Zahnfarbene Füllungen", "Wurzelkanal-Behandlung", "Wurzelspitzenresektion"],
    source: [],
    confirmed: true,
  },
  {
    id: "parodontitis",
    name: "Parodontitis-Behandlung",
    icon: "surgery",
    summary:
      "Gesundes Zahnfleisch ist die Basis für gesunde Zähne. Wir behandeln sanft und gezielt die Ursache des Zahnfleischrückgangs.",
    details:
      "Bei einer Parodontitis – einer Entzündung des Zahnhalteapparats – behandeln wir gezielt die Ursache und stoppen den Zahnfleischrückgang. Bei fortgeschrittenen Fällen ist auch eine chirurgische Behandlung möglich, um den Zahnhalteapparat langfristig zu stabilisieren.",
    includes: ["Chirurgische Parodontitisbehandlung"],
    source: [],
    confirmed: true,
  },
  {
    id: "zahnersatz",
    name: "Zahnersatz",
    icon: "crown",
    summary:
      "Individuell angepasster Zahnersatz, der sich natürlich anfühlt und perfekt sitzt – für ein ästhetisches und funktionelles Ergebnis.",
    details:
      "Fehlende Zähne beeinträchtigen Aussehen und Kaufunktion. Wir bieten individuell angepassten Zahnersatz – ob Krone, Brücke oder Prothese.",
    includes: ["Kronen", "Brücken", "Prothesen"],
    source: [],
    confirmed: true,
  },
  {
    id: "implantate",
    name: "Implantate & Oralchirurgie",
    icon: "implant",
    summary:
      "Implantate ersetzen die Zahnwurzel dauerhaft und bieten festen Halt – ergänzt um die nötige chirurgische Vorbereitung.",
    details:
      "Implantate bieten festen Halt für Kronen, Brücken oder Prothesen. Bei Bedarf schaffen wir mit Knochenaufbau die Voraussetzungen und übernehmen auch schonende Zahnentfernungen und die Freilegung verlagerter Zähne.",
    includes: ["Knochenaufbau", "Zahnentfernungen", "Freilegung verlagerter Zähne"],
    source: [],
    confirmed: true,
  },
  {
    id: "kinder-angst",
    name: "Kinder- & Angstbehandlung",
    icon: "child",
    summary:
      "Mit Geduld, Ruhe und viel Einfühlungsvermögen – ein entspannter Zahnarztbesuch für Kinder und ängstliche Patient:innen.",
    details:
      "Mit kindgerechter Erklärung machen wir den Zahnarztbesuch zu einem positiven Erlebnis. Angstpatient:innen begleiten wir besonders einfühlsam – auf Wunsch mit einer medikamentösen Beruhigung.",
    includes: ["Kinderbehandlung", "Behandlung für Angstpatient:innen"],
    source: [],
    confirmed: true,
  },
  {
    id: "aesthetik",
    name: "Ästhetik & Aligner",
    icon: "smile",
    summary:
      "Für ein Lächeln, mit dem Sie sich wohlfühlen: professionelles Bleaching und nahezu unsichtbare Zahnkorrektur mit Alignern.",
    details:
      "Mit einem professionellen Bleaching verhelfen wir Ihnen zu einem strahlenden Lächeln. Mit transparenten Alignern lassen sich Zahnfehlstellungen nahezu unsichtbar korrigieren – und mit Zahnschmuck setzen Sie ein individuelles Detail.",
    includes: ["Bleaching", "Aligner-Therapie", "Zahnschmuck"],
    source: [],
    confirmed: true,
  },
];

export const reasons = {
  eyebrow: "Warum Zahnraum Flittard",
  title: "Zahnmedizin, bei der *Sie* im Mittelpunkt stehen.",
  intro:
    "Gute Zahnmedizin beginnt mit Zuhören. Wir nehmen uns Zeit – ruhig, transparent und auf Augenhöhe, vom ersten Termin an.",
  items: [
    {
      title: "Herzlich & auf Augenhöhe",
      text: "Wir hören zu, erklären verständlich und behandeln Sie mit Respekt und Ruhe – vom Empfang bis zur Behandlung.",
      confirmed: true,
    },
    {
      title: "Barrierefreie Praxis",
      text: "Breite Türen, ebenerdiger Zugang und ausreichend Platz – bequem erreichbar mit Rollstuhl, Kinderwagen oder Gehhilfe.",
      confirmed: true,
    },
    {
      title: "Flexible Ratenzahlung",
      text: "Über unser Rechenzentrum bieten wir bequeme Ratenzahlung. Zu den Möglichkeiten beraten wir Sie gerne persönlich.",
      confirmed: true,
    },
    {
      title: "Klimatisierte Praxis",
      text: "Unsere Praxis ist vollständig klimatisiert – für ein angenehmes Raumklima während Ihres gesamten Aufenthalts.",
      confirmed: true,
    },
  ],
};

export type TeamMember = { name: string; role: string; bio?: string; image?: string };

export const team = {
  eyebrow: "Team",
  title: "Menschen, die sich *Zeit für Sie* nehmen.",
  text: "Wir möchten, dass Sie sich vom ersten Moment an gut aufgehoben fühlen. Unser Team arbeitet ruhig, transparent und auf Augenhöhe – vom Empfang bis zur Behandlung.",
  members: [
    {
      name: "Dr. Shiwa Kadir",
      role: "Zahnärztliche Leitung · Zahnärztin",
      image: withBase("/images/dr-shiwa-kadir.webp"),
      bio: "Nach dem Studium der Zahnmedizin in Frankfurt am Main und Düsseldorf sammelte Dr. Kadir über mehrere Jahre Berufserfahrung in Köln. Ihre Promotion absolvierte sie an der Heinrich-Heine-Universität Düsseldorf. Seit Januar 2026 führt sie ihre eigene Praxis – mit fachlicher Präzision, Menschlichkeit und einem besonderen Schwerpunkt auf Implantologie und kontinuierlicher Fortbildung.",
    },
    {
      name: "Loretta Szymczak",
      role: "Zahnmedizinische Fachangestellte (ZFA)",
      bio: "Seit ihrer Ausbildung Teil der Praxis und eine echte Konstante für viele Patientinnen und Patienten. Mit ihrer herzlichen, hilfsbereiten und zuverlässigen Art sorgt sie dafür, dass sich alle rundum wohlfühlen.",
    },
  ] as TeamMember[],
};

export const contact = {
  eyebrow: "Kontakt & Termin",
  title: "Wir *freuen uns* auf Sie.",
  intro:
    "Vereinbaren Sie Ihren Termin online über Doctolib oder telefonisch. Gerne beantworten wir auch Ihre Fragen – persönlich, transparent und ohne Druck.",
  preferences: [
    { value: "", label: "Keine Präferenz" },
    { value: "vormittags", label: "Vormittags" },
    { value: "nachmittags", label: "Nachmittags" },
  ],
};

export const seo = {
  title: "Zahnraum Flittard – Zahnarztpraxis Dr. Shiwa Kadir in Köln-Flittard",
  description:
    "Moderne Zahnarztpraxis in Köln-Flittard: Vorsorge, Zahnreinigung, Zahnerhaltung, Zahnersatz, Implantate, Ästhetik u. v. m. Herzlich und auf Augenhöhe – Termin online über Doctolib oder telefonisch.",
};
