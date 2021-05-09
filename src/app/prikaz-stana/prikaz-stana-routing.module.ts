import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrikazStanaPage } from './prikaz-stana.page';

const routes: Routes = [
  {
    path: '',
    component: PrikazStanaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrikazStanaPageRoutingModule {}
