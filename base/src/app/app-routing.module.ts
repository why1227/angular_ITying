import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ProductComponent } from './routing/product/product.component';
import { ProductDetailComponent } from './routing/product-detail/product-detail.component';

import { IndexComponent } from './routing/index/index.component';
import { SaleComponent } from './routing/sale/sale.component';
import { SaleDetailComponent } from './routing/sale-detail/sale-detail.component';
import { HotComponent } from './routing/hot/hot.component';
import { HotDetailComponent } from './routing/hot-detail/hot-detail.component';
import { Home2Component } from './home2/home2.component';
import { Product2Component } from './product2/product2.component';
import { WelcomeComponent } from './home2/welcome/welcome.component';
import { SettingComponent } from './home2/setting/setting.component';
import { PcateComponent } from './product2/pcate/pcate.component';
import { PlistComponent } from './product2/plist/plist.component';
import { News2Component } from './news2/news2.component';


const routes: Routes = [
  {
    path: 'home2',
    component: Home2Component,
    children:[
      {
        path: 'welcome',
        component: WelcomeComponent
      },
      {
        path: 'setting',
        component: SettingComponent
      },
      {
        path: '**',
        redirectTo: "welcome"
      },
    ]
  },
  {
    path: 'product2',
    component: Product2Component,
    children:[
      {
        path: 'pcate',
        component: PcateComponent
      },
      {
        path: 'plist',
        component: PlistComponent
      },
      {
        path: '**',
        redirectTo: "pcate"
      },
    ]
  },
  {
    path: 'news2',
    component: News2Component
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'product_detail',
    component: ProductDetailComponent
  },
  {
    path: 'sale_detail/:aid',
    component: SaleDetailComponent
  },
  {
    path: 'hot',
    component: HotComponent
  },
  {
    path: 'hot_detail/:hid',
    component: HotDetailComponent
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
