import { Component, OnInit, HostBinding } from '@angular/core';
import { Starship_pilot } from 'src/app/models/Starship_pilot';
import { Starships_pilotService } from 'src/app/services/starship_pilot.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { TokenStorageService } from 'src/app/auth/token-storage.service';

@Component({
  selector: 'app-starship-pilot-form',
  templateUrl: './starship-pilot-form.component.html',
  styleUrls: ['./starship-pilot-form.component.css']
})
export class StarshipPilotFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  nave_PilotoAdd: Starship_pilot = {
     cod_personagem: 0,
     cod_starship: 0,
     descricao: '',
     datahora: new Date(),
  };
  private roles: string[];
  private authority: string;

  constructor(private starship_pilotService : Starships_pilotService, 
   private router: Router, 
   private activedRoute: ActivatedRoute,
   private tokenStorage: TokenStorageService) {}

  ngOnInit() {
   if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_PM') {
          this.authority = 'pm';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }

     /* TODO: FIX
     const params = this.activedRoute.snapshot.params;
     if (params.cod_esquadrao) {
       console.log(params.cod_esquadrao)
       this.starship_pilotService.getStarship_pilotById(params.cod_starship)
         .subscribe(
           res => {
             console.log(res);
             this.nave_PilotoAdd = res;
           },
           err => console.log(err)
         )
     }
     */
  }

  salvarNave() {
     //delete this.nave_PilotoAdd.cod_starship;
     delete this.nave_PilotoAdd.datahora;
     this.starship_pilotService.saveStarship_pilot(this.nave_PilotoAdd).subscribe(
        res => {
           console.log(res);
           this.router.navigate(['/starship_pilot']);
        },
        err => console.error(err)
     )
  }

  updateNave() {
     delete this.nave_PilotoAdd.datahora;
     this.starship_pilotService.updateStarship_pilot(this.nave_PilotoAdd.cod_starship, this.nave_PilotoAdd).subscribe(
        res => {
           console.log(res);
           this.router.navigate(['/starship_pilot']);
        },
        err => console.error(err)
     )
  }



}
