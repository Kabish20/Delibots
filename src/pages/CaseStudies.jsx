import { Link, useParams } from 'react-router-dom'
import { caseStudies } from '../data'
import { CTABanner, GoldKicker, PageHero, Reveal } from '../components/ui'

export function CaseStudiesIndex() {
  return (
    <>
      <PageHero
        kicker="Case Studies"
        title="Real Work. Measurable Impact."
        subtitle="Instead of showing only beautiful designs, we explain the business result."
        image="/images/pr-stage.jpg"
      />
      <section className="bg-offwhite py-24 text-ink">
        <div className="mx-auto max-w-6xl space-y-8 px-6 md:px-8">
          {caseStudies.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.05}>
              <Link
                to={`/case-studies/${c.slug}`}
                className="group grid overflow-hidden rounded-[1.8rem] bg-ink text-cream md:grid-cols-2 hover:shadow-2xl hover:shadow-green/10 transition-shadow duration-300"
              >
                <img src={c.image} alt={c.name} className="h-72 w-full object-cover md:h-full" />
                <div className="p-10">
                  <GoldKicker>{c.name}</GoldKicker>
                  <h2 className="font-display text-4xl font-bold">{c.title}</h2>
                  <p className="mt-4 text-cream/60">{c.delivered}</p>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    {c.results.map((r) => (
                      <div key={r.l}>
                        <p className="font-display text-3xl font-bold text-green">{r.k}</p>
                        <p className="text-xs text-cream/50">{r.l}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 text-xs tracking-wide text-green uppercase group-hover:underline">View Case Study →</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CTABanner />
    </>
  )
}

export default function CaseStudy() {
  const { slug } = useParams()
  const c = caseStudies.find((x) => x.slug === slug)
  if (!c) return <p className="p-24 text-cream">Not found.</p>

  return (
    <>
      <PageHero kicker={c.name} title={c.title} image={c.image} />
      <section className="bg-offwhite py-24 text-ink">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 md:px-8">
          <div>
            <GoldKicker>Client Challenge</GoldKicker>
            <p className="text-xl text-ink/75">{c.challenge}</p>
          </div>
          <div>
            <GoldKicker>Our Strategy</GoldKicker>
            <p className="text-xl text-ink/75">{c.strategy}</p>
          </div>
          <div>
            <GoldKicker>What We Delivered</GoldKicker>
            <p className="font-display text-3xl font-bold">{c.delivered}</p>
          </div>
          {/* Results grid */}
          <div className="grid gap-4 sm:grid-cols-4">
            {c.results.map((r) => (
              <div key={r.l} className="rounded-2xl bg-ink p-6 text-cream border border-green/15">
                <p className="font-display text-4xl font-bold text-green">{r.k}</p>
                <p className="mt-2 text-xs text-cream/55">{r.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  )
}
