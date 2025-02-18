import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './products/product-list/product-list.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category/:id', component: ProductListComponent },
];
