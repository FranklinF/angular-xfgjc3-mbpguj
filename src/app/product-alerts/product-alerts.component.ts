// Import Output and EventEmitter from @angular/core:
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts.component.html",
  styleUrls: ["./product-alerts.component.css"]
})

//In the component class, define a property named notify with an @Output() decorator and an instance of EventEmitter(). This allows the product alert component to emit an event when the value of the notify property changes.
//When the Angular CLI generates a new component, it includes an empty constructor, the OnInit interface, and the ngOnInit() method.
export class ProductAlertsComponent implements OnInit {
  // The @Input() decorator indicates that the property value passes in from the component's parent, the product list component.
  @Input() products;
  @Output() notify = new EventEmitter();
  constructor() {}
  ngOnInit() {}
}
