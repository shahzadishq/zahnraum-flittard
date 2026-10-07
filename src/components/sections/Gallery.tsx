import Image from "next/image";
import { gallery } from "@/content/site";
import { Rich } from "../Rich";

export function Gallery() {
  return (
    <section aria-labelledby="einblicke-title" className="py-20 sm:py-24 lg:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mx-auto">{gallery.eyebrow}</p>
          <h2 id="einblicke-title" className="heading-lg mt-4 text-balance">
            <Rich text={gallery.title} />
          </h2>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-muted">{gallery.intro}</p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {gallery.items.map((item) => (
            <li key={item.src} className="group relative overflow-hidden rounded-[1.25rem] shadow-soft">
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                loading="lazy"
                sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 90vw"
                className="aspect-[4/5] h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/75 to-transparent p-4 pt-12">
                <p className="text-sm font-semibold text-white">{item.caption}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
