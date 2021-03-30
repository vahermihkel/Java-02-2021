import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error = "";

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    let email = form.value.email;
    let password = form.value.password;
    this.authService.getAllUsers().subscribe(usersFromBackend => {
      usersFromBackend.forEach(user => {
        if (user.email != email) {
          this.error = "Sellist kasutajat ei leitud!";
        } else if (user.password != password) {
          this.error = "Parool ei ole õige";
        } else if (user.email == email && user.password == password) {
          sessionStorage.setItem("email", user.email);
          this.router.navigateByUrl("/admin");
        }
      })
    });
    form.reset();
  }

}
