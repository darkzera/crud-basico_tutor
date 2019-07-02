import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StarshipListComponent } from './components/starship-list/starship-list.component';
import { StarshipFormComponent } from "./components/starship-form/starship-form.component";
import { StarshipPilotListComponent } from './components/starship-pilot-list/starship-pilot-list.component';
import { StarshipPilotFormComponent } from './components/starship-pilot-form/starship-pilot-form.component';
const routes: Routes = [

   // ----- starship
   {
      path: '',
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
   },

   // ----- starship_pilot
   {
      path: '',
      redirectTo: '/starships_pilot',
      pathMatch: 'full',
   },
   {
      path: 'starships_pilot',
      component: StarshipPilotListComponent
   },
   {
      path: 'starships_pilot/add',
      component: StarshipPilotFormComponent
   },
   {
      path: 'starships_pilot/add/:id',
      component: StarshipPilotFormComponent
   }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
