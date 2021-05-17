import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TerminiPosetaPage } from './termini-poseta.page';

const routes: Routes = [
  {
    path: '',
    component: TerminiPosetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerminiPosetaPageRoutingModule {}
