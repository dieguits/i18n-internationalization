import { Component, Inject, LOCALE_ID } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	titles = [
		{ code: 'en', label: 'Welcome to Internazionalization!!!' },
		{ code: 'es', label: 'Bienvenido a Internacionalizacion!!!' }
	];

	languages = [
		{ code: 'en', label: 'English' },
		{ code: 'es', label: 'Espanol'}
	];

	constructor(@Inject(LOCALE_ID) protected localeId: string) {
		console.log(this.titles[0].code);
		console.log(localeId.substr(0, 2));

		for (let title of this.titles) {
			if (localeId.substr(0, 2) === title.code) {
				console.log('Este es pillelo');
			}
		}



	}

}
