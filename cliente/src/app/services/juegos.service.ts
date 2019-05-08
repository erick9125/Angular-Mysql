import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Juego } from '../models/Juego';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getJuegos(){
    return this.http.get(`${this.API_URI}/games`);
  }

  getJuego(id: string){
    return this.http.get(`${this.API_URI}/games/${id}`);//devuelve solo un juego
  }

  deleteJuego(id: string){
    return this.http.delete(`${this.API_URI}/games/${id}`);
  }

  saveJuego(juego: Juego){
    return this.http.post(`${this.API_URI}/games`, juego);
  }

  updateJuego(id: string, updateJuego: Juego): Observable<Juego>{
    return this.http.put(`${this.API_URI}/games/${id}`, updateJuego);
  }

}
