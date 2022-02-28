import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdviceCardComponent } from './advice-card/advice-card.component';
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent,
    AdviceCardComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
