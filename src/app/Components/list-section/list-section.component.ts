import { Component } from '@angular/core';

@Component({
  selector: 'app-list-section',
  templateUrl: './list-section.component.html',
  styleUrls: ['./list-section.component.css']
})
export class ListSectionComponent {
  stack_list = [
    {
      txt:"Algorithm",
      icn:"devicon-sourcetree-original"
    },
    {
      txt:"Algorithm",
      icn:"devicon-sourcetree-original"
    },
    {
      txt:"Algorithm",
      icn:"devicon-sourcetree-original"
    },
    {
      txt:"Algorithm",
      icn:"devicon-sourcetree-original"
    },
    {
      txt:"Algorithm",
      icn:"devicon-sourcetree-original"
    },
    {
      txt:"Algorithm",
      icn:"devicon-sourcetree-original"
    },
    {
      txt:"Algorithm",
      icn:"devicon-sourcetree-original"
    },
    {
      txt:"Algorithm",
      icn:"devicon-sourcetree-original"
    },
    {
      txt:"Algorithm",
      icn:"devicon-sourcetree-original"
    },
    {
      txt:"Algorithm",
      icn:"devicon-sourcetree-original"
    },
    {
      txt:"Algorithm",
      icn:"devicon-sourcetree-original"
    },
    {
      txt:"Algorithm",
      icn:"devicon-sourcetree-original"
    },
    {
      txt:"Algorithm",
      icn:"devicon-sourcetree-original"
    },
    {
      txt:"Algorithm",
      icn:"devicon-sourcetree-original"
    },
    {
      txt:"Algorithm",
      icn:"devicon-sourcetree-original"
    },
    {
      txt:"Algorithm",
      icn:"devicon-sourcetree-original"
    },
  ]

  constructor(){
    console.log(this.stack_list)
  }
}
