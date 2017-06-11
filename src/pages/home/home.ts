import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { Httpclient } from '../../providers/httpclient';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  body: any;
  values: String[];

  constructor(public navCtrl: NavController,
    public service: Httpclient,
    public ToastCtrl: ToastController) {
    this.service.getForm().subscribe(
      response => {        
        this.body = response;

      }
    );



  }

  ionViewDidEnter() { }
  refresh() {
    this.ToastCtrl.create({
      message: "Formulario actualizado",
      duration: 1500,
      position: 'bottom'
    }).present();
    this.navCtrl.setRoot(HomePage);
  }


}
