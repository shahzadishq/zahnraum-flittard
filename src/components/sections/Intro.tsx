import { intro } from "@/content/site";
import { CheckIcon } from "../Icons";
import { Rich } from "../Rich";

export function Intro() {
  return (
    <section id="praxis" aria-labelledby="praxis-title" className="py-20 sm:py-24 lg:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mx-auto">{intro.eyebrow}</p>
          <h2 id="praxis-title" className="heading-lg mt-4 text-balance">
            <Rich text={intro.title} />
          </h2>
          <div className="mt-6 space-y-4 text-[1.05rem] leading-relaxed text-muted sm:text-lg">
            {intro.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <ul className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
          {intro.points.map((point) => (
            <li
              key={point}
              className="flex flex-col items-center gap-3 rounded-[1.25rem] border border-line bg-white p-6 text-center font-medium text-ink shadow-soft"
            >
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-800 text-white">
                <CheckIcon className="h-5 w-5" strokeWidth={2.4} />
              </span>
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <a
            href="#leistungen"
            className="inline-flex items-center gap-2 font-semibold text-navy-800 link-underline"
          >
            Unsere Leistungen ansehen
          </a>
        </div>
      </div>
    </section>
  );
}
