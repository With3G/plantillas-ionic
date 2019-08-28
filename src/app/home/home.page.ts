import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
// Cargamos la interfaz componente:
import { Componente } from '../interfaces/interfaces';
// Cargamos el servicio dataService:
import { DataService } from '../services/data.service';
// Importamos Observable:
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // Convertimos el atributo componente de tipo Observable:
  componentes: Observable<Componente[]>;
  // Creamos el objeto de tipo data service:
  constructor(private menuController: MenuController, private dataService: DataService) {}

  ngOnInit(){
    // Arrancamos la aplicación construyendo el menú:
    this.componentes = this.dataService.getMenuOpts();
  }

  toggleMenu(){
    this.menuController.toggle();
  }

}
