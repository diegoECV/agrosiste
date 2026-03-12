import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.html',
  styleUrl: './analytics.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Analytics {
  readonly months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
}
