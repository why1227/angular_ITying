import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DomComponent } from './dom/dom.component';
import { FormComponent } from './form/form.component';

import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { TodoListComponent } from './todo-list/todo-list.component';

import { StorageService } from './services/storage.service';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { TransitionComponent } from './transition/transition.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { GetPostComponent } from './get-post/get-post.component';
import { HttpserviceService } from './services/httpservice.service';



import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ProductComponent } from './routing/product/product.component';
import { IndexComponent } from './routing/index/index.component';
import { SaleComponent } from './routing/sale/sale.component';
import { ProductDetailComponent } from './routing/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DomComponent,
    FormComponent,
    SearchComponent,
    TodoListComponent,
    HomeComponent,
    NewsComponent,
    FooterComponent,
    HeaderComponent,
    TransitionComponent,
    LifecycleComponent,
    RxjsComponent,
    GetPostComponent,
    ProductComponent,
    IndexComponent,
    SaleComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [StorageService,HttpserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
