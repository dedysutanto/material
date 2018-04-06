import { Component } from '@angular/core';
import { Config } from "ngx-countdown";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  counter = 20;

  // constructor private function() 
  config: Config = {
    leftTime: this.counter,
    template: '$!h!:$!m!:$!s!',
    notify: [10],
  }

  onNotify(event): void {
    // this.counter = 100;
    console.log('Left', event.time);
  }

  onStart(): void {
    console.log('Start OK!');
  }

  onFinished(): void {
    console.log('Finsihed OK!');
  }

}
