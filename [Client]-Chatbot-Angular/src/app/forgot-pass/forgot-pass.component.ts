import { Component, OnInit } from '@angular/core';
import { faUser, faUserLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {

  public user_logo = faUser;
  public user_lock_logo = faUserLock;

  constructor() { }

  ngOnInit(): void {
  }

}
