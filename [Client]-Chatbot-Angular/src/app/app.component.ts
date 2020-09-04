import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faRobot } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Chatbot';

  public proj_logo = faRobot;





  constructor(private router: Router) { }

  gotoPage(page) {
    this.router.navigate([page]);

  }


  ngOnInit(): void { }
}
