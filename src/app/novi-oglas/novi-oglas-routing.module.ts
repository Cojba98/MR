import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoviOglasPage } from './novi-oglas.page';

const routes: Routes = [
  {
    path: '',
    component: NoviOglasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoviOglasPageRoutingModule {}
