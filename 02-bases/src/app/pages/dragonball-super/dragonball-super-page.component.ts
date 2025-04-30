import {Component, computed, signal} from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-super-page.component.html',
})
export class DragonballSuperPageComponent {

  //  valores por defecto del formulario
  name = signal('')
  power = signal(0)

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 10000 },
    { id: 2, name: 'Vegeta', power: 9000 },
    { id: 3, name: 'Gohan', power: 4500 }
  ]);

  powerClasses = computed( () => {
    return {
      'text-danger': true
    }
  });

  addCharacter() {
    if( !this.name() || !this.power() || this.power() <= 5000 ) {
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    //  this.characters().push(newCharacter);

    //  opcion recomendada
    this.characters.update( (list) => [...list, newCharacter] );
    this.resetFields()
  }

  resetFields() {
    this.name.set('')
    this.power.set(0)
  }

}
