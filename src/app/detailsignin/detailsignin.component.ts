import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailsignin',
  templateUrl: './detailsignin.component.html',
  styleUrls: ['./detailsignin.component.css']
})
export class DetailsigninComponent implements OnInit {

  constructor() { }

  connect;
  ngOnInit() {

this.connect=localStorage.getItem("connect");


  }

}
