import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  styleUrl: './products.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Products {
  selectedCategory = signal('all');
  viewMode = signal<'grid' | 'list'>('list');

  readonly categories = [
    { id: 'all', label: 'Todos', icon: 'apps-outline' },
    { id: 'arandano', label: 'Arándano', icon: 'nutrition-outline', color: '#6366f1' },
    { id: 'palta', label: 'Palta', icon: 'leaf-outline', color: '#22c55e' },
    { id: 'alcachofa', label: 'Alcachofa', icon: 'flower-outline', color: '#f59e0b' }
  ];

  selectCategory(id: string) {
    this.selectedCategory.set(id);
  }

  setView(mode: 'grid' | 'list') {
    this.viewMode.set(mode);
  }
}
