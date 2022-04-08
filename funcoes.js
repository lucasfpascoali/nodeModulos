function calculaIdade(birth_year) {
    return 2022 - birth_year;
}
module.exports.calculaIdade = calculaIdade;

function calculaIMC(weight, height) {
    return (weight / height ** 2).toFixed(2);
}
module.exports.calculaIMC = calculaIMC;