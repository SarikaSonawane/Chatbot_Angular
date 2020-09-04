import { Component, OnInit } from '@angular/core';

import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from "angularx-social-login";


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  user: SocialUser;
  loggedIn: boolean;

  public user_logo = faUser;

  public pass_logo = faKey;

  public facebook_logo = faFacebookSquare;

  public google_logo = faGoogle;

  constructor(private router: Router, private authService: SocialAuthService) { }

  async signInWithGoogle() {
    await this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  async signInWithFB() {
    await this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);
    });
  }

  async loginProcess() {
    sessionStorage.setItem('sarika', 'true');
    this.router.navigate(['signin']);
  }


  gotoHome(page) {
    this.router.navigate([page]);
  }

}
