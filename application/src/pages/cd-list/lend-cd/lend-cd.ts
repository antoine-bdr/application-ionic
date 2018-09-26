import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { CD } from '../../../models/CD';
import { CDService } from '../../../services/cd-service';

@Component({
  selector: 'page-lend-cd',
  templateUrl: 'lend-cd.html',
})
export class LendCDPage implements OnInit{

  index: number;
  cd : CD;

  constructor(public navParams: NavParams, private viewCtrl: ViewController, public cdService : CDService) {
  }

  ngOnInit(){
    this.index = this.navParams.get('index');
  	this.cd = this.cdService.CDList[this.index];
  }

  onToggleCD(){
    this.cd.isOn = !this.cd.isOn;
  }

  fermerModal(){
  	this.viewCtrl.dismiss();
  }

} 