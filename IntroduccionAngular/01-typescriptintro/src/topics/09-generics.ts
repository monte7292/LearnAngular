//El primer dato generico siempre va a ser una T
export function whatsMyType<T>(argument: T): T {
    // La función recibe un argumento de tipo T (genérico)
    // y devuelve el mismo tipo T
    
    // Simplemente retornamos el argumento sin modificarlo
    // manteniendo su tipo original
    return argument;
}
//Significa que el tipo de dato que se va a recibir es generico de forma String
const amIString = whatsMyType<string>('Hola Mundo');
//Significa que el tipo de dato que se va a recibir es generico de forma numerico
const amINumber = whatsMyType<number>(100);
//Significa que el tipo de dato que se va a recibir es generico de forma Array Numerica
const amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log( amIString.split(' ') );
console.log( amINumber.toFixed() );
console.log( amIArray.join('-') );

