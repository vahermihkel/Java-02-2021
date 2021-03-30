import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cartTotal = 0;
  isLoggedIn = false;

  constructor(private cartService: CartService,
    private translate: TranslateService,
    private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = sessionStorage.getItem("email") ? true : false;

    // if (sessionStorage.getItem("email") != undefined) {
    //   this.isLoggedIn = true;
    // } else {
    //   this.isLoggedIn = false;
    // }




    this.cartService.cartChanged.subscribe(cartItems => {
      this.cartTotal = this.cartService.calculateSumOfCart();
    });
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }

  onLogout() {
    sessionStorage.removeItem("email");
    this.router.navigateByUrl("/");
  }

}
