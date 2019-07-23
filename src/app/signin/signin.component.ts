import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserserviceService } from '../userservice.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
// tab=[];
  loginForm: FormGroup;
 
  constructor(private userService: UserserviceService, private router: Router) {

    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()

    })

  }

  ngOnInit() {
 
  }


  signIn() {

    this.userService.login(this.loginForm.value).subscribe(
      (data: any) => {
          
        if (data) { this.userService.setData(data),localStorage.setItem("connect", "true"), this.router.navigate(['/acceuil'])  ; }

        else { alert("incorrecte") }
      })


  }





}
