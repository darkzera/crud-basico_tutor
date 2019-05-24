import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StarshipListComponent } from './components/starship-list/starship-list.component';
import { StarshipFormComponent } from "./components/starship-form/starship-form.component";
const routes: Routes = [
   {
      path: '',
      //redirectTo: '/spaceships',
      redirectTo: '/starships',
      pathMatch: 'full',
   },

   {
      path: 'starships',
      component: StarshipListComponent
   },

   {
      path: 'starships/add',
      component: StarshipFormComponent
   },
   {
      path: 'starships/add/:id',
      component: StarshipFormComponent
   }

];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
