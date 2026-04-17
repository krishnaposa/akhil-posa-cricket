import { useEffect, useState, useCallback } from 'react'
import {
  site,
  coaching,
  gigs,
  teams,
  with_players,
  videos,
  sponsors,
} from './content.js'

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
          <NavLink href="#teams" onNavigate={closeNav}>Teams</NavLink>
          <NavLink href="#gigs" onNavigate={closeNav}>Gigs</NavLink>
          <NavLink href="#videos" onNavigate={closeNav}>Videos</NavLink>
          <NavLink href="#coaching" onNavigate={closeNav}>Coaching</NavLink>
          <NavLink href="#sponsors" onNavigate={closeNav}>Sponsors</NavLink>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div
            className={
              site.heroImages?.length
                ? 'hero-visual hero-visual--strip'
                : 'hero-visual'
            }
          >
            {site.heroImages?.length ? (
              site.heroImages.map((img, i) => (
                <div
                  key={img.src}
                  className="hero-strip-cell"
                  tabIndex={0}
                >
                  <div className="hero-strip-cell-inner">
                    <img
                      className="hero-photo"
                      src={img.src}
                      alt={img.alt}
                      title={img.alt}
                      width={480}
                      height={560}
                      decoding="async"
                      fetchPriority={i === 0 ? 'high' : 'auto'}
                    />
                    
                  </div>
                </div>
              ))
            ) : (
              <>
                <div className="hero-glow hero-glow-a" />
                <div className="hero-glow hero-glow-b" />
                <div className="pitch-strip" />
                <div className="stadium-ring" />
                <div className="ball-orbit">
                  <span className="cricket-ball" />
                  <span className="ball-trail" />
                </div>
              </>
            )}
          </div>
        </section>

        <section id="teams" className="section" data-reveal>
          <div className="section-head">
            <h2 className="section-title">Teams</h2>
          </div>
          <ul className="gallery-grid">
            {teams.map((img) => {
              const hoverZoom = Boolean(img.groupFocus)
              const wrapStyle = hoverZoom
                ? {
                    '--focus-x': img.focusX ?? '50%',
                    '--focus-y': img.focusY ?? '50%',
                    '--zoom-end': img.zoom ?? 1.38,
                  }
                : undefined
              const captionText = img.title
              const caption =
                typeof captionText === 'string' ? captionText.trim() : ''
              return (
                <li
                  key={img.src}
                  className={`gallery-card${img.wide ? ' gallery-card--wide' : ''}`}
                >
                  <div className="gallery-card-inner">
                    <div
                      className={`gallery-img-wrap${hoverZoom ? ' gallery-img-wrap--zoom-hover' : ''}`}
                      style={wrapStyle}
                    >
                      <img
                        className="gallery-img"
                        src={img.src}
                        alt={img.alt}
                        title={img.alt}
                        loading="lazy"
                        decoding="async"
                        width={640}
                        height={400}
                      />
                    </div>
                    {caption.length > 0 ? (
                      <span className="gallery-hover-title" aria-hidden>
                        {caption}
                      </span>
                    ) : null}
                    {caption.length > 0 ? <p className="gallery-caption">{caption}</p> : null}
                    <div className="gallery-shine" aria-hidden />
                  </div>
                </li>
              )
            })}
          </ul>
        </section>
        <section id="gigs" className="section section-timeline" data-reveal>
          <div className="section-head">
            <h2 className="section-title">The journey</h2>
          </div>
          <ul className="gallery-grid">
            {gigs.map((img) => {
              const hoverZoom = Boolean(img.groupFocus)
              const wrapStyle = hoverZoom
                ? {
                    '--focus-x': img.focusX ?? '50%',
                    '--focus-y': img.focusY ?? '50%',
                    '--zoom-end': img.zoom ?? 1.38,
                  }
                : undefined
              const captionText = img.title 
              const caption =
                typeof captionText === 'string' ? captionText.trim() : ''
              return (
                <li
                  key={img.src}
                  className={`gallery-card${img.wide ? ' gallery-card--wide' : ''}`}
                >
                  <div className="gallery-card-inner">
                    <div
                      className={`gallery-img-wrap${hoverZoom ? ' gallery-img-wrap--zoom-hover' : ''}`}
                      style={wrapStyle}
                    >
                      <img
                        className="gallery-img"
                        src={img.src}
                        alt={img.alt}
                        title={img.alt}
                        loading="lazy"
                        decoding="async"
                        width={640}
                        height={400}
                      />
                    </div>
                    {caption.length > 0 ? (
                      <span className="gallery-hover-title" aria-hidden>
                        {caption}
                      </span>
                    ) : null}
                    <div className="gallery-shine" aria-hidden />
                  </div>
                </li>
              )
            })}
          </ul>
        </section>
        <section id="with_players" className="section section-timeline" data-reveal>
          <div className="section-head">
            <h2 className="section-title">Net bowling to players</h2>
          </div>
          <ul className="gallery-grid">
            {with_players.map((img) => {
              const hoverZoom = Boolean(img.groupFocus)
              const wrapStyle = hoverZoom
                ? {
                    '--focus-x': img.focusX ?? '50%',
                    '--focus-y': img.focusY ?? '50%',
                    '--zoom-end': img.zoom ?? 1.38,
                  }
                : undefined
              const captionText = img.title 
              const caption =
                typeof captionText === 'string' ? captionText.trim() : ''
              return (
                <li
                  key={img.src}
                  className={`gallery-card${img.wide ? ' gallery-card--wide' : ''}`}
                >
                  <div className="gallery-card-inner">
                    <div
                      className={`gallery-img-wrap${hoverZoom ? ' gallery-img-wrap--zoom-hover' : ''}`}
                      style={wrapStyle}
                    >
                      <img
                        className="gallery-img"
                        src={img.src}
                        alt={img.alt}
                        title={img.alt}
                        loading="lazy"
                        decoding="async"
                        width={640}
                        height={400}
                      />
                    </div>
                    {caption.length > 0 ? (
                      <span className="gallery-hover-title" aria-hidden>
                        {caption}
                      </span>
                    ) : null}
                    <div className="gallery-shine" aria-hidden />
                  </div>
                </li>
              )
            })}
          </ul>
        </section>
        <section id="videos" className="section section-alt" data-reveal>
          <div className="section-head">
            <h2 className="section-title">Videos</h2>
          </div>
          <div className="video-grid">
            {videos.map((v) => (
              <article
                key={v.youtubeId || v.src || v.title}
                className="video-card"
              >
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
                  ) : v.src ? (
                    <video
                      title={v.title}
                      className="video-file"
                      controls
                      playsInline
                      preload="metadata"
                      src={v.src}
                    />
                  ) : (
                    <div className="video-placeholder">
                      <span>Add YouTube ID</span>
                    </div>
                  )}
                </div>
                <p>{v.caption}</p>
              </article>
            ))}
          </div>
        </section>


        <section id="coaching" className="section section-alt" data-reveal>
          <div className="section-head">
            <h2 className="section-title">{coaching.headline}</h2>
            <p>{coaching.intro}</p>
          </div>
          <div className="coaching-panel">
            <ul className="coaching-highlights">
              {coaching.highlights.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <p className="coaching-note">{coaching.note}</p>
            <div className="coaching-actions">
              {site.contactEmail ? (
                <a
                  className="btn btn-primary"
                  href={`mailto:${site.contactEmail}?subject=${encodeURIComponent('Coaching enquiry — Akhil Posa')}`}
                >
                  {coaching.ctaLabel}
                </a>
              ) : (
                <p className="coaching-email-hint">
                  Set <code>contactEmail</code> in <code>src/content.js</code> to enable the coaching enquiry button.
                </p>
              )}
            </div>
          </div>
        </section>

        <section id="sponsors" className="section" data-reveal>
          <div className="section-head">
            <h2 className="section-title">Sponsors & partners</h2>
          </div>
          <ul className="sponsor-grid">
            {sponsors.map((s) => (
              <li key={s.name} className="sponsor-card">
                <div className="sponsor-logo-wrap">
                  <img src={s.logo} alt="" width={200} height={80} />
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
            <strong>{site.name}</strong>
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
          <p className="footer-note">Built by TekMatrix LLC</p>
        </div>
      </footer>
    </div>
  )
}
