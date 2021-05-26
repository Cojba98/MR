import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthService} from "./auth/auth.service";
import {AuthGuard} from "./auth/auth.guard";

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
    loadChildren: () => import('./novi-oglas/novi-oglas.module').then( m => m.NoviOglasPageModule),
     canLoad: [AuthGuard]
  },
  {
    path: 'stanovi',
    loadChildren: () => import('./stanovi/stanovi.module').then( m => m.StanoviPageModule)
  },
  {
    path: 'stanovi/prikaz-stana/:id',
    loadChildren: () => import('./prikaz-stana/prikaz-stana.module').then( m => m.PrikazStanaPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'pretraga-stanova',
    loadChildren: () => import('./pretraga-stanova/pretraga-stanova.module').then( m => m.PretragaStanovaPageModule)
  },
  {
    path: 'termini',
    loadChildren: () => import('./termini/termini.module').then( m => m.TerminiPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'termini-poseta',
    loadChildren: () => import('./termini-poseta/termini-poseta.module').then( m => m.TerminiPosetaPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'log-in',
    loadChildren: () => import('./auth/log-in/log-in.module').then( m => m.LogInPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
