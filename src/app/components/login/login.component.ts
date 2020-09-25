import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router'
import { logging } from 'protractor';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string;
  password: string;
  erroMsg: string;

  constructor(private authSevice: AuthenticationService, private router: Router) { }

  singIn() {
    console.log(this.email , this.password)
    this.authSevice.login({email: this.email, password: this.password})
      .then(()=> this.router.navigate(['/gallery']))
      .catch(erro => this.erroMsg = erro.message);
  }

}
