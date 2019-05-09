import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuegoListComponent } from './components/juego-list/juego-list.component';
import { JuegoFormComponent } from './components/juego-form/juego-form.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/games',
    pathMatch: 'full'
  },
  {
    path: 'games',
    component: JuegoListComponent
  },
  {
    path: 'games/add',
    component: JuegoFormComponent
  },
  {
    path: 'games/edit/:id',
    component: JuegoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
