export const projectData = [
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
    <div style="text-align: center;"><b>Above Ground - AI Automation Engineer - Mar 2025 - Jan 2026</b></div>
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
    id: 'aboveground-website',
    name: "Wordpress Website",
    description: `
    <div style="text-align: center;"><b>Above Ground - Web Development Support - Mar 2025 - Jan 2026</b></div>
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
  {
    id: 'vacation-finder',
    name: "Enhanced Location Search (2020)",
    description: "An enhanced destination search that curates popular destinations worldwide. Built with AngularJS, PHP, and MySQL, it allows natural language searches to display matching attractions, offering personalized travel suggestions.",
    links: {
      github: "https://github.com/lucas-gold/Web-Applications/tree/master/Assignment%201",
    },
    tags: ["AngularJS", "HTML5", "CSS3", "PHP"],
    
  }
];