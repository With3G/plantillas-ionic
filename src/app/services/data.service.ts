import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';
// Importamos el delay: 
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }
  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenuOpts(){
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }

  getAlbums(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/albums');
  }
  // ponemos el pipe delay para relentizar la carga:
  getheroes(){
    return this.http.get<Componente[]>('/assets/data/superheroes.json')
      .pipe(delay(1500));
  }

}
