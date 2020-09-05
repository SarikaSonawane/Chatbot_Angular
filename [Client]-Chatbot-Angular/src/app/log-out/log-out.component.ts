import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private router: Router) { }

  ngOnInit(): void {
  }

  closeTheModal() {
    this.activeModal.dismiss();
  }

  logOutAndClose() {
    sessionStorage.removeItem('sid');
    sessionStorage.removeItem('user');

    this.activeModal.dismiss();

    this.router.navigate(['login']);
  }

}
