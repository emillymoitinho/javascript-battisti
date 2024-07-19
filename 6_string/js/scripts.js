
//TREINANDO O TIPO DE DADO STRING 

let nome = "Emilly";
let priSobrenome = "Soares";
let segSobrenome = "Moitinho";

// Nome ao contrario 
let nomeAoContrario = "yllimE";
let priSobreAoContrario = "seraos";
let segSobreAoContrario = "ohnitiom";

let centoeTrinta = "130";


// Com o tipo de dado String é posssível concatenar(juntar):

let nomeePriSobrenome = nome + " " + priSobrenome;

let nomeeSegSobrenome = nome + " " + segSobrenome;

let nomeCompleto = nome + " " + priSobrenome + " " + segSobrenome;

let nomeCompletoAoContrario = nomeAoContrario + " " + priSobreAoContrario +  " " + segSobreAoContrario

console.log(nome);
console.log(typeof nome);

console.log(typeof "asd");

console.log(nomeePriSobrenome);

console.log(nomeeSegSobrenome);

console.log(nomeCompleto);

console.log(nomeAoContrario);

console.log(priSobreAoContrario);

console.log(segSobreAoContrario);

console.log(nomeCompletoAoContrario);

// Número entre aspas "" é considerando um string:

console.log(typeof "5.292929");

let frase = 'Esta é uma frase complexa';

console.log(frase);
console.log(typeof frase)

// Podemos concatenar as string com aspas simples e duplas sem problema:

console.log(nome + " " + frase);


/* 
    Para escrever um texto entre aspas como esse exemplo: 
    ex: document.write("Ele disse: "Olá"")

    Esse exemplo não vai funcionar, porque ele vai tentar achar uma variável 'Olá.
*/

// Deve colocar a frase entre aspas simples e o Hello entre aspas duplas: 

document.write('Ele disse: "Hello"')/* O document.write()método grava uma sequência de texto em um fluxo de documentos 

ATENÇÃO: O uso do document.write()método é fortemente desencorajado.*/

// Ou ao contrário :

document.write("Ele disse: 'Hello'");

// String + Number 
console.log("cento e trinta e dois = " + centoeTrinta);

// Uso de string 

let saudacao = "Hello, world!";
console.log(saudacao)

let resposta = "How are you?";
let sla = "A resposta é:" + resposta;
console.log(sla);