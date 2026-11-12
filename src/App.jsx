import { useEffect, useMemo, useRef, useState } from 'react';
import missions from './data/missions.json';

const destinations = [
  { id: 'all', label: 'All explorers' },
  { id: 'moon', label: 'The Moon' },
  { id: 'mars', label: 'Mars' },
];

const originalExperience = './NASA/Silent-Explorers.html';
const imageFor = (filename) => `${import.meta.env.BASE_URL}assets/${filename}`;

function App() {
  const [destination, setDestination] = useState('all');
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState(null);
  const [motionReduced, setMotionReduced] = useState(() =>
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false,
  );
  const lastTrigger = useRef(null);

  const visibleMissions = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    return missions.filter((mission) => {
      const destinationMatches = destination === 'all' || mission.world === destination;
      const searchText = [
        mission.name,
        mission.kind,
        mission.world,
        mission.years,
        mission.place,
        mission.story,
        mission.legacy,
      ].join(' ').toLocaleLowerCase();
      return destinationMatches && searchText.includes(normalizedQuery);
    });
  }, [destination, query]);

  const selectedIndex = missions.findIndex((mission) => mission.id === selectedId);
  const selectedMission = selectedIndex >= 0 ? missions[selectedIndex] : null;

  useEffect(() => {
    if (!selectedMission) lastTrigger.current?.focus({ preventScroll: true });
  }, [selectedMission]);

  function openMission(mission, trigger) {
    lastTrigger.current = trigger;
    setSelectedId(mission.id);
  }

  function moveMission(direction) {
    const nextIndex = (selectedIndex + direction + missions.length) % missions.length;
    setSelectedId(missions[nextIndex].id);
  }

  return (
    <div className="site-shell" data-motion={motionReduced ? 'reduced' : 'full'}>
      <a className="skip-link" href="#archive">Skip to mission archive</a>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Silent Explorers home">
          <img src={imageFor('mark.svg')} alt="" />
          <span>SILENT<br />EXPLORERS</span>
        </a>
        <nav className="primary-nav" aria-label="Main navigation">
          <a href="#archive">The archive</a>
          <a href="#about">Why we remember</a>
          <a className="nav-original" href={originalExperience}>Original experience <span aria-hidden="true">↗</span></a>
        </nav>
        <button
          className="motion-toggle"
          type="button"
          aria-pressed={motionReduced}
          onClick={() => setMotionReduced((reduced) => !reduced)}
        >
          {motionReduced ? 'Motion reduced' : 'Reduce motion'}
        </button>
      </header>

      <main>
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">A SMALL PART OF SOMETHING INFINITE</p>
            <h1 id="hero-title">We went.<br /><span>They stayed.</span></h1>
            <p className="hero-description">
              Machines built to explore other worlds. Stories that outlasted their signals.
            </p>
            <a className="hero-link" href="#archive">Explore the six missions <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="hero-orbit hero-orbit-one" />
            <div className="hero-orbit hero-orbit-two" />
            <img src={imageFor('mars-rover-ground.svg')} alt="" />
            <span className="hero-coordinate">SURFACE RECORD / MARS</span>
          </div>
          <div className="hero-foot"><span>MOON / MARS</span><span>ABANDONED, NOT FORGOTTEN</span></div>
        </section>

        <section className="archive section-wrap" id="archive" aria-labelledby="archive-title">
          <div className="section-intro">
            <p className="eyebrow">01 / THE COLLECTION</p>
            <h2 id="archive-title">Left behind.<br /><span>Worth finding.</span></h2>
            <p className="section-description">Six explorers. Two worlds. Choose a mission to read its story and scientific legacy.</p>
          </div>

          <div className="archive-controls">
            <div className="destination-filters" aria-label="Filter missions by destination">
              {destinations.map((item) => (
                <button
                  className={destination === item.id ? 'filter-button is-active' : 'filter-button'}
                  type="button"
                  key={item.id}
                  aria-pressed={destination === item.id}
                  onClick={() => setDestination(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <label className="search-field">
              <span aria-hidden="true">⌕</span>
              <span className="sr-only">Search missions</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search names, places, or years"
              />
            </label>
          </div>

          <p className="result-count" role="status" aria-live="polite">
            {visibleMissions.length} {visibleMissions.length === 1 ? 'explorer' : 'explorers'} shown
          </p>

          {visibleMissions.length > 0 ? (
            <div className="mission-grid">
              {visibleMissions.map((mission) => (
                <button
                  className="mission-card"
                  type="button"
                  key={mission.id}
                  onClick={(event) => openMission(mission, event.currentTarget)}
                  aria-controls="mission-reader"
                  aria-expanded={selectedId === mission.id}
                >
                  <span className="card-image-wrap">
                    <img src={imageFor(mission.image)} alt={`Illustration of ${mission.name}`} loading="lazy" />
                    <span className="card-number">{mission.number}</span>
                  </span>
                  <span className="card-copy">
                    <span className="card-location">{mission.world.toUpperCase()} / {mission.years}</span>
                    <span className="card-title">{mission.name}</span>
                    <span className="card-kind">{mission.kind}</span>
                    <span className="card-place">{mission.place} <span aria-hidden="true">↗</span></span>
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3>No explorers found.</h3>
              <p>Try another mission name, destination, or year.</p>
              <button type="button" className="text-button" onClick={() => { setQuery(''); setDestination('all'); }}>
                Reset search
              </button>
            </div>
          )}
        </section>

        {selectedMission && (
          <section className="mission-reader section-wrap" id="mission-reader" aria-labelledby="reader-title" aria-live="polite">
            <div className="reader-topline">
              <p className="eyebrow">{selectedMission.number} / {selectedMission.world.toUpperCase()} / {selectedMission.years}</p>
              <button className="text-button close-reader" type="button" onClick={() => setSelectedId(null)}>
                Close story <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="reader-content" key={selectedMission.id}>
              <div className="reader-heading">
                <p className="eyebrow">{selectedMission.kind}</p>
                <h2 id="reader-title">{selectedMission.name}<span>.</span></h2>
                <p className="reader-headline">{selectedMission.headline}</p>
                <dl className="mission-facts">
                  {selectedMission.facts.map(([label, value]) => (
                    <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
                  ))}
                </dl>
              </div>
              <figure className="reader-art">
                <img src={imageFor(selectedMission.image)} alt={`Artistic interpretation of ${selectedMission.name}`} />
                <figcaption>Artist’s interpretation · not an engineering model</figcaption>
              </figure>
              <div className="reader-stories">
                <article>
                  <h3>The mission.</h3>
                  <p>{selectedMission.story}</p>
                </article>
                <article>
                  <h3>What remains.</h3>
                  <p>{selectedMission.legacy}</p>
                </article>
              </div>
              <ol className="mission-timeline" aria-label={`${selectedMission.name} timeline`}>
                {selectedMission.timeline.map(([date, event]) => (
                  <li key={`${date}-${event}`}><strong>{date}</strong><span>{event}</span></li>
                ))}
              </ol>
              <div className="reader-actions">
                <a className="source-link" href={selectedMission.source} target="_blank" rel="noopener noreferrer">
                  Read the NASA record <span aria-hidden="true">↗</span>
                </a>
                <div className="story-nav">
                  <button type="button" onClick={() => moveMission(-1)} aria-label="Previous mission">← Previous</button>
                  <button type="button" onClick={() => moveMission(1)} aria-label="Next mission">Next →</button>
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="legacy section-wrap" id="about" aria-labelledby="legacy-title">
          <p className="eyebrow">02 / WHY WE REMEMBER</p>
          <h2 id="legacy-title">The wonder<br />never does<span>.</span></h2>
          <p>These machines are more than hardware. They are the work of people who asked a question, built a way to answer it, and sent a piece of us into the unknown.</p>
          <a className="text-link" href={originalExperience}>Visit the original immersive experience <span aria-hidden="true">↗</span></a>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <div><a className="wordmark" href="#home"><img src={imageFor('mark.svg')} alt="" /><span>SILENT<br />EXPLORERS</span></a></div>
        <p>An independent educational experience inspired by NASA’s explorers.<br />NASA does not endorse this project.</p>
        <a href={originalExperience}>Original experience ↗</a>
      </footer>
    </div>
  );
}

export default App;
