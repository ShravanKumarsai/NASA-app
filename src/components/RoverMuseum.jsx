import { Suspense, lazy, useEffect, useRef, useState } from 'react';

const RoverScene = lazy(() => import('./RoverScene.jsx'));

const roverParts = [
  {
    id: 'deck',
    name: 'Rover body',
    label: 'Warm Electronics Box',
    description: 'The insulated central body housed the rover’s computers, batteries, and electronics. Its gold-toned exterior is an educational visual approximation.',
  },
  {
    id: 'wheels',
    name: 'Six wheels',
    label: 'Mobility system',
    description: 'Six independently driven wheels and rocker-bogie suspension helped Spirit and Opportunity cross uneven Martian ground while keeping the body relatively stable.',
  },
  {
    id: 'mast',
    name: 'Camera mast',
    label: 'Pancam + Navcam',
    description: 'The mast placed stereo science and navigation cameras above the body. Their images helped scientists study terrain and plan the next drive.',
  },
  {
    id: 'arm',
    name: 'Robotic arm',
    label: 'Instrument deployment device',
    description: 'The arm positioned instruments against rocks and soil. Its tool set included a microscopic imager, spectrometers, and a rock abrasion tool.',
  },
  {
    id: 'panel',
    name: 'Solar array',
    label: 'Power system',
    description: 'Solar panels charged onboard batteries. Dust accumulation and Martian weather affected how much sunlight the rovers could collect.',
  },
  {
    id: 'antenna',
    name: 'Antennas',
    label: 'Communications',
    description: 'The high-gain antenna sent data toward Earth, while other antenna paths supported communication through orbiters around Mars.',
  },
];

function RoverMuseum({ motionReduced }) {
  const sectionRef = useRef(null);
  const [sceneReady, setSceneReady] = useState(false);
  const [selectedPart, setSelectedPart] = useState('wheels');
  const [demo, setDemo] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || sceneReady) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setSceneReady(true);
        observer.disconnect();
      }
    }, { rootMargin: '240px 0px' });

    observer.observe(section);
    return () => observer.disconnect();
  }, [sceneReady]);

  useEffect(() => {
    if (motionReduced) setDemo(false);
  }, [motionReduced]);

  const activePart = roverParts.find((part) => part.id === selectedPart) ?? roverParts[0];

  return (
    <section className="rover-museum section-wrap" id="rover-museum" aria-labelledby="museum-title" ref={sectionRef}>
      <div className="museum-intro">
        <p className="eyebrow">03 / INSIDE THE MACHINE</p>
        <div className="museum-heading-row">
          <div>
            <h2 id="museum-title">A rover, <span>in motion.</span></h2>
            <p className="section-description">Explore the parts that helped Spirit and Opportunity investigate Mars. Drag to orbit; scroll or pinch to zoom.</p>
          </div>
          <p className="museum-model-note">EDUCATIONAL 3D APPROXIMATION<br />NOT AN ENGINEERING MODEL</p>
        </div>
      </div>

      <div className="museum-layout">
        <div className="rover-viewport" aria-label="Interactive three-dimensional Mars rover model">
          {sceneReady ? (
            <Suspense fallback={<div className="rover-loading" role="status">Preparing the rover model…</div>}>
              <RoverScene selectedPart={selectedPart} onSelectPart={setSelectedPart} demo={demo && !motionReduced} />
            </Suspense>
          ) : (
            <div className="rover-loading">The 3D exhibit loads as you reach it.</div>
          )}
          <div className="viewport-hint" aria-hidden="true">DRAG TO ROTATE <span>·</span> SCROLL TO ZOOM</div>
        </div>

        <aside className="rover-inspector" aria-labelledby="inspector-title">
          <p className="eyebrow">SELECTED COMPONENT</p>
          <h3 id="inspector-title">{activePart.name}<span>.</span></h3>
          <p className="inspector-label">{activePart.label}</p>
          <p className="inspector-description" aria-live="polite">{activePart.description}</p>
          <div className="part-selector" aria-label="Select a rover component">
            {roverParts.map((part, index) => (
              <button
                className={selectedPart === part.id ? 'part-button is-active' : 'part-button'}
                key={part.id}
                type="button"
                aria-pressed={selectedPart === part.id}
                onClick={() => setSelectedPart(part.id)}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>{part.name}
              </button>
            ))}
          </div>
          <button className="mechanism-toggle" type="button" aria-pressed={demo} onClick={() => setDemo((playing) => !playing)}>
          {motionReduced ? 'Enable motion to demonstrate the wheels' : demo ? 'Pause wheel demonstration' : 'Demonstrate the wheels'} <span aria-hidden="true">{demo ? 'Ⅱ' : '▶'}</span>
          </button>
          <a className="source-link museum-source" href="https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/science-instruments/" target="_blank" rel="noopener noreferrer">
            NASA science instruments <span aria-hidden="true">↗</span>
          </a>
        </aside>
      </div>
    </section>
  );
}

export default RoverMuseum;
