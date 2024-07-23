//OBJETO: COLEÇÃO DE PROPRIEDADES

let obj = {
    nome: "Emilly",
    idade: 18,
    profissao: "Estudante",
    estaTrabalhando: false,
};

console.log(obj);

console.log(typeof obj);

console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);

console.log(`O meu nome é, ${obj.nome}`);

obj.nome = "Moitinho";

console.log(obj);

obj.graduacao = true;

console.log(obj)