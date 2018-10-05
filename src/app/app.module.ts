import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SumPipe } from './pipes/sum.pipe';

export const modules = [
  BrowserModule,
  FormsModule
];

export const components = [
  AppComponent,
  SumPipe
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    ...modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
