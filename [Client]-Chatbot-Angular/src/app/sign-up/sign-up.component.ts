import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { faUser, faKey, faEnvelope, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public user_logo = faUser;

  public pass_logo = faKey;

  public email_logo = faEnvelope;

  public mob_logo = faPhoneSquare

  constructor(
    private log: FormBuilder,
    private http: HttpClient,) { }

  ngOnInit(): void {
  }

  logFormGroup = this.log.group({
    mobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    password: ['', Validators.required],
  });

  confirmPass = new FormControl('', [Validators.required]);

  async registerUser() {
    const data = this.logFormGroup.value;

    const url = 'http://localhost:3000/adduser';
    console.log(data);
    await this.http.post(url, data).toPromise();

    this.confirmPass.reset();
    this.logFormGroup.reset();
  }


}
