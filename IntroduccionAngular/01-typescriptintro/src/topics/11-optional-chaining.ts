export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Montero'
}

const passenger2: Passenger = {
    name: 'Natalia',
    children: ['Natalia', 'Gabriel']
}

const returnChildren = (passenger: Passenger): number => {
    //Esta linea lo que dice que si el valor de children es undefined entonces le asigna 0
    const howManyChildren = passenger.children?.length || 0;
    console.log(passenger.name, howManyChildren);

    return howManyChildren;
}

returnChildren(passenger1);
returnChildren(passenger2);