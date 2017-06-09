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
        console.log(this.form);
        console.log(this.body.length);
        console.log(this.body[0]);
        for (let i = 0; i < this.body.length; i++) {
          switch (this.body[i].type) {
            case 'textarea': { 
              console.log(i + "es textarea"); }
              break;
            case 'text': { console.log(i + "es text"); }
              break;
            case 'time': { console.log(i + "es time"); }
              break;
            case 'radio': { console.log(i + "es radio"); }
              break;
            case 'checkbox': { console.log(i + "es checkbox"); }
              break;
            case 'select': { 
              this.values = this.body[i].values;
              console.log(this.values);
              console.log(i + "es select"); }
              break;
            case 'date': {
              console.log(i + "es date");
            }
              break;

          }
        }

      }
    );



  }

  ionViewDidEnter() { }
  refresh(){
    this.navCtrl.setRoot(HomePage);
  }


}
