import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StanoviPageRoutingModule } from './stanovi-routing.module';

import { StanoviPage } from './stanovi.page';
import {StanListItemComponent} from "../stan-list-item/stan-list-item.component";
import {StanGridItemComponent} from "../stan-grid-item/stan-grid-item.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StanoviPageRoutingModule
  ],
    declarations: [StanoviPage, StanListItemComponent, StanGridItemComponent]
})
export class StanoviPageModule {}
