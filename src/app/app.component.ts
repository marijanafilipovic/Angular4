import { Component, ViewEncapsulation } from '@angular/core';
import { DataService } from './data.service';
import {trigger, state, style, animate, transition} from '@angular/animations';

/*importinig moduls order
 is playing a  roll to the output in the view also*/
/*selector: '[app-root]', is create attribute <div app-root></div app-root>
 selector: '.app-root', creates a class <div class="app-root" >*/


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./bootstrap-3.3.7-dist/css/bootstrap.css'],
  encapsulation: ViewEncapsulation.Native
  /*animations: [
      trigger('animationOne', [
         state('small', style({
           transform: 'scale(1.5)',

         })),
          state('large', style({
            transform: 'scale(3)',
          })),
          transition('small => large', animate('300ms ease-in')),
      ]),
  ]*/
/*
<app-servers></app-servers>`
*/

})
/*life cicle hoock anything difined with engine ngOnInit will run when componen load */
/* Differance on Ang2 is that animations must be imported manually */
/* npm install @angular/animations@latest --save  */
export class AppComponent {
  someProperty = '';
/*state = 'small';

animateIt() {
  this.state = (this.state === 'small' ? 'large' : 'small');
}*/
  constructor(private dataService: DataService) {

}

ngOnInit() {

this.someProperty = this.dataService.myData;
console.log(this.dataService.dataArray);

}
}
