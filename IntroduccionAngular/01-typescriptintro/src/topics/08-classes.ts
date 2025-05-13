export class Person {
    // Propiedades de la clase
    public name: string;
    public address: string;
    // Constructor de la clase
    constructor() {
        this.name = 'Fernando';
        this.address = 'New York';
    }
}

const ironman = new Person();
console.log(ironman); 