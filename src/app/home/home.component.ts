import { Component, OnInit } from '@angular/core';
import { ValidateAuthService } from 'src/Service/validate-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
username:string;
  constructor(private auth: ValidateAuthService, private router: Router) { }

  ngOnInit() {
    console.log(this.auth.userDetail.firstName)
    this.username=this.auth.getUser().firstName;
  }
  logout() {
    this.auth.onLogout();
    this.router.navigate(['/login']);
 }
}
