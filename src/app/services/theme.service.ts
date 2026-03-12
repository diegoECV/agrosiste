import { Injectable, signal, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly darkMode = signal(false);

  readonly isDark = this.darkMode.asReadonly();

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark') {
        this.darkMode.set(true);
        document.body.classList.add('theme-dark');
      }
    }
  }

  toggle(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.darkMode.update(v => !v);
    if (this.darkMode()) {
      document.body.classList.add('theme-dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('theme-dark');
      localStorage.setItem('theme', 'light');
    }
  }
}
