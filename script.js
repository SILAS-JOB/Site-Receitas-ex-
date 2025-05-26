var num1 = promt("Enter a number: ");
var num2 = promt("Enter a second number: ");

var op = prompt("Choose an operation: ");

if (op === "soma") {
    var soma = num1 + num2;
    return soma;
} else if (op === "subtracao") {
    var subtracao = num1 - num2;
    return subtracao;
} else {
    document.write("Operação inválida. Por favor, escolha 'soma' ou 'subtracao'.");
    return null;
}

document.write("Resultado: " + resultado);

