import { directionsUrl, legal, navigation, practice, social, withBase } from "@/content/site";
import { Logo } from "./Logo";
import { ConsentSettingsButton } from "./ConsentManager";
import { FacebookIcon, InstagramIcon, WhatsappIcon } from "./Icons";

const socialLinks = [
  { label: "Instagram", href: social.instagram, Icon: InstagramIcon },
  { label: "Facebook", href: social.facebook, Icon: FacebookIcon },
  { label: "WhatsApp", href: social.whatsapp, Icon: WhatsappIcon },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-white pt-16 pb-28 text-muted lg:pb-12">
      <div className="container-page">
        <div className="grid gap-10 border-b border-line pb-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo variant="dark" className="h-11 w-auto" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              Ihre Zahnarztpraxis in Köln-Flittard – herzlich und auf Augenhöhe.
            </p>
            <ul className="mt-6 flex flex-wrap items-center gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener"
                    aria-label={label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-navy-700 transition-colors hover:border-navy-800 hover:bg-ivory hover:text-teal-700"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer-Navigation" className="md:col-span-2">
            <h2 className="text-xs font-bold tracking-[0.16em] text-navy-900 uppercase">Seite</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={withBase(`/${item.href}`)} className="hover:text-navy-900">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <h2 className="text-xs font-bold tracking-[0.16em] text-navy-900 uppercase">Kontakt</h2>
            <address className="mt-4 space-y-2.5 text-sm not-italic">
              <p>
                {practice.address.street}
                <br />
                {practice.address.postalCode} {practice.address.city}
                <br />
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener"
                  data-track="directions_click"
                  data-track-location="footer"
                  className="font-semibold text-teal-700 hover:text-navy-900"
                >
                  Route planen →<span className="sr-only"> (öffnet Google Maps in neuem Tab)</span>
                </a>
              </p>
              <p>
                <a href={practice.phone.href} data-track-location="footer" className="hover:text-navy-900">
                  {practice.phone.display}
                </a>
              </p>
              <p>
                <a href={`mailto:${practice.email}`} data-track-location="footer" className="break-all hover:text-navy-900">
                  {practice.email}
                </a>
              </p>
            </address>
          </div>

          <div className="md:col-span-3">
            <h2 className="text-xs font-bold tracking-[0.16em] text-navy-900 uppercase">Öffnungszeiten</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {practice.openingHours.map((row) => (
                <li key={row.label} className="flex justify-between gap-4">
                  <span>{row.short}</span>
                  <span className="text-navy-900">{row.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {practice.name}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <a href={legal.impressumHref} className="hover:text-navy-900">
                Impressum
              </a>
            </li>
            <li>
              <a href={legal.datenschutzHref} className="hover:text-navy-900">
                Datenschutz
              </a>
            </li>
            <ConsentSettingsButton className="hover:text-navy-900" />
          </ul>
        </div>
      </div>
    </footer>
  );
}
