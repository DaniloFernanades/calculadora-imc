document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');

    let currentInput = '';
    let firstOperand = null;
    let operator = null;
    let waitForSecondOperand = false;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            // Se o botão for um número ou o ponto decimal
            if (button.classList.contains('number') || button.classList.contains('decimal')) {
                if (waitForSecondOperand) {
                    currentInput = value;
                    waitForSecondOperand = false;
                } else {
                    currentInput += value;
                }
                display.value = currentInput;
            }

            // Se o botão for um operador (+, -, *, /)
            if (button.classList.contains('operator')) {
                if (firstOperand === null) {
                    firstOperand = parseFloat(currentInput);
                } else if (operator) {
                    const result = performCalculation();
                    display.value = result;
                    firstOperand = result;
                }

                operator = value;
                waitForSecondOperand = true;
            }

            // Se o botão for o de igual (=)
            if (button.classList.contains('equal')) {
                if (operator) {
                    const result = performCalculation();
                    display.value = result;
                    firstOperand = result;
                    operator = null;
                    currentInput = result.toString();
                    waitForSecondOperand = true;
                }
            }

            // Se o botão for o de limpar (C)
            if (button.classList.contains('clear')) {
                currentInput = '';
                firstOperand = null;
                operator = null;
                waitForSecondOperand = false;
                display.value = '';
            }
        });
    });

    function performCalculation() {
        const secondOperand = parseFloat(currentInput);
        let result = 0;

        switch (operator) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                if (secondOperand === 0) {
                    return 'Erro';
                }
                result = firstOperand / secondOperand;
                break;
            default:
                break;
        }

        return result;
    }
});