const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function runCalculator() {
    console.log("Calculadora de IMC");
    console.log("----------------------------");

    const pesoString = await askQuestion("Digite seu peso (em kg): ");
    const alturaString = await askQuestion("Digite sua altura (em metros): ");

    const peso = parseFloat(pesoString);
    const altura = parseFloat(alturaString);

    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        console.log("Erro: digite valores válidos para peso e altura.");
        rl.close();
        return;
    }

    const imc = peso / (altura * altura);

    console.log("----------------------------");
    console.log(`Seu IMC é: ${imc.toFixed(2)}`);

    if (imc < 18.5) {
        console.log("Classificação: Abaixo do peso");
    } else if (imc >= 18.5 && imc < 24.9) {
        console.log("Classificação: Peso normal");
    } else if (imc >= 25 && imc < 29.9) {
        console.log("Classificação: Sobrepeso");
    } else if (imc >= 30 && imc < 34.9) {
        console.log("Classificação: Obesidade grau 1");
    } else if (imc >= 35 && imc < 39.9) {
        console.log("Classificação: Obesidade grau 2");
    } else {
        console.log("Classificação: Obesidade grau 3");
    }

    rl.close();
}

runCalculator();