import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MojiOglasiPageRoutingModule } from './moji-oglasi-routing.module';

import { MojiOglasiPage } from './moji-oglasi.page';
import {StanListItemComponent} from "../stan-list-item/stan-list-item.component";
import {MojOglasComponent} from "../moj-oglas/moj-oglas.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MojiOglasiPageRoutingModule
  ],
  declarations: [MojiOglasiPage, StanListItemComponent, MojOglasComponent]
})
export class MojiOglasiPageModule {}
