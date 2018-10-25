import { Component, OnInit } from '@angular/core';
//KP : Import Message Service
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  //KP : Default Constructor
  //constructor() { }
  //KP : Implementing parametrized constructor
  constructor(public messageService: MessageService) {}

  ngOnInit() {
  }

}
