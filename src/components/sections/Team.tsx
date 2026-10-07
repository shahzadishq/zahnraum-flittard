import Image from "next/image";
import { team } from "@/content/site";
import { AppointmentLink } from "../Cta";
import { Rich } from "../Rich";

function initials(name: string) {
  return name
    .replace(/^Dr\.?\s+/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function Team() {
  return (
    <section id="team" aria-labelledby="team-title" className="bg-sand py-20 sm:py-24 lg:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mx-auto">{team.eyebrow}</p>
          <h2 id="team-title" className="heading-lg mt-4 text-balance">
            <Rich text={team.title} />
          </h2>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-muted">{team.text}</p>
        </div>

        <ul className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          {team.members.map((m) => (
            <li
              key={m.name}
              className="flex h-full flex-col rounded-[1.5rem] border border-line bg-white p-7 shadow-soft sm:p-8"
            >
              <div className="flex items-center gap-4">
                {m.image ? (
                  <Image
                    src={m.image}
                    alt={`${m.name} – ${m.role}`}
                    width={72}
                    height={72}
                    loading="lazy"
                    className="h-[4.5rem] w-[4.5rem] shrink-0 rounded-full object-cover ring-2 ring-navy-100"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="inline-flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-full bg-navy-800 text-xl font-extrabold text-white"
                  >
                    {initials(m.name)}
                  </span>
                )}
                <div>
                  <h3 className="text-xl font-extrabold tracking-tight text-navy-900">{m.name}</h3>
                  <p className="text-sm font-semibold text-teal-700">{m.role}</p>
                </div>
              </div>
              {m.bio && <p className="mt-5 leading-relaxed text-muted">{m.bio}</p>}
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <AppointmentLink location="team" className="btn-primary" />
        </div>
      </div>
    </section>
  );
}
