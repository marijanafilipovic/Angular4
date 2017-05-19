/**
 * Created by Marijana on 5/17/2017.
 */
import { Component } from '@angular/core';

@Component({
    selector: 'app-directives',
    template: `<p>{{title}}</p>
    <p [ngClass]="{classOne:cone, classTwo:ctwo}">bgClass paragraph</p>
    <button (click)="toggle()">Toggle</button>
    <p [ngStyle]="{'font-style':style, 'font-size':size}">ngStyleParagraph</p>`,
    styles: [`.classOne{color:white;  }
    .classTwo{background-color:grey;}`]

})
export class DirectivesComponent {
    public  title = 'Practice examples add directives from directives.module';
    public cone= true;
    public ctwo= true;
    public style= 'italic';
    public size= '30px';
    toggle() {
    this.cone =!this.cone;
    this.ctwo =!this.ctwo;
    }
 }
