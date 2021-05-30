import { Component, OnInit } from '@angular/core';
import {formatDate} from '@angular/common';
import {CommunicationService} from "../../../communication.service";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent implements OnInit {
  username:string;
  recipient:string;
  letterTitle:string;
  letterText:string;
  time;



  constructor(public commService:CommunicationService) { }

  ngOnInit(): void {  }


  sendLetter(recipient, title, text){
    this.username = 'sjakie'; //TODO
    this.time = new Date();
    this.letterTitle = title;
    this.letterText = text;
    this.commService.nextLetter(
      {username: this.username,
        recipient: this.recipient,
        title: this.letterTitle,
        text: this.letterText,
        time: this.time
      });
  }
}