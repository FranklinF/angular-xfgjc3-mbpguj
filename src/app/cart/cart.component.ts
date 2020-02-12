import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
//12-02-2020
import { FormBuilder } from "@angular/forms";
@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  items;
  //12-02-2020
  checkoutForm;
  //12-02-2020
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: "",
      address: ""
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }
  //12-02-2020
  onSubmit(customerData) {
    // Process checkout data here
    console.warn("Your order has been submitted", customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}
