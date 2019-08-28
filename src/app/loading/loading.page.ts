import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {
  // Creamos un atributo loading de tipo any:
  loading: any;

  constructor(private loadingController: LoadingController) { }

  ngOnInit() {
    // Le pasamos una cadena de texto:
    this.presentLoading('Espere por favor');

    // Vamos a ejecutar una tarea de tiempo:
    setTimeout(()=>{
      // Ahora vamos a cancelarlo utilizando un método del ion-loading:
      this.loading.dismiss();
    }, 1500);

  }
  // Esta cadena la recibe por parametros y la cambia por la que tiene escrita ya:
  async presentLoading(message: string){
    // Guardamos en nuestro atributo local:
    this.loading = await this.loadingController.create({
      message
    });
    // Cambiamos esto un poco para que utilice el atributo local:
    return this.loading.present();
  }

}
