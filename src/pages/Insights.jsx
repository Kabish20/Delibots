import { Link, useParams } from 'react-router-dom'
import { posts } from '../data'
import { CTABanner, GoldKicker, PageHero, PrimaryButton, Reveal } from '../components/ui'

export function InsightsIndex() {
  return (
    <>
      <PageHero
        kicker="Insights"
        title="Ideas That Build Better Brands"
        subtitle="Personal branding, PR, digital marketing, websites, video, and entrepreneurship."
        image="/images/about-studio.jpg"
      />
      <section className="bg-offwhite py-24 text-ink">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:px-8">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <Link to={`/insights/${p.slug}`} className="group block">
                <div className="img-zoom overflow-hidden rounded-3xl shadow-md">
                  <img src={p.image} alt={p.title} className="h-64 w-full object-cover" />
                </div>
                <p className="mt-4 text-[11px] tracking-[0.28em] text-green uppercase font-semibold">
                  {p.category} · {p.date}
                </p>
                <h2 className="font-display mt-2 text-3xl font-bold group-hover:text-green transition-colors duration-200">{p.title}</h2>
                <p className="mt-3 text-ink/60">{p.excerpt}</p>
                <p className="mt-4 text-xs tracking-wide text-green uppercase group-hover:underline">Read Article →</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CTABanner />
    </>
  )
}

export default function InsightArticle() {
  const { slug } = useParams()
  const p = posts.find((x) => x.slug === slug)
  if (!p) return <p className="p-24 text-cream">Not found.</p>

  return (
    <>
      <PageHero kicker={`${p.category} · ${p.date}`} title={p.title} subtitle={p.excerpt} image={p.image} />
      <article className="bg-offwhite py-20 text-ink">
        <div className="mx-auto max-w-3xl space-y-6 px-6 text-lg leading-relaxed text-ink/75">
          {p.body.map((para) => (
            <p key={para}>{para}</p>
          ))}
          <div className="border-t border-green/20 pt-8 flex items-center justify-between flex-wrap gap-4">
            <Link to="/insights" className="text-sm text-green hover:underline flex items-center gap-2">
              ← All Insights
            </Link>
            <PrimaryButton to="/contact" dark>Start a Conversation</PrimaryButton>
          </div>
        </div>
      </article>
    </>
  )
}
