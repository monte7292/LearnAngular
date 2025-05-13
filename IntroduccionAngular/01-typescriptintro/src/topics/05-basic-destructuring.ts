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
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

//Esto es destructuring , que es extraer una propiedad de un objeto
const { song:anotherSong , songDuration:duration, details} = audioPlayer;
//Esto es destructuring de un objeto dentro de otro objeto
const { author } = details;
//Hacemos el console.log para ver el resultado
console.log('Song:' + anotherSong);
console.log('Duration:' + duration);
console.log('Author:' + author);

//Si no hay un tercer personaje saldra not found
const [p1, p2, trunks = 'Not found']: string[] = ['Goku', 'Vegeta'];

//Hacemos el console.log para ver el resultado
console.log('Personaje 3:' + trunks);



export{}