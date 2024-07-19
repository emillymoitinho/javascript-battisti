// Hoisting - içamento
console.log(sobrenome); // undefined
console.log(numero); // underfined

var nome = null;
var sobrenome = "Moitinho";

console.log(nome); // null
console.log(sobrenome); // "Moitinho"

nome = "Emilly";

console.log(nome); // "Emilly"

var numero = 5;
console.log(numero) // 5

/* 

==== Hoisting - O que é? ====

Hoisting é um conceito no JavaScript onde declarações de variáveis e funções são movidas para o topo de seus escopos durante a fase de compilação, antes mesmo de o código ser executado linha por linha. 

Isso significa que, mesmo que você declare uma variável ou função mais tarde no código, o JavaScript as processará como se tivessem sido declaradas no início do escopo em que estão.

Por exemplo:

console.log(x); // undefined
var x = 5;
console.log(x); // 5

No primeiro console.log, x é undefined porque, durante a fase de compilação, a declaração var x; é "movida" para o topo do escopo, então x existe, mas ainda não possui um valor atribuído. 

Somente depois, na linha x = 5;, é que x recebe o valor 5.

*/
