import { Book } from '../models/Book';

export class BookService{
	bookList: Book[] = [
		{
			name: 'Livre 1',
			description:[
				'Auteur: auteur 1',
				'Editeur: editeur 1 '
			],
			isOn: true
		},
		{
			name: 'Livre 2',
			description:[
				'Auteur: auteur 2',
				'Editeur: editeur 2'
			],
			isOn: true
		},
		{
			name: 'Livre 3',
			description:[
				'Auteur: auteur 3',
				'Editeur: editeur 3'
			],
			isOn: false
		}
	];
}