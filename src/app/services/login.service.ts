import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 userFlag = false;
// pageFlag=' '
 setFlag(email:string,password:string){
  if(email=="alabady@yahoo.com" && password=='123456'){
    this.userFlag = true;
  }
  
 }

 getFlag(){
  return this.userFlag
 }
//  setFlagPageToList(page:any){
//  if(page=='list'){
// this.pageFlag=page;
//  }
//  }
//  getPageFlag(){
//   this.userFlag =false
//   return this.pageFlag
  
//  }
  constructor() { }
}
