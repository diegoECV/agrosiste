import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';

@Component({
  selector: 'app-production',
  templateUrl: './production.html',
  styleUrl: './production.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Production {
  readonly products = [
    { id: 'arandano', name: 'Arándano', icon: 'nutrition-outline', color: '#6366f1', season: 'Ago – Nov' },
    { id: 'palta', name: 'Palta', icon: 'leaf-outline', color: '#22c55e', season: 'Mar – Sep' },
    { id: 'alcachofa', name: 'Alcachofa', icon: 'flower-outline', color: '#f59e0b', season: 'May – Dic' }
  ];

  selectedProduct = signal('all');
  selectedPeriod = signal<'dia' | 'semana' | 'mes' | 'temporada'>('dia');

  readonly periods = [
    { value: 'dia' as const, label: 'Día' },
    { value: 'semana' as const, label: 'Semana' },
    { value: 'mes' as const, label: 'Mes' },
    { value: 'temporada' as const, label: 'Temporada' }
  ];

  selectProduct(id: string) {
    this.selectedProduct.set(id);
  }

  selectPeriod(value: 'dia' | 'semana' | 'mes' | 'temporada') {
    this.selectedPeriod.set(value);
  }
}
