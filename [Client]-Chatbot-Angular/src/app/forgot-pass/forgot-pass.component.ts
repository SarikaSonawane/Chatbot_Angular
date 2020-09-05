import { Component, OnInit } from '@angular/core';
import { faUser, faUserLock } from '@fortawesome/free-solid-svg-icons';
import {
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {

  public user_logo = faUser;
  public user_lock_logo = faUserLock;


  constructor(private http: HttpClient, private log: FormBuilder) { }

  ngOnInit(): void {
  }

  forgotFormGroup = this.log.group({

    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
  });

  async forgotPass() {
    const url = 'http://localhost:3000/forgotpass';
    const email = this.forgotFormGroup.get('email').value;
    const data = { email: email, password: "pass123" }
    const result = await this.http.post(url, data).toPromise();
    console.log(result);
    this.forgotFormGroup.reset();
  }

}
