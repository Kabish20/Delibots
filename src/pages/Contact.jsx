import { useState } from 'react'
import { GoldKicker, PageHero, Reveal } from '../components/ui'

const options = [
  'Personal Branding',
  'PR',
  'Digital Marketing',
  'Website Development',
  'Video Editing',
  'Social Media Management',
  'Complete Branding',
  'Other',
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  function onSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHero
        kicker="Contact"
        title="Ready to Build a Brand People Remember?"
        subtitle="Whether you're building a personal brand, launching a business, improving your digital presence, or looking for a complete creative partner, Delibots is ready to help."
        image="/images/hero-identity.jpg"
      />
      <section className="bg-offwhite py-24 text-ink">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2 md:px-8">
          <Reveal>
            <GoldKicker>Start a conversation</GoldKicker>
            <h2 className="font-display text-5xl">Let’s build your brand.</h2>
            <p className="mt-5 text-ink/65">
              Tell us where you are, and what you want people to feel when they hear your name.
            </p>
            <div className="mt-10 space-y-4">
              <div className="flex items-start gap-3 text-sm text-ink/70">
                <span className="mt-0.5 h-8 w-8 shrink-0 rounded-full bg-green/10 grid place-items-center text-green font-bold">@</span>
                <span>admin@delibots.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-ink/70">
                <span className="h-8 w-8 shrink-0 rounded-full bg-green/10 grid place-items-center text-green font-bold">#</span>
                <span>+91 63807 13586</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-ink/70">
                <span className="mt-0.5 h-8 w-8 shrink-0 rounded-full bg-green/10 grid place-items-center text-green text-xs">◎</span>
                <span>55, Crescent Park, Ground Floor, Sulaiman Hazrath St, Opp. Jamal Mohamed Masjid, Trichy, Tamil Nadu</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            {sent ? (
              <div className="rounded-[1.6rem] bg-ink p-10 text-cream">
                <h3 className="font-display text-4xl">Received.</h3>
                <p className="mt-4 text-cream/65">
                  Thank you. Our team will review your note and come back with a thoughtful next step.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5 rounded-[1.6rem] bg-ink p-8 text-cream md:p-10">
                <input className="form-field" name="name" placeholder="Name" required />
                <input className="form-field" name="phone" placeholder="Phone Number" />
                <input className="form-field" type="email" name="email" placeholder="Email" required />
                <input className="form-field" name="brand" placeholder="Company / Brand" />
                <select className="form-field" name="service" defaultValue="">
                  <option value="" disabled>
                    Service Required
                  </option>
                  {options.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
                <textarea
                  className="form-field min-h-32 resize-y"
                  name="message"
                  placeholder="Tell us about your requirement"
                />
                <button
                  type="submit"
                  className="mt-4 w-full rounded-full bg-green py-3 text-sm font-semibold text-ink transition hover:bg-green-3"
                >
                  Let’s Build Your Brand
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  )
}

export function Legal({ kind }) {
  const title = kind === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'
  return (
    <>
      <PageHero kicker="Legal" title={title} />
      <section className="bg-cream py-20 text-ink">
        <div className="mx-auto max-w-3xl space-y-4 px-6 leading-relaxed text-ink/70">
          <p>
            This is a placeholder legal page for the DELIBOT website. Replace this copy with counsel-approved terms
            before public launch.
          </p>
          <p>
            DELIBOT respects your information and uses contact details only to respond to enquiries about branding, PR,
            and digital growth services.
          </p>
        </div>
      </section>
    </>
  )
}
