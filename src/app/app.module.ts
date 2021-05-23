import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {MeniStandardComponent} from "./meni-standard/meni-standard.component";
import {MeniPrijavljenComponent} from "./meni-prijavljen/meni-prijavljen.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, MeniStandardComponent, MeniPrijavljenComponent],
  entryComponents: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
