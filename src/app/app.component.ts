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
  private interactionCleanups: Array<() => void> = [];

  ngAfterViewInit(): void {
    this.setupSectionObserver();
    this.setupAnimations();
    this.handleScroll();
  }

  ngOnDestroy(): void {
    this.sectionObserver?.disconnect();
    this.gsapContext?.revert();
    this.interactionCleanups.forEach((cleanup) => cleanup());
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
        .from('.hero-grid > div:first-child > *', { y: 48, opacity: 0, duration: .75, stagger: .09 }, '-=.35')
        .from('.hero-card', { x: 70, opacity: 0, rotateY: -5, duration: 1 }, '-=.65')
        .from('.hero-card-content > *', { y: 20, opacity: 0, duration: .45, stagger: .07 }, '-=.55')
        .from('.metrics > div', { y: 38, opacity: 0, scale: .94, duration: .6, stagger: .1 }, '-=.3');

      gsap.utils.toArray<HTMLElement>('main .section, .contact-section').forEach((section) => {
        const headings = section.querySelectorAll('.section-heading');
        const cards = section.querySelectorAll('.experience-card, .service-card, .project-card, .ai-details > div, .competency-groups > div');
        const content = section.querySelectorAll('.about-copy, .career-note, .impact, .competencies, .contact-card');
        const timeline = gsap.timeline({
          scrollTrigger: { trigger: section, start: 'top 78%', toggleActions: 'play none none none' }
        });
        if (headings.length) timeline.from(headings, { y: 48, opacity: 0, clipPath: 'inset(0 0 100% 0)', duration: .8, stagger: .18, ease: 'power3.out' });
        if (content.length) timeline.from(content, { y: 45, opacity: 0, duration: .65, stagger: .12, ease: 'power2.out' }, '-=.4');
        if (cards.length) timeline.from(cards, { y: 60, opacity: 0, scale: .96, rotateX: 3, duration: .7, stagger: .09, ease: 'power3.out' }, '-=.35');
      });

      gsap.to('.hero-card', {
        y: -24, ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 }
      });

      gsap.to('#projects', {
        backgroundPosition: '30px -45px, -25px 30px, 24px 48px', ease: 'none',
        scrollTrigger: { trigger: '#projects', start: 'top bottom', end: 'bottom top', scrub: 1.2 }
      });

    });

    this.setupCardTilt();
  }

  private setupCardTilt(): void {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    document.documentElement.classList.add('motion-ready');
    document.querySelectorAll<HTMLElement>('.service-card, .project-card, .ai-details > div').forEach((card) => {
      const move = (event: PointerEvent) => {
        const bounds = card.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - .5;
        const y = (event.clientY - bounds.top) / bounds.height - .5;
        gsap.to(card, { rotateY: x * 4, rotateX: y * -4, y: -7, transformPerspective: 900, duration: .35, ease: 'power2.out', overwrite: 'auto' });
        card.style.setProperty('--pointer-x', `${(x + .5) * 100}%`);
        card.style.setProperty('--pointer-y', `${(y + .5) * 100}%`);
      };
      const leave = () => gsap.to(card, { rotateY: 0, rotateX: 0, y: 0, duration: .55, ease: 'power3.out', overwrite: 'auto' });
      card.addEventListener('pointermove', move);
      card.addEventListener('pointerleave', leave);
      this.interactionCleanups.push(() => {
        card.removeEventListener('pointermove', move);
        card.removeEventListener('pointerleave', leave);
      });
    });
  }
}
