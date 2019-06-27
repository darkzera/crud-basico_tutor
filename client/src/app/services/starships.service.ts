import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Starship } from '../models/Starship'
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
   providedIn: 'root'
})
export class StarshipsService {
   API_URI = 'http://localhost:3000/api' // ########


   constructor(private http: HttpClient) { }

   // busca todas as naves (starship)
   getStarships() {
      return this.http.get(`${this.API_URI}/starship`);
   }

   // busca através de um ID recebido
   getStarshipById(id: string) {
      return this.http.get(`${this.API_URI}/starship/${id}`);
   }

   deleteStarship(id: string){
      return this.http.delete(`${this.API_URI}/starship/${id}`);
   }

   saveStarship(starship: Starship){
      return this.http.post(`${this.API_URI}/starship`, starship);
   }

   updateStarship(id: number, updatedStarship: Starship): Observable<Starship>{
      return this.http.put(`${this.API_URI}/naves/${id}`, updatedStarship);
   }


}
