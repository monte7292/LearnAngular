import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styles: `
    button {
      padding: 0.5rem 1rem;
      margin: 0.5rem;
      border-radius: 5px;
      border: none;
      cursor: pointer;
      font-size: 1rem;
      font-weight: bold;
      color: blue;
    }

    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      text-align: center;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      align-items: center;

    }
  `,
})

export class CounterPageComponent {
  counter = 10;
  counterSignal = signal(10);

  increaseBy(value: number) {
    this.counter += value;
    this.counterSignal.update((current) => current + value);
  }

  resetCounter() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
