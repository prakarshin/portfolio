import { AfterViewInit, Component, HostListener, OnDestroy, signal } from '@angular/core';
import { PORTFOLIO_DATA } from './data/portfolio.data';

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
  private revealObserver?: IntersectionObserver;

  ngAfterViewInit(): void {
    this.setupSectionObserver();
    this.setupRevealObserver();
    this.handleScroll();
  }

  ngOnDestroy(): void {
    this.sectionObserver?.disconnect();
    this.revealObserver?.disconnect();
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

  private setupRevealObserver(): void {
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    this.revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          this.revealObserver?.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -70px', threshold: 0.08 }
    );
    revealItems.forEach((item) => this.revealObserver?.observe(item));
  }
}
