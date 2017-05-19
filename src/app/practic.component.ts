/**
 * Created by Marijana on 5/16/2017.
 */
import { Component } from '@angular/core';

@Component({
    selector: 'app-practic',
    template: `<h2>{{title}}</h2>  <!--Interpolation-->
    <!--property binding [property]="data"--> 
    <img src="{{ angLogo }}"> as long as var is string
    <img [src]="angularLogo"> for var with boolean type
    <img bind-src="angularLogo">
    <!--Event Binding (event)="expresion"-->
    <!--Two way data binding [(ngModel)]="data"-->
   <!-- <p *ngIf="showElement">Show Element</p>-->
    <div [ngSwitch]="color">
        <p *ngSwitchCase="'orange'" > Orange is shown.</p> 
        <p *ngSwitchCase="'red'" > Red is shown.</p> 
        <p *ngSwitchDefault > None valid color.</p> 
    </div>
    <ul>
        <li *ngFor="let color of colors">{{color}}</li>
    </ul>
    <div [class.mith]="mithValue">Apply Class</div>
    <div [style.color]="green? 'green' : 'orange'">Apply green if its on the list</div>
    <input type="text"  [value]="fname" (input)="fname=$event.target.value"><br />
    <input type="text"  [value]="lname" (input)="lname=$event.target.value"><br />
    <p *ngIf="showElement">Full name {{fname}} {{lname}} </p>
    <input type="text" name="text" #postInput ><br />
<p *ngIf="showElement"></p>    
    <img [src]="imgLink" />
    <button (click)="onClick(postInput.value)">Save it</button><br /><br /> 
    <!--for mouse event use $event-->
    `,
    styles: [`
    .mith{
        color: grey;
    }    
    h4 {
        color: red;
    } 
    img{ width: 600px; 
    height:400px; }`]

})
export class PracticComponent {
    public  title = 'Practice examples, Marijana Filipovic';
    public imgLink= 'http://kcwriter.com/wp-content/uploads/2012/09/iStock_000015151261Medium.jpg';
    public mithValue= false;
    public green = false;
    public fname = ' ';
    public lname = ' ';
    public showElement = true;
    public color = 'orange';
    public colors= ['red', 'orange', 'blue'];
    onClick() {
        alert('Post is saved');
    }
}
