var idade = 16;
var nome = "Isabella";

if(nome == "Isabella" && idade == 16) {
    console.log("A aluna Isabela pode entrar na Aula de Português :D")
} else { 
    console.log("Não cadastrado no nosso sistema. Portanto não poderá participar da Aula de Português :c")
}

// Também posso adicionar mais expressões 
if((1 == 1 && 3 > 2) && true) {
    console.log("Passou :D");
}

// Não vai aprecer no console, porque 2 não é maior que 2 resultando em false. Agora o else if vai aparecer!!
if((1 == 1 && 3 < 2) && true) {
    console.log("Passou :D");
} else if(nome === "Isabella" && idade >= 14) {
    console.log("Aqui passa!")
}

