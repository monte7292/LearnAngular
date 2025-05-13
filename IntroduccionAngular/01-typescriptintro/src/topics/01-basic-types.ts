//Let variables que se modifican
//CONST variables que no se modifican
//var variables que se modifican en todo el scope

const name: string  = 'Max';

//Aqui se le dice que puede ser un string o un number
//Y a la hora de llamarlo se le dice que puede ser un string o un number
//Y full name es un string, y solo el string puede ser 'Full'
let hpPoints: number | 'FULL' = 95;

const isAlive: boolean = true;

console.log({
    name, hpPoints, isAlive
});

export {};