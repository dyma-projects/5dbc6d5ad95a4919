import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Exercice2Component } from './exercice2/exercice2.component';
import { Exercice1Component } from './exercice1/exercice1.component';
import { Exercice3Component } from './exercice3/exercice3.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercice2Component,
    Exercice1Component,
    Exercice3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
