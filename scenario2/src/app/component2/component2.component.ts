import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component2',
//   templateUrl: './component2.component.html',
//   styleUrls: ['./component2.component.css']
// })
// export class Component2Component implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
template: `
<input [(ngModel)]="name" type="text">
{{name}}
`,
styles: []
})
export class Component1Component implements OnInit {

public name="";
constructor() { }

ngOnInit() {
}

}