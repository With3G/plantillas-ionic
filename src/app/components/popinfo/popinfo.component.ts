import { Component, OnInit } from '@angular/core';
// Importamos el componente popcontroller:
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent implements OnInit {
  items = Array(40);
  // Construimos el objeto tipo popover:
  constructor(private popoverController: PopoverController) { }

  ngOnInit() {}
  // Creamos el método que tomara la posición del list y lo accionará:
  onClick(valor: number){
    // Imprimimos el valor:
    console.log("Item: ", valor);
    // Ahora desactivamos el popover:
    this.popoverController.dismiss({
      item: valor // mandamos el valor por el popover.
    });
  }

}
