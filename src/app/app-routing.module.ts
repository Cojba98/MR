import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'novi-oglas',
    loadChildren: () => import('./novi-oglas/novi-oglas.module').then( m => m.NoviOglasPageModule)
  },
  {
    path: 'stanovi',
    loadChildren: () => import('./stanovi/stanovi.module').then( m => m.StanoviPageModule)
  },
  {
    path: 'prikaz-stana/:id',
    loadChildren: () => import('./prikaz-stana/prikaz-stana.module').then( m => m.PrikazStanaPageModule)
  },
  {
    path: 'pretraga-stanova',
    loadChildren: () => import('./pretraga-stanova/pretraga-stanova.module').then( m => m.PretragaStanovaPageModule)
  },
  {
    path: 'termini',
    loadChildren: () => import('./termini/termini.module').then( m => m.TerminiPageModule)
  },
  {
    path: 'termini-poseta',
    loadChildren: () => import('./termini-poseta/termini-poseta.module').then( m => m.TerminiPosetaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
