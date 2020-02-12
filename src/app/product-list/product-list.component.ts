import { Component } from "@angular/core";
import { products } from "../products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})

// Next, define the behavior that should happen when the user clicks the button. Recall that it's the parent, product list component—not the product alerts component—that acts when the child raises the event. In product-list.component.ts, define an onNotify() method, similar to the share() method:
export class ProductListComponent {
  productList = products;

  share() {
    window.alert("The product has been shared!");
  }

  onNotify() {
    window.alert("You will be notified when the product goes on sale");
  }
}

/*
Components define areas of responsibility in the user interface, or UI, that let you reuse sets of UI functionality. You've already built one with the product list component.

A component consists of three things:

A component class that handles data and functionality. In the previous section, the product data and the share() method in the component class handle data and functionality, respectively.
An HTML template that determines the UI. In the previous section, the product list's HTML template displays the name, description, and a "Share" button for each product.
Component-specific styles that define the look and feel. Though product list does not define any styles, this is where component CSS resides.
An Angular application comprises a tree of components, in which each Angular component has a specific purpose and responsibility.

Currently, the example app has three components:
1.app root
2.app-top-bar
3.app-product-details
*/
