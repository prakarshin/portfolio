import { PortfolioData } from '../models/portfolio.model';

export const PORTFOLIO_DATA: PortfolioData = {
  person: { name: 'Prakarsh Pandey', initials: 'P•P', role: 'Business Analyst / Project Management', email: 'prakarshpandeyin@gmail.com', linkedin: 'https://www.linkedin.com/in/prakarshpandeyin', resume: 'resume/Prakarsh_Pandey_Resume.pdf' },
  navigation: [
    { label: 'About', target: 'about' }, { label: 'Experience', target: 'experience' },
    { label: 'Expertise', target: 'services' }, { label: 'Projects', target: 'projects' },
    { label: 'AI & Tools', target: 'ai-tools' }, { label: 'Contact', target: 'contact' }
  ],
  hero: {
    positioning: 'Business Analysis · Product Discovery · Project Coordination · Client Management · Software Product Delivery',
    subtitle: 'Requirement Analysis · Product Discovery · Project & Client Management',
    description: 'Associate Business Analyst with 2 years of experience turning business requirements into practical software solutions across SaaS, AI, FinTech, EdTech, E-commerce, and CRM products.'
  },
  metrics: [{ value: '2+', label: 'Years Experience' }, { value: '25+', label: 'Projects Coordinated' }, { value: '20+', label: 'International Engagements' }],
  domains: ['FinTech', 'SaaS', 'EdTech', 'AI', 'E-commerce', 'CRM'],
  about: [
    "I'm an Associate Business Analyst with 2 years of experience across Business Analysis, Product Discovery, Project Coordination, Client Management, and Software Product Delivery.",
    'I started my career as a Business Analyst Trainee and progressed to the Associate Business Analyst role within 6 months. Since then, I have worked closely with clients, developers, technical leads, designers, and senior management to translate business needs into clear, practical, and deliverable software solutions.',
    'My experience includes requirements elicitation and analysis, BRD/FRD/SRS, user stories, use cases, acceptance criteria, process flows, product discovery, wireframing, prototyping, UAT, functional testing, stakeholder management, and delivery coordination.',
    'I also have practical exposure to APIs, integrations, databases, authentication, deployment workflows, and AI-assisted research, documentation, prototyping, analysis, presentations, and testing.',
    'I am particularly interested in AI-powered products, SaaS, Product Management, and technology-driven business solutions.'
  ],
  services: [
    { title: 'Business Analysis', icon: 'fa-solid fa-magnifying-glass-chart', items: ['Requirement Elicitation', 'Requirement Analysis', 'Functional & Non-Functional Requirements', 'Gap Analysis', 'Process Mapping', 'Requirement Prioritization', 'BRD / FRD / SRS', 'PRD', 'User Stories', 'Use Cases', 'Acceptance Criteria', 'UAT'] },
    { title: 'Product Discovery', icon: 'fa-regular fa-compass', items: ['Product Research', 'Feature Analysis', 'Solution Definition', 'User Flows', 'Wireframing', 'Prototyping', 'Feature Prioritization'] },
    { title: 'Project & Stakeholder Management', icon: 'fa-solid fa-people-group', items: ['Client Communication', 'Stakeholder Management', 'Project Coordination', 'Sprint Coordination', 'Task Coordination', 'Delivery Coordination'] },
    { title: 'Technical Collaboration', icon: 'fa-solid fa-code-branch', items: ['API Analysis', 'API Documentation', 'Third-party Integrations', 'Database Understanding', 'Authentication', 'Deployment Workflows', 'Technical Documentation'] },
    { title: 'Project & Stakeholder Management tools', icon: 'fa-solid fa-screwdriver-wrench', items: ['Jira', 'Basecamp', 'Slack'] },
    { title: 'Product Discovery tools', icon: 'fa-solid fa-pen-ruler', items: ['Figma', 'Lucidchart', 'Miro'] }
  ],
  experience: [
    { role: 'Associate Business Analyst', duration: 'Mar 2025 – Present', company: 'Jamtech Technologies Pvt. Ltd. · Lucknow, India', items: [
      'Managed/coordinated 25+ software projects, including 20+ international engagements.',
      'Led requirements elicitation, analysis, prioritization, and solution definition through direct client interaction.',
      'Coordinated developers, technical leads, UI/UX designers, and stakeholders across project planning, execution, testing, UAT, and delivery.',
      'Created and reviewed functional requirements, user stories, process flows, prototypes, acceptance criteria, and project documentation.',
      'Coordinated UAT, functional testing, requirement validation, client feedback, and change requests.',
      'Collaborated on APIs, integrations, databases, authentication, and deployment workflows to align business requirements with technical implementation.',
      'Contributed to Product Discovery for an internal CRM/SaaS product and mentored and coordinated junior BA/trainee team members.',
      'Evaluated custom development vs third-party AI/API solutions to identify practical approaches for reducing implementation complexity, time, and cost.'
    ] },
    { role: 'Business Analyst Trainee', duration: 'Sep 2024 – Feb 2025', company: 'Jamtech Technologies Pvt. Ltd. · Lucknow, India', items: [
      'Supported requirements gathering, client onboarding, stakeholder communication, and project coordination during project initiation.',
      'Created core Business Analysis artefacts including BRDs, FRDs, SRS, User Stories, Use Cases, Acceptance Criteria, Process Flows, Wireframes, and Prototypes.',
      'Collaborated with cross-functional teams to support requirement validation, UAT, Agile/SDLC activities, and software delivery.'
    ] }
  ],
  projects: [
    { title: 'BullCRM', type: 'Internal CRM / SaaS Product', role: 'Business Analyst / Product Research', url: 'https://bullcrm.io/', association: 'Associated with Jamtech Technologies Pvt. Ltd.', description: 'Collaborated with Senior Management on product discovery, feature research, and solution discussions for an internal CRM/SaaS product. Contributed to business-focused feature recommendations, user flows, validation, testing, and implementation coordination.', focus: ['Product Discovery', 'Feature Analysis', 'User Flows', 'Validation', 'Testing', 'Implementation Coordination'] },
    { title: 'EDSX', type: 'FinTech Platform', role: 'Business Analyst / Project Coordination', url: 'https://www.edsx.ch/', association: 'Associated with Jamtech Technologies Pvt. Ltd.', description: 'Coordinated an ongoing multi-project engagement involving clients, technical leads, and development teams, with regular stand-ups, task assignment, and delivery coordination. Applied AI-assisted workflows for documentation, process flows, and analysis, reducing repetitive effort and helping minimize client escalations and repeated changes.', focus: ['Client Coordination', 'Requirements', 'Documentation', 'Process Analysis', 'Task Coordination', 'Delivery Coordination'] },
    { title: 'Orifone.AI', type: 'AI Product', role: 'Business Analyst / Feature Analysis', url: 'https://www.orifone.ai/', association: 'Associated with Jamtech Technologies Pvt. Ltd.', description: 'Handled end-to-end product discovery across requirements, feature recommendations, documentation, prototyping, testing, and solution definition. Contributed to AI/API evaluation, cost optimization, and product/marketing recommendations to support ongoing product development and market positioning.', focus: ['Product Discovery', 'AI/API Evaluation', 'Prototyping', 'Solution Definition', 'Testing', 'Feature Recommendations'] }
  ],
  ai: {
    description: 'I use Generative AI to accelerate research, documentation, analysis, prototyping, presentations, and testing while keeping business context, requirements, validation, and decision-making under human review.',
    tools: ['ChatGPT', 'Claude', 'Kimi', 'Lovable', 'Stitch', 'Gamma', 'Julius'], applications: ['Research', 'Documentation', 'Prototyping', 'Analysis', 'Presentations', 'Testing'],
    impact: 'Meaningfully reduces time spent on research, documentation, prototyping, analysis, presentations, and testing.'
  },
  education: { degree: 'B.Tech — Computer Science & Engineering', institution: 'Gurukula Kangri Vishwavidyalaya', duration: '2019–2023' }
};
