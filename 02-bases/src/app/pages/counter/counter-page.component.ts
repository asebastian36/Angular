import {ChangeDetectionStrategy, Component, signal} from '@angular/core';

//  primer componente (clase de typescript
@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterPageComponent {

  counter = 10;
  counterSignal = signal(10)

  constructor() {
    setInterval(() => {
      //  this.counter += 1;
      this.counterSignal.update((v) => v + 1);
      console.log('Tick');
    }, 4000);
  }

  increaseBy(value: number) {
    this.counter += value;
    this.counterSignal.update( c => c + value )
  }

  decreaseBy(value: number) {
    this.counter -= value;
    this.counterSignal.update( c => c - value )
  }

  resetCounter() {
    this.counter = 10;
    this.counterSignal.set(10);
  }
}
