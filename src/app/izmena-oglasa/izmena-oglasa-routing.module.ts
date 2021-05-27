import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IzmenaOglasaPage } from './izmena-oglasa.page';

const routes: Routes = [
  {
    path: '',
    component: IzmenaOglasaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IzmenaOglasaPageRoutingModule {}
