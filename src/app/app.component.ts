import { Component } from '@angular/core';
import { Config } from "ngx-countdown";

import { NgIf } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  seconds = 3600;
  isFirstDisplay = true;
  isSecondDisplay = false;
  
  config :Config = {
    leftTime: this.seconds,
    template: '$!h!:$!m!:$!s!',
    notify: [10],
    repaint: function () {
      let counter: any = this,
        content: string;

        counter.hands.forEach((hand: any) => {
          if (hand.lastValue !== hand.value) {
            content = '';
            // let seconds = me.toDigitals(hand.value + 1, hand.bits).join(''),
            let seconds = counter.toDigitals(hand.value, hand.bits).join('');
  
            // console.log('Cur: ', cur);
            hand.node.innerHTML = seconds;
            console.log("Second: ", seconds);

            //sessionStorage.setItem("seconds", seconds);
            localStorage.setItem("seconds", seconds);
          })
      }
    }

  clickFirst(): void {
    this.isFirstDisplay = false;
    this.isSecondDisplay = true;
  }

  clickSecond(): void {
    this.isFirstDisplay = true;
    this.isSecondDisplay = false;
    this.seconds = parseInt(localStorage.getItem("seconds"));
    console.log(this.seconds)
  }
  // constructor private function() 

  onEvent(event): void {
    console.log('Action', event.action);
    console.log('Left', event.left);
  }
  onNotify(event): void {
    // this.counter = 100;
    console.log('Left Time', event);
  }

  onStart(): void {
    this.seconds = parseInt(localStorage.getItem("seconds"))||this.seconds;
    console.log('Start OK! ', this.seconds);
  }

  onFinished(): void {
    console.log('Finsihed OK!');
  }

}
