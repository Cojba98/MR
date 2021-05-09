import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoviOglasPageRoutingModule } from './novi-oglas-routing.module';

import { NoviOglasPage } from './novi-oglas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoviOglasPageRoutingModule
  ],
  declarations: [NoviOglasPage]
})
export class NoviOglasPageModule {}
