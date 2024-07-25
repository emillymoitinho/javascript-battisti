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