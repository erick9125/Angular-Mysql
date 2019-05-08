import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuegoListComponent } from './components/juego-list/juego-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/games',
    pathMatch: 'full'
  },
  {
    path: 'games',
    component: JuegoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
