import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero( nameHero: string ): void {
    this.name = nameHero;
  }

  changeAge( ageHero: number ): void {
    this.age = ageHero;
  }

  resetHero(): void {
    this.name = 'Ironman';
    this.age = 45;
  }
}
