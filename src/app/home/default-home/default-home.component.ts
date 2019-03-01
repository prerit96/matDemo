import { Component, OnInit } from '@angular/core';
import { ValidateAuthService } from 'src/Service/validate-auth.service';


@Component({
  selector: 'app-default-home',
  templateUrl: './default-home.component.html',
  styleUrls: ['./default-home.component.css']
})
export class DefaultHomeComponent implements OnInit {
userDetails;
g:any;
displayedColumns: string[] ;
  constructor(private userService: ValidateAuthService) { }

  ngOnInit() {
    this.userDetails=this.userService.getUser();
   this.displayedColumns = ['email','firstName','lastName','gender','date'];
    console.log(this.userDetails)
  }

}
