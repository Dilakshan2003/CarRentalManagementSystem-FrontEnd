import { Component, OnInit } from '@angular/core';
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

  constructor(private CarService: CarService) { }
  customerId = parseInt(localStorage.getItem('customerId') || '')
  ngOnInit() {
    this.loadMessages();
  }

  loadMessages() {
    this.CarService.getMessages(this.customerId).subscribe((messages) => {
      this.messages = messages;
    });
  }

  // deleteMessage(messageId: number) {
  //   this.CarService.deleteMessage(messageId).subscribe(() => {
  //     // Filter out the deleted message from the list
  //     this.messages = this.messages.filter(msg => msg.id !== messageId);
  //   });
  // }
  deleteMessage(messageId: number) {
    this.CarService.deleteMessage(messageId).subscribe({
      next: () => {
        alert("Delete Send SuccessFull")
      }, error: (error) => {
        alert("Delete Message Failed.")
      }, complete: () => {
        this.loadMessages()
      }
    })
  }

}