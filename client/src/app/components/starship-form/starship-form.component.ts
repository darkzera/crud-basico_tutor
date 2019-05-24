import { HostBinding, Component, OnInit } from '@angular/core';
import { Starship } from "../../models/Starship";
import { StarshipsService } from "../../services/starships.service";

@Component({
   selector: 'app-starship-form',
   templateUrl: './starship-form.component.html',
   styleUrls: ['./starship-form.component.css']
})

export class StarshipFormComponent implements OnInit {

   @HostBinding('class') classes = 'row';

   naveAdd: Starship = {
      cod_starship: 0,
      cod_type: 0,
      nom_starship: '',
      imagem: '',
      descricao: '',
      datahora: new Date(),
   };

   constructor(private starshipService: StarshipsService) { }

   ngOnInit() {
   }

   salvarNave(){
      delete this.naveAdd.datahora;
      delete this.naveAdd.cod_starship;
      this.starshipService.saveStarship(this.naveAdd).subscribe(
         res => {
            console.log(res);
         },
         err => console.error(err)
      )
   }

}
