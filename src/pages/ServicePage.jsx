import { Link, useParams } from 'react-router-dom'
import { services } from '../data'
import { CTABanner, GoldKicker, PageHero, PrimaryButton, Reveal } from '../components/ui'

export function ServicesIndex() {
  return (
    <>
      <PageHero
        kicker="Services"
        title="From identity to influence."
        subtitle="Personal branding and PR first. Digital marketing, websites, and video as the growth engine around them."
        image="/images/hero-identity.jpg"
      />
      <section className="bg-offwhite py-24 text-ink">
        <div className="mx-auto max-w-6xl space-y-16 px-6 md:px-8">
          {services.map((s, i) => (
            <Reveal key={s.slug}>
              <Link to={`/services/${s.slug}`} className="grid items-center gap-8 md:grid-cols-2">
                <div className={`img-zoom overflow-hidden rounded-[1.8rem] shadow-lg ${i % 2 ? 'md:order-2' : ''}`}>
                  <img src={s.image} alt={s.title} className="h-80 w-full object-cover" />
                </div>
                <div>
                  <GoldKicker>{s.kicker}</GoldKicker>
                  <h2 className="font-display text-4xl font-bold md:text-5xl">{s.title}</h2>
                  <p className="mt-4 text-ink/65">{s.summary}</p>
                  <p className="mt-6 text-sm tracking-[0.2em] text-green uppercase">View service →</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}

export default function ServicePage() {
  const { slug } = useParams()
  const s = services.find((x) => x.slug === slug)
  if (!s) {
    return (
      <section className="grid min-h-screen place-items-center bg-ink text-cream">
        <p>Service not found.</p>
      </section>
    )
  }

  return (
    <>
      <PageHero kicker={s.kicker} title={s.headline} subtitle={s.summary} image={s.image} />
      <section className="bg-offwhite py-24 text-ink">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <GoldKicker>{s.title} services</GoldKicker>
          <h2 className="font-display text-4xl font-bold md:text-5xl">What we deliver</h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {s.items.map((item) => (
              <div key={item} className="rounded-2xl border border-green/15 bg-white px-5 py-4 text-sm hover:border-green/35 hover:bg-green/5 transition-colors duration-200">
                <span className="text-green mr-2">✓</span>{item}
              </div>
            ))}
          </div>
          {s.audience ? (
            <p className="mt-12 text-ink/60">
              <strong className="text-ink">Who is it for?</strong> {s.audience}
            </p>
          ) : null}
          {s.approach ? (
            <p className="font-display mt-12 text-2xl font-semibold text-green md:text-3xl">{s.approach}</p>
          ) : null}
          {s.process ? (
            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {s.process.map((p) => (
                <div key={p.n} className="rounded-[1.4rem] bg-ink p-7 text-cream border border-green/15 hover:border-green/35 transition-colors">
                  <p className="text-green font-bold text-lg">{p.n}</p>
                  <h3 className="font-display mt-2 text-2xl font-bold">{p.t}</h3>
                  <p className="mt-3 text-sm text-cream/60">{p.d}</p>
                </div>
              ))}
            </div>
          ) : null}
          <div className="mt-12">
            <PrimaryButton to="/contact" dark>
              {s.cta}
            </PrimaryButton>
          </div>
        </div>
      </section>
      <CTABanner title={s.cta} />
    </>
  )
}
