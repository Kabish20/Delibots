import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export function Reveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function GoldKicker({ children }) {
  return (
    <p className="mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.38em] text-green">
      <span className="h-px w-6 bg-green inline-block" />
      {children}
    </p>
  )
}

export function PrimaryButton({ to, children, dark = false }) {
  const cls = dark
    ? 'bg-ink text-cream border border-green/40 hover:bg-green hover:text-ink hover:border-green'
    : 'bg-green text-ink hover:bg-green-3 glow-btn'
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center rounded-full px-7 py-3 text-[13px] font-semibold tracking-wide transition-all duration-300 ${cls}`}
    >
      {children}
    </Link>
  )
}

export function GhostButton({ to, children, light = false }) {
  const cls = light
    ? 'border-cream/30 text-cream hover:border-green hover:text-green'
    : 'border-ink/20 text-ink hover:border-green hover:text-green'
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center rounded-full border px-7 py-3 text-[13px] font-medium tracking-wide transition-all duration-300 ${cls}`}
    >
      {children}
    </Link>
  )
}

export function PageHero({ kicker, title, subtitle, image }) {
  return (
    <section className="relative isolate min-h-[72vh] overflow-hidden bg-ink pt-28">
      {image ? (
        <img
          src={image}
          alt=""
          className="kenburns absolute inset-0 h-full w-full object-cover opacity-25"
        />
      ) : null}
      <div className="absolute inset-0 bg-linear-to-b from-ink/60 via-ink/80 to-ink" />
      {/* Green glow orb */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green/10 blur-[120px]" />
      <div className="relative mx-auto flex max-w-6xl flex-col justify-end px-6 pb-20 pt-24">
        <Reveal>
          <GoldKicker>{kicker}</GoldKicker>
          <h1 className="font-display max-w-4xl text-5xl leading-[0.95] font-bold tracking-tight text-cream md:text-7xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream/70">{subtitle}</p>
          ) : null}
        </Reveal>
      </div>
    </section>
  )
}

export function CTABanner({
  title = 'Ready to Build a Brand People Remember?',
  body = 'Whether you are building a personal brand, launching a business, or looking for a complete creative partner, Delibots is ready to help.',
}) {
  return (
    <section className="relative overflow-hidden bg-ink-2 py-28 text-center">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green/15 blur-[100px]" />
      </div>
      {/* Hexagonal border pattern */}
      <div className="absolute inset-0 hex-bg opacity-50" />
      <div className="relative mx-auto max-w-3xl px-6">
        <Reveal>
          <GoldKicker>Let&apos;s begin</GoldKicker>
          <h2 className="font-display text-4xl font-bold leading-tight text-cream md:text-6xl">{title}</h2>
          <p className="mx-auto mt-6 max-w-xl text-cream/65">{body}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <PrimaryButton to="/contact">Build My Brand</PrimaryButton>
            <GhostButton to="/work" light>
              View Our Work
            </GhostButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -80, y: -80 })
  const [ring, setRing] = useState({ x: -80, y: -80 })
  const [on, setOn] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    if (!fine) return
    setOn(true)
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  useEffect(() => {
    if (!on) return
    let raf
    const follow = () => {
      setRing((r) => ({
        x: r.x + (pos.x - r.x) * 0.16,
        y: r.y + (pos.y - r.y) * 0.16,
      }))
      raf = requestAnimationFrame(follow)
    }
    raf = requestAnimationFrame(follow)
    return () => cancelAnimationFrame(raf)
  }, [pos, on])

  if (!on) return null
  return (
    <>
      <div className="cursor-dot" style={{ left: pos.x, top: pos.y }} />
      <div className="cursor-ring" style={{ left: ring.x, top: ring.y }} />
    </>
  )
}
