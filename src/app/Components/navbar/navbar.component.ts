import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showBurgerMenu: boolean = false;
  constructor() {}

  modelClass:string = "model";
  contactClick(){
    if(this.modelClass == "model"){
      this.modelClass = this.modelClass+" "+"is-active"
    }else{
      this.modelClass = "model"
    }
     
  }
}
