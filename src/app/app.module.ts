import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Level1Component } from './level1/level1.component';
import { Level2Component } from './level2/level2.component';

@NgModule({
  declarations: [
    AppComponent,
    Level1Component,
    Level2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
