import { Component, OnInit, HostBinding } from '@angular/core';
import { Starships_pilotService } from 'src/app/services/starship_pilot.service';

@Component({
  selector: 'app-starship-pilot-list',
  templateUrl: './starship-pilot-list.component.html',
  styleUrls: ['./starship-pilot-list.component.css']
})
export class StarshipPilotListComponent implements OnInit {

   @HostBinding('class') classes = 'row';

   naves: any = []; // responde pro html

   constructor(private starshipServicePilot: Starships_pilotService) { }

   ngOnInit() {
      this.starshipServicePilot.getStarships().subscribe(
         res => {
            this.naves = res;
         },
         err => console.log(err)
      );
   }

   delNave(id: string){
      console.log(id);
      this.starshipServicePilot.deleteStarship_pilot(id).subscribe(
         res => {
            console.log(res)
         },
         err => console.error(err)
      );
   }

}
