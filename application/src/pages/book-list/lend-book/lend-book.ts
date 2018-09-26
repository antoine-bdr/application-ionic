import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Book } from '../../../models/Book';
import { BookService } from '../../../services/book-service';

@Component({
  selector: 'page-lend-book',
  templateUrl: 'lend-book.html',
})
export class LendBookPage implements OnInit{

  index: number;
  book : Book;

  constructor(public navParams: NavParams, private viewCtrl: ViewController, public bookService : BookService) {
  }

  ngOnInit(){
    this.index = this.navParams.get('index');
  	this.book = this.bookService.bookList[this.index];
  }

  onToggleBook(){
    this.book.isOn = !this.book.isOn;
  }

  fermerModal(){
  	this.viewCtrl.dismiss();
  }

} 