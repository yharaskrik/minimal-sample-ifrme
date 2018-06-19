import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InIframeComponent } from './in-iframe/in-iframe.component';


@NgModule({
  declarations: [
    AppComponent,
    InIframeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    InIframeComponent
  ]
})
export class AppModule { }
