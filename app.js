const { calculaIdade, calculaIMC } = require('./funcoes');

// Execute o arquivo e passe os seguintes parâmetros nessa ordem
// node app.js <idade> <peso> <altura>
const idade = process.argv[2];
const peso = process.argv[3];
const altura = process.argv[4];

console.log(`Idade: ${calculaIdade(idade)}`);
console.log(`IMC: ${calculaIMC(peso, altura)}`);