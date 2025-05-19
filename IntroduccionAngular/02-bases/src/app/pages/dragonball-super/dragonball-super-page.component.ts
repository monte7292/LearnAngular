import { Component, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import type { Character } from "../../interfaces/character.interface";

@Component({
  templateUrl: 'dragonball-super-page.component.html',
  selector: 'dragonball-super',
  imports: [CharacterListComponent],

})

export class DragonballSuperPageComponent {

  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 10000},
    {id: 2, name: 'Vegeta', power: 9000},
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
