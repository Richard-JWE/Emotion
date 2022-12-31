import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StatusPage } from '../../pages/status/status';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  myStatus: string;

  constructor(public navCtrl: NavController, private storage: Storage) {

  }

  updateStatus() {
    this.navCtrl.push(StatusPage);
  }

  ionViewWillEnter() {
    this.storage.get("myStatus")
      .then((data) => {
        this.myStatus = data;
    })
    .catch((err) => {
      alert("Error accessing storage");
    });
}
}
