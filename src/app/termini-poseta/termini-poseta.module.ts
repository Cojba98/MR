import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerminiPosetaPageRoutingModule } from './termini-poseta-routing.module';

import { TerminiPosetaPage } from './termini-poseta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerminiPosetaPageRoutingModule
  ],
  declarations: [TerminiPosetaPage]
})
export class TerminiPosetaPageModule {}
