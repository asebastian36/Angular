interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: 'Mess',

    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

//  tomar piezas de una interfaz
const {
    song:PlayingSong,
    details,
    songDuration:duration
} = audioPlayer;

const { author:interpreter } = details;

//  console.log('Song: ' + PlayingSong);
//  console.log('Interpreter: ' + interpreter);
//  console.log('Duration: ' + duration);

//  alternativa 2 y prevenir errores
const dbz: string[] = ['Goku', 'Vegeta', 'Gohan'];
const krilin:string = dbz[4] || 'Ya se murio'
console.log('3er personaje:', krilin);

const [, , , p3 = 'No se encuentra']:string[] = dbz;
console.log('3er personaje:', p3);

export {};