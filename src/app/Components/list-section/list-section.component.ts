import { Component } from '@angular/core';

@Component({
  selector: 'app-list-section',
  templateUrl: './list-section.component.html',
  styleUrls: ['./list-section.component.css']
})
export class ListSectionComponent {
  show = 30
  red:string = "#FFC7C7"
  blue:string = "#C7EBFF"
  green:string = "#CBF2EC"
  yellow:string = "#FFF9C7"
  pink:string = "#E7D5FF"

  stack_list = [
    {
      // Green
      txt:"Algorithm",
      icn:"devicon-sourcetree-original colored",
      color_code:this.green
    },
    {
      // Red
      txt:"Angular JS",
      icn:"devicon-angularjs-plain colored",
      color_code:this.red
    },
    {
      // Blue
      txt:"React JS",
      icn:"devicon-react-original colored",
      color_code:this.blue
    },
    {
      // Yellow
      txt:"Javascript",
      icn:"devicon-javascript-plain colored",
      color_code:this.yellow
    },
    {
      txt:"HTML 5",
      icn:"devicon-html5-plain colored",
      color_code:this.red
    },
    {
      txt:"CSS",
      icn:"devicon-css3-plain colored",
      color_code:this.blue
    },
    {
      txt:"SCSS",
      icn:"devicon-sass-original colored",
      color_code:this.pink
    },
    {
      txt:"Bootstrap",
      icn:"devicon-bootstrap-plain-wordmark colored",
      color_code:this.pink
    },
    {
      txt:"Bulma",
      icn:"devicon-bulma-plain colored",
      color_code:this.green
    },
    {
      txt:"Material UI",
      icn:"devicon-materialui-plain colored",
      color_code:this.blue
    },
    {
      txt:"MongoDB",
      icn:"devicon-mongodb-plain colored",
      color_code:this.green
    },
    {
      txt:"Express JS",
      icn:"devicon-express-original colored",
      color_code:this.pink
    },
    {
      txt:"Node JS",
      icn:"devicon-nodejs-plain colored",
      color_code:this.green
    },
    {
      txt:"NodeWebKit",
      icn:"devicon-nodewebkit-plain colored",
      color_code:this.blue
    },
    {
      txt:"DotNet",
      icn:"devicon-dot-net-plain colored",
      color_code:this.blue
    },
    {
      txt:".NET Core",
      icn:"devicon-dotnetcore-plain colored",
      color_code:this.pink
    },
    {
      txt:"VS Code",
      icn:"devicon-vscode-plain colored",
      color_code:this.blue
    },
    {
      txt:"Visual Studio",
      icn:"devicon-visualstudio-plain colored",
      color_code:this.pink
    },
    {
      txt:"FastAPI",
      icn:"devicon-fastapi-plain colored",
      color_code:this.green
    },
    {
      txt:"MySQL",
      icn:"devicon-mysql-plain colored",
      color_code:this.pink
    },
    {
      txt:"Postgre SQL",
      icn:"devicon-postgresql-plain colored",
      color_code:this.blue
    },
    {
      txt:"Github",
      icn:"devicon-github-original colored",
      color_code:this.green
    },
    {
      txt:"GIT control",
      icn:"devicon-git-plain colored",
      color_code:this.red
    },
    {
      txt:"Azure",
      icn:"devicon-azure-plain colored",
      color_code:this.blue
    },
    {
      txt:"AWS",
      icn:"devicon-amazonwebservices-original colored",
      color_code:this.yellow
    },
    {
      txt:"C++",
      icn:"devicon-cplusplus-plain colored",
      color_code:this.pink
    },
    {
      txt:"Figma",
      icn:"devicon-figma-plain colored",
      color_code:this.red
    },
    {
      txt:"DevIcon",
      icn:"devicon-devicon-plain colored",
      color_code:this.green
    },
    {
      txt:"GCP",
      icn:"devicon-googlecloud-plain colored",
      color_code:this.blue
    },
    {
      txt:"Python",
      icn:"devicon-python-plain colored",
      color_code:this.yellow
    },
    {
      txt:"Jupyter",
      icn:"devicon-jupyter-plain colored",
      color_code:this.red
    },
    {
      txt:"Pandas",
      icn:"devicon-pandas-original colored",
      color_code:this.pink
    },
    {
      txt:"PyTorch",
      icn:"devicon-pytorch-original colored",
      color_code:this.red
    },
    {
      txt:"Numpy",
      icn:"devicon-numpy-original colored",
      color_code:this.blue
    },
    {
      txt:"TensorFlow",
      icn:"devicon-tensorflow-original colored",
      color_code:this.red
    },
    {
      txt:"Anaconda",
      icn:"devicon-anaconda-original colored",
      color_code:this.green
    },
    {
      txt:"Android Studio",
      icn:"devicon-androidstudio-plain colored",
      color_code:this.blue
    },
    {
      txt:"Android",
      icn:"devicon-android-plain colored",
      color_code:this.green
    },
    {
      txt:"Canva",
      icn:"devicon-canva-original colored",
      color_code:this.blue
    },
    {
      txt:"Chrome",
      icn:"devicon-chrome-plain colored",
      color_code:this.red
    },
    {
      txt:"C Sharp",
      icn:"devicon-csharp-plain colored",
      color_code:this.pink
    },
    {
      txt:"Dart",
      icn:"devicon-dart-plain colored",
      color_code:this.blue
    },
    {
      txt:"Flask",
      icn:"devicon-flask-original colored",
      color_code:this.red
    },
    {
      txt:"Fire Base",
      icn:"devicon-firebase-plain-wordmark colored",
      color_code:this.red
    },
    {
      txt:"Flutter",
      icn:"devicon-flutter-plain colored",
      color_code:this.blue
    },
    {
      txt:"Heroku",
      icn:"devicon-heroku-plain-wordmark colored",
      color_code:this.pink
    },
    {
      txt:"Flask",
      icn:"devicon-flask-original colored",
      color_code:this.red
    },
    {
      txt:"Typescript",
      icn:"devicon-typescript-plain colored",
      color_code:this.blue
    },
    {
      txt:"Flask",
      icn:"devicon-flask-original colored",
      color_code:this.red
    },
    
  ]

  constructor(){
    console.log(this.stack_list)
  }

  increaseShow() {
   this.show += 20; 
 }
}
