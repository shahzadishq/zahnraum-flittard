/**
 * Impressum and Datenschutz content.
 *
 * Source: zahnraum-flittard.de/imprint and /privacy (the practice's own website),
 * October 2026. The Datenschutz text follows the practice's published policy
 * (Stand: 02. November 2025) closely. The Impressum combines the contact details
 * published on the site with the standard professional disclosures (§ 5 DDG) for a
 * dental practice in the Zahnärztekammer Nordrhein district.
 *
 * NOTE: The professional-law details (Kammer, Aufsichtsbehörde, berufsrechtliche
 * Regelungen) and both texts as a whole should be reviewed and confirmed by the
 * practice / a lawyer before launch.
 */

import { practice } from "./site";

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "lines"; lines: string[] }
  | { type: "list"; items: string[] }
  | { type: "link"; label?: string; href: string };

export type LegalSection = { heading: string; blocks: LegalBlock[] };

const provider = [
  practice.name,
  "Zahnarztpraxis Dr. Shiwa Kadir",
  practice.address.street,
  `${practice.address.postalCode} ${practice.address.city}`,
  "Deutschland",
];

export const impressum: LegalSection[] = [
  {
    heading: "Angaben gemäß § 5 DDG",
    blocks: [
      { type: "lines", lines: provider },
      {
        type: "lines",
        lines: [
          `Telefon: ${practice.phone.display}`,
          `E-Mail: ${practice.email}`,
        ],
      },
      { type: "p", text: "Vertreten durch: Dr. Shiwa Kadir (Praxisinhaberin)" },
    ],
  },
  {
    heading: "Berufsrechtliche Angaben",
    blocks: [
      {
        type: "lines",
        lines: [
          "Berufsbezeichnung: Zahnärztin",
          "Verliehen in: Bundesrepublik Deutschland",
        ],
      },
      {
        type: "p",
        text: "Zuständige Kammer: Zahnärztekammer Nordrhein, Lindemannstraße 34–42, 40237 Düsseldorf.",
      },
      {
        type: "p",
        text: "Kassenzahnärztliche Vereinigung: Kassenzahnärztliche Vereinigung Nordrhein, Lindemannstraße 34–42, 40237 Düsseldorf.",
      },
      {
        type: "p",
        text: "Berufsrechtliche Regelungen: Heilberufsgesetz Nordrhein-Westfalen (HeilBerG) sowie die Berufsordnung der Zahnärztekammer Nordrhein. Diese sind über die Website der Zahnärztekammer Nordrhein einsehbar:",
      },
      { type: "link", href: "https://www.zaek-nr.de" },
    ],
  },
  {
    heading: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
    blocks: [
      {
        type: "lines",
        lines: [
          "Dr. Shiwa Kadir",
          practice.address.street,
          `${practice.address.postalCode} ${practice.address.city}`,
        ],
      },
    ],
  },
  {
    heading: "EU-Streitschlichtung",
    blocks: [
      {
        type: "p",
        text: "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:",
      },
      { type: "link", href: "https://ec.europa.eu/consumers/odr/" },
      {
        type: "p",
        text: "Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
      },
    ],
  },
  {
    heading: "Haftung für Inhalte",
    blocks: [
      {
        type: "p",
        text: "Als Diensteanbieter sind wir gemäß § 7 Abs. 1 Digitale-Dienste-Gesetz (DDG) für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
      },
      {
        type: "p",
        text: "Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte unverzüglich entfernen.",
      },
    ],
  },
  {
    heading: "Haftung für Links",
    blocks: [
      {
        type: "p",
        text: "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.",
      },
      {
        type: "p",
        text: "Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.",
      },
    ],
  },
  {
    heading: "Urheberrecht",
    blocks: [
      {
        type: "p",
        text: "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der vorherigen schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.",
      },
      {
        type: "p",
        text: "Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.",
      },
    ],
  },
];

export const datenschutz: LegalSection[] = [
  {
    heading: "Verantwortlicher",
    blocks: [
      {
        type: "p",
        text: "Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler Datenschutzgesetze ist:",
      },
      {
        type: "lines",
        lines: [...provider, `Telefon: ${practice.phone.display}`, `E-Mail: ${practice.email}`],
      },
      { type: "p", text: "Stand: 02. November 2025" },
    ],
  },
  {
    heading: "1. Allgemeines zur Datenverarbeitung",
    blocks: [
      {
        type: "p",
        text: "Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website erforderlich ist.",
      },
    ],
  },
  {
    heading: "2. Bereitstellung der Website und Erstellung von Server-Logdateien",
    blocks: [
      {
        type: "p",
        text: "Bei jedem Aufruf unserer Website erfasst das System unseres Hosting-Providers automatisiert Daten und Informationen vom Computersystem des aufrufenden Rechners. Folgende Daten werden hierbei erhoben (sog. Server-Logdateien):",
      },
      {
        type: "list",
        items: [
          "Browsertyp und Browserversion",
          "Verwendetes Betriebssystem",
          "Referrer URL (die zuvor besuchte Seite)",
          "Hostname des zugreifenden Rechners",
          "Uhrzeit der Serveranfrage",
          "IP-Adresse (in der Regel anonymisiert)",
        ],
      },
      {
        type: "p",
        text: "Diese Daten sind für uns nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Speicherung in Logdateien erfolgt, um die Funktionsfähigkeit der Website sicherzustellen und die Sicherheit unserer informationstechnischen Systeme zu gewährleisten.",
      },
      {
        type: "p",
        text: "Rechtsgrundlage für die vorübergehende Speicherung der Daten und der Logdateien ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer technisch fehlerfreien und sicheren Bereitstellung der Website).",
      },
    ],
  },
  {
    heading: "3. Externe Links (Online-Terminbuchung via Doctolib)",
    blocks: [
      {
        type: "p",
        text: "Auf unserer Website befindet sich ein Link, der Sie zur Online-Terminbuchungsplattform unseres Softwarepartners, der Doctolib GmbH, weiterleitet.",
      },
      {
        type: "p",
        text: "Wenn Sie auf diesen Link klicken, verlassen Sie unsere Website und werden auf die Server von Doctolib weitergeleitet. Beim Aufruf dieser externen Website werden von Doctolib Daten verarbeitet (z. B. IP-Adresse, Browserdaten, Referrer).",
      },
      {
        type: "p",
        text: "Auf die Datenverarbeitung durch Doctolib haben wir keinen Einfluss. Die Verantwortung für die datenschutzkonforme Verarbeitung liegt ausschließlich bei Doctolib. Weitere Informationen zum Datenschutz bei Doctolib finden Sie hier:",
      },
      { type: "link", href: "https://doctolib.legal/privacy-policy-B2C-DE" },
    ],
  },
  {
    heading: "4. Kontaktaufnahme",
    blocks: [
      {
        type: "p",
        text: "Auf unserer Website sind Kontaktinformationen wie E-Mail-Adresse und Telefonnummer angegeben. Wenn Sie Kontakt mit uns aufnehmen, verarbeiten wir die von Ihnen übermittelten personenbezogenen Daten (z. B. Name, E-Mail-Adresse, Telefonnummer, Anliegen) zwecks Bearbeitung Ihrer Anfrage und für den Fall von Anschlussfragen.",
      },
      {
        type: "p",
        text: "Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist; im Übrigen Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der effektiven Bearbeitung von Anfragen).",
      },
    ],
  },
  {
    heading: "5. Cookies",
    blocks: [{ type: "p", text: "Diese Website verwendet keine Cookies." }],
  },
  {
    heading: "6. Ihre Rechte als Betroffene/r",
    blocks: [
      {
        type: "p",
        text: "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung sowie Datenübertragbarkeit in Bezug auf Ihre personenbezogenen Daten. Sie haben darüber hinaus das Recht, der Verarbeitung Ihrer personenbezogenen Daten zu widersprechen.",
      },
      {
        type: "p",
        text: "Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter den oben angegebenen Kontaktdaten an uns wenden.",
      },
    ],
  },
  {
    heading: "7. Beschwerderecht bei der Aufsichtsbehörde",
    blocks: [
      {
        type: "p",
        text: "Ihnen steht unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs das Recht auf Beschwerde bei einer Aufsichtsbehörde zu, insbesondere in dem Mitgliedstaat Ihres Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die DSGVO verstößt.",
      },
    ],
  },
];
