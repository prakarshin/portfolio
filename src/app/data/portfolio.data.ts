import { PortfolioData } from '../models/portfolio.model';

// Edit this file to update the website content.
// To add experience/projects/skills, add another object to the related array.
export const PORTFOLIO_DATA: PortfolioData = {
  person: {
    name: 'Prakarsh Pandey',
    initials: 'PP',
    role: 'Business Analyst & Product Delivery',
    email: 'prakarshpandey@gmail.com',
    phone: '+91 7865906716',
    linkedin: '#',
    professionalProfile: '#'
  },
  navigation: [
    { label: 'Home', target: 'home' },
    { label: 'Expertise', target: 'expertise' },
    { label: 'Product Work', target: 'work' },
    { label: 'Journey', target: 'journey' },
    { label: 'Approach', target: 'approach' }
  ],
  hero: {
    eyebrow: 'Business Analysis · Product Delivery · AI Workflows',
    titlePrefix: 'I turn complex business problems into',
    titleHighlight: 'products teams can ship.',
    description: 'I work at the intersection of business, product, and technology—turning stakeholder needs into clear requirements, practical workflows, aligned delivery plans, and validated software outcomes.',
    primaryAction: 'Explore product work',
    secondaryAction: 'Start a conversation'
  },
  deliveryFlow: [
    { title: 'Discover', subtitle: 'Stakeholders & business context', status: 'Aligned', icon: 'fa-regular fa-comments' },
    { title: 'Define', subtitle: 'Requirements, flows & acceptance', status: 'Clear', icon: 'fa-solid fa-diagram-project' },
    { title: 'Coordinate', subtitle: 'Design, engineering & QA', status: 'Moving', icon: 'fa-solid fa-people-group' },
    { title: 'Validate & Deliver', subtitle: 'UAT, release & iteration', status: 'Shipped', icon: 'fa-solid fa-rocket' }
  ],
  floatingCards: [
    { title: 'Requirements → Action', subtitle: 'Stories, flows, acceptance criteria', icon: 'fa-solid fa-list-check' },
    { title: 'AI-assisted delivery', subtitle: '~40% less repetitive effort', icon: 'fa-solid fa-wand-magic-sparkles' }
  ],
  metrics: [
    { value: '25+', label: 'Projects coordinated' },
    { value: '20+', label: 'International engagements' },
    { value: '7+', label: 'Concurrent projects handled' },
    { value: '~40%', label: 'Effort reduced using AI-assisted workflows' }
  ],
  expertiseIntro: {
    kicker: 'What I bring',
    title: 'Business clarity with enough technical depth to move delivery forward.',
    copy: 'My work spans product discovery, requirements, stakeholder alignment, delivery coordination, validation, and technical discussions across APIs, integrations, databases, authentication, and deployment.'
  },
  expertise: [
    { title: 'Product Discovery', description: 'Understand the business problem, user needs, constraints, opportunities, and the value behind a requested feature.', icon: 'fa-solid fa-magnifying-glass-chart' },
    { title: 'Requirements & Flows', description: 'Translate conversations into structured requirements, use cases, workflows, user stories, acceptance criteria, and prototypes.', icon: 'fa-solid fa-sitemap' },
    { title: 'Delivery Coordination', description: 'Keep clients, designers, developers, QA, and stakeholders aligned through planning, changes, validation, and release.', icon: 'fa-solid fa-people-arrows' },
    { title: 'AI-Enabled Workflows', description: 'Use AI for research, documentation, prototyping, analysis, presentations, and testing to accelerate repetitive work.', icon: 'fa-solid fa-robot' }
  ],
  industries: [
    { label: 'FinTech', icon: 'fa-solid fa-building-columns' },
    { label: 'SaaS', icon: 'fa-solid fa-cloud' },
    { label: 'IoT', icon: 'fa-solid fa-microchip' },
    { label: 'AI', icon: 'fa-solid fa-brain' },
    { label: 'E-commerce', icon: 'fa-solid fa-cart-shopping' },
    { label: 'CRM', icon: 'fa-solid fa-users-gear' }
  ],
  workIntro: {
    kicker: 'Selected product involvement',
    title: 'Not just projects—products I helped shape and move forward.',
    copy: 'A snapshot of product discovery, recommendation, workflow, validation, and delivery contributions.'
  },
  products: [
    {
      number: 'PRODUCT 01', title: 'Build CRM',
      description: 'Collaborated with Senior Management on product discovery, feature research, solution discussions, business-focused recommendations, user flows, validation, testing, and implementation.',
      tags: ['Discovery', 'Feature Research', 'User Flows', 'Validation'], icon: 'fa-solid fa-layer-group'
    },
    {
      number: 'PRODUCT 02', title: 'ESDX',
      description: 'Worked within agile, multi-project delivery teams with regular stand-ups, task assignment, coordination, documentation, process flows, analysis, and continuous stakeholder alignment.',
      tags: ['Agile Delivery', 'Coordination', 'Documentation', 'Analysis'], icon: 'fa-solid fa-chart-line'
    },
    {
      number: 'PRODUCT 03', title: 'Orifone',
      description: 'Supported delivery through requirements, coordination, analysis, AI-assisted documentation, and structured communication aimed at reducing repetitive changes and client escalations.',
      tags: ['Requirements', 'AI Workflows', 'Stakeholders', 'Delivery'], icon: 'fa-solid fa-mobile-screen-button'
    },
    {
      number: 'PRODUCT 04', title: 'Test',
      description: 'Collaborated with Senior Management on product discovery, feature research, solution discussions, business-focused recommendations, user flows, validation, testing, and implementation.',
      tags: ['Discovery', 'Feature Research', 'User Flows', 'Validation'], icon: 'fa-solid fa-layer-group'
    },
  ],
  journeyIntro: {
    kicker: 'Career journey',
    title: 'Growth through ownership, not just tenure.',
    copy: 'Progressed from Business Analyst Trainee to Associate Business Analyst within six months, taking increasing ownership of requirements, solution definition, coordination, UAT, and delivery.'
  },
  technicalSkills: [
    { label: 'BDD / FDD / SRS', icon: 'fa-solid fa-file-lines' },
    { label: 'User Stories', icon: 'fa-solid fa-list' },
    { label: 'UAT', icon: 'fa-solid fa-check-double' },
    { label: 'APIs & Integrations', icon: 'fa-solid fa-code-branch' },
    { label: 'Databases', icon: 'fa-solid fa-database' },
    { label: 'Authentication', icon: 'fa-solid fa-shield-halved' },
    { label: 'Deployment Concepts', icon: 'fa-solid fa-cloud-arrow-up' }
  ],
  experience: [
    {
      role: 'Associate Business Analyst', duration: '2+ YEARS',
      summary: 'Owned analysis and delivery activities across international, domestic, and government environments while coordinating multiple stakeholders and concurrent initiatives.',
      impacts: [
        'Managed/coordinated 25+ projects, including 20+ international engagements and 7+ concurrent projects.',
        'Led requirements elicitation, analysis, prioritization, validation, and translation into actionable software requirements.',
        'Coordinated sprint planning, task allocation, change management, UAT, testing, and delivery across clients, designers, developers, and QA.',
        'Applied AI-assisted workflows to reduce research, documentation, prototyping, analysis, presentation, and testing effort by approximately 40%.',
        'Recommended 4–5 internal CRM/SaaS features, with 3 implemented, while coordinating a 2+ member junior QA/TA/QA team.',
        'Evaluated custom development versus third-party AI/API solutions to support practical product decisions.'
      ]
    },
    {
      role: 'Business Analyst Trainee', duration: '6 MONTHS',
      summary: 'Built the foundations of structured software analysis and delivery while supporting requirements, onboarding, communication, project coordination, and solution definition.',
      impacts: [
        'Supported requirements elicitation, client onboarding, stakeholder communication, and early solution definition.',
        'Created BDDs, FDDs, SRS, user stories, use cases, acceptance criteria, process flows, workflows, and prototypes.',
        'Applied Agile/SDLC practices, requirement validation, UAT, and project management processes across delivery activities.'
      ]
    }
  ],
  approachIntro: {
    kicker: 'How I work',
    title: 'A structured path from “what do we need?” to “this is ready to ship.”',
    copy: 'The exact artifacts change by project. The objective does not: create shared clarity early and reduce ambiguity during delivery.'
  },
  process: [
    { index: '01', label: 'DISCOVER', title: 'Understand the problem', description: 'Clarify goals, users, pain points, stakeholders, business rules, constraints, and desired outcomes.', icon: 'fa-regular fa-compass' },
    { index: '02', label: 'DEFINE', title: 'Make requirements visible', description: 'Shape stories, use cases, flows, acceptance criteria, prototypes, dependencies, and delivery expectations.', icon: 'fa-solid fa-diagram-project' },
    { index: '03', label: 'ALIGN', title: 'Keep teams synchronized', description: 'Coordinate stakeholders, engineering, design, QA, scope changes, sprint work, and open decisions.', icon: 'fa-solid fa-people-group' },
    { index: '04', label: 'VALIDATE', title: 'Verify before release', description: 'Support testing and UAT, validate expected outcomes, resolve gaps, and move the product toward release.', icon: 'fa-solid fa-rocket' }
  ],
  educationIntro: {
    kicker: 'Foundation',
    title: 'Technical education, business-facing execution.',
    copy: 'My Computer Science background supports practical conversations around software systems while my day-to-day focus remains business outcomes and product delivery.'
  },
  education: {
    degree: 'B.Tech — Computer Science & Engineering',
    description: 'Academic background supporting software, systems, and technical product understanding.',
    date: 'Aug 2019 — Jan 2023',
    icon: 'fa-solid fa-graduation-cap'
  },
  contact: {
    kicker: 'Let’s connect',
    title: 'Need someone who can bridge business intent and software delivery?',
    copy: 'I’m open to conversations around Business Analysis, Product, Project Delivery, SaaS, AI-enabled workflows, and software initiatives that need stronger clarity between stakeholders and implementation teams.',
    links: [
      { label: 'prakarshpandey@gmail.com', href: 'mailto:prakarshpandey@gmail.com', icon: 'fa-regular fa-envelope' },
      { label: '+91 7865906716', href: 'tel:+917865906716', icon: 'fa-solid fa-phone' },
      { label: 'LinkedIn', href: '#', icon: 'fa-brands fa-linkedin-in' },
      { label: 'Github', href: '#', icon: 'fa-brands fa-github' },
      { label: 'Professional Profile', href: '#', icon: 'fa-solid fa-arrow-up-right-from-square' }
    ]
  },
  footer: {
    left: 'Prakarsh Pandey · Business Analyst & Product Delivery',
    right: 'Built around clarity, collaboration, and outcomes.'
  }
};
