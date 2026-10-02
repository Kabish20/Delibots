import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { services } from '../data'
import { CustomCursor } from './ui'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services', children: services },
  { to: '/work', label: 'Our Work' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/insights', label: 'Insights' },
  { to: '/contact', label: 'Contact' },
]

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <img
        src="/images/logo-delibot.jpg"
        alt="Delibots logo"
        className="h-10 w-auto object-contain"
        style={{ maxWidth: '160px' }}
      />
    </Link>
  )
}

export default function Layout() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const loc = useLocation()

  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
    window.scrollTo(0, 0)
  }, [loc.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-ink text-cream">
      <div className="grain" />
      <CustomCursor />
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || open ? 'nav-blur border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
          <Logo />
          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item) =>
              item.children ? (
                <div
                  key={item.to}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `text-[12px] tracking-[0.22em] uppercase transition ${
                        isActive ? 'text-green' : 'text-cream/70 hover:text-green'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                  <AnimatePresence>
                    {servicesOpen ? (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="absolute top-full left-1/2 mt-4 w-85 -translate-x-1/2 rounded-2xl border border-green/20 bg-ink-2/95 p-4 shadow-2xl backdrop-blur"
                      >
                        {item.children.map((s) => (
                          <Link
                            key={s.slug}
                            to={`/services/${s.slug}`}
                            className="block rounded-xl px-3 py-2.5 text-sm text-cream/80 transition hover:bg-green/10 hover:text-green"
                          >
                            {s.title}
                          </Link>
                        ))}
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `text-[12px] tracking-[0.22em] uppercase transition ${
                      isActive ? 'text-green' : 'text-cream/70 hover:text-green'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="glow-btn rounded-full bg-green px-5 py-2.5 text-[12px] font-semibold tracking-wide text-ink transition hover:bg-green-3"
            >
              Get Started
            </Link>
          </div>
          <button
            className="relative z-10 grid h-11 w-11 place-items-center lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            <span className={`block h-px w-6 bg-cream transition ${open ? 'translate-y-0.75 rotate-45' : ''}`} />
            <span className={`mt-1.5 block h-px w-6 bg-cream transition ${open ? '-translate-y-1 -rotate-45' : ''}`} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-ink pt-24 lg:hidden"
          >
            <div className="flex flex-col gap-5 px-8">
              {nav.map((item) => (
                <div key={item.to}>
                  <Link to={item.to} className="font-display text-4xl text-cream hover:text-green transition">
                    {item.label}
                  </Link>
                  {item.children ? (
                    <div className="mt-3 ml-1 flex flex-col gap-2 text-sm text-cream/60">
                      {item.children.map((s) => (
                        <Link key={s.slug} to={`/services/${s.slug}`} className="hover:text-green transition">
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
              <Link
                to="/contact"
                className="mt-4 w-fit rounded-full bg-green px-6 py-3 text-sm font-semibold text-ink"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-white/10 bg-ink-2">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4 md:px-8">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/55">
              Personal Branding • PR • Digital Marketing • Websites • Video Production
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/40">
              Building powerful brands through strategy, creativity, communication, and technology.
            </p>
            <div className="mt-4 space-y-1 text-xs text-cream/40">
              <p>admin@delibots.com</p>
              <p>+91 63807 13586</p>
              <p>55, Crescent Park, Trichy, Tamil Nadu</p>
            </div>
            <div className="mt-6 flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full border border-green/30 text-green/70 hover:border-green hover:text-green transition text-sm"
              >
                IG
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full border border-green/30 text-green/70 hover:border-green hover:text-green transition text-sm"
              >
                in
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full border border-green/30 text-green/70 hover:border-green hover:text-green transition text-sm"
              >
                fb
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full border border-green/30 text-green/70 hover:border-green hover:text-green transition text-sm"
              >
                yt
              </a>
            </div>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.28em] text-green uppercase">Quick Links</p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-cream/70">
              <Link to="/" className="hover:text-green transition">Home</Link>
              <Link to="/about" className="hover:text-green transition">About</Link>
              <Link to="/services" className="hover:text-green transition">Services</Link>
              <Link to="/work" className="hover:text-green transition">Our Work</Link>
              <Link to="/insights" className="hover:text-green transition">Insights</Link>
              <Link to="/contact" className="hover:text-green transition">Contact</Link>
            </div>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.28em] text-green uppercase">Services</p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-cream/70">
              {services.map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}`} className="hover:text-green transition">
                  {s.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="gold-line" />
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-cream/40 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© 2026 Delibots®. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-green transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-green transition">Terms & Conditions</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
