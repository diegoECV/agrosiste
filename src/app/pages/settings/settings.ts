import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.html',
  styleUrl: './settings.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Settings {
  constructor(public theme: ThemeService) {}
}
