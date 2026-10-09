import { integrations, reasons } from "@/content/site";
import { AppointmentLink, ReviewBadge } from "../Cta";
import { Rich } from "../Rich";

export function Reasons() {
  return (
    <section
      aria-labelledby="gruende-title"
      className="relative overflow-hidden bg-brand py-20 text-navy-950 sm:py-24 lg:py-28"
    >
      {/* the brand's tooth-and-leaf mark, as a quiet background motif */}
      <svg
        aria-hidden="true"
        viewBox="0 0 120 120"
        className="pointer-events-none absolute -right-24 -bottom-28 h-[30rem] w-[30rem] text-navy-950/[0.07]"
      >
        <path
          d="M60 25C49 25 42 16 31 19C16 23 17 40 22 53C26 63 29 72 31 85C33 99 39 104 44 94L53 74C56 68 64 68 67 74L76 94C81 104 87 99 89 85C91 72 94 63 98 53C103 40 104 23 89 19C78 16 71 25 60 25Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M60 47C70 57 70 72 60 83C50 72 50 57 60 47Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="container-page relative grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="eyebrow bg-white/80 text-navy-800">{reasons.eyebrow}</p>
          <h2 id="gruende-title" className="heading-lg mt-4 text-balance text-navy-950!">
            <Rich text={reasons.title} />
          </h2>
          <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-navy-900/80">
            {reasons.intro}
          </p>
          <AppointmentLink location="reasons" className="btn-light mt-8" />
        </div>

        <ol className="grid gap-px overflow-hidden rounded-[1.75rem] bg-navy-950/10 sm:grid-cols-2 lg:col-span-7">
          {reasons.items.map((item, i) => (
            <li
              key={item.title}
              className="bg-white p-7 transition-colors duration-300 hover:bg-ivory sm:p-8"
            >
              <span className="text-sm font-extrabold tracking-[0.14em] text-teal-700" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-extrabold text-navy-900">
                {item.title}
                <ReviewBadge show={integrations.reviewMode && !item.confirmed} />
              </h3>
              <p className="mt-2 leading-relaxed text-muted">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
