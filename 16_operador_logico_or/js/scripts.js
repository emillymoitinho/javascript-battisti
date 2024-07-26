var idade = 16;
var nomeCompleto = "Beatriz Monteiro da Silva";

/* O nome não corresponde, porém a idade sim. 

Portanto, como o operador OR(||) resulta em true se pelo menos um valor for true!!*/

if(nomeCompleto == "Rayssa Monteiro da Silva" || idade > 14) {
    console.log(` ${nomeCompleto}, pode acessar o Portal do Aluno!`)
} 

// Podemos também utilizar mais de uma operação 

if(nomeCompleto == "Emilly" && 15 > 20 || 10 == 10) {
    console.log("testando");
}

/* 
=== PARTE COM "&&" ===
nomeCompleto == "Emilly" --> false
15 > 20 --> false

=== PARTE COM "||"
10 == 10 --> true
======================

Foi execultado por conta do OR (II)
*/

if((nomeCompleto == "Emilly" || 15 > 20) && 10 == 10) {
    console.log("testando2");
} else {
    console.log("testando2 não entrou")
}

/* 
=== PARTE COM "||" ===
nomeCompleto == "Emilly" --> false
ou
15 > 20 --> false

PORTANTO: false || false e false

=== PARTE COM "&&" ===
10 == 10 --> true

PORTANTO: true

========================
RESULTADO FINAL: 
false && true --> FALSE

Porque && só retorna true se ambas 
condições forem true.
=========================

Já que o if resultou em false, o else será execultado com a mensagem "testando2 não entrou"

*/

if((nomeCompleto == "Emilly" || 30 > 20) && 10 == 10) {
    console.log("testando3");
} else {
    console.log("testando3 não entrou")
}

/* 
== PARTE COM OR(||)
Agora o if será execultado, porque:

nomeCompleto == "Emilly" --> false
or
30 > 20 --> true

PORTANTO: false || true e true

OR(||) -> true

== PARTE COM AND (&&)
10 == 10 -> true

Portanto: true
=========================

RESULTADO FINAL: TRUE && TRUE -> TRUE
O IF SERÁ EXECULTADO!!

A expressão (nomeCompleto == "Emilly" || 30 > 20) avalia para true porque 30 > 20 é true, independentemente do resultado da primeira parte. A segunda parte 10 == 10 também é true. Combinando true && true, o resultado total da expressão condicional é true, então o código dentro do if é executado e a mensagem "testando2" é exibida.

*/

if(nomeCompleto == "Emilly" || (30 > 20 && 10 == 10)) {
    console.log("testando4");
} else {
    console.log("testando4 não entrou")
}

/* 
== PARTE COM AND (&&)

30 > 20 --> true
and
10 == 10 --> true

PORTANTO: true


== PARTE COM OR(||)
nomeCompleto == "Emilly" --> false

PORTANTO: false

=============RESULTADO FINAL==============

TRUE || FALSE -> TRUE
O IF SERÁ EXECULTADO!!

A expressão condicional é avaliada da 
seguinte forma:

A expressão dentro dos parênteses 
(30 > 20 && 10 == 10) é true.

A expressão nomeCompleto == "Emilly" é false.

Combinando false || true, o resultado total 
da expressão é true.

Como resultado, o código dentro do if é 
executado e a mensagem "testando4" é exibida.

===============================================

*/

if(nomeCompleto == "Emilly" && (30 > 20 || 10 == 10)) {
    console.log("testando5");
} else {
    console.log("testando5 não entrou")
}

/* 
== PARTE COM OR(||) ==

30 > 20 --> true
or
10 == 10 --> true

PORTANTO: true


== PARTE COM AND (&&) ==
nomeCompleto == "Emilly" --> false

PORTANTO: false

=============RESULTADO FINAL==============

TRUE && FALSE -> FAlSE
O IF NÃO SERÁ EXECULTADO!!
O ELSE SERÁ EXECULTADO!!

A expressão condicional é avaliada 
da seguinte forma:

A expressão dentro dos parênteses 
(30 > 20 || 10 == 10) é true.
A expressão nomeCompleto == "Emilly" é false.
Combinando false && true, o resultado total 
da expressão é false.
Como resultado, o código dentro do else 
é executado e a mensagem "testando5 não entrou" 
é exibida.

================================================

*/



