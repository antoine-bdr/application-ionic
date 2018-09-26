import { Component } from '@angular/core';
import { ModalController, MenuController } from 'ionic-angular';
import { LendCDPage } from './lend-cd/lend-cd';
import { CD } from '../../models/CD';
import { CDService } from '../../services/cd-service';

@Component({
	selector: 'page-cd-list',
	templateUrl: 'cd-list.html'
})

export class CDListPage{

	CDList : CD[];

	constructor(private modalCtrl: ModalController,
				private cdService: CDService,
				private menuCtrl: MenuController){

	}

	ionViewWillEnter(){
		this.CDList = this.cdService.CDList.slice();
	}

	onLoadCD(index:number){
		let modal = this.modalCtrl.create(LendCDPage, {index : index});
		modal.present();
	}

	onToggleMenu(){
		this.menuCtrl.open();
	}
}