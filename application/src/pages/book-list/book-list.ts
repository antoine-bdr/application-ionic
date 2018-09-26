import { Component } from '@angular/core';
import { ModalController, MenuController } from 'ionic-angular';
import { LendBookPage } from './lend-book/lend-book';
import { Book } from '../../models/Book';
import { BookService } from '../../services/book-service';

@Component({
	selector: 'page-book-list',
	templateUrl: 'book-list.html'
})

export class BookListPage{

	bookList : Book[];

	constructor(private modalCtrl: ModalController,
				private bookService: BookService,
				private menuCtrl: MenuController){

	}

	ionViewWillEnter(){
		this.bookList = this.bookService.bookList.slice();
	}

	onLoadLivre(index:number){
		let modal = this.modalCtrl.create(LendBookPage, {index : index});
		modal.present();
	}

	onToggleMenu(){
		this.menuCtrl.open();
	}
}