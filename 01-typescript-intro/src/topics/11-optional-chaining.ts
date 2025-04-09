export interface Passenger {
    name: string;

    //  pueden o no inicializar o tener ese atributo
    children?: string[];
}

const passenger0: Passenger = {
    name: 'Angel',
}

const passenger1: Passenger = {
    name: 'Cleto',
    children: ['Angel', 'Elisa', 'Barbara', 'Diego'],
}

const printChildren = ( passenger: Passenger ) => {
    //  passenger.children!.length para leer siempre el valor
    const howManyChildren = passenger.children?.length || console.log(passenger.name, 'no tiene hij@s');

    if (howManyChildren !== undefined) console.log(passenger.name, 'tiene', howManyChildren + ' hij@s');

}

printChildren(passenger0);
printChildren(passenger1);