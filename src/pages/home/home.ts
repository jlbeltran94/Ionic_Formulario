import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Httpclient } from '../../providers/httpclient';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  form: any;
  body: any;
  values: String[];

  constructor(public navCtrl: NavController,
    public service: Httpclient) {
    this.service.getForm().subscribe(
      response => {
        this.form = response._body;
        this.body = JSON.parse(this.form);             

      }
    );



  }

  ionViewDidEnter() { }
  refresh(){
    this.navCtrl.setRoot(HomePage);
  }


}
