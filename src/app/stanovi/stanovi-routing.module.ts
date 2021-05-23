import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StanoviPage } from './stanovi.page';

const routes: Routes = [
  {
    path: '',
    component: StanoviPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StanoviPageRoutingModule {}
