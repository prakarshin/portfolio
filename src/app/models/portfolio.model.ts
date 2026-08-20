export interface NavItem { label: string; target: string; }
export interface Metric { value: string; label: string; }
export interface Expertise { title: string; description: string; icon: string; }
export interface Skill { label: string; icon: string; }
export interface ProductWork { number: string; title: string; description: string; tags: string[]; icon: string; }
export interface Experience { role: string; duration: string; summary: string; impacts: string[]; }
export interface ProcessStep { index: string; label: string; title: string; description: string; icon: string; }
export interface ContactLink { label: string; href: string; icon: string; }
export interface FlowStep { title: string; subtitle: string; status: string; icon: string; }
export interface Education { degree: string; description: string; date: string; icon: string; }

export interface PortfolioData {
  person: {
    name: string;
    initials: string;
    role: string;
    email: string;
    phone: string;
    linkedin: string;
    professionalProfile: string;
  };
  navigation: NavItem[];
  hero: {
    eyebrow: string;
    titlePrefix: string;
    titleHighlight: string;
    description: string;
    primaryAction: string;
    secondaryAction: string;
  };
  deliveryFlow: FlowStep[];
  floatingCards: { title: string; subtitle: string; icon: string }[];
  metrics: Metric[];
  expertiseIntro: { kicker: string; title: string; copy: string };
  expertise: Expertise[];
  industries: Skill[];
  workIntro: { kicker: string; title: string; copy: string };
  products: ProductWork[];
  journeyIntro: { kicker: string; title: string; copy: string };
  technicalSkills: Skill[];
  experience: Experience[];
  approachIntro: { kicker: string; title: string; copy: string };
  process: ProcessStep[];
  educationIntro: { kicker: string; title: string; copy: string };
  education: Education;
  contact: { kicker: string; title: string; copy: string; links: ContactLink[] };
  footer: { left: string; right: string };
}
