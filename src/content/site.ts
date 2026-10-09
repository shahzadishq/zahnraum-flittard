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
  reception: {
    src: withBase("/images/zahnraum-reception.webp"),
    width: 1300,
    height: 2311,
    alt: "Heller, ruhiger Wartebereich der Zahnarztpraxis Zahnraum Flittard mit Sitzgelegenheiten, Holzboden und Pflanze",
  },
  welcome: {
    src: withBase("/images/zahnraum-brand-card.webp"),
    width: 1000,
    height: 1333,
    alt: "Visitenkarte mit dem goldenen Logo von Zahnraum Flittard vor einer Pflanze",
  },
} as const;

/** "Einblicke" gallery – real impressions from the practice. */
export const gallery = {
  eyebrow: "Einblicke",
  title: "Einblicke in *unsere Praxis*.",
  intro:
    "Ein paar Eindrücke aus dem Zahnraum Flittard – von der sorgfältigen Versorgung bis zu den schönen Momenten.",
  items: [
    {
      src: withBase("/images/zahnraum-brand-card.webp"),
      width: 1000,
      height: 1333,
      alt: "Visitenkarte mit dem goldenen Logo von Zahnraum Flittard vor einer Pflanze",
      caption: "Herzlich willkommen",
    },
    {
      src: withBase("/images/zahnraum-work-inlays.webp"),
      width: 1000,
      height: 1333,
      alt: "Hochwertiger Zahnersatz mit Inlays auf einem Gipsmodell",
      caption: "Präzise, hochwertige Versorgung",
    },
    {
      src: withBase("/images/zahnraum-work-retainer.webp"),
      width: 1000,
      height: 1333,
      alt: "Individuell gefertigte Zahnschiene auf einem Gipsmodell",
      caption: "Individuell gefertigte Schienen",
    },
    {
      src: withBase("/images/zahnraum-opening.webp"),
      width: 1000,
      height: 1333,
      alt: "Blumenstrauß zur Eröffnung der Zahnarztpraxis Zahnraum Flittard",
      caption: "Eröffnung unserer Praxis",
    },
  ],
};

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

/** "So funktioniert's" – the path from first contact to the appointment. */
export const bookingProcess = {
  eyebrow: "So funktioniert's",
  title: "In drei Schritten *zu Ihrem Termin*.",
  intro: "Vom ersten Kontakt bis zum Besuch in der Praxis – so einfach kommen Sie zu uns.",
  steps: [
    {
      image: "reception",
      title: "Kontakt aufnehmen",
      text: "Rufen Sie uns an oder senden Sie uns über das Formular eine Terminanfrage – ganz ohne Registrierung.",
    },
    {
      image: "welcome",
      title: "Termin abstimmen",
      text: "Wir melden uns bei Ihnen und stimmen gemeinsam einen passenden Termin ab. Verbindlich ist er erst mit unserer Bestätigung.",
    },
    {
      image: "consultation",
      title: "Die Praxis besuchen",
      text: `Am vereinbarten Tag empfangen wir Sie in unseren hellen Räumen in der ${practice.address.street} in ${practice.address.city}. Fragen vorab klären wir gern telefonisch.`,
    },
  ] as { image: keyof typeof images; title: string; text: string }[],
};

/** Patientenstimmen – echte 5-Sterne-Bewertungen von Google (Stand Oktober 2026). */
export const testimonials = {
  eyebrow: "Stimmen unserer Patient:innen",
  title: "Was unsere Patientinnen und Patienten *sagen*.",
  items: [
    {
      quote:
        "Ich war bereits bei Dr. Shiwa Kadir in der Praxis Köster & Laubrock Patient und bin jetzt auch in ihre eigene Praxis mitgegangen. Sie erklärt alles verständlich und ruhig. Spritzen und Bohren waren bei mir komplett schmerzfrei bzw. so angenehm wie möglich. Man fühlt sich gut aufgehoben. Klare Empfehlung!",
      name: "Rawkus",
      source: "Google",
      rating: 5,
    },
    {
      quote:
        "Eine wirklich tolle Zahnärztin! Sehr kompetent, freundlich und nimmt sich Zeit für ihre Patienten. Man fühlt sich direkt gut aufgehoben und ernst genommen. Ich war sehr zufrieden und komme gerne wieder.",
      name: "Peshawa Ali",
      source: "Google",
      rating: 5,
    },
    {
      quote:
        "Sehr empfehlenswerte Zahnarztpraxis! Das Team ist sehr freundlich und professionell. Man fühlt sich von Anfang an gut aufgehoben. Die Behandlung war sorgfältig und nahezu schmerzfrei. Die Praxis ist modern, sauber und gut organisiert. Vielen Dank für die tolle Betreuung!",
      name: "Karam Adil",
      source: "Google",
      rating: 5,
    },
    {
      quote:
        "Bin mehr als zufrieden mit dieser Praxis. Ich war wegen meiner Zahnschmerzen da und Dr. Shiwa Kadir ist sehr freundlich. Da ich Angstpatientin bin, erklärt sie in einzelnen Schritten, was gemacht werden muss, und ich fühle mich gut aufgehoben – und das zum ersten Mal bei einem Zahnarzt, weil ich in der Vergangenheit eigentlich nur Negatives erlebt habe. Daher 5 Sterne von mir und sehr zu empfehlen.",
      name: "Melissa Diana",
      source: "Google",
      rating: 5,
    },
    {
      quote:
        "Super freundliche und kompetente Zahnärztin! Ich habe mich während der Behandlung sehr gut aufgehoben gefühlt. Alles wurde verständlich erklärt und sehr einfühlsam durchgeführt. Klare Empfehlung!",
      name: "Guli Baran",
      source: "Google",
      rating: 5,
    },
    {
      quote:
        "Die Zahnärztinnen sind sehr lieb, fürsorglich und verständnisvoll. Sie fragen immer, ob wir Schmerzen haben. Ich bin sehr zufrieden und empfehle diese Praxis sehr.",
      name: "Sazo Sazgar",
      source: "Google",
      rating: 5,
    },
  ] as { quote: string; name: string; source?: string; rating?: number }[],
};

export type Faq = { q: string; a: string; confirmed: boolean; note?: string };

export const faqs: Faq[] = [
  {
    q: "Wie kann ich einen Termin vereinbaren?",
    a: `Am schnellsten erreichen Sie uns telefonisch unter ${practice.phone.display}. Alternativ vereinbaren Sie online über Doctolib oder senden Sie uns über das Formular auf dieser Seite eine Terminanfrage. Wir melden uns anschließend bei Ihnen, um einen passenden Termin abzustimmen.`,
    confirmed: true,
  },
  {
    q: "Ist mein Termin mit dem Absenden der Anfrage schon bestätigt?",
    a: "Nein. Ihre Anfrage über das Formular ist zunächst unverbindlich. Wir melden uns bei Ihnen, um einen Termin abzustimmen – verbindlich ist er erst, wenn wir ihn Ihnen bestätigt haben.",
    confirmed: true,
  },
  {
    q: "Wann ist die Praxis geöffnet?",
    a: "Montag und Dienstag von 8–14 und 15–18 Uhr, Donnerstag und Freitag von 8–15 Uhr. Mittwoch sowie am Wochenende ist die Praxis geschlossen.",
    confirmed: true,
  },
  {
    q: "Wo finde ich die Praxis?",
    a: `Zahnraum Flittard befindet sich in der ${practice.address.street} in ${practice.address.postalCode} ${practice.address.city}. Über den Link „Route planen“ im Seitenfuß gelangen Sie direkt zur Wegbeschreibung.`,
    confirmed: true,
  },
  {
    q: "Welche Behandlungen bieten Sie an?",
    a: "Unser Leistungsspektrum reicht von Vorsorge und professioneller Zahnreinigung über Füllungen, Wurzelkanal- und Parodontitis-Behandlung bis zu Zahnersatz, Implantaten, Oralchirurgie, Kinder- und Angstbehandlung sowie Ästhetik und Alignern. Welche Behandlung für Sie sinnvoll ist, besprechen wir nach einer Untersuchung persönlich mit Ihnen.",
    confirmed: true,
  },
  {
    q: "Ich habe Angst vor der Zahnbehandlung. Können Sie darauf eingehen?",
    a: "Ja. Wir nehmen uns besonders viel Zeit für ängstliche Patient:innen, erklären jeden Schritt in Ruhe und behandeln einfühlsam. Auf Wunsch ist auch eine medikamentöse Beruhigung möglich. Sprechen Sie uns gern vorab darauf an.",
    confirmed: true,
  },
  {
    q: "Ich habe akute Zahnschmerzen – was soll ich tun?",
    a: "Bitte rufen Sie uns während der Öffnungszeiten direkt an, damit wir das weitere Vorgehen mit Ihnen besprechen können. Das Anfrageformular ist für dringende Anliegen nicht geeignet. Außerhalb unserer Öffnungszeiten wenden Sie sich bitte an den zahnärztlichen Notdienst.",
    confirmed: true,
  },
  // Entwurf: erst sichtbar, wenn die Praxis die Angaben bestätigt hat.
  {
    q: "Was sollte ich zum ersten Termin mitbringen?",
    a: "[Antwort der Praxis erforderlich]",
    confirmed: false,
    note: "Z. B. Versichertenkarte, Bonusheft, Medikamentenliste – bitte bestätigen.",
  },
];

/** FAQs shown on the page: drafts with placeholder answers are never rendered publicly. */
export const visibleFaqs = faqs.filter((f) => !f.a.startsWith("[") || integrations.reviewMode);

export const seo = {
  title: "Zahnraum Flittard – Zahnarztpraxis Dr. Shiwa Kadir in Köln-Flittard",
  description:
    "Moderne Zahnarztpraxis in Köln-Flittard: Vorsorge, Zahnreinigung, Zahnerhaltung, Zahnersatz, Implantate, Ästhetik u. v. m. Herzlich und auf Augenhöhe – Termin online über Doctolib oder telefonisch.",
};
