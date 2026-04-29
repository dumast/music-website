import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/content/site";

import { FaInstagram, FaYoutube, FaSoundcloud } from "react-icons/fa";

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

export default async function CoversPage({
  searchParams,
}: {
  searchParams: Promise<{ series?: string }>;
}) {
  const { series: selectedSeries } = await searchParams;
  const activeSeries = site.series.find((s) => s.slug === selectedSeries);

  // Count how many times each title appears in the cover index (case-insensitive)
  const titleCounts = site.coverIndex.reduce<Record<string, number>>((acc, c) => {
    const normalizedTitle = c.title.toLowerCase();
    acc[normalizedTitle] = (acc[normalizedTitle] ?? 0) + 1;
    return acc;
  }, {});

  // Assign a per-title occurrence index (1-based) to each entry in original order (case-insensitive)
  const titleSeen: Record<string, number> = {};
  const coversWithIndex = site.coverIndex.map((c) => {
    const normalizedTitle = c.title.toLowerCase();
    titleSeen[normalizedTitle] = (titleSeen[normalizedTitle] ?? 0) + 1;
    return { ...c, occurrenceIndex: titleSeen[normalizedTitle] };
  });

  const filteredCovers = activeSeries
    ? coversWithIndex.filter((c) => c.series === activeSeries.slug)
    : coversWithIndex;

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

        {site.series.length > 0 ? (
          <section className="mt-14 scroll-mt-20">
            <h2 className="text-2xl font-semibold tracking-tight text-[#DDE4EC]">Series</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {site.series.map((s) => {
                const seriesCovers = site.coverIndex.filter((c) => c.series === s.slug);
                return (
                  <div key={s.slug} className="rounded-2xl border border-[#0E1E2E] bg-[#050F1A] p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="text-base font-semibold text-[#DDE4EC]">{s.name}</div>
                      <span className="rounded-full bg-[#0A2030] px-2 py-0.5 text-xs text-[#89A1B9]">
                        {seriesCovers.length} covers
                      </span>
                    </div>
                    <div className="mt-2 text-sm text-[#7A96B0]">{s.description}</div>
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <Link
                        href={`/covers?series=${s.slug}#cover-index`}
                        className="inline-flex items-center gap-2 rounded-full border border-[#1A2E40] bg-[#030B14] px-4 py-2 text-sm font-medium text-[#DDE4EC] transition-colors hover:border-[#2A4558] hover:bg-[#0A1A27]"
                      >
                        Filter index
                      </Link>
                      {s.soundcloudPlaylistUrl ? (
                        <a
                          href={s.soundcloudPlaylistUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-[#FF5500] px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                        >
                          <FaSoundcloud size={18} />
                          Listen on SoundCloud
                        </a>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ) : null}

        <section id="cover-index" className="mt-14 scroll-mt-20">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="text-2xl font-semibold tracking-tight text-[#DDE4EC]">Cover index</h2>
            <div className="text-sm text-[#7A96B0]">
              {filteredCovers.length}
              {activeSeries ? ` of ${site.coverIndex.length}` : ""} total
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <Link
              href="/covers#cover-index"
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                activeSeries
                  ? "border-[#1A2E40] bg-[#030B14] text-[#7A96B0] hover:border-[#2A4558] hover:text-[#DDE4EC]"
                  : "border-[#89A1B9] bg-[#0A2030] text-[#DDE4EC]"
              }`}
            >
              All
            </Link>
            {site.series.map((s) => {
              const isActive = activeSeries?.slug === s.slug;
              return (
                <Link
                  key={s.slug}
                  href={`/covers?series=${s.slug}#cover-index`}
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                    isActive
                      ? "border-[#89A1B9] bg-[#0A2030] text-[#DDE4EC]"
                      : "border-[#1A2E40] bg-[#030B14] text-[#7A96B0] hover:border-[#2A4558] hover:text-[#DDE4EC]"
                  }`}
                >
                  {s.name}
                </Link>
              );
            })}
          </div>

          <div className="mt-5 grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {[...filteredCovers].reverse().map((c) => {
              const slug = slugifyTitle(c.title);
              const normalizedTitle = c.title.toLowerCase();
              const imageSrc =
                titleCounts[normalizedTitle] > 1
                  ? `/images/covers/${slug}-${c.occurrenceIndex}-web-500x307.webp`
                  : `/images/covers/${slug}-web-500x307.webp`;
              return (
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
                  src={imageSrc}
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
                    {c.featuring && c.featuring.length > 0 ? (
                      <span className="rounded-full bg-[#0A2030] px-2 py-0.5 text-xs text-[#89A1B9] whitespace-nowrap">
                        feat. {c.featuring.join(" & ")}
                      </span>
                    ) : null}
                    {c.series ? (
                      <span className="rounded-full bg-[#1F1A0A] px-2 py-0.5 text-xs text-[#E8C46B] whitespace-nowrap">
                        {site.series.find((s) => s.slug === c.series)?.name ?? c.series}
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
                  {c.soundcloudUrl ? (
                    <PillLink href={c.soundcloudUrl}>
                      <FaSoundcloud size={14} className="text-[#FF5500]" />
                    </PillLink>
                  ) : null}
                </div>
              </div>
              );
            })}
          </div>
        </section>

        <footer className="mt-16 border-t border-[#0E1E2E] pt-10 text-sm text-[#3A5468]">
          <div>© {new Date().getFullYear()} {site.artistName}</div>
        </footer>
      </div>
    </main>
  );
}
