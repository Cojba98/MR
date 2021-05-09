import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PretragaStanovaPageRoutingModule } from './pretraga-stanova-routing.module';

import { PretragaStanovaPage } from './pretraga-stanova.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PretragaStanovaPageRoutingModule
  ],
  declarations: [PretragaStanovaPage]
})
export class PretragaStanovaPageModule {




}
