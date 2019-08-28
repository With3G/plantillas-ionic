import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {
  constructor(private actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }

  async presentActionSheet(){
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums', 
      backdropDismiss: false, 
      buttons:[{ 
        text: 'Delete', 
        role: 'destructive', 
        icon: 'trash', 
        cssClass: 'rojo', // Añadimos una clase llamada rojo para ahora personalizar el botón
        handler: () =>{
          console.log('delete clicked'); 
        }
      },{
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () =>{
          console.log('Cancel Clicked')
        }
      }
      
    ],

    });

    await actionSheet.present();
  }

}
