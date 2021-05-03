import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.wordsPresent();
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
  
  wordsPresent() : void  {
    const words: HTMLCollectionOf<Element> = document.getElementsByClassName('words');
    let wordIndex = -1;
    while(wordIndex < words.length){
      wordIndex++;
      words[wordIndex].classList.remove('hidden');
      words[wordIndex].classList.add('animate__fadeIn');
      console.log(`current index: ${words[wordIndex]}`);
    }
  }

}
