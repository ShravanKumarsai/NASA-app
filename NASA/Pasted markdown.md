PROJECT: Silent Explorers — Abandoned, Not Forgotten

GitHub repository: [https://github.com/jadonjoel/NASA-hackathon](https://github.com/jadonjoel/NASA-hackathon?utm_source=chatgpt.com)

Objective: Transform my existing NASA Space Apps Challenge website into a polished, interactive, educational space exploration application while preserving the original project's content, identity and working features.

### PHASE 0 — RECALL THE ORIGINAL PROJECT AND ITS HISTORY

Before making any changes, use the context available in this ChatGPT account.

This is the same ChatGPT account that originally helped create this GitHub project. Therefore:

1. Review relevant saved memories and previous conversations about this project.
2. Recall the original project concept, design decisions, website structure, features, content, visual direction and implementation choices.
3. Identify any features or requirements that were previously discussed but may not be obvious from the current repository.
4. Use previous conversations to understand why certain implementation decisions were made.
5. Compare remembered information with the actual current GitHub repository.
6. If previous decisions conflict with the current implementation, do not automatically overwrite either. Identify the differences and determine what is still relevant.
7. Never assume that remembered code, files or features are still present. Verify them.

Important: Memory and previous conversations are supplementary context, not substitutes for inspecting the actual repository. The current repository is the source of truth for what currently exists.

Do not claim to have accessed GitHub, previous files or private project information unless you actually have access to them. If repository access is unavailable, explain what connection or files are needed before attempting modifications.

### PHASE 1 — INSPECT BEFORE EDITING

Thoroughly inspect the entire existing repository.

Repository:\
[https://github.com/jadonjoel/NASA-hackathon](https://github.com/jadonjoel/NASA-hackathon?utm_source=chatgpt.com)

Identify:

- Existing framework and architecture.
- All HTML, CSS, JavaScript and asset files.
- Existing pages, components and navigation.
- All existing mission data and descriptions.
- Existing animations and interactions.
- Existing images, illustrations and external assets.
- Existing functionality that must be preserved.
- Any incomplete, broken or redundant implementation.
- Whether the current project already contains reusable components or libraries.

The existing project has previously been described as containing mission records for:

- Apollo 17 Lunar Roving Vehicle.
- Surveyor 3.
- Opportunity.
- Spirit.
- Viking 1.
- InSight.

Verify these records and identify any additional content before planning the migration.

First produce a concise inspection report and proposed implementation plan. Do not immediately delete, overwrite or rebuild the existing application.

### PHASE 2 — TECHNOLOGY AND ARCHITECTURE

Use the following preferred stack:

- React.
- Vite.
- JavaScript (JSX), not TypeScript unless genuinely necessary.
- Three.js / React Three Fiber for 3D environments.
- Drei for useful 3D helpers.
- Framer Motion for interface animations.
- CSS and responsive layouts.
- JSON for structured mission data.
- IndexedDB or localStorage for local progress and saved information.
- PWA functionality for an installable application.

Keep the architecture modular and maintainable.

Do not rebuild unrelated functionality unnecessarily. Migrate the existing website incrementally, preserving its data, content, identity and working features.

### PHASE 3 — INTERACTIVE 3D SPACE MUSEUM

Create an interactive 3D museum where users can explore abandoned NASA hardware.

Requirements:

- Display spacecraft, rovers and other relevant mission hardware in 3D.
- Allow 360-degree rotation, zooming and panning.
- Let users select individual components.
- Display information about wheels, suspension, robotic arms, cameras, antennas, solar panels, batteries and scientific instruments.
- Include animations that demonstrate how important mechanisms work.
- Provide component names, explanations and their scientific purposes.
- Allow users to switch between different missions and their hardware.

Prefer NASA 3D Resources and properly licensed GLB/GLTF models.

If an exact model is unavailable, use a scientifically reasonable educational approximation and clearly label it as such. Do not present an approximate model as an exact historical reconstruction.

Include appropriate asset credits.

### PHASE 4 — MARS ROVER SIMULATOR

Build a playable educational Mars rover simulator.

Users should be able to:

- Drive a rover through a simulated Martian environment.
- Move forward and backward.
- Turn left and right.
- Control the rover using keyboard controls on desktop.
- Use touch controls on mobile.
- Change the camera perspective.
- Explore the terrain.
- Approach and scan rocks.
- Collect simulated scientific observations.
- Complete mission objectives.

Include a telemetry panel showing:

- Battery level.
- Distance travelled.
- Rover position.
- Simulated temperature.
- Communication status.
- Number of discoveries.
- Mission progress.

Include resource-management decisions, such as choosing between travelling further, performing scientific scans and conserving battery power.

All telemetry and rover behaviour must be clearly identified as simulated educational content, not actual NASA mission telemetry.

### PHASE 5 — INTERACTIVE MINI-GAMES

Implement actual playable mini-games, not merely decorative buttons or static screens.

Include:

1\. Rock Collector

- Explore a terrain.
- Identify interesting rocks.
- Collect samples.
- Earn points for successful discoveries.

2\. Sample Analysis

- Examine collected samples.
- Identify their properties.
- Match findings with possible scientific interpretations.

3\. Find the Water

- Explore a simulated planetary environment.
- Identify locations that may contain water or water-related evidence.
- Explain the scientific reasoning behind discoveries.

4\. Safe Landing

- Control a simulated lander.
- Manage speed, direction and fuel.
- Attempt a safe landing.

5\. Power Management

- Manage limited energy.
- Decide which instruments and activities to prioritise.
- Complete objectives without exhausting resources.

Each game should have objectives, instructions, interactive controls, feedback, scoring and a completion screen.

### PHASE 6 — INTERACTIVE MISSION MAP

Build an interactive map of relevant Moon, Mars and other planetary mission locations.

Requirements:

- Display verified landing locations.
- Identify the mission associated with each location.
- Show the hardware associated with the mission.
- Display mission information when a location is selected.
- Distinguish between confirmed, approximate, orbital and deep-space locations.
- Include relevant historical and scientific information.

Never invent landing coordinates or hardware locations. Use reliable NASA/JPL sources and label uncertain information appropriately.

### PHASE 7 — MISSION CONTROL DASHBOARD

Create an interactive Mission Control experience.

Include:

- Mission objectives.
- Simulated rover telemetry.
- Battery and resource management.
- Scientific discoveries.
- Mission progress.
- Achievement tracking.
- Decision-making challenges.

Make the dashboard visually interesting but easy to understand.

### PHASE 8 — STORYTELLING AND EDUCATIONAL EXPERIENCE

Preserve and improve the original storytelling concept.

Each mission should have a structured narrative covering:

1. Why the mission was created.
2. What it was designed to accomplish.
3. How it travelled to its destination.
4. What happened during the mission.
5. What scientific discoveries it enabled.
6. Why the mission ended or why the hardware was left behind.
7. What its legacy means for future exploration.

Use relevant photographs, illustrations, mission timelines, maps and interactive visualisations.

Make the experience engaging for school students and casual space enthusiasts without sacrificing scientific accuracy.

Any fictional narration or imagined perspective from a spacecraft or rover must be clearly presented as creative storytelling rather than a historical quotation.

### PHASE 9 — VISUAL DESIGN AND ANIMATIONS

Create a polished, cinematic space-themed interface.

Design direction:

- Immersive space exploration aesthetic.
- Clear visual hierarchy.
- Attractive planetary environments.
- Subtle depth and parallax effects.
- Smooth transitions between sections.
- Interactive 3D elements.
- Consistent typography and spacing.
- Readable information panels.
- Responsive layouts for desktop, tablet and mobile.

Animations should make the experience more immersive and informative, not interfere with usability.

Provide controls for reducing motion where appropriate.

Avoid excessive animation, cluttered layouts and unnecessarily complicated navigation.

Suggested primary navigation:

- Explore.
- Inside the Machine.
- Mission Simulator.
- Science Lab.
- Mission Control.

### PHASE 10 — PERFORMANCE AND STABILITY

This is a critical requirement.

I want the application to run smoothly without freezing, hanging, crashing or becoming unresponsive.

Implement:

- Lazy loading for 3D models and large assets.
- Optimised textures and models.
- Efficient rendering and animation loops.
- Proper cleanup of event listeners and rendering resources.
- Loading indicators for large assets.
- Error handling for unavailable models or assets.
- A fallback experience when WebGL is unsupported.
- Responsive touch and keyboard controls.
- Efficient handling of application state.
- Offline access to essential mission information where practical.

Do not load every 3D model, animation and image simultaneously.

Test performance on both desktop and mobile devices.

### PHASE 11 — SCIENTIFIC ACCURACY AND SOURCES

Use trustworthy primary sources wherever possible:

- NASA.
- NASA Science.
- NASA/JPL mission archives.
- NASA 3D Resources.
- Planetary Data System.
- Official mission documentation and datasets.

Verify scientific claims, mission dates, hardware status, discoveries and locations.

Provide suitable citations and attribution for external images, models and datasets.

Clearly distinguish:

- Historical facts.
- Verified scientific information.
- Educational approximations.
- Simulated interactions.
- Fictional storytelling.

### PHASE 12 — IMPLEMENTATION STRATEGY

Do not attempt to implement everything in one enormous change.

Work incrementally:

1. Inspect and document the existing website.
2. Identify reusable functionality and preserve existing content.
3. Establish the React + Vite architecture.
4. Migrate the existing website and verify that it still works.
5. Build the 3D museum.
6. Build one polished playable rover simulator.
7. Build the first mini-game.
8. Add the mission map and Mission Control.
9. Expand the remaining games and educational content.
10. Optimise, test and prepare the application for deployment.

After each major phase:

- Test existing functionality.
- Check for console errors.
- Verify mobile responsiveness.
- Check loading and rendering performance.
- Confirm that existing mission data has not been lost.
- Keep the application in a working, deployable state.

Do not leave placeholder buttons or non-functional features presented as completed functionality.

### FINAL REQUIREMENTS

- Preserve the original project wherever possible.
- Use existing content and assets before creating replacements.
- Reuse useful work from previous conversations where appropriate.
- Do not invent mission facts, coordinates or scientific discoveries.
- Avoid unnecessary paid APIs, AI services and external backends.
- Avoid unnecessary dependencies.
- Keep the application maintainable and easy to extend.
- Ensure the experience works on both desktop and mobile.
- Prioritise smooth performance and scientific accuracy over adding features for the sake of quantity.

FIRST ACTION:

Do not start coding immediately.

First, review relevant project memory and previous conversations, inspect the entire GitHub repository, and give me:

1. A summary of the original application.
2. What you remember about the project's previous design and implementation.
3. What currently exists in the repository.
4. Which features can be preserved.
5. What needs to be migrated or newly developed.
6. A phased implementation plan.
7. Any technical risks, particularly regarding 3D performance and mobile compatibility.

Wait for my approval before making substantial structural changes.