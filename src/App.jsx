import { useEffect, useState, useCallback } from 'react'
import { site, journey, gallery, videos, sponsors } from './content.js'

function NavLink({ href, children, onNavigate }) {
  return (
    <a
      className="nav-link"
      href={href}
      onClick={onNavigate}
    >
      {children}
    </a>
  )
}

export default function App() {
  const [navOpen, setNavOpen] = useState(false)

  const closeNav = useCallback(() => setNavOpen(false), [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setNavOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('drawer-open', navOpen)
    return () => document.body.classList.remove('drawer-open')
  }, [navOpen])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const onChange = () => setNavOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible')
        })
      },
      { threshold: 0.06, rootMargin: '0px 0px -32px 0px' },
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <div className="page">
      <div className="bg-aurora" aria-hidden />
      <header className="site-header">
        <div className="header-bar">
          <a className="brand" href="#top" onClick={closeNav}>
            <span className="brand-mark" aria-hidden />
            <span className="brand-text">{site.name}</span>
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={navOpen}
            aria-controls="primary-nav"
            onClick={() => setNavOpen((o) => !o)}
          >
            <span className="sr-only">{navOpen ? 'Close menu' : 'Open menu'}</span>
            <span className={`nav-toggle-bars ${navOpen ? 'is-open' : ''}`} aria-hidden />
          </button>
        </div>
        <div
          className={`nav-backdrop ${navOpen ? 'is-open' : ''}`}
          aria-hidden
          onClick={closeNav}
        />
        <nav
          id="primary-nav"
          className={`nav ${navOpen ? 'is-open' : ''}`}
          aria-label="Primary"
        >
          <NavLink href="#journey" onNavigate={closeNav}>Journey</NavLink>
          <NavLink href="#gallery" onNavigate={closeNav}>Photos</NavLink>
          <NavLink href="#videos" onNavigate={closeNav}>Videos</NavLink>
          <NavLink href="#sponsors" onNavigate={closeNav}>Sponsors</NavLink>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-inner">
            <p className="eyebrow">{site.team} · {site.role}</p>
            <h1 className="hero-title">
              <span className="hero-title-line">{site.name}</span>
            </h1>
            <p className="hero-tagline">{site.tagline}</p>
            <p className="hero-meta">{site.ageNote}</p>
            <p className="hero-sub">{site.heroSubtext}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#gallery">View gallery</a>
              <a className="btn btn-ghost" href="#journey">Read the journey</a>
            </div>
          </div>
          <div className="hero-visual" aria-hidden>
            <div className="hero-glow hero-glow-a" />
            <div className="hero-glow hero-glow-b" />
            <div className="pitch-strip" />
            <div className="stadium-ring" />
            <div className="ball-orbit">
              <span className="cricket-ball" />
              <span className="ball-trail" />
            </div>
          </div>
        </section>

        <section id="journey" className="section section-timeline" data-reveal>
          <div className="section-head">
            <h2 className="section-title">The journey</h2>
            <p>Kid with a dream → 22-year-old professional. Every chapter built in the nets.</p>
          </div>
          <ol className="timeline">
            {journey.map((item) => (
              <li key={item.title} className="timeline-item">
                <span className="timeline-year">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="gallery" className="section" data-reveal>
          <div className="section-head">
            <h2 className="section-title">Photos</h2>
            <p>Moments on the field, with teammates, and behind the scenes — add your images to <code>public/gallery/</code>.</p>
          </div>
          <ul className="gallery-grid">
            {gallery.map((img) => (
              <li key={img.src} className="gallery-card">
                <div className="gallery-card-inner">
                  <img src={img.src} alt={img.alt} loading="lazy" width={640} height={400} />
                  <div className="gallery-shine" aria-hidden />
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="videos" className="section section-alt" data-reveal>
          <div className="section-head">
            <h2 className="section-title">Videos</h2>
            <p>Embed YouTube highlights or uploads — set each <code>youtubeId</code> in <code>src/content.js</code>.</p>
          </div>
          <div className="video-grid">
            {videos.map((v) => (
              <article key={v.title} className="video-card">
                <div
                  className={
                    v.format === 'short' ? 'video-frame video-frame--short' : 'video-frame'
                  }
                >
                  {v.youtubeId ? (
                    <iframe
                      title={v.title}
                      src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <div className="video-placeholder">
                      <span>Add YouTube ID</span>
                    </div>
                  )}
                </div>
                <h3>{v.title}</h3>
                <p>{v.caption}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="sponsors" className="section" data-reveal>
          <div className="section-head">
            <h2 className="section-title">Sponsors & partners</h2>
            <p>Space for the brands and people who make the journey possible.</p>
          </div>
          <ul className="sponsor-grid">
            {sponsors.map((s) => (
              <li key={s.name} className="sponsor-card">
                <div className="sponsor-logo-wrap">
                  <img src={s.logo} alt="" width={120} height={48} />
                </div>
                <p className="sponsor-tier">{s.tier}</p>
                {s.url ? (
                  <a className="sponsor-name" href={s.url} target="_blank" rel="noreferrer">
                    {s.name}
                  </a>
                ) : (
                  <span className="sponsor-name">{s.name}</span>
                )}
                <p className="sponsor-blurb">{s.blurb}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="site-footer" data-reveal>
        <div className="footer-inner">
          <p>
            <strong>{site.name}</strong> · {site.team}
          </p>
          <ul className="footer-social">
            {site.social.instagram && (
              <li>
                <a href={site.social.instagram} target="_blank" rel="noreferrer">Instagram</a>
              </li>
            )}
            {site.social.youtube && (
              <li>
                <a href={site.social.youtube} target="_blank" rel="noreferrer">YouTube</a>
              </li>
            )}
            {site.social.x && (
              <li>
                <a href={site.social.x} target="_blank" rel="noreferrer">X</a>
              </li>
            )}
            {site.contactEmail && (
              <li>
                <a href={`mailto:${site.contactEmail}`}>Contact</a>
              </li>
            )}
          </ul>
          <p className="footer-note">Built with React & Vite · Deploy on GitHub Pages</p>
        </div>
      </footer>
    </div>
  )
}
