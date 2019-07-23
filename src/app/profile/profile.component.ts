import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserserviceService } from '../userservice.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user;
  profileForm: FormGroup;
  passwordForm: FormGroup;

  constructor(private userService: UserserviceService) {


    this.profileForm = new FormGroup({

      username: new FormControl(""),
      email: new FormControl(""),
      nom: new FormControl(""),
      prenom: new FormControl(""),
      adresse: new FormControl(""),

    })

    this.passwordForm = new FormGroup({

      oldPass: new FormControl(""),
      password: new FormControl(""),
      confirmPass: new FormControl("")

    })



  }

  ngOnInit() {
this.user=this.userService.getData();

     console.log(this.user, "barsomekemshi");

    this.profileForm = new FormGroup({

      username: new FormControl(this.user.username),
      email: new FormControl(this.user.email),
      nom: new FormControl(this.user.nom),
      prenom: new FormControl(this.user.prenom),
      adresse: new FormControl(this.user.adresse)

    })

    console.log(this.profileForm.value);
    console.log(this.user.nom);

    this.passwordForm = new FormGroup({

      oldPass: new FormControl(this.user.password),

      password: new FormControl(""),
      confirmPass: new FormControl("")

    })


  }




  save() {


    this.userService.editProfile(this.profileForm.value, this.user.id).subscribe((data: any) => {

      alert("donné modifié");
      this.ngOnInit();

    })

  }


  change() {

    if (this.passwordForm.controls.password.value != this.passwordForm.controls.confirmPass.value || this.passwordForm.controls.password.value == "") {
      alert("password non conforme")
    }
    else (this.userService.editPassword(this.passwordForm.value, this.user.id).subscribe((data: any) => {

      alert("password changé")
      this.ngOnInit();

    }));


  }





}
