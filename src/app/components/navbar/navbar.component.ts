import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { auth } from 'firebase';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  title: string = "Gallery";
  user: Observable<firebase.User>;
  constructor(private authService: AuthenticationService,private router: Router) { }

  ngOnInit(): void {
    this.user = this.authService.authUser();
  }

  logout(): void {
    this.authService.logout().then(onResolve => this.router.navigate['/']);
  }
}
