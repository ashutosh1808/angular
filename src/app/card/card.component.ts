import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  @Input() title='';
  @Input() imageUrl='';
  @Input() content='';
  @Input() username='';
  
  ngOnInit(): void {
      
  }
}
