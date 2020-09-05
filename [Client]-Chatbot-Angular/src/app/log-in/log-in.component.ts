import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';

import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from "angularx-social-login";
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  user: SocialUser;
  loggedIn: boolean;
  isAuthServiceReady: boolean = false

  public user_logo = faUser;

  public pass_logo = faKey;

  public facebook_logo = faFacebookSquare;

  public google_logo = faGoogle;

  constructor(private router: Router,
    private authService: SocialAuthService,
    private http: HttpClient,
    private log: FormBuilder) { }

  async signInWithGoogle() {
    await this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  async signInWithFB() {
    await this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  ngOnInit(): void {
    this.authService.initState.subscribe((isInitialise) => {
      this.isAuthServiceReady = isInitialise;
    }, console.error, () => { console.log('all providers are ready') });

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);

      const data = { "username": user.name, "email": user.email, "mobile": "1111111111", "password": "pass123" }
      const url = 'http://localhost:3000/adduser';
      console.log(data);
      this.http.post(url, data).toPromise();

    });
  }

  logInFormGroup = this.log.group({
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    password: ['', Validators.required],
  });


  async loginProcess() {
    const url = 'http://localhost:3000/checkuser';
    const data = this.logInFormGroup.value;
    const result = await this.http.post(url, data).toPromise();
    console.log(result);
    const loginResponse = JSON.parse(JSON.stringify(result));
    if (loginResponse.id) {
      sessionStorage.setItem("user", loginResponse);
      this.gotoHome('home');
    }
    else {
    }
  }


  gotoHome(page) {
    this.router.navigate([page]);
  }

}
