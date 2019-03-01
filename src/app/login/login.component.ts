import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateAuthService } from 'src/Service/validate-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:any={};
invalidCred:boolean=false;
  constructor(private router: Router, private auth: ValidateAuthService) { }

  ngOnInit() {
    console.info(this.auth.getUser())
    console.log(this.auth.getLoggedIn())
    console.log("changes made on local to be pushed on repo")
  }

  login()
  {     
    this.auth.getUser().find(data=> {
      if(data.email==this.user.username && data.password==this.user.password) {
        this.auth.setLoggedIn();
        this.router.navigate(['/home']);
      }
      else {
        this.invalidCred=true
        // this.router.navigate(['/login'])
      }

    })
  
  }
}
