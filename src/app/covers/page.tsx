import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/content/site";

import { FaInstagram, FaYoutube } from "react-icons/fa";

function slugifyTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/'/g, "-")
    .replace(/\s+/g, "-");
}

export const metadata: Metadata = {
  title: `${site.artistName} — Covers`,
  description: `Weekly covers by ${site.artistName}.`,
};

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      className="text-[#89A1B9] underline decoration-[#1A2E40] underline-offset-4 transition-colors hover:decoration-[#89A1B9]"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

function PillLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#1A2E40] bg-[#050F1A] transition-colors hover:border-[#2A4558] hover:bg-[#0A1A27]"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

export default function CoversPage() {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-[#010407]">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#020D18] blur-3xl" />
        <div className="absolute -top-24 left-[-100px] h-[400px] w-[400px] rounded-full bg-[#020A14]/60 blur-3xl" />
        <div className="absolute -top-24 right-[-140px] h-[480px] w-[480px] rounded-full bg-[#020810]/80 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-6 py-12">
        <header className="flex flex-col gap-6">
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <Link className="text-[#7A96B0] transition-colors hover:text-[#DDE4EC]" href="/">
              EP
            </Link>
            <span className="font-medium text-[#DDE4EC]">Covers</span>
          </nav>

          <div className="space-y-2">
            <h1 className="text-4xl font-semibold tracking-tight text-[#DDE4EC] sm:text-5xl">Covers</h1>
            <p className="text-base text-[#7A96B0]">{site.coversDescription}</p>
          </div>

          <div className="mt-2 grid gap-4 sm:grid-cols-3">
            {site.weeklyCovers.map((c) => (
              <div key={c.platform} className="rounded-2xl border border-[#0E1E2E] bg-[#050F1A] p-5">
                <div className="text-sm font-semibold text-[#DDE4EC]">{c.platform}</div>
                <div className="mt-2 text-sm text-[#7A96B0]">{c.description}</div>
                <div className="mt-4 text-sm">
                  <ExternalLink href={c.href}>View</ExternalLink>
                </div>
              </div>
            ))}
          </div>
        </header>

        <section className="mt-14 scroll-mt-20">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="text-2xl font-semibold tracking-tight text-[#DDE4EC]">Cover index</h2>
            <div className="text-sm text-[#7A96B0]">{site.coverIndex.length} total</div>
          </div>

          <div className="mt-5 grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {[...site.coverIndex].reverse().map((c) => (
              <div
                key={`${c.title}-${c.instagramPostUrl}`}
                className={`relative flex flex-col justify-between gap-4 overflow-hidden rounded-2xl border p-5 ${
                  c.youtubeUrl
                    ? "border-[#1A2E40]"
                    : "border-[#0E1E2E]"
                }`}
              >
                {/* Background image */}
                <Image
                  src={`/images/covers/${slugifyTitle(c.title)}-web-500x307.webp`}
                  alt=""
                  fill
                  aria-hidden
                  className="object-cover opacity-80"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {/* Dark overlay to keep text readable */}
                <div
                  aria-hidden
                  className={`absolute inset-0 ${
                    c.youtubeUrl ? "bg-[#030B14]/75" : "bg-[#050F1A]/80"
                  }`}
                />

                <div className="relative z-10">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {c.youtubeUrl ? (
                      <span className="rounded-full bg-[#1A0A0A] px-2 py-0.5 text-xs text-[#FF6B6B]">
                        full video
                      </span>
                    ) : null}
                    {c.featuring ? (
                      <span className="rounded-full bg-[#0A2030] px-2 py-0.5 text-xs text-[#89A1B9]">
                        feat. {c.featuring}
                      </span>
                    ) : null}
                  </div>
                  <div className="mt-2 font-medium text-[#DDE4EC]">{c.title}</div>
                  {c.artist ? <div className="mt-0.5 text-sm text-[#7A96B0]">{c.artist}</div> : null}
                </div>
                <div className="relative z-10 flex flex-wrap items-center gap-2">
                  <PillLink href={c.instagramPostUrl}>
                    <FaInstagram size={14} className="text-[#E1306C]" />
                  </PillLink>
                  {c.youtubeUrl ? (
                    <PillLink href={c.youtubeUrl}>
                      <FaYoutube size={14} className="text-[#FF0000]" />
                    </PillLink>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-16 border-t border-[#0E1E2E] pt-10 text-sm text-[#3A5468]">
          <div>© {new Date().getFullYear()} {site.artistName}</div>
        </footer>
      </div>
    </main>
  );
}
