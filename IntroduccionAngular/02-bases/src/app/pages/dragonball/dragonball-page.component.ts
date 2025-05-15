import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: 'dragonball-page.component.html',
  imports: [],

})

export class DragonballPageComponent {

  name = signal('Gohan');
  power = signal(100);

  characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 10000},
    {id: 2, name: 'Vegeta', power: 9000},
    {id: 5, name: 'Yamcha', power: 500},
    {id: 3, name: 'Trunks', power: 8000},
    {id: 4, name: 'Gohan', power: 7000},
  ]);

  addCharacter() {
    if( !this.name() || this.power() <= 0 || !this.power) {
      return;
    };

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    /* Esto sirve para agregar el personaje*/
    this.characters.update(
      (list) => [...list, newCharacter]
    );
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }

}
