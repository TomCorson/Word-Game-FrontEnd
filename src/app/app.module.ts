import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WordSelectorComponent } from './word-selector/word-selector.component';
import { WordInputComponent } from './word-selector/word-input/word-input.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    routingComponents,
    WordSelectorComponent,
    WordInputComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
