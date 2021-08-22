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
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
