import { useMemo, useState } from 'react'
import { projects } from '../data'
import { CTABanner, GoldKicker, PageHero, Reveal } from '../components/ui'

const cats = ['All', 'Personal Branding', 'PR', 'Social Media', 'Websites', 'Video', 'Campaigns']

export default function Work() {
  const [cat, setCat] = useState('All')
  const list = useMemo(
    () => (cat === 'All' ? projects : projects.filter((p) => p.category === cat)),
    [cat],
  )

  return (
    <>
      <PageHero
        kicker="Our Work"
        title="Ideas We've Turned Into Impact"
        subtitle="Projects across personal branding, PR, social, websites, video, and campaigns."
        image="/images/social-flatlay.jpg"
      />
      <section className="bg-offwhite py-20 text-ink">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 mb-12">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                  cat === c
                    ? 'bg-green text-ink shadow-md'
                    : 'border border-ink/15 hover:border-green hover:text-green'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            {list.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.05}>
                <article className="overflow-hidden rounded-[1.8rem] bg-white shadow-sm hover:shadow-xl transition-shadow duration-300 border border-green/0 hover:border-green/15">
                  <div className="img-zoom">
                    <img src={p.image} alt={p.name} className="h-80 w-full object-cover" />
                  </div>
                  <div className="p-8">
                    <GoldKicker>{p.category} · {p.industry}</GoldKicker>
                    <h2 className="font-display text-4xl font-bold">{p.name}</h2>
                    <dl className="mt-6 space-y-4 text-sm">
                      <div>
                        <dt className="text-green font-semibold mb-1">Challenge</dt>
                        <dd className="text-ink/70">{p.challenge}</dd>
                      </div>
                      <div>
                        <dt className="text-green font-semibold mb-1">Delibots Solution</dt>
                        <dd className="text-ink/70">{p.solution}</dd>
                      </div>
                      <div>
                        <dt className="text-green font-semibold mb-1">Services Delivered</dt>
                        <dd className="text-ink/70">{p.services}</dd>
                      </div>
                      <div className="rounded-xl bg-green/8 px-4 py-3">
                        <dt className="text-green font-semibold mb-1">Result</dt>
                        <dd className="text-ink/80 font-medium">{p.result}</dd>
                      </div>
                    </dl>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  )
}
