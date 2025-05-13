//Creamos una interface
interface Character {
    name: string;
    hp: number;
    //Esto es una funcion que no recibe nada y devuelve void(nada)
    showHp: () => void;
}

//Aqui hacemos una funcion que recibe dos numeros y devuelve un number
function addNumbers( a: number, b: number ):number {
    return (a + b);
}

const addNumbersArrow = ( a: number, b: number ): string => {
    //Esto es un template literal , devuelve un string
    //Es como un string que tiene variables dentro de el
    return `${a + b}`;
}

//Aqui hacemos una funcion que recibe un numero y devuelve un number
//Aqui le decimos que el segundo numero es opcional, y que si no lo pones, por defecto la base es 2
function multiply (firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;
}

//Aqui le decimos que el resultado es un number
const result: number = addNumbers(1,2);
//Aqui le decimos que el resultado es un string
const result2: string = addNumbersArrow(1,2);
//Aqui le decimos que el resultado es un number
const multiplyResult: number = multiply(5);

//Haremos el console.log del resultado 
console.log({result, result2, multiplyResult});


//Nuestro personaje
const healCharacter = ( character: Character, amount: number ) => {
    //pv es lo que indicamos como los puntos de vida
    character.hp += amount;
}

//Aqui le decimos que tiene que tener un personaje cargando los valores de la interface
const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        //este this es para que muestre los puntos de vida del personaje
        console.log(`Puntos de vida: ${this.hp}`);
    }
}

strider.showHp();

healCharacter(strider, 10);

strider.showHp();

export {}
