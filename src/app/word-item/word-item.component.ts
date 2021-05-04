import { Component, Input, OnInit } from '@angular/core';
import { Word } from '../models/Word';

@Component({
  selector: 'app-word-item',
  templateUrl: './word-item.component.html',
  styleUrls: ['./word-item.component.css']
})
export class WordItemComponent implements OnInit {
  @Input() word: Word;
  
  constructor() { }

  ngOnInit(): void {
  }

  onEvent(word){
    //this is changing the property to whatever it isn't true / false
    word.present = !word.present;
  }

  setClasses() {
    let classes = {
      word: true, //word class added by default
      'animate__animated animate__fadeIn': this.word.present,
      hidden: !this.word.present
    }
    return classes;
  }

}
