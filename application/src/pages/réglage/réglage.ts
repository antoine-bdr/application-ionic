import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';

@Component({
  selector: 'page-réglage',
  templateUrl: 'réglage.html',
})
export class ReglagePage {

	constructor(private menuCtrl: MenuController){
	}

	onToggleMenu(){
		this.menuCtrl.open();
	}

}
