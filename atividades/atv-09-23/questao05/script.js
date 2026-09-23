let horaAula = parseFloat(prompt("Digite o valor da hora-aula:"));

let horas = parseFloat(prompt("Digite a quantidade de horas trabalhadas:"));

let salario = horaAula * horas;

alert("O salário do professor é: R$ " + salario.toFixed(2));