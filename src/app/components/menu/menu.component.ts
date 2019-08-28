import { Component, OnInit } from '@angular/core';
// Importamos el servicio:
import  { DataService } from '../../services/data.service';
// Cargamos la librería observable:
import { Observable } from 'rxjs';
// Importamos también la interfaz:
import { Componente } from '../../interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  // Creamos el atributo componentes de tipo observable para conectarnos al servicio:
  componentes: Observable<Componente[]> // El observable usará la interfaz componente.


  // Injectamos el servicio en un objeto:
  constructor(private dataService: DataService) { }

  ngOnInit() {
    // Lo llamamos para guardarlo en el atributo componentes:
    this.componentes = this.dataService.getMenuOpts();
  }

}
