import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faRobot } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  linklist = [
    { title: 'Home', link: 'home' },
    { title: 'ContactUs', link: 'contactus' },
  ];

  public proj_logo = faRobot;

  constructor(private router: Router) { }

  // ngOnInit(): void {

  //   if (!sessionStorage.getItem('sarika')) {
  //     this.router.navigate(['login']);
  //   }
  // }

}
