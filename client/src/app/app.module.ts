import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HttpClientModule } from "@angular/common/http/";

// - Starship 
import { StarshipFormComponent } from './components/starship-form/starship-form.component';
import { StarshipListComponent } from './components/starship-list/starship-list.component';
import { StarshipsService } from './services/starships.service';
// - Starship_pilot 
import { StarshipPilotListComponent } from './components/starship-pilot-list/starship-pilot-list.component';
import { StarshipPilotFormComponent } from './components/starship-pilot-form/starship-pilot-form.component';
import { Starships_pilotService } from './services/starship_pilot.service';
// - Processo de autenticacao
import { UserService } from './services/user.service';
import { AuthService } from './auth/auth.service';
import { TokenStorageService } from './auth/token-storage.service';
import { httpInterceptorProviders } from './auth/auth-interceptor';
import { HomeComponent } from './components/auth/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { UserComponent } from './components/auth/user/user.component';
import { PmComponent } from './components/auth/pm/pm.component';
import { AdminComponent } from './components/auth/admin/admin.component';



@NgModule({
   declarations: [
      AppComponent,
      NavigationComponent,
      StarshipFormComponent,
      StarshipListComponent,
      StarshipPilotListComponent,
      StarshipPilotFormComponent,
      HomeComponent,
      LoginComponent,
      RegisterComponent,
      UserComponent,
      PmComponent,
      AdminComponent,
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
      UserService,
      AuthService,
      TokenStorageService,
      httpInterceptorProviders,
   ],

   bootstrap: [AppComponent]
})
export class AppModule { }
