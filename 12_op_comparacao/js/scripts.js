var idade = 18;
// O JS entende o valor 0 como false
var possuiCarro = 0;

// Operador Maior ou Igual
if(idade >= 18) {
    console.log("O usuário pode fazer a carteira :D")
}

var idade = 17;

// Operador Menor ou Igual
if(idade <= 17) {
    console.log("O usuário ainda NÃO pode fazer a carteira, por ser menor de idade :(");
}

if(possuiCarro) {
    console.log("O usuário já pode andar de carro")
}

// Operador de igualdade 

var nome = "Emilly";

if(nome == "Emilly") {
    console.log("O seu nome é Emilly");
}


/* Não apreceu no console por que == está comparando a variável nome com "Emilly" resultando em false.


ex: 
    var nome = "Moitinho"
    if(nome = "Emilly") {
    console.log("O seu nome é Emilly")
}
*/

// Operador de diferente
if(nome != "Emilly") {
    console.log("O nome não é Emilly");
}

// Operadores Maior que e Menor que

if(20 > 10) {
    console.log("Passou");
}

if(100 < 20) {
    console.log("Passou 2")
}



