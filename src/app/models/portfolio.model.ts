export interface NavItem { label: string; target: string; }
export interface Metric { value: string; label: string; }
export interface Service { title: string; icon: string; items: string[]; }
export interface Experience { role: string; duration: string; company: string; items: string[]; }
export interface Project { title: string; type: string; role: string; description: string; focus: string[]; url?: string; association?: string; }
export interface PortfolioData {
  person: { name: string; initials: string; role: string; email: string; linkedin: string; resume: string; };
  navigation: NavItem[];
  hero: { positioning: string; subtitle: string; description: string; };
  metrics: Metric[]; domains: string[]; about: string[]; services: Service[]; serviceTools: Service[];
  experience: Experience[]; projects: Project[];
  ai: { description: string; tools: string[]; applications: string[]; impact: string; };
  education: { degree: string; institution: string; duration: string; };
}
