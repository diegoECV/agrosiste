import { Routes } from '@angular/router';
import { Layout } from './components/layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard)
      },
      {
        path: 'clientes',
        loadComponent: () => import('./pages/customers/customers').then(m => m.Customers)
      },
      {
        path: 'pedidos',
        loadComponent: () => import('./pages/orders/orders').then(m => m.Orders)
      },
      {
        path: 'analitica',
        loadComponent: () => import('./pages/analytics/analytics').then(m => m.Analytics)
      },
      {
        path: 'mensajes',
        loadComponent: () => import('./pages/messages/messages').then(m => m.Messages)
      },
      {
        path: 'productos',
        loadComponent: () => import('./pages/products/products').then(m => m.Products)
      },
      {
        path: 'reportes',
        loadComponent: () => import('./pages/reports/reports').then(m => m.Reports)
      },
      {
        path: 'produccion',
        loadComponent: () => import('./pages/production/production').then(m => m.Production)
      },
      {
        path: 'configuracion',
        loadComponent: () => import('./pages/settings/settings').then(m => m.Settings)
      },
      {
        path: 'agregar-producto',
        loadComponent: () => import('./pages/add-product/add-product').then(m => m.AddProduct)
      }
    ]
  }
];
