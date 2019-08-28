import { Component, OnInit } from '@angular/core';
// Importamos la librería modal controller:
import { ModalController } from '@ionic/angular';
// Importamos la página del modal-info:
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  async abrirModal(){
    const modal = await this.modalController.create({
      component: ModalInfoPage, 
      componentProps: {
        nombre: "Guillermo",
        pais: "España"
      }
    });

    await modal.present();

    // Extraemos toda la información del modal y la guardamos en la variable data:
    const { data } = await modal.onDidDismiss();
    // Devolvemos por consola la información del modal:
    console.log('Retorno del modal: ', data);
  }

}
