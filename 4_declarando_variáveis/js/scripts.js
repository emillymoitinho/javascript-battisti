

var teste = 1;

    console.log(teste);

var nome = "João";

    console.log(nome);

teste = "Emilly";

    console.log(teste);


/* 
==== Não pode declarar variável com '@' e COMEÇANDO com número ====

    ex: var @nome = 'ASD';
        var 5nome = 'ASD3';

*/


var _mae = 'Neriã';

    console.log(_mae);

var $pai = 'Cloves';

    console.log($pai);

/* 
==== Quando for declarar uma variável com mais de uma palavra use a regra do camelCase: ====

    * Primeira letra da primeira palavra em *minusculo*;
    * As restantes começando com letra maiúsculas.
    
    EXEMPLO: var meuPrimeiroNome = 'Emilly';

    Porque fazer isso? Porque aumenta a LEGIBILIDADE DO CÓDIGO!!

    MAS... Nada impede de declarar assim:

    var meuprimeirornome = 'Emilly';
*/

var meuPrimeiroNome = 'Emilly';

    console.log(meuPrimeiroNome); //camelCase

// Provando que realmente funciona: 

var meusobrenome = 'Moitinho';

    console.log(meusobrenome);

/*

==== Outras Formas de declarar variáveis: ====

    * let
    * const
    
*/

let testando = 1;

    console.log(testando);

const ola = 2;

    console.log(ola);

/* Também é super normal declarar variáveis sem valor e ao longo do programa declarar o valor !! */

// exemplo: 

var meuNome;

meuNome = "Matheus";

console.log(meuNome);

/* 

==== Diferenças de var,let e const ==== 

    * var: começou a entrar em desuso; 

    * let: é para quando iremos associar um novo valor a essa variável:

    * const: é para quando teremos um valor fixo para aquela variável.

*/

// Uso de let:

let idade = 25;
if (idade > 18) {
    let adulto = true;
    console.log(adulto); // Imprime "true"
}

