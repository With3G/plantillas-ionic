import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
// Importamos la librería toastController:
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-listados',
  templateUrl: './listados.page.html',
  styleUrls: ['./listados.page.scss'],
})
export class ListadosPage implements OnInit {
  @ViewChild('lista', {static: true}) lista: IonList;

  usuarios: Observable<any>;
  // Cargamos el objeto toastcontroller: 
  constructor(private dataService: DataService, private toastController: ToastController) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsers();
  }

  // Creamos el método que devolverá el toast, Esto podríamos hacerlo en un controlador como el menu o el header:
  async presentToast(message: string){
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    // Y presentamos el toast:
    toast.present();
  }

  favorite(usuario){
    // Ahora vamos a pasarle un mensaje toast:
    this.presentToast('Guardado en favoritos'); 
    console.log('Favorite: ', usuario);
    this.lista.closeSlidingItems();
  }

  share(usuario){
    // Ahora vamos a pasarle un mensaje toast:
    this.presentToast('Se ha compartido'); 
    console.log('Share: ', usuario);
    this.lista.closeSlidingItems();
  }

  borrar(usuario){
    // Ahora vamos a pasarle un mensaje toast:
    this.presentToast('Se ha eliminado'); 
    console.log('Borrar: ', usuario);
    this.lista.closeSlidingItems();
  }

}
