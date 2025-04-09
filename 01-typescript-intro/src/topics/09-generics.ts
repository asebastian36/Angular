//  evitar a toda costa usar el tipo de dato any
export function whatsMyType<T>( argument:T ): T {
    return argument;
}

let amIString = whatsMyType('Hola mundo');
let amINumber = whatsMyType(23);
let amIArray = whatsMyType([1, 2, 3, 4, 5]);

console.log(amINumber);
console.log(amIArray);
console.log(amIString);

//  genera fallos en los ides al momento de recomendar o autocompletar, mejor usar genericos