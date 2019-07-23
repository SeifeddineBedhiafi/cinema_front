import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserserviceService {


user;

  constructor(private http: HttpClient) {


  }

setData(value) {      
  this.user = value;  
}  

getData() {  
  return this.user;  
}  

  register(user) {

    return this.http.post('http://localhost:9000/client/addClient', user);
  }

  login(user) {

    return this.http.post('http://localhost:9000/client//Login', user);

  }

  getUser(id) {

    return this.http.get('http://localhost:9000/client/getClientId/' + id);
  }



  editProfile(form, id) {

    return this.http.put('http://localhost:9000/client/edit/' + id, form, {});
  }



  editPassword(form, id) {

    return this.http.put('http://localhost:9000/client/editPassword/' + id, form, {});
  }


updateComment(comment,idUser,idEvent){
return this.http.post("http://localhost:9000/comment/add/"+idUser,idEvent,comment);

}










}
