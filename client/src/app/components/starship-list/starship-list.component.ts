import { HostBinding, Component, OnInit } from '@angular/core';
import { StarshipsService } from "../../services/starships.service";
import { Starship } from "../../models/Starship";

@Component({
   selector: 'app-starship-list',
   templateUrl: './starship-list.component.html',
   styleUrls: ['./starship-list.component.css']
})
export class StarshipListComponent implements OnInit {
   @HostBinding('class') classes = 'row';

   naves: any = []; // responde pro html

   constructor(private starshipService: StarshipsService) { }

   ngOnInit() {
      this.starshipService.getStarships().subscribe(
         res => {
            this.naves = res;
         },
         err => console.log(err)
      );
   }

   delNave(id: string){
      console.log(id);
      this.starshipService.deleteStarship(id).subscribe(
         res => {
            console.log(res)
         },
         err => console.error(err)
      );
   }

}
