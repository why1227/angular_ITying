import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ProductComponent } from './routing/product/product.component';
import { IndexComponent } from './routing/index/index.component';
import { SaleComponent } from './routing/sale/sale.component';
const routes: Routes = [
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'sale',
    component: SaleComponent
  },
  {
    path: '**',
    redirectTo: "index"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
