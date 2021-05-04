import { Component, OnInit, OnDestroy } from '@angular/core';
import { Word } from '../models/Word';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  words: Word[];
  activeWord: boolean[];
  showElement: boolean = true;
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
        title: 'Traveller',
        present: false
      }
    ]
   // this.activeWord = [true, false, false, false, false];
    //  this.wordsPresent();
  }

  ngOnDestroy(): void {
  }


  //high level idea of function
  //have a function that shows the next word where the index is 
  //originally initialized to 0
  //and then each time we call the function we increment the value 
  // and when the index equals the designated word, fadeIn(1500), 
  //delay 1000 and also fade out 1500
  //continually call this function, maybe a while true loop?
  
  // setInterval() for a repeatedly occurring setTimeout(). Use this for a delay between
  // your iterations since the while loop is executing so quickly.

//   wordsPresent() : void  {
//     //const words: HTMLCollectionOf<Element> = document.getElementsByClassName('words');
//     //alert("current Index: " + words[0].textContent);
//     //console.log(`current index: ${words[0].textContent}`);
//     let wordIndex = 0;
//     //let delay = 1;
//     while(wordIndex < 5){
//       this.activeWord[wordIndex] = true;
//       setTimeout(function(){
//         //console.log(`${this.activeWord[wordIndex]}`);
//         const word: HTMLElement = document.getElementById(`words-${wordIndex}`);
//         console.log(`${word}`);
//         if(word != null){
//           word.classList.remove('hidden');
//           //console.log(`current value: ${words[wordIndex].innerHTML}`);
//           // if(wordIndex > 1){
//           //   word.classList.add(`animate__delay-${delay}s`);
//           //   delay++;
//           // }
//           word.classList.add('animate__fadeIn');
//           // if(wordIndex > 1){
//           //   word.classList.add(`animate__delay-${delay}s`);
//           //   delay++;
//           // }
//           //word.classList.add('animate__fadeOut');
//           console.log(`current index: ${word.textContent}`);
//         }
//       }, 2000);
//       // this.current = wordIndex;
//       console.log(`current index: ${wordIndex}`);
//       wordIndex++;
//       // if(wordIndex == words.length - 1){
//       //   wordIndex = -1;
//       // }
//     }
//   }
}
