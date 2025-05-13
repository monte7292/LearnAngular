// Definimos una interfaz Product que describe la estructura de un producto
interface Product {
    description: string;  // Descripción del producto
    price: number;       // Precio del producto
}

// Creamos dos objetos que implementan la interfaz Product
const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
}

// Definimos una interfaz para las opciones de cálculo de impuestos
interface TaxCalculationOptions {
    tax: number;        // Porcentaje de impuesto
    products: Product[]; // Array de productos
}


function taxCalculator( options: TaxCalculationOptions ): [number, number] {
    // Desestructuramos el objeto options para obtener tax y products directamente
    const { tax, products } = options;

    let total = 0;

    // Usando desestructuración en el forEach, solo extraemos el price de cada producto
    products.forEach( ({ price }) => {
        total += price;
    });

    // Devolvemos una tupla con el total y el total con impuestos
    return [total, total * tax];
}

// Creamos un array de productos para el carrito de compras
const shoppingCart = [phone, tablet];

// Calculamos los totales llamando a la función
const [ total, taxTotal] = taxCalculator({
    products: shoppingCart,
    tax: 0.15,
});

// Mostramos los resultados
console.log('Total', total);
console.log('Total', taxTotal); 
export {}