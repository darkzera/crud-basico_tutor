import { HostBinding, Component, OnInit } from '@angular/core';
import { Starship } from "../../models/Starship";
import { StarshipsService } from "../../services/starships.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
   selector: 'app-starship-form',
   templateUrl: './starship-form.component.html',
   styleUrls: ['./starship-form.component.css']
})

export class StarshipFormComponent implements OnInit {

   @HostBinding('class') classes = 'row';

   naveAdd: Starship = {
      cod_starship: 0,
      cod_type: 1,
      nom_starship: '',
      imagem: '',
      descricao: '',
      datahora: new Date(),
   };

   constructor(private starshipService: StarshipsService, private router: Router,private activedRoute: ActivatedRoute) { }

   ngOnInit() {
      const params = this.activedRoute.snapshot.params;
      if (params.cod_esquadrao) {
        console.log(params.cod_esquadrao)
        this.starshipService.getStarshipById(params.cod_starship)
        //this.starshipService.getSquad(params.cod_esquadrao)
          .subscribe(
            res => {
              console.log(res);
              this.naveAdd = res;
              //this.edit = true;
            },
            err => console.log(err)
          )
      }
   }

   salvarNave(){
      delete this.naveAdd.datahora;
      delete this.naveAdd.cod_starship;
      //delete this.naveAdd.cod_type;
      this.starshipService.saveStarship(this.naveAdd).subscribe(
         res => {
            console.log(res);
            this.router.navigate(['/starships']);
         },
         err => console.error(err)
      )
   }

   updateNave(){
      delete this.naveAdd.datahora;
      this.starshipService.updateStarship(this.naveAdd.cod_starship, this.naveAdd).subscribe(
         res => {
            console.log(res);
            this.router.navigate(['/starships']);
         },
         err => console.error(err)
      )
   }

   // exemplo do nicolas parte 1 => metodo
   //updateSquad() {
   //  delete this.squad.datahora;
   // this.squadServices.updateSquad(this.squad.cod_esquadrao, this.squad)
   //  .subscribe(
   //   res => { 
   //    console.log(res);
   //   this.router.navigate(['/squad']);
   //}
   //       )
   //}
}
