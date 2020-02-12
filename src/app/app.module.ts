// The Angular Router enables you to show different components and data to the user based on where the user is in the application. The router enables navigation from one view to the next as users perform tasks such as the following:

// Entering a URL in the address bar to navigate to a corresponding page.
// Clicking links on the page to navigate to a new page.
// Clicking the browser's back and forward buttons to navigate backward and forward through the browser history.
// Registering a route
// The app is already set up to use the Angular Router and to use routing to navigate to the product list component you modified earlier. This section shows you how to define a route to show individual product details.

// Generate a new component for product details. Give the component the name product-details.

// Reminder: In the file list, right-click the app folder, choose Angular Generator and Component.

// In app.module.ts, add a route for product details, with a path of products/:productId and ProductDetailsComponent for the component.
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductAlertsComponent } from "./product-alerts/product-alerts.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { CartComponent } from "./cart/cart.component";
import { HttpClientModule } from "@angular/common/http";
import { ShippingComponent } from "./shipping/shipping.component";
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      // A route associates one or more URL paths with a component.
      { path: "", component: ProductListComponent },
      { path: "products/:productId", component: ProductDetailsComponent },
      { path: "cart", component: CartComponent },
      { path: "shipping", component: ShippingComponent }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
