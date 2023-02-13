import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';

import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AboutSectionComponent } from './Components/about-section/about-section.component';
import { ListSectionComponent } from './Components/list-section/list-section.component';
import { ListSectionItemComponent } from './Components/list-section-item/list-section-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutSectionComponent,
    ListSectionComponent,
    ListSectionItemComponent
  ],
  imports: [
    BrowserModule,
    AngularTypewriterEffectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
