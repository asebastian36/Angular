import {Component, computed, signal} from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-page.component.html',
})
export class DragonballPageComponent {

  characters = signal<Character[]>([
    { id: 1, name: 'Gohan', power: 10000 },
    { id: 2, name: 'Vegeta', power: 9000 },
    { id: 3, name: 'Gohan', power: 4500 },
    { id: 4, name: 'Trunks', power: 4500 },
    { id: 5, name: 'Krilin', power: 1500 }
  ]);

  powerClasses = computed( () => {
    return {
      'text-danger': true
    }
  });

}
