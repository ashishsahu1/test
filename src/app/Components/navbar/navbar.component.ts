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

  
  modelClass2:string = "model";
  expClick(){
    if(this.modelClass2 == "model"){
      this.modelClass2 = this.modelClass2+" "+"is-active"
    }else{
      this.modelClass2 = "model"
    }
     
  }


}
