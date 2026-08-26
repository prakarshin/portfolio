import { AfterViewInit, Component, HostListener, OnDestroy, signal } from '@angular/core';
import { PORTFOLIO_DATA } from './data/portfolio.data';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit, OnDestroy {
  readonly data = PORTFOLIO_DATA;
  readonly activeSection = signal('home');
  mobileMenuOpen = false;
  navScrolled = false;
  showBackToTop = false;
  scrollProgress = 0;

  private sectionObserver?: IntersectionObserver;
  private gsapContext?: gsap.Context;

  ngAfterViewInit(): void {
    this.setupSectionObserver();
    this.setupAnimations();
    this.handleScroll();
  }

  ngOnDestroy(): void {
    this.sectionObserver?.disconnect();
    this.gsapContext?.revert();
  }

  @HostListener('window:scroll')
  handleScroll(): void {
    const y = window.scrollY;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    this.navScrolled = y > 12;
    this.showBackToTop = y > 650;
    this.scrollProgress = scrollable > 0 ? (y / scrollable) * 100 : 0;
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  goToSection(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.mobileMenuOpen = false;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private setupSectionObserver(): void {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'));
    this.sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) this.activeSection.set(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );
    sections.forEach((section) => this.sectionObserver?.observe(section));
  }

  private setupAnimations(): void {
    this.gsapContext = gsap.context(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.set('.reveal', { clearProps: 'all' });
        return;
      }

      gsap.set('.reveal', { opacity: 1 });
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
      intro.from('.nav-inner', { y: -30, opacity: 0, duration: .7 })
        .from('.hero-grid > div:first-child > *', { y: 42, opacity: 0, duration: .7, stagger: .1 }, '-=.35')
        .from('.hero-card', { x: 70, opacity: 0, duration: .9 }, '-=.65')
        .from('.metrics > div', { y: 35, opacity: 0, duration: .55, stagger: .12 }, '-=.35');

      gsap.utils.toArray<HTMLElement>('main .section, .contact-section').forEach((section) => {
        const heading = section.querySelector('.section-heading');
        const cards = section.querySelectorAll('.experience-card, .service-card, .project-card, .ai-details > div, .competency-groups > div');
        const content = section.querySelectorAll('.about-copy, .career-note, .impact, .competencies, .contact-card');
        const timeline = gsap.timeline({
          scrollTrigger: { trigger: section, start: 'top 78%', toggleActions: 'play none none none' }
        });
        if (heading) timeline.from(heading, { y: 55, opacity: 0, duration: .7, ease: 'power3.out' });
        if (content.length) timeline.from(content, { y: 45, opacity: 0, duration: .65, stagger: .12, ease: 'power2.out' }, '-=.4');
        if (cards.length) timeline.from(cards, { y: 55, opacity: 0, scale: .97, duration: .65, stagger: .1, ease: 'power2.out' }, '-=.35');
      });

      gsap.to('.hero-card', {
        y: -24, ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 }
      });

    });
  }
}
