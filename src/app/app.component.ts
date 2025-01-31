import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import {
//   TranslateService,
//   TranslatePipe,
//   TranslateDirective,
//   TranslateModule
// } from "@ngx-translate/core";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    // TranslateModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Montalbuccio Ristorante';
  languages = ['it','en']
// if want to use translate in other language through "@ngx-translate/core" uncomment this code
//   constructor(private translate: TranslateService) {
//     this.translate.addLangs(['it', 'en']);
//     this.translate.setDefaultLang('en');
//     this.translate.use('en');
// }
// ngOnInit(){
//  const defaultLange= localStorage.getItem('language') || 'it'
//  this.translate.setDefaultLang('it')
//  this.translate.use(defaultLange);
// //  this.changeLanguage('it');
// }

// changeLanguage(lang:string){
//   this.translate.use(lang)
//   localStorage.setItem('language',lang)
// }
 
}
