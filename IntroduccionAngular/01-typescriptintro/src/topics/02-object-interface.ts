//Hacemos un array de string con las habilidades de nuestro personaj
const skills: string[]= [
    'Bash', 'Counter', 'Healing'
];

//Haremos una interface que nos diga que tiene que tener un personaje
interface Character {
    name: string;
    hp: number;
    skills: string[];
    //Significa que es opcional el ? que es tipo string o que no tiene nada
    //Si no tiene nada, no se muestra en la consola
    hometown?: string;
}

//Aqui le decimos que tiene que tener un personaje cargando los valores de la interface
const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter']
}

//Le asignamos un valor a la propiedad hometown
strider.hometown = 'Rivendell';

console.table(strider);
console.table(skills);
export {}