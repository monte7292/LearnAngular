export class Person {
    // Propiedades de la clase
    // Esto es poco comun en TS

    /* public name: string;
    public address: string; 
    
    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }
    */

    // Constructor de la clase
    constructor(
        //Este es el modo mas comun de definir las propiedades de una clase
        public FirstName: string,
        public LastName: string,  
        public address: string = 'No address'

    ) {}
}

/* export class Hero extends Person{

    //Extender es basico para crear una clase que herede de otra
     constructor(
        public alterEgo: string, 
        public age: number,
        public realName: string,
     ) {
        super(realName, 'New York');
     }
} */

export class Hero {

    //public person: Person;
//Extender es basico para crear una clase que herede de otra
    constructor(
    public alterEgo: string, 
    public age: number,
    public realName: string,
    public person: Person,
    ) {
        //this.person = new Person(realName);
    }
}

const tony = new Person('Tony', 'Stark', 'New York');
const ironman = new Hero('Ironman', 45, 'Tony Stark', tony);
console.log(ironman); 