import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // loginEmail:string=""
  // loginPassword:string=""
  // listPage:string=""
  constructor() { }

  // showUser(event: any){
  //   if(event){
  //     this.loginEmail="alabady@yahoo.com"
  //     this.loginPassword="123456"
  //     this.listPage ="list"
  //   }
    
  //   console.log(event)
  // }
  // getValues(values: any) {
    
  //   this.loginEmail=values[0]
  //   this.loginPassword=values[1]
  //   this.listPage=values[2]
  //   // console.log(this.loginPassword)
    
  //   // this.items.push(newItem);
  // }
  ngOnInit(): void {
  }

}
