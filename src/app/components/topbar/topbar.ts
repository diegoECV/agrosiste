import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, output } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.html',
  styleUrl: './topbar.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Topbar {
  protected readonly theme = inject(ThemeService);
  menuToggle = output();
}
