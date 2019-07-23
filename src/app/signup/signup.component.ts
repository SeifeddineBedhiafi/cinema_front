import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private userService: UserserviceService) {


    this.registerForm = new FormGroup({

      username: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)]),
      date_naissance: new FormControl("", Validators.required)


    })



  }

  ngOnInit() {
  }

  save() {
    this.userService.register(this.registerForm.value).subscribe((data: any) => {

    })
    alert("Vous etes entregistré");
  }




}
