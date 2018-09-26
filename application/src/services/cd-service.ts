import { CD } from '../models/CD';

export class CDService{
	CDList: CD[] = [
		{
			name: 'CD 1',
			description:[
				'Chanteur: chanteur 1',
				'durée: 20min '
			],
			isOn: true
		},
		{
			name: 'CD 2',
			description:[
				'Chanteur: chanteur 2',
				'durée: 30min'
			],
			isOn: true
		},
		{
			name: 'CD 3',
			description:[
				'Chanteur: chanteur 3',
				'durée: 40min'
			],
			isOn: false
		}
	];
}