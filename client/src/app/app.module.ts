import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//- 
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './components/navigation/navigation.component';
import { StarshipFormComponent } from './components/starship-form/starship-form.component';
import { StarshipListComponent } from './components/starship-list/starship-list.component';
import { StarshipsService } from './services/starships.service';
import { HttpClientModule } from "@angular/common/http/";
//- 

@NgModule({
   declarations: [
      AppComponent,
      NavigationComponent,
      StarshipFormComponent,
      StarshipListComponent
   ],

   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
   ],

   providers: [
      StarshipsService,
   ],

   bootstrap: [AppComponent]
})
export class AppModule { }
