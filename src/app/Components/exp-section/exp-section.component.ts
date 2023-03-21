import { Component } from '@angular/core';

@Component({
  selector: 'app-exp-section',
  templateUrl: './exp-section.component.html',
  styleUrls: ['./exp-section.component.css']
})
export class ExpSectionComponent {
  exp = [
    {
      firm:"Cognizant",
      title:"Full Stack Engineer",
      desc:"Working as a software developer with a focus on Angular, DotNET Core, .NET WebAPI, and React.",
      sdate:"September 2022",
      edate:"Present"
    },
    {
      firm:"Cognizant",
      title:"Genc Next Intern",
      desc:"Trained with latest full stack technologies like react, dotnet, github and more",
      sdate:"March 2022",
      edate:"August 2022"
    },
    {
      firm:"i-Neuron",
      title:"Deep learning research intern",
      desc:"Got an opportunity to intern under iNeuron.ai where I was assigned with security domain with a team of 8 members",
      sdate:"November 2020",
      edate:"July 2021"
    },
  ]
}
