import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cucumber: boolean;
  constructor(public navCtrl: NavController) {

  }
  updateCucumber() {
    console.log('Cucumbers new state:' + this.cucumber);
  }
}
