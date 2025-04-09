function classDecorator<T extends { new (...args:any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        newProperty = "New Property";
        hello = "Override"
    }
}

@classDecorator
export class SuperClass {
    public myProperty: string = 'myProperty';

    print() {
        console.log(`${this.myProperty}`);
    }
}

console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass);

//  un decorador es una funcion