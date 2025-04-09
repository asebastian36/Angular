//  homework
interface SuperHero {
    name: string;
    age: number;
    address: Address;

    showAddress: () => string;
}

interface Address {
    street: string;
    country: string;
    city: string;
}

//  implementation
const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,

    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },

    showAddress():string {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}

//  output
const address = superHeroe.showAddress();
console.log( address );

export {};