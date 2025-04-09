// funciones encapsuladas, importar interfaz de 06

//  manera 1
import { Product, taxCalculation } from './06-function-destructuring.ts';

const shoppingCart: Product[] = [
    {
        description: 'ipad',
        price: 3000
    },
    {
        description: 'Airpods',
        price: 2500
    }
];

const [ total, tax ] = taxCalculation({
    tax: .15,
    products: shoppingCart
});

console.log( 'Total', total );
console.log('Tax', tax);