import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login-widget',
  templateUrl: './login-widget.component.html',
  styleUrls: ['./login-widget.component.css']
})
export class LoginWidgetComponent implements OnInit {
  // loginEmail:string ="jshakjs"
  // loginPassword:string="s"
  
  // validCredentials:boolean=true
  userFlag=false
  // sendCredentials() {
  //   this.loginEmailEvent.emit(this.loginEmail)
  //   this.loginPasswordEvent.emit(this.loginPassword)
  // }
  constructor(private formBuilder:FormBuilder,private loginService:LoginService) { }

  loginForm=this.formBuilder.group(
    {
      email:[''], 
      password:[''],
  
    }
  )

  // func(){
  //   this.loginEmailEvent.emit(this.loginEmail)
  //   this.loginPasswordEvent.emit(this.loginPassword)
  // }
isLogedin=false;
   login(credentials:any){
    
    this.loginService.setFlag(credentials.email,credentials.password);
    this.isLogedin=true
    
    
    
  }
 
  log(){
    // console.log(this.loginForm.controls['email'].value)
    // console.log(this.loginForm.controls['password'].value)
    // console.log(this.loginForm)
  }

  // message: string = "Hola Mundo!"

  // @Output() messageEvent = new EventEmitter<string>();

  
  ngOnInit(): void {
  }
//  sendMessage() {
//     this.messageEvent.emit(this.message)
//   }
}
