import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LogOutComponent } from '../log-out/log-out.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  linklist = [
    { title: 'Home', link: 'home' },
    { title: 'ContactUs', link: 'contactus' },
    { title: 'Profile', link: 'profile' },
  ];

  public proj_logo = faRobot;

  constructor(private router: Router, private modalService: NgbModal) { }


  ngOnInit(): void {

    if (!sessionStorage.getItem('user')) {
      this.router.navigate(['login']);
    }
  }

  processLogout() {

    this.modalService.open(LogOutComponent, {
      centered: true,
    });
  }


}
