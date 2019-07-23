import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailtheathtesignin',
  templateUrl: './detailtheathtesignin.component.html',
  styleUrls: ['./detailtheathtesignin.component.css']
})
export class DetailtheathtesigninComponent implements OnInit {
connect;
  constructor() { }

  ngOnInit() {
    this.connect=localStorage.getItem("connect");
  }

}
