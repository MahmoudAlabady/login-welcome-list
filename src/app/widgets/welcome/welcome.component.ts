import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  @Input()
  email_address:string=""
  @Input()
  Password:string=""
  @Input()
  page:string=""
  loginUser:boolean=false;
  name:string="alabady && Ali && aba kaream"
  userFlag=false;
  // subscription: Subscription;
  constructor(private loginService:LoginService) { }
// login(_email_address:string,_Password:string){
// if(_email_address==){}
// }

// validUser(){
//   this.userFlag=this.loginService.getFlag();
// }
// ngDoCheck() {
  // this.validUser()
  // this.changePageFlag()
// }
// changePageFlag(){
  // this.page=this.loginService.getPageFlag();
  
  // console.log(this.page)
// }

  ngOnInit(): void {
    // this.subscription =this.loginService.getFlag();
    
    // console.log("welcome")
  }

}
