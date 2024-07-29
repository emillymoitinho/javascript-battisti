var x = 1;
var y = 2;

// soma
console.log(x = x + y); // 3
console.log(x += y); //5

//subtração 
console.log(x -= y); //3

// multiplicação
console.log(x *= y); //6

//divisão
console.log(x/=y); //3

// loops
console.log(x++);
console.log(x--);

while(x <= 100) {
    console.log(x);

    x *= 2;
}

console.log(x);

var j = 5;

while(x > 0) {
    console.log(x);

    x -= j;
}




/* 
Soma:

x = x + y atualiza x para 3.
x += y atualiza x para 5.

Subtração:

x -= y atualiza x para 3.
Multiplicação:

x *= y atualiza x para 6.

Divisão:

x /= y atualiza x para 3.
Cada linha de console.log imprime o valor atualizado de x após a operação correspondente.

*/
