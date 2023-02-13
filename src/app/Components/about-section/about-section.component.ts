import { Component } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent {
  title = 'angularTests';
  list = ['a Developer', 'a Programmer', 'a Designer', 'an Artist']
  constructor() { }
  ngOnInit() {
  }
}
