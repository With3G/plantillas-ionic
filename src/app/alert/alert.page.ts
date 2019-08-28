import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  // Creamos un atributo de tipo cadena para guardar lo que nos va a entrar por el formulario:
  nombre: string;

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert(){
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async handlerAlert(){
    const handlerAlert = await this.alertController.create({
      header: 'Handler Alert',
      subHeader: 'Subtitle',
      message: 'This is an another alert message.',
      buttons: [{ 
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) =>{
          console.log('Confirm Cancel: Blah');
        }
      }, {
        text: 'Ok',
        handler: (blah) => {
          console.log('Botón OK');
        }
      }]
    });

    await handlerAlert.present();
  }

  // Creamos el nuevo método encargado de disparar el alert con un prompt:
  async promptAlert(){
    const prompt = await this.alertController.create({
      header: 'Input',
      subHeader: 'Introduce tu nombre',
      // Añadimos un nuevo tipo de campo que será inputs:
      inputs: [
        {
          name: 'txtNombre',
          type: 'text',
          placeholder: 'Escribe tu nombre'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Confirm cancel');
          }
        }, {
          text: 'Ok',
          // Pasamos la información por parámetros del handler y la imprimimos en consola:
          handler: ( data ) => {
            console.log('OK: ', data); // Esto cargara {"txtNombre": "texto escrito"}
            this.nombre = data.txtNombre; // Guardamos en un atributo el título

          }
        }
      ]
    });

    // cargamos o presentamos el input:
    await prompt.present();
  }

}
