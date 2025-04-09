// arrays puede tener multiples tipos de datos o especificar el tipo
const skills: string[] = ['Bash', 'Counter', 'Healing'];

//  para definir tipos en objetos
interface Character {
    name: string;
    hp: number;
    skills: string[];

    //  definir que sea null o string
    //  hometown: string | undefined;
    hometown?: string;
}

//  objeto literal
const strider:Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter']
}

strider.hometown = 'Rivendell';

//  mostrar los datos del objeto en formato tabla a la consola del navegador
console.table(strider);

export {};