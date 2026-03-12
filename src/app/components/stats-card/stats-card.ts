import { Component, CUSTOM_ELEMENTS_SCHEMA, input } from '@angular/core';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.html',
  styleUrl: './stats-card.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StatsCard {
  title = input<string>('');
  value = input<string>('--');
  icon = input<string>('bar-chart-outline');
  color = input<'primary' | 'danger' | 'success'>('primary');
  progress = input<number>(0);
  subtitle = input<string>('Últimas 24 Horas');
}
