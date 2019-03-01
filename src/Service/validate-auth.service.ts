import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateAuthService {
loggedIn:boolean = false;
userDetail:any=[];
defaultUser={email:"admin@gmail.com",password:"Admin@123",firstName:"admin",lastName:"admin",gender:"Male",date:"28/02/2019"}
  constructor() {
    this.userDetail.push(this.defaultUser)
   }

  getLoggedIn() {
    return this.loggedIn;
  }
  setLoggedIn() {    
    this.loggedIn=true;
  }

  onLogout() {
    this.loggedIn=false;
  }

  getUser() {    
    return this.userDetail
    
  }

  setUser(data){    
    this.userDetail.push(data);
  }

}
