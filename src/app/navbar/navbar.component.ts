import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


connect;
  constructor(private userService:UserserviceService , private router:Router) {

this.connect= localStorage.getItem('connect');
if(this.connect=== null){this.connect ='false';}





   }

  ngOnInit() {
  }



logout(){
  localStorage.setItem("connect" ,"false");
  this.router.navigateByUrl("acceuil");

}


}
