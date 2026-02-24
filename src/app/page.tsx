import { site } from "@/content/site";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSpotify, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";

function PillLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      className="inline-flex items-center gap-1.5 rounded-full border border-[#1A2E40] bg-[#050F1A] px-4 py-2 text-sm font-medium text-[#DDE4EC] transition-colors hover:border-[#2A4558] hover:bg-[#0A1A27]"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

function IconButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#1A2E40] bg-[#030B14] text-[#DDE4EC] transition-colors hover:border-[#2A4558] hover:bg-[#0A1A27]"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
    >
      {children}
    </a>
  );
}



function SectionPanel({ id, title, subtitle, children }: { id: string; title: string; subtitle?: string; children: ReactNode }) {
  return (
    <section id={id} className="mt-14 scroll-mt-20">
      <div className="rounded-3xl border border-[#0E1E2E] bg-[#050F1A] p-6 sm:p-10">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-[#DDE4EC]">{title}</h2>
          {subtitle ? <p className="mt-2 text-[#7A96B0]">{subtitle}</p> : null}
        </div>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-[#010407]">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#020D18] blur-3xl" />
        <div className="absolute -top-24 left-[-100px] h-[400px] w-[400px] rounded-full bg-[#020A14]/60 blur-3xl" />
        <div className="absolute -top-24 right-[-140px] h-[480px] w-[480px] rounded-full bg-[#020810]/80 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-6 py-12">
        {/* Nav */}
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <span className="font-medium text-[#DDE4EC]">EP</span>
          <Link
            className="text-[#7A96B0] transition-colors hover:text-[#DDE4EC]"
            href="/covers"
          >
            Covers
          </Link>
        </nav>

        {/* Hero */}
        <header className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <h1 className="text-4xl font-semibold tracking-tight text-[#DDE4EC] sm:text-5xl">
              {site.artistName}
            </h1>
            <p className="mt-2 text-base text-[#7A96B0]">{site.tagline}</p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#A8BDC9]">
              {site.bio}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              {site.streaming.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-80"
                >
                  {s.label === "Spotify" ? (
                    <FaSpotify size={22} className="text-[#1DB954]" />
                  ) : (
                    <SiApplemusic size={22} className="text-[#FA243C]" />
                  )}
                  <span className="text-[#A8BDC9]">{s.label}</span>
                </a>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              {site.socials.map((s) => {
                const icon =
                  s.label === "Instagram" ? <FaInstagram size={22} className="text-[#E1306C]" /> :
                  s.label === "TikTok"    ? <FaTiktok    size={20} className="text-[#69C9D0]" /> :
                                            <FaYoutube   size={22} className="text-[#FF0000]" />;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-80"
                  >
                    {icon}
                    <span className="text-[#A8BDC9]">{s.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-3xl border border-[#0E1E2E]">
              <div className="relative aspect-square">
                <Image
                  src={site.albumCover.src}
                  alt={site.albumCover.alt}
                  fill
                  sizes="(min-width: 1024px) 420px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </header>

        <SectionPanel id="ep" title={site.ep.title} subtitle={site.ep.description}>
          <ol className="grid gap-4">
            {site.ep.tracks.map((t, idx) => {
              const isOut = t.status === "out now";
              return (
                <li
                  key={`${idx + 1}-${t.title}`}
                  className={`rounded-2xl border p-6 ${
                    isOut
                      ? "border-[#89A1B9]/40 bg-[#030B14] shadow-[0_0_24px_-4px_rgba(137,161,185,0.2)]"
                      : "border-[#0E1E2E] bg-[#030B14]"
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#89A1B9] text-sm font-semibold text-[#010407]">
                        {idx + 1}
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg font-semibold tracking-tight text-[#DDE4EC]">{t.title}</h3>
                          <span
                            className={
                              isOut
                                ? "rounded-full bg-[#0A2030] px-2 py-1 text-xs font-medium text-[#89A1B9]"
                                : "rounded-full bg-[#060C14] px-2 py-1 text-xs font-medium text-[#3A5468]"
                            }
                          >
                            {t.status}
                          </span>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-[#7A96B0]">{t.description}</p>
                      </div>
                    </div>

                    {isOut ? (
                      <div className="flex flex-wrap items-center gap-2">
                        {t.spotifyUrl ? (
                          <IconButton href={t.spotifyUrl} label="Spotify">
                            <FaSpotify size={18} className="text-[#1DB954]" />
                          </IconButton>
                        ) : null}
                        {t.appleMusicUrl ? (
                          <IconButton href={t.appleMusicUrl} label="Apple Music">
                            <SiApplemusic size={18} className="text-[#FA243C]" />
                          </IconButton>
                        ) : null}
                        {t.visualVideoUrl ? (
                          <IconButton href={t.visualVideoUrl} label="Visual Video (YouTube)">
                            <FaYoutube size={18} className="text-[#FF0000]" />
                          </IconButton>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ol>
        </SectionPanel>

        <SectionPanel
          id="covers"
          title="Weekly covers"
          subtitle="I post one cover per week — the full list lives on the covers page."
        >
          <div className="flex flex-wrap items-center gap-3">
            <Link
              className="inline-flex items-center rounded-full border border-[#1A2E40] bg-[#030B14] px-4 py-2 text-sm font-medium text-[#DDE4EC] transition-colors hover:border-[#2A4558] hover:bg-[#0A1A27]"
              href="/covers"
            >
              View all covers
            </Link>
            <span className="text-sm text-[#7A96B0]">Quick links:</span>
            {site.weeklyCovers.map((c) => (
              <a
                key={c.platform}
                className="text-sm text-[#89A1B9] underline decoration-[#1A2E40] underline-offset-4 transition-colors hover:decoration-[#89A1B9]"
                href={c.href}
                target="_blank"
                rel="noreferrer"
              >
                {c.platform}
              </a>
            ))}
          </div>
        </SectionPanel>

        <footer id="contact" className="mt-14 scroll-mt-20">
          <div className="rounded-3xl border border-[#0E1E2E] bg-[#050F1A] p-6 sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight text-[#DDE4EC]">Contact</h2>
            <p className="mt-2 text-[#7A96B0]">Best way to reach me is via Instagram DM.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <PillLink href="https://www.instagram.com/terencedumas/">Instagram</PillLink>
              <PillLink href="https://www.linkedin.com/in/dumast/">LinkedIn</PillLink>
            </div>
            <div className="mt-10 text-sm text-[#3A5468]">© {new Date().getFullYear()} {site.artistName}</div>
          </div>
        </footer>
      </div>
    </main>
  );
}
