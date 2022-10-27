import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
// import { FormBuilder, Validators } from '@angular/forms';
// import { LoginWidgetComponent } from 'src/app/widgets/login-widget/login-widget.component'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // @ViewChild(LoginWidgetComponent) loginWidget: any;
  userFlag=false;
  constructor(
    private loginService:LoginService
    ) { }
    getLoginStatus(event:any){
      console.log(event)
      return this.loginService.getFlag();
      
    }
  // loginEmail:any
  // loginPassword:any
  // receiveMessage($event: any) {
  //   this.loginEmail =$event
  //   console.log(this.loginEmail)
  // }

  // items = [""];
  // getCredentials(credentials: any) {
    
  //   this.loginEmail=credentials[0]
  //   this.loginPassword=credentials[1]
  //   // console.log(this.loginPassword)
    
  //   // this.items.push(newItem);
  // }
 
  ngOnInit(): void {
    
  }
  // ngAfterViewInit() {
  //   console.log(this.loginWidget.loginEmail)
  //   this.loginEmail = this.loginWidget.loginEmail
  //   this.loginPassword = this.loginWidget.loginPassword

  // }
}
