import { Component, OnInit } from '@angular/core';
import { StarshipsService } from "../../services/starships.service";
import { Starship } from "../../models/Starship";

@Component({
   selector: 'app-starship-list',
   templateUrl: './starship-list.component.html',
   styleUrls: ['./starship-list.component.css']
})
export class StarshipListComponent implements OnInit {

   naves: any = [];

   constructor(private starshipService: StarshipsService) { }

   ngOnInit() {
      this.starshipService.getStarships().subscribe(
         res => {
            this.naves = res;
         },
         err => console.log(err)
      );
   }

}
