import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {UpperCasePipe} from '@angular/common';

@Component({
  templateUrl: './hero-page.component.html',
  imports: [
    UpperCasePipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroPageComponent {
  name = signal('Ironman');
  age = signal(45);

  //  senal computada - senal de solo lectura
  heroDescription = computed( () => {
    return `${this.name()} ${this.age()}`;
  });

  // capitalizeName = computed( () => this.name().toUpperCase() );

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }

  changeAge() {
    this.age.set(60);
  }
}
