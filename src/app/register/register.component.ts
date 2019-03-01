import { Component, OnInit } from '@angular/core';
import { ValidateAuthService } from 'src/Service/validate-auth.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user:any={};
pwdMismatch:boolean;
minDate = new Date();
  constructor(private router: Router,private userService: ValidateAuthService, private datepipe: DatePipe) { }

  ngOnInit() {
    console.log(this.userService.getLoggedIn())
    this.user.gender="Male";
  }

  register(){

    this.user.date =this.datepipe.transform(this.user.date, 'dd/MM/yyyy');

    this.userService.setUser(this.user);
    this.router.navigate(['/home'])
  }

  redirect() {
    console.log("inside redirect method")
    if(this.userService.getLoggedIn()){
      this.router.navigate(['/home'])
    }
    else {
      this.router.navigate(['/login'])
    }
  }

}
