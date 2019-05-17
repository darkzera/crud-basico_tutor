import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StarshipListComponent } from './components/starship-list/starship-list.component';
const routes: Routes = [
   {
      path: '',
      redirectTo: '/spaceships',
      pathMatch: 'full',

   },
   {
      path: 'spaceships',
      component: StarshipListComponent
   }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
