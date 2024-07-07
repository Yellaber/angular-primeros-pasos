import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>
    <p>Bienvenido a Angular.</p>
    <button (click)="increaseBy( 1 )">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="decreaseBy( 1 )">-1</button>
  `
})

export class CounterComponent {
  public counter: number = 0;

  increaseBy( increment: number ): void {
    this.counter += increment;
  }

  decreaseBy( decrement: number ): void {
    if( this.counter == 0 )
      return;
    this.counter -= decrement;
  }

  reset(): void {
    this.counter = 0;
  }
}
