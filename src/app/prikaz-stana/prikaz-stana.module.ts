import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrikazStanaPageRoutingModule } from './prikaz-stana-routing.module';

import { PrikazStanaPage } from './prikaz-stana.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrikazStanaPageRoutingModule
  ],
  declarations: [PrikazStanaPage]
})
export class PrikazStanaPageModule {}
