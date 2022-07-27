import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

@Input() post!:Post

@Output() editEvent=new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

// attiva(id:number){
//   this.editEvent.emit(id)
// }
// disattiva(id:number){
// this.editEvent.emit(id)
// }
//In base a quale parent riceverà l'event il metodo eseguito nel parent indicherà se attivare o disattivare. Questo ci evita la complessità di avere due pulsanti e due metodi
editPost(id:number){
  this.editEvent.emit(id)
}
}
