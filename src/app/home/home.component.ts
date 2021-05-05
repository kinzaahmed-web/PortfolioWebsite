import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';

import { Word } from '../models/Word';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeElement', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  words: Word[];
  constructor() {
  }
  ngOnInit(): void {
    this.words = [
      {
        id:1,
        title: 'Student',
        present: true
      },
      {
        id:2,
        title: 'Developer',
        present: false
      },
      {
        id:3,
        title: 'Creative Thinker',
        present: false
      },
      {
        id:4,
        title: 'Reader',
        present: false
      },
      {
        id:5,
        title: 'Traveler',
        present: false
      }
    ]
    this.showWord();
  }

  ngOnDestroy(): void {
  }

  showWord(): void {
    let wordIndex = 0;
    let timerWord = setInterval(() => {
      this.words[wordIndex].present = false;
      wordIndex++;
      if (wordIndex > this.words.length - 1) {
        wordIndex = 0;
      } 
      this.words[wordIndex].present = true;
    }, 3000);
  }
}
