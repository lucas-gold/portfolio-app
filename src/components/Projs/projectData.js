export const projectData = [
  {
    id: 'fennel-ai',
    name: "Fennel AI Platform (2026)",
    description: `
- A local AI companion for Mac that allows a simple plug-and-play experience for running large language models (LLMs) and other AI tools on-device, without sending any data to the cloud.

- Expands the capabilities of LLMs with a suite of on-device tools that add:
<ul style={{ margin: 0, lineHeight: "1.3" }}>
      <li>Wikipedia / web search (* requires an off-device connection)</li>
      <li>Persistent memory across sessions</li>
      <li>Image generation</li>
      <li>Agentic capabilities</li>
      <li>Natural back-and-forth conversation through voice and text</li>
</ul>

- Native SwiftUI app with a Python/MLX backend, shipped as one self-contained download with the Python runtime living inside the bundle. Open source, GPL-3.0.

- Full voice pipeline running on-device: speech recognition (Whisper small.en) and speech synthesis (Kokoro-82M) running locally, with the reply spoken as it's generated. You can interrupt mid-sentence and it stops — using an echo-rejection layer when talking through speakers.

- Fourteen tools that expand model capabilities — reminders and calendar events that appear in Apple's own apps with EventKit, create/run macOS Shortcuts, Wikipedia and web search (Ollama), timers, image generation.

- A model picker with six LLMs for 8+ GB Macs, or any MLX model from Hugging Face. Validates config files before downloading model to ensure compatibility.

- Persistent memory across sessions with SQLite. Full-text and vector search using an embedding model written from scratch against MLX framework.

- On-device image generation using FLUX.2 Klein 4B. Loads into memory only during use, and will temporarily unload the LLM if memory is tight.

    `,
    tags: ["Swift", "Python", "LLM", "Hugging Face", "MLX", "SQLite", "Ollama"],
    links: {
      live: "https://fennel.garden",
      github: "https://github.com/lucas-gold/fennel-ai",
    },
    media: [
      { type: 'image', src: './img/Fennel/fennel_img.png' },
      { type: 'image', src: './img/Fennel/fennel_search.png' },
      { type: 'image', src: './img/Fennel/fennel_reminder.png' },
      { type: 'image', src: './img/Fennel/fennel_picker.png' },
      { type: 'image', src: './img/Fennel/fennel_loading.png' },
      { type: 'image', src: './img/Fennel/fennel_home.png' },
    ]
  },
  {
    id: 'harvest-rush',
    name: "Harvest Rush (2025-2026)",
    description: `
- Fast-paced multiplayer game built cross-platform with Expo/React Native from a single codebase — currently deployed to web, but architected to ship to iOS and Android through the same code with no rewrite.

- Designed a server-authoritative multiplayer architecture to eliminate client-side cheating: a Node.js/TypeScript WebSocket server owns 100% of game state (movement, collision, combat) at a fixed tick rate; clients only ever send directional intent and render what the server dictates.

- Engineered for real-time performance under load — client-side interpolation decoupled from the network tick rate for smooth 60fps motion, allocation-conscious hot paths to avoid GC-induced stutter, spatial-grid indexing turning O(n²) proximity checks into near-constant time, and distance/count-capped level-of-detail rendering to keep up to ~40 concurrent players performant on a single small VM.

- Built a fully responsive, mobile-first control scheme — custom touch-based joystick input, a fire-anywhere-else-on-screen gesture, and a camera/zoom system that adapts to viewport size so it plays natively in a mobile browser (no install required) as well as it does on desktop.

- Built a from-scratch, code-driven pixel-art rendering engine — sprites are palette-indexed matrices rasterized to SVG at runtime rather than static image assets, enabling fully parametric, instantly-recolorable characters with zero art pipeline.

- Implemented a full analytics and data pipeline — PostHog for funnel/session analytics with shared client/server identity resolution, and a Firestore-backed global leaderboard with public reads but server-only writes enforced via security rules and a service-account-authenticated backend.

- Deployed and operated on minimal, cost-conscious infrastructure — Fly.io for the game server and Firebase Hosting for the client, running the whole multiplayer backend for a few dollars a month, with proper separation of public client config vs. server-only secrets throughout.
`,
    tags: ["React Native", "Typescript", "Expo", "Node.js", "Fly.io", "Websockets"],
    links: {
      live: "https://harvestrush.fennel.garden",
      github: "https://github.com/lucas-gold/harvest-rush",
    },
    media: []
  },
  {
    id: 'nextgen',
    name: "Mobile Food Ordering Platform",
    description: `
    <div style="text-align: center;"><b>NextGen Kitchens - Software Developer - Aug 2021 - Feb 2025</b>

<div><a href="https://play.google.com/store/apps/details?id=com.nextgenkitchens.memphisbbq&hl=en" target="_blank" rel="noopener noreferrer">Android App</a> - <a href="https://apps.apple.com/ca/app/memphis-blues-bbq-house/id1629971818" target="_blank" rel="noopener noreferrer">iOS App</a> - <a href="https://apps.apple.com/ca/app/next-eats-food-delivery/id6504778087" target="_blank" rel="noopener noreferrer">iOS App 2</a> - <a href="https://nexteats.web.app" target="_blank" rel="noopener noreferrer">Web App</a>
</div></div>
- Managing a white-label app offered to restaurants / ghost kitchens as a personalized iOS, Android, web, in-store kiosk, & in-store POS app solution. 

- Managing a Firestore database that syncs menu data from & order data to the POS through API calls & webhooks operated by custom cloud functions.

- Integrated app and backend processes with Square (Payments, Catalog, Terminal), Stripe (Payments, Connect, Terminal), Twilio, SendGrid, DoorDash Drive, and Deliverect APIs.

- Created process for both card-present (in-store pinpad) and card-not-present (web, mobile, Apple Pay, Google Pay) orders for multiple payment providers (Stripe, Square). 

- Added ability to print a receipt directly from a kiosk or POS by connecting app through bluetooth to a Star or Epson printer.

- Worked with DoorDash to approve an integration for delivery services through DoorDash Drive. 

- Created a loyalty program to manage, collect, and spend loyalty points on custom-set rewards. 

- Created a new user in-app referral program, added custom-set discounts by selection or code entry with redemption limits, spending requirements. 

- Implemented option for a fully-automated and instantaneous multi-payment splitting between separate restaurant brands in one order (Stripe Connect API).

    `,
    tags: ["React Native", "React", "GCP", "Firebase", "Stripe", "Square", "Twilio"],
    links: {
      live: "https://nextgenkitchens.com",
    },
    media: [
      { type: 'image', src: './img/nextEats1.jpg' },
      { type: 'image', src: './img/goodBowl3.jpg' },
      { type: 'image', src: './img/goodBowl1.png' },
      { type: 'image', src: './img/goodBowl2.jpg' },
      { type: 'image', src: './img/ne1.png' },
      { type: 'image', src: './img/ne2.png' },
      { type: 'image', src: './img/ne3.png' },
      { type: 'image', src: './img/ne4.png' },
    ]
  },
    {
    id: 'aboveground-ai',
    name: "AI-Powered Invoice Parser",
    description: `
    <div style="text-align: center;"><b>Above Ground - AI Automation Engineer - Mar 2025 - Present</b></div>
- Built and launched a production internal tool end-to-end: Designed, built, and shipped an AI-powered invoice extraction application in Python, taking it from concept through daily use by operations and finance teams.

- Automated a critical finance workflow: Replaced a manual invoice-processing workflow with an automated system that reduced processing time from over an hour per invoice to near-instant turnaround.

- Pragmatic AI applied to real business data: Used GPT-based extraction alongside deterministic parsing (pdfplumber) to reliably convert hundreds of vendor invoice formats into structured, system-ready data.

- Shipped a desktop product with real users: Built a PyQt5 desktop application with progress tracking, CSV export, and multi-threaded PDF processing with error handling to keep the app responsive on large or malformed invoices.
    `,
    tags: ["Python", "PyQt5", "pdfplumber", "OpenAI"],
    links: {},
    media: [
      { type: 'video', src: './img/invoice_vid2_editF.webm' },
      { type: 'video', src: './img/invoice_vid1_editF.webm' }
    ]
  },
  {
    id: 'fennel-garden',
    name: "Fennel Garden (2026)",
    description: `
- A full product page in vanilla HTML/CSS/JS for Fennel AI — no frameworks, using a custom design system (CSS custom properties, light/dark-aware tokens, responsive grid/flex layouts).

- Engineered an animated chat demo from scratch: an async JS state machine that types messages character-by-character, animates a typing indicator, and reveals result cards — synchronized with IntersectionObserver-based scroll reveals, no animation library.

- Owned the full deployment pipeline end-to-end — Git/GitHub version control, Firebase Hosting configuration, and custom domain setup (DNS verification, A/CNAME routing, SSL provisioning) to ship on a production domain.
    `,
    tags: ["HTML", "JS", "CSS"],
    links: {
      live: "https://fennel.garden",
      github: "https://github.com/lucas-gold/fennel-website",
    },
    media: []
  },
  {
    id: 'aboveground-website',
    name: "Wordpress Website",
    description: `
    <div style="text-align: center;"><b>Above Ground - Web Development Support - Mar 2025 - Present</b></div>
<div><i>Performed in tandem with my role crafting AI automation tools for Above Ground, I assisted in maintaining and upgrading their public-facing website using WordPress and PHP. Key contributions included:</i></div>

- Custom Theme Development: Implemented custom themes using PHP and WordPress to match the company's brand, improve user experience, and improve mobile responsiveness.

- Plugin Integration: Installed and customized plugins to add new functionalities to the site, including a promotions gallery, locations page, and shipping customizations.

- Bug Fixes and Updates: Resolved bugs and regularly updated the WordPress core, plugins, and themes to ensure smooth operation and security.

- Collaboration with Marketing and Design Teams: Worked closely with other departments to implement design changes and marketing strategies directly into the website.
    `,
    tags: ["HTML5", "CSS3", "WordPress", "PHP"],
    links: {
      live: "https://abovegroundartsupplies.com",
    },
    media: [ 
      { type: 'image', src: './img/ag1.png' },
      { type: 'image', src: './img/ag2.png' }
    ]
  },
  {
    id: "portfolio",
    name: "Personal Portfolio",
    tags: ["React", "JavaScript", "Framer Motion", "CSS"],
    links: {
      github: "https://github.com/lucas-gold/portfolio-app",
      live: "https://lucas.gold",
    },
    description: "Crafted with React, this portfolio site features dynamic animations with Framer Motion, sleek styling with Bootstrap, and interactive elements using tsparticles. Hosted on Firebase, it highlights my technical expertise and creative flair.",
  },
  {
    id: 'farm-game',
    name: "Interactive Farm Simulation Game (2020)",
    description: `A short covid project. Plant, water, and collect crops while fighting off your neighbour who tries to steal them before you can harvest! Built with native Javascript and the P5.js library for animations.
    <a href="https://lucas.gold/games/game.html" target="_blank" rel="noopener noreferrer">Link to play</a> (desktop only)
    `,
    links: {
      github: "https://github.com/lucas-gold/portfolio-app/tree/master/public/games",
      live: "https://lucas.gold/games/game.html",
    },
    tags: ["JavaScript", "P5.js"],
    media: [ { type: 'video', src: './img/gamedemo.webm' }]
  },
  {
    id: 'search-engine',
    name: "Custom Search Engine (2020)",
    description: "Utilizing Apache Nutch and MongoDB, this search engine crawls the internet, indexing and ranking articles based on query relevance using advanced weight calculations. Frontend built with Java.",
    links: {
      github: "https://github.com/lucas-gold/search-engine",
    },
    tags: ["Java", "Apache Nutch", "MongoDB"],
    media: [
      { type: 'image', src: './img/search_1.png' },
      { type: 'image', src: './img/search_2.png' }
    ]
  }, 
];