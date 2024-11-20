import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: Array<ServerRoute> = [
  { path: 'home', renderMode: RenderMode.Server },

  {
    path: 'upload',
    renderMode: RenderMode.Server,
  },
  {
    path: 'shop',
    renderMode: RenderMode.Server,
  },
  {
    path: 'cart',
    renderMode: RenderMode.Server,
  },
  {
    path: 'product-detail/:id',
    renderMode: RenderMode.Client,
  },
  {
    path: 'checkout',
    renderMode: RenderMode.Server,
  },
  {
    path: 'success',
    renderMode: RenderMode.Server,
  },
  {
    path: 'wishlist',
    renderMode: RenderMode.Server,
  },
  {
    path: 'dashboard',
    renderMode: RenderMode.Server,
  },
  {
    path: 'auth',
    renderMode: RenderMode.Server,
  },
  { path: '**', renderMode: RenderMode.Server },
];
