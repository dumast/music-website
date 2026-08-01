import { site } from "@/content/site";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSpotify, FaYoutube, FaInstagram, FaTiktok, FaSoundcloud } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";

function PillLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      className="inline-flex items-center gap-1.5 rounded-full border border-[#3A2013] bg-[#170905] px-4 py-2 text-sm font-medium text-[#F5E8D8] transition-colors hover:border-[#6B3A1D] hover:bg-[#2A1208]"
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
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#3A2013] bg-[#100502] text-[#F5E8D8] transition-colors hover:border-[#6B3A1D] hover:bg-[#2A1208]"
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
      <div className="rounded-3xl border border-[#3A2013] bg-[#170905] p-6 sm:p-10">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-[#F5E8D8]">{title}</h2>
          {subtitle ? <p className="mt-2 text-[#C99B76]">{subtitle}</p> : null}
        </div>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-[#0A0402]">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#3D1206] blur-3xl" />
        <div className="absolute -top-24 left-[-100px] h-[400px] w-[400px] rounded-full bg-[#2A0C04]/60 blur-3xl" />
        <div className="absolute -top-24 right-[-140px] h-[480px] w-[480px] rounded-full bg-[#1F0800]/80 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-6 py-12">
        {/* Nav */}
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <span className="font-medium text-[#F5E8D8]">Original Songs</span>
          <Link
            className="text-[#C99B76] transition-colors hover:text-[#F5E8D8]"
            href="/covers"
          >
            Covers
          </Link>
        </nav>

        <section id="andromeda" className="mt-10 scroll-mt-20">
          <div className="rounded-3xl border border-[#3A2013] bg-[#170905] p-6 sm:p-10">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-semibold tracking-tight text-[#F5E8D8]">{site.andromeda.title}</h2>
                {site.andromeda.subtitle ? (
                  <p className="mt-1 text-sm font-medium text-[#E8A33D]">{site.andromeda.subtitle}</p>
                ) : null}
                <p className="mt-2 text-[#C99B76]">{site.andromeda.description}</p>
              </div>
              {site.andromeda.presaveUrl && (
                <a
                  href={site.andromeda.presaveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-border relative inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-[#F5E8D8] transition-all hover:text-white hover:shadow-[0_0_24px_rgba(232,163,61,0.35)]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path fillRule="evenodd" d="M19.952 1.651a.75.75 0 0 1 .298.599V16.303a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.403-4.909l2.311-.66a1.5 1.5 0 0 0 1.088-1.442V6.994l-9 2.572v9.737a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.402-4.909l2.31-.66a1.5 1.5 0 0 0 1.088-1.442V5.25a.75.75 0 0 1 .544-.721l10.5-3a.75.75 0 0 1 .706.122Z" clipRule="evenodd" />
                  </svg>
                  Pre-save now
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Hero */}
        <header className="mt-14 grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <h1 className="text-4xl font-semibold tracking-tight text-[#F5E8D8] sm:text-5xl">
              {site.artistName}
            </h1>
            <p className="mt-2 text-base text-[#C99B76]">{site.tagline}</p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#E4CBB0]">
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
                  ) : s.label === "Apple Music" ? (
                    <SiApplemusic size={22} className="text-[#FA243C]" />
                  ) : (
                    <FaSoundcloud size={22} className="text-[#FF5500]" />
                  )}
                  <span className="text-[#E4CBB0]">{s.label}</span>
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
                    <span className="text-[#E4CBB0]">{s.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-3xl border border-[#3A2013]">
              <div className="relative aspect-square">
                <Image
                  src={site.heroImage.src}
                  alt={site.heroImage.alt}
                  fill
                  sizes="(min-width: 1024px) 420px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </header>

        <section id="ep" className="mt-14 scroll-mt-20">
          <div className="rounded-3xl border border-[#3A2013] bg-[#170905] p-6 sm:p-10">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                {site.ep.coverImage ? (
                  <div className="hidden shrink-0 overflow-hidden rounded-2xl border border-[#3A2013] sm:block">
                    <div className="relative h-24 w-24">
                      <Image
                        src={site.ep.coverImage.src}
                        alt={site.ep.coverImage.alt}
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                ) : null}
                <div className="max-w-2xl">
                  <h2 className="text-2xl font-semibold tracking-tight text-[#F5E8D8]">{site.ep.title}</h2>
                  <p className="mt-2 text-[#C99B76]">{site.ep.description}</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {site.ep.spotifyUrl && (
                  <a
                    href={site.ep.spotifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#1DB954] px-4 py-2 text-sm font-semibold text-black transition-opacity hover:opacity-90"
                  >
                    <FaSpotify size={18} />
                    Listen on Spotify
                  </a>
                )}
                {site.ep.appleMusicUrl && (
                  <a
                    href={site.ep.appleMusicUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#FA243C] px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  >
                    <SiApplemusic size={18} />
                    Listen on Apple Music
                  </a>
                )}
                {site.ep.presaveUrl && (
                  <a
                    href={site.ep.presaveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glow-border relative inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-[#F5E8D8] transition-all hover:text-white hover:shadow-[0_0_24px_rgba(232,163,61,0.35)]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path fillRule="evenodd" d="M19.952 1.651a.75.75 0 0 1 .298.599V16.303a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.403-4.909l2.311-.66a1.5 1.5 0 0 0 1.088-1.442V6.994l-9 2.572v9.737a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.402-4.909l2.31-.66a1.5 1.5 0 0 0 1.088-1.442V5.25a.75.75 0 0 1 .544-.721l10.5-3a.75.75 0 0 1 .706.122Z" clipRule="evenodd" />
                    </svg>
                    Pre-save now
                  </a>
                )}
              </div>
            </div>
            <div className="mt-6">
              <ol className="grid gap-4">
                {site.ep.tracks.map((t, idx) => {
                  const isOut = t.status === "out now";
                  return (
                    <li
                      key={`${idx + 1}-${t.title}`}
                      className={`rounded-2xl border p-6 ${
                        isOut
                          ? "border-[#E8A33D]/40 bg-[#100502] shadow-[0_0_24px_-4px_rgba(232,163,61,0.25)]"
                          : "border-[#3A2013] bg-[#100502]"
                      }`}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E8A33D] text-sm font-semibold text-[#170905]">
                            {idx + 1}
                          </div>
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="text-lg font-semibold tracking-tight text-[#F5E8D8]">{t.title}</h3>
                              <span
                                className={
                                  isOut
                                    ? "rounded-full bg-[#3A1A06] px-2 py-1 text-xs font-medium text-[#E8A33D]"
                                    : "rounded-full bg-[#120600] px-2 py-1 text-xs font-medium text-[#6B4A34]"
                                }
                              >
                                {t.status}
                              </span>
                            </div>
                            <p className="mt-2 text-sm leading-relaxed text-[#C99B76]">{t.description}</p>
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
            </div>
          </div>
        </section>

        <SectionPanel
          id="covers"
          title="Weekly covers"
          subtitle="I post one cover per week — the full list lives on the covers page."
        >
          <div className="flex flex-wrap items-center gap-3">
            <Link
              className="inline-flex items-center rounded-full border border-[#3A2013] bg-[#100502] px-4 py-2 text-sm font-medium text-[#F5E8D8] transition-colors hover:border-[#6B3A1D] hover:bg-[#2A1208]"
              href="/covers"
            >
              View all covers
            </Link>
            <span className="text-sm text-[#C99B76]">Quick links:</span>
            {site.weeklyCovers.map((c) => (
              <a
                key={c.platform}
                className="text-sm text-[#E8A33D] underline decoration-[#3A2013] underline-offset-4 transition-colors hover:decoration-[#E8A33D]"
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
          <div className="rounded-3xl border border-[#3A2013] bg-[#170905] p-6 sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight text-[#F5E8D8]">Contact</h2>
            <p className="mt-2 text-[#C99B76]">Best way to reach me is via Instagram DM.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <PillLink href="https://www.instagram.com/terencedumas/">Instagram</PillLink>
              <PillLink href="https://www.linkedin.com/in/dumast/">LinkedIn</PillLink>
            </div>
            <div className="mt-10 text-sm text-[#6B4A34]">© {new Date().getFullYear()} {site.artistName}</div>
          </div>
        </footer>
      </div>
    </main>
  );
}
