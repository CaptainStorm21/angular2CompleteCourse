import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Book1Component } from './book1/book1.component';
import { BookcoverComponent } from './bookcover/bookcover.component';


@NgModule({
  declarations: [
    AppComponent,
    Book1Component,
    BookcoverComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
