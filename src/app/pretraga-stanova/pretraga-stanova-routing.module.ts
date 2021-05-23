import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PretragaStanovaPage } from './pretraga-stanova.page';

const routes: Routes = [
  {
    path: '',
    component: PretragaStanovaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PretragaStanovaPageRoutingModule {}
