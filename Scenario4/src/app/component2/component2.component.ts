import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
//import { EventEmitter } from 'events';
@Component({
 selector: 'app-component2',
 template: `
 <h2>{{"hello " + name}}</h2>
 <button (click)= "fireEvent()" >send event</button>
 `,
 styles: []
})
export class Component2Component implements OnInit {
@Input('parentData') public name;
@Output() public childEvent=new EventEmitter();
 constructor() { }
 ngOnInit() {
 }
 fireEvent(){
   this.childEvent.emit("hey codeevalution");
 }
}
