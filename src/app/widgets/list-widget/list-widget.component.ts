import { Component, OnInit ,Output, EventEmitter } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-list-widget',
  templateUrl: './list-widget.component.html',
  styleUrls: ['./list-widget.component.css']
})
export class ListWidgetComponent implements OnInit {
  loginEmail:string=""
  loginPassword:string=""
  listPage:string="list"
  constructor(private loginService:LoginService) { 

  }
  setPage(){
    // this.loginService.setFlagPageToList(this.listPage);
  }
  ngDoCheck() {
    this.setPage()
  }
  showUser(event: any){
    if(event){
      this.loginService.setFlag("alabady@yahoo.com","123456");
      this.loginEmail="alabady@yahoo.com"
      this.loginPassword="123456"
      this.listPage ="list"
      this.validateUser([this.loginEmail,this.loginPassword,this.listPage])
    }
    
    console.log(event)
  }
  @Output() newItemEvent = new EventEmitter<string>();

  validateUser(value1: any) {
    this.newItemEvent.emit(value1);
    
  }
  ngOnInit(): void {
    console.log('listwidget')
    
  }

}
