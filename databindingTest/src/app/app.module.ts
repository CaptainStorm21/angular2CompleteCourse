import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {HeroParentComponent} from './../app/hero/hero-parent.component';
import {HeroChildComponent} from './../app/hero/hero-child.component';

@NgModule({
  declarations: [
    AppComponent, HeroChildComponent, HeroParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
