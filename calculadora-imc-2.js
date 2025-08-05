const numero1 = await askQuestion("Digite o primeiro número: ");
const numero2 = await askQuestion("Digite o primeiro número: ");

function calcular(numero1, numero2) {
    let result = 0;
    switch (operador) {
        case '+':
            result = numero1 + numero2
        case '-':
            result = numero1 - numero2
        case '*':
            result = numero1 * numero2
        case '/':
            if (numero1 != 0 && numero2 != 0) {
                result = numero1 / numero2
            }
        default:
            return 'operacao invalida'
    }
    return result
}

calcular(numero1, numero2)
