import { Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

//Esto es un servicio que se puede usar en cualquier componente
//Lo que hace es guardar los personajes en un array y mostrarlos en la lista
//Manteniendo el estado de los personajes si se recarga la pagina
@Injectable({providedIn: 'root'})
export class DragonballService {
  characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 10000},
    {id: 2, name: 'Vegeta', power: 9000},
  ]);

  addCharacter(character: Character) {
    this.characters.update(list => [...list, character]);
  }
}
