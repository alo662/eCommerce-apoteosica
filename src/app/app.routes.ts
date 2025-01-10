import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'netmall',
    loadComponent: () => import('./eComerce/comerce.component'),
    children: [
      {
        path: '',
        title: 'Main Page',
        loadComponent: () => import('./eComerce/pages/main-page/main-page.component'),
      },
      {
        path: 'buy-page/:id',
        title: 'Buy Page',
        loadComponent: () => import('./eComerce/pages/buy-page/buy-page.component'),
      },
      {
        path: 'search-page',
        title: 'Search Page',
        loadComponent: () => import('./eComerce/pages/search-page/search-page.component'),
      },
      {
        path: 'check-out',
        title: 'CheckOut',
        loadComponent: () => import('./eComerce/pages/checkout-component/checkout-component.component')
        .then(m => m.CheckoutComponent),
      },
      {
        path: 'shopping-cart',
        title: 'Shopping Cart',
        loadComponent: () => import('./eComerce/pages/shopping-cart/shopping-cart.component'),
      },
      {
        path: '**', redirectTo: '', pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/netmall',
    pathMatch: 'full'
  }
];
