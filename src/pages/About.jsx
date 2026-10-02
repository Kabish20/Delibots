import { Link } from 'react-router-dom'
import { differentiators } from '../data'
import { CTABanner, GoldKicker, PageHero, Reveal } from '../components/ui'

export default function About() {
  return (
    <>
      <PageHero
        kicker="About Delibots"
        title="We Build Brands People Remember."
        subtitle="Delibots helps people and businesses transform their ideas, expertise, and stories into powerful brands."
        image="/images/about-studio.jpg"
      />
      <section className="bg-offwhite py-24 text-ink">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:px-8">
          <Reveal>
            <p className="text-xl leading-relaxed text-ink/75">
              We believe branding is more than a logo or social media page. It is about how people{' '}
              <strong>see you, remember you, trust you, and talk about you.</strong>
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="leading-relaxed text-ink/65">
              Our team combines strategy, creativity, technology, and communication to build brands with long-term
              value. Personal branding and public relations lead. Digital marketing, websites, and video production
              complete the ecosystem.
            </p>
          </Reveal>
        </div>
        <div className="mx-auto mt-20 grid max-w-6xl gap-6 px-6 md:grid-cols-2 md:px-8">
          <Reveal>
            <article className="rounded-[1.8rem] bg-ink p-10 text-cream border border-green/20 hover:border-green/40 transition-colors">
              <GoldKicker>Our Mission</GoldKicker>
              <h2 className="font-display text-4xl font-bold">Credible. Influential. Meaningful.</h2>
              <p className="mt-5 text-cream/65">
                To help individuals and businesses build credible, influential, and meaningful brands through powerful
                communication and digital experiences.
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.1}>
            <article className="rounded-[1.8rem] border border-ink/10 p-10">
              <GoldKicker>Our Vision</GoldKicker>
              <h2 className="font-display text-4xl">A trusted partner for ambitious people.</h2>
              <p className="mt-5 text-ink/65">
                To become a trusted branding and communication partner for ambitious individuals, entrepreneurs,
                professionals, and businesses.
              </p>
            </article>
          </Reveal>
        </div>
      </section>
      <section className="bg-ink py-24 hex-bg">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <GoldKicker>What makes us different</GoldKicker>
          <h2 className="font-display text-5xl font-bold text-cream">Strategy, story, and systems.</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {differentiators.map((d) => (
              <div key={d.t} className="border-t border-green/30 pt-6 hover:border-green transition-colors duration-200">
                <h3 className="text-xl font-semibold text-cream">{d.t}</h3>
                <p className="mt-3 text-sm text-cream/55">{d.d}</p>
              </div>
            ))}
          </div>
          <Link to="/contact" className="mt-12 inline-block text-green hover:text-green-3 transition">
            Talk to Our Team →
          </Link>
        </div>
      </section>
      <CTABanner />
    </>
  )
}
