//  estructura basica de una clase
export class Person {
    //  public name: string;
    //  public address: string;

    constructor(
        public name: string,
        public lastname: string,
        public address: string
    ) {
        this.name = name;
        this.lastname = lastname;
        this.address = address;
    }
}

//  herencia
// export class Hero extends Person {
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public name: string,
//         public address: string
//     ) {
//         super(name, address);
//     }
// }

//  herencia priorizando composicion
export class Hero {
    constructor(
        public alterEgo: string,
        public age: number,
        public person: Person
    ) {}
}

const peter = new Person('Peter', 'Parker', 'New York');
const spiderman = new Hero('Spiderman', 23, peter)

console.log(spiderman);
