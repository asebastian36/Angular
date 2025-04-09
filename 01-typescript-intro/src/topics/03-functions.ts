//  definicion de funcion basica, tratar de siempre especificar tipos en los atributos
function addNumbers(a:number, b:number) {
    return a + b;
}

const result:number= addNumbers(100, 201);
//  console.log({result});//  con formato json


//  funcion lambdas
const addNumbersArrow = (a:number, b:number):string => {return `${a + b}`;};

const resultArrow:string = addNumbersArrow(100, 20);

//  console.log({resultArrow});

function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;
}

const multiplyResult:number = multiply(200);
//  console.log({multiplyResult});

// pasar objetos a una funcion
interface Character {
    name: string;
    hp: number;
    showHp(): () => void;
}

//   esto especifica que debe tener los mismos atributos que character
const healCharacter = ( character: Character, amount: number) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
    }
}

healCharacter(strider, 100);
strider.showHp();


export {};