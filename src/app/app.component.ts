import { Component } from '@angular/core';
import { CardComponent } from "./card/card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CardComponent, CommonModule]
})
export class AppComponent {
  posts=[
    { 
      title:'Neat Tree',
      imageUrl:'assets/tree.jpeg',
      username:'nature',
      content:'I saw this neat tree today'
    },
    { 
      title:'Snowy Mountain',
      imageUrl:'assets/mountain.jpeg',
      username:'mountainlover',
      content:'Here is a picture of a snowy mountain'
    },
    { 
      title:'Mountain biking',
      imageUrl:'assets/biking.jpeg',
      username:'biking1225',
      content:'I did some biking today'
    }
  ]
}
