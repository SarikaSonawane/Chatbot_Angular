import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

    if (!sessionStorage.getItem('user')) {
      this.router.navigate(['login']);
    }
  }

}
