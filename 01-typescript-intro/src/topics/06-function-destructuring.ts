export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'P30 pro',
    price: 5000.00,
}

const tablet: Product = {
    description: 'Ipad mini',
    price: 25000.00,
}

export interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

//  otro ejemplo de desestructuracion
//  function taxCalculation( { tax, products }:TaxCalculationOptions ): [number, number] {

//  especifica que el arreglo solo debe tener dos elementos
export function taxCalculation( options:TaxCalculationOptions ): [number, number] {
    let total = 0;

    //  uso de desestructuracion
    options.products.forEach( ({ price }) => {
        total += price;
    });

    return [total, total * options.tax];
}

const shoppingCart: Product[] = [phone, tablet];
const tax: number = 0.15;

const [ total, total_tax] = taxCalculation({
    products: shoppingCart,
    tax: tax,
});

//  ejemplo de desestructuracion sencilla
const [
    p1, p2
] = shoppingCart

console.log('Bienvenido a la tienda d electronica');
console.log('Los productos elegidos son:' + p1.description + ', ' + p2.description);
console.log('El total es $' + total);
console.log('El tax es $' + total_tax);

//  export {};