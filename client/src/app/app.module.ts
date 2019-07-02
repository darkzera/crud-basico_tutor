import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HttpClientModule } from "@angular/common/http/";

// - Starship imports
import { StarshipFormComponent } from './components/starship-form/starship-form.component';
import { StarshipListComponent } from './components/starship-list/starship-list.component';
import { StarshipsService } from './services/starships.service';
// - Starship_pilot imports
import { StarshipPilotListComponent } from './components/starship-pilot-list/starship-pilot-list.component';
import { StarshipPilotFormComponent } from './components/starship-pilot-form/starship-pilot-form.component';
import { Starships_pilotService } from './services/starship_pilot.service';


@NgModule({
   declarations: [
      AppComponent,
      NavigationComponent,
      StarshipFormComponent,
      StarshipListComponent,
      StarshipPilotListComponent,
      StarshipPilotFormComponent,
   ],

   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
   ],

   providers: [
      StarshipsService,
      Starships_pilotService,
   ],

   bootstrap: [AppComponent]
})
export class AppModule { }
