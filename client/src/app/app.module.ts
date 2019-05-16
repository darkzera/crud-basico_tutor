import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { StarshipFormComponent } from './components/starship-form/starship-form.component';
import { StarshipListComponent } from './components/starship-list/starship-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    StarshipFormComponent,
    StarshipListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
