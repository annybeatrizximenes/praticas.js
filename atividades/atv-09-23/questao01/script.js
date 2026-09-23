let reais = parseFloat(prompt("Digite o valor em reais:"));

let cotacao = 5.13;
let dolares = reais * cotacao;

alert("Valor em dólares: US$ " + dolares.toFixed(2));