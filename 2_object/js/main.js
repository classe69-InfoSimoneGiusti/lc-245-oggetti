
/* da variabili "sfuse" ad un oggetto */

let nome = 'Sonia';
let cognome = "Verdi";
let eta = 25;
let residenza = 'Firenze';

// sintassi ES5
const persona2 =    {
    'nome': nome,
    'cognome': cognome,
    'eta': eta,
    'residenza': residenza
};

// sintassi ES6
const persona3 =    {
    nome, // equivale a 'nome': nome
    cognome,
    eta,
    residenza
};

console.log(persona2);

console.log(persona3);


/* nomi di chiavi definite dal programma */

let miaChiave = 'ciao';

const myObject = {
    [miaChiave]: 'mondo'
};

console.log(myObject);


/* destructuring */

const automobile =     {
    marca: 'Fiat',
    modello: 'Panda',
    cilindrata: 1200,
    colore: 'Arancio'
};
/*
let marca = automobile.marca;
let colore = automobile['colore'];
*/

let { marca, colore, pippo } = automobile; // crea 3 variabili prelevando il valore dalla rispettiva chiave dell'oggetto

console.log(marca);
console.log(colore);
console.log(pippo);




/* spread base */

const oggetto1 =    { 
                        'pippo': 'pluto'
                    };

const oggetto2 = { ...oggetto1 };
oggetto2.pippo = 'paperino';

console.log(oggetto2);
console.log(oggetto1);










/* Spread su array*/
/* 
const pizze =       [
                        { 
                            'nome': 'magherita',
                            'prezzo': 6,
                            'vegetariana': true,
                        },
                        { 
                            'nome': 'napoli',
                            'prezzo': 6,
                            'vegetariana': false,
                        },
                    ];

                    

const pizzaConAltreInformazioni = 
{   
    ...pizze,
    'pizzaBianca': false
};





console.log(pizzaConAltreInformazioni);

*/


/* se io volessi implementare a mano l'operatore di spread */

const oggetto_1 = {
    proprieta_1 : 'valore_1',
    proprieta_2 : 'valore_2',
    proprieta_3 : 'valore_3',
};

const oggetto_2 = {};


//l'operatore di spread mi permette di copiare dentro un nuovo oggetto le proprietà dell'oggetto su cui applico lo spread ed è equivalente a:
//const oggetto_2 = {...oggetto_1};
for (let chiave in oggetto_1) {
    oggetto_2[chiave] = oggetto_1[chiave];
}

console.log(oggetto_2);










/* operazione di rest */


function somma(...valori) {

    let risultato = 0;
    for (let i = 0; i < valori.length; i++) {
        risultato = risultato + valori[i];
    }
    return risultato;

}


const risultato = somma(5,7,12,8,82,128,1,0,4,3);
console.log(risultato);



function sommaOMoltiplica(operazione, ...valori) {
    let risultato;
    if (operazione == "+") {
        risultato = 0; 
        for (let i = 0; i < valori.length; i++) {
            risultato = risultato + valori[i];
        } 
    } else if (operazione == "*") {
        risultato = 1;
        for (let i = 0; i < valori.length; i++) {
            risultato = risultato * valori[i];
        } 
    }
    return risultato;
}

console.log(sommaOMoltiplica('+',2,6,8));
console.log(sommaOMoltiplica('*',2,6,8));

