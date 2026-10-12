import { Routes } from '@angular/router';
import { HomeCatalog } from './features/catalog/pages/home-catalog/home-catalog';

export const routes: Routes = [
  { path: '', component: HomeCatalog },
  { path: '**', redirectTo: '' },
];
