// let variables cambian de valor, const no cambia
const name = 'uWu';

//  especificar el tipo e inicializar
let hpPoints: number | 'FULL' = 95;

const isAlive: boolean = true;

//  establecer 2 tipos
hpPoints = 'FULL';

console.log({
    name,
    hpPoints,
    isAlive,
});

export {};