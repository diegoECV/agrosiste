import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AddProduct {
  selectedType = signal('');

  readonly productTypes = [
    { id: 'arandano', name: 'Arándano', icon: 'nutrition-outline', color: '#6366f1' },
    { id: 'palta', name: 'Palta', icon: 'leaf-outline', color: '#22c55e' },
    { id: 'alcachofa', name: 'Alcachofa', icon: 'flower-outline', color: '#f59e0b' }
  ];

  selectType(id: string) {
    this.selectedType.set(id);
  }
}
