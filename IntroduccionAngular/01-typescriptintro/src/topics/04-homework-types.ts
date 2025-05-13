/*
    ===== Código de TypeScript =====
*/
interface SuperHero {
    name: string;
    age: number;
    //Esto es un objeto anidado, es decir, que tiene dentro otros objetos
    address: Address;
    showAddress: () => string;
}

//Esto es más comodo ya que no tengo q escribir todo el objeto cada vez q lo necesito
interface Address {
    street: string;
    country: string;
    city: string;
}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};