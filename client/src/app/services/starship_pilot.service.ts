import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Starship_pilot } from '../models/Starship_pilot'
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
   providedIn: 'root'
})
export class Starships_pilotService {
   API_URI = 'http://localhost:3000/api' // ########


   constructor(private http: HttpClient) { }

   getStarships() {
      return this.http.get(`${this.API_URI}/starship_pilot`);
   }

   getStarship_pilotById(id: string) {
      return this.http.get(`${this.API_URI}/starship_pilot/${id}`);
   }

   deleteStarship_pilot(id: string){
      return this.http.delete(`${this.API_URI}/starship_pilot/${id}`);
   }

   saveStarship_pilot(starship_pilot: Starship_pilot){
      return this.http.post(`${this.API_URI}/starship_pilot`, starship_pilot);
   }

   updateStarship_pilot(id: number, updatedStarship_pilot: Starship_pilot): Observable<Starship_pilot>{
      return this.http.put(`${this.API_URI}/starship_pilot/${id}`, updatedStarship_pilot);
   }

}
