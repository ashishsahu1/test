import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-section-item',
  templateUrl: './list-section-item.component.html',
  styleUrls: ['./list-section-item.component.css']
})
export class ListSectionItemComponent {
  @Input() itm:any;
  icnClass:string = "tech-logo";
  ngOnInit(){
    console.log(this.itm);
    this.icnClass = this.icnClass+" "+this.itm.icn;
  }
}
