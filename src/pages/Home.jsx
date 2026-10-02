import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  caseStudies,
  clients,
  differentiators,
  posts,
  process,
  projects,
  services,
  testimonials,
} from '../data'
import { CTABanner, GhostButton, GoldKicker, PrimaryButton, Reveal } from '../components/ui'

function Marquee() {
  const items = [
    'Personal Branding',
    'Public Relations',
    'Digital Growth',
    'Websites',
    'Video Production',
    'Reputation',
    'Storytelling',
    'Influence',
  ]
  const row = [...items, ...items]
  return (
    <div className="border-y border-green/20 bg-ink-2 py-5">
      <div className="marquee">
        <div className="marquee-track">
          {row.map((item, i) => (
            <span key={i} className="flex items-center gap-8 text-[12px] tracking-[0.35em] text-green uppercase">
              {item}
              <span className="h-1.5 w-1.5 rounded-full bg-green/60" />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

const serviceIcons = {
  'personal-branding': '◈',
  'public-relations': '◉',
  'digital-marketing': '◆',
  'website-development': '⬡',
  'video-production': '▶',
}

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative isolate min-h-screen overflow-hidden bg-ink">
        <img
          src="/images/hero-identity.jpg"
          alt="A professional personal brand portrait"
          className="kenburns absolute inset-0 h-full w-full object-cover object-[center_20%]"
        />
        {/* Dark overlays */}
        <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/85 to-ink/30" />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-transparent to-ink/50" />
        {/* Green glow */}
        <div className="pointer-events-none absolute bottom-0 left-0 h-100 w-150 rounded-full bg-green/10 blur-[120px]" />
        {/* Hexagonal pattern overlay */}
        <div className="absolute inset-0 hex-bg opacity-30" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-28 pt-32 md:px-8">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex items-center gap-3 text-[11px] tracking-[0.42em] text-green uppercase"
          >
            <span className="h-px w-8 bg-green" />
            Personal Branding • PR • Digital Growth
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display mt-6 max-w-5xl text-5xl leading-[0.92] font-bold text-cream sm:text-7xl lg:text-[100px]"
          >
            From Identity
            <br />
            <em className="text-green not-italic">to Influence.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-cream/72"
          >
            We build powerful personal and business brands through strategy, PR, digital marketing, websites and content.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <PrimaryButton to="/contact">Build My Brand</PrimaryButton>
            <GhostButton to="/work" light>
              View Our Work
            </GhostButton>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
            className="mt-16 flex flex-wrap gap-10"
          >
            {[
              { n: '200+', l: 'Brands Built' },
              { n: '5+', l: 'Years of Excellence' },
              { n: '98%', l: 'Client Satisfaction' },
              { n: '15+', l: 'Service Specialties' },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display text-3xl font-bold text-green">{s.n}</p>
                <p className="mt-1 text-xs tracking-wide text-cream/50">{s.l}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute right-8 bottom-10 hidden items-center gap-3 text-[10px] tracking-[0.3em] text-cream/50 uppercase md:flex">
          <span className="relative grid h-10 w-10 place-items-center">
            <span className="pulse-ring absolute inset-0 rounded-full border border-green" />
            <span className="h-2 w-2 rounded-full bg-green" />
          </span>
          Scroll
        </div>
      </section>

      <Marquee />

      {/* ── WHO WE WORK WITH ── */}
      <section className="bg-offwhite py-14 text-ink">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <GoldKicker>Who we work with</GoldKicker>
          <div className="flex flex-wrap gap-3">
            {clients.map((c) => (
              <span
                key={c}
                className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm text-ink/70 hover:border-green hover:text-green transition-colors duration-200"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="bg-offwhite pb-28 text-ink">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2 md:px-8">
          <Reveal>
            <div className="img-zoom overflow-hidden rounded-4xl shadow-2xl">
              <img src="/images/about-studio.jpg" alt="Delibots studio" className="h-130 w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <GoldKicker>About Delibots</GoldKicker>
            <h2 className="font-display text-4xl font-bold leading-[1.05] md:text-6xl">We Build Brands People Remember.</h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              Delibots is a creative branding and digital solutions company helping individuals, professionals, founders,
              businesses, and brands build a powerful presence both online and offline.
            </p>
            <p className="mt-4 leading-relaxed text-ink/65">
              Branding is more than a logo or social media page. It is about how people{' '}
              <strong className="text-ink">see you, remember you, trust you, and talk about you.</strong>
            </p>
            <div className="mt-8">
              <GhostButton to="/about">Explore Our Story</GhostButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="bg-ink py-28 hex-bg">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <Reveal>
            <GoldKicker>What we do</GoldKicker>
            <h2 className="font-display max-w-3xl text-4xl font-bold text-cream md:text-6xl">
              Everything Your Brand Needs to Stand Out
            </h2>
            <p className="mt-5 max-w-2xl text-cream/60">
              At Delibots, we combine branding, creativity, technology, and communication to create a complete digital
              presence — with personal branding and PR at the centre.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.06}>
                <Link
                  to={`/services/${s.slug}`}
                  className="card-shine group block overflow-hidden rounded-[1.6rem] border border-white/8 bg-ink-2 hover:border-green/30 transition-colors duration-300"
                >
                  <div className="img-zoom h-52 overflow-hidden">
                    <img src={s.image} alt={s.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-7">
                    <div className="flex items-center gap-2">
                      <span className="text-xl text-green">{serviceIcons[s.slug] || '◈'}</span>
                      <p className="text-[11px] tracking-[0.28em] text-green uppercase">{s.kicker}</p>
                    </div>
                    <h3 className="font-display mt-3 text-2xl font-bold text-cream">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-cream/60">{s.summary}</p>
                    <p className="mt-5 text-xs tracking-[0.2em] text-green uppercase group-hover:gap-2 transition-all">Explore →</p>
                  </div>
                </Link>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <div className="flex h-full min-h-85 flex-col justify-between rounded-[1.6rem] bg-green p-8 text-ink">
                <p className="text-[11px] tracking-[0.28em] uppercase font-semibold opacity-70">One partner</p>
                <div>
                  <h3 className="font-display text-4xl font-bold leading-tight">Complete Brand Growth.</h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink/70">
                    Identity, reputation, and digital presence — designed to work as one system.
                  </p>
                </div>
                <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4">
                  Talk to Our Team →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── PERSONAL BRANDING HIGHLIGHT ── */}
      <section className="relative overflow-hidden bg-offwhite py-28 text-ink">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:px-8">
          <Reveal>
            <GoldKicker>Personal branding highlight</GoldKicker>
            <h2 className="font-display text-4xl font-bold md:text-6xl">Your Name Is a Brand.</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/70">
              We help professionals, founders, executives, creators, and public personalities establish a strong and
              consistent personal brand — then grow it through PR, content, and digital presence.
            </p>
            <p className="mt-8 font-display text-2xl italic text-ink/70">
              Build your identity. Strengthen your reputation. Grow your influence.
            </p>
            <div className="mt-8">
              <PrimaryButton to="/services/personal-branding" dark>
                Build Your Personal Brand
              </PrimaryButton>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="relative">
              <div className="floaty absolute -top-8 -left-6 hidden h-40 w-32 overflow-hidden rounded-2xl md:block shadow-xl">
                <img src="/images/portrait-creator.jpg" alt="" className="h-full w-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-4xl shadow-2xl">
                <img
                  src="/images/portrait-consultant.jpg"
                  alt="Personal branding portrait"
                  className="h-140 w-full object-cover"
                />
              </div>
              <div className="absolute -right-4 -bottom-8 hidden w-56 rounded-2xl bg-green p-5 text-ink md:block shadow-xl">
                <p className="text-[10px] tracking-[0.28em] uppercase font-semibold opacity-70">Signature work</p>
                <p className="font-display mt-2 text-xl font-bold">Portraits that position you.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="bg-ink py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="flex items-end justify-between gap-6">
            <Reveal>
              <GoldKicker>Featured projects</GoldKicker>
              <h2 className="font-display text-4xl font-bold text-cream md:text-6xl">Ideas We&apos;ve Turned Into Impact</h2>
            </Reveal>
            <Link to="/work" className="hidden text-sm text-green hover:text-green-3 transition md:inline">
              All work →
            </Link>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {projects.slice(0, 3).map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <Link to="/work" className="group block">
                  <div className="img-zoom overflow-hidden rounded-3xl">
                    <img src={p.image} alt={p.name} className="h-80 w-full object-cover" />
                  </div>
                  <p className="mt-4 text-[11px] tracking-[0.28em] text-green uppercase">{p.category}</p>
                  <h3 className="font-display text-2xl font-bold text-cream">{p.name}</h3>
                  <p className="text-sm text-cream/55">{p.industry}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY DELIBOTS ── */}
      <section className="bg-offwhite py-28 text-ink">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <Reveal>
            <GoldKicker>Why Delibots</GoldKicker>
            <h2 className="font-display max-w-3xl text-4xl font-bold md:text-6xl">One Partner. Complete Brand Growth.</h2>
            <p className="mt-5 max-w-2xl text-ink/65">
              Instead of working with multiple agencies for branding, PR, marketing, websites, and content, Delibots
              brings everything together.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-ink/8 bg-ink/8 md:grid-cols-5">
            {differentiators.map((d, i) => (
              <Reveal key={d.t} delay={i * 0.05} className="bg-offwhite p-7 hover:bg-white transition-colors duration-200">
                <p className="font-display text-5xl font-bold text-green/40">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-6 text-lg font-semibold">{d.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{d.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="bg-ink py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <Reveal>
            <GoldKicker>Our process</GoldKicker>
            <h2 className="font-display text-4xl font-bold text-cream md:text-6xl">From Idea to Influence</h2>
          </Reveal>
          <div className="mt-14 divide-y divide-white/8 border-y border-white/8">
            {process.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.05}>
                <div className="group grid gap-4 py-8 md:grid-cols-[140px_220px_1fr] md:items-center">
                  <p className="font-display text-4xl font-bold text-green">{step.n}</p>
                  <h3 className="text-xl font-semibold text-cream group-hover:text-green transition-colors">{step.t}</h3>
                  <p className="text-cream/60">{step.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section className="bg-offwhite py-28 text-ink">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <Reveal>
            <GoldKicker>Case studies</GoldKicker>
            <h2 className="font-display text-4xl font-bold md:text-6xl">Real Work. Measurable Impact.</h2>
          </Reveal>
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {caseStudies.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.08}>
                <Link
                  to={`/case-studies/${c.slug}`}
                  className="group block overflow-hidden rounded-[1.6rem] bg-ink text-cream shadow-lg hover:shadow-green/10 hover:shadow-2xl transition-shadow duration-300"
                >
                  <img src={c.image} alt={c.name} className="h-52 w-full object-cover" />
                  <div className="p-7">
                    <p className="text-[11px] tracking-[0.28em] text-green uppercase">{c.name}</p>
                    <h3 className="font-display mt-2 text-2xl font-bold">{c.title}</h3>
                    <div className="mt-6 grid grid-cols-2 gap-3">
                      {c.results.slice(0, 2).map((r) => (
                        <div key={r.l}>
                          <p className="font-display text-3xl font-bold text-green">{r.k}</p>
                          <p className="text-xs text-cream/55">{r.l}</p>
                        </div>
                      ))}
                    </div>
                    <p className="mt-6 text-xs tracking-wide text-green uppercase group-hover:underline">View Case Study →</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-ink py-28 hex-bg">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <Reveal>
            <GoldKicker>Testimonials</GoldKicker>
            <h2 className="font-display text-4xl font-bold text-cream md:text-6xl">What Our Clients Say</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <article className="h-full rounded-[1.6rem] border border-green/15 bg-ink-2 p-7 hover:border-green/35 transition-colors duration-300">
                  <img src={t.image} alt={t.name} className="h-14 w-14 rounded-full object-cover ring-2 ring-green/30" />
                  <p className="font-display mt-6 text-xl leading-snug text-cream/90 italic">"{t.quote}"</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-px flex-1 bg-green/20" />
                  </div>
                  <p className="mt-4 text-sm font-semibold text-cream">{t.name}</p>
                  <p className="text-xs text-green">{t.role}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSIGHTS ── */}
      <section className="bg-offwhite py-28 text-ink">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="flex items-end justify-between">
            <Reveal>
              <GoldKicker>Insights</GoldKicker>
              <h2 className="font-display text-4xl font-bold md:text-6xl">Ideas That Build Better Brands</h2>
            </Reveal>
            <Link to="/insights" className="hidden text-sm text-green hover:text-green-2 transition md:inline">
              All insights →
            </Link>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {posts.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.07}>
                <Link to={`/insights/${p.slug}`} className="group block">
                  <div className="img-zoom overflow-hidden rounded-[1.4rem] shadow-md">
                    <img src={p.image} alt={p.title} className="h-56 w-full object-cover" />
                  </div>
                  <p className="mt-4 text-[11px] tracking-[0.28em] text-green uppercase">{p.category}</p>
                  <h3 className="font-display mt-1 text-2xl font-bold group-hover:text-green transition-colors duration-200">{p.title}</h3>
                  <p className="mt-2 text-sm text-ink/60 line-clamp-2">{p.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
