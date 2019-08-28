import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
})
export class BusquedaPage implements OnInit {
  albumes: any[];
  // Creamos un nuevo atributo:
  textoBuscar = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAlbums().subscribe( albumes =>{
      console.log(albumes);
      this.albumes = albumes;
    });
  }

  buscar(event){
    // definimos en el atributo que hemos creado que recibirá el valor que escribamos en la barra de busqueda:
    this.textoBuscar = event.detail.value;
  }

}
