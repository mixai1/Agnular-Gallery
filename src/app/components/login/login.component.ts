import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router'
import { logging } from 'protractor';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string;
  password: string;
  erroMsg: string;

  constructor(private authSevice: AuthenticationService, private router: Router) { }

  singIn() {
    this.authSevice.Login({email: this.email, password: this.password})
      .then(resolve => this.router.navigate(['gallery']))
      .catch(erro => this.erroMsg = erro.message);
  }

}
