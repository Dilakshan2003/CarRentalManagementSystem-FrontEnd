import { Component,OnInit } from '@angular/core';
import { CarService } from '../../Service/car.service';
import { message } from '../../Models/message'; 

@Component({
  selector: 'app-inbox',
  standalone: false,
  
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.css'
})
export class InboxComponent implements OnInit {
  messages: message[] = [];

  constructor(private CarService: CarService) {}

  ngOnInit() {
    this.loadMessages();
  }

  loadMessages() {
    this.CarService.getMessages().subscribe((messages) => {
      this.messages = messages;
    });
  }
}