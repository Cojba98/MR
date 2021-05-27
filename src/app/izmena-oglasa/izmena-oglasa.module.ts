import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IzmenaOglasaPageRoutingModule } from './izmena-oglasa-routing.module';

import { IzmenaOglasaPage } from './izmena-oglasa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IzmenaOglasaPageRoutingModule
  ],
  declarations: [IzmenaOglasaPage]
})
export class IzmenaOglasaPageModule {}
