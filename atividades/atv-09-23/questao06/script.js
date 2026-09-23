let n1 = parseFloat(prompt("Digite a nota da N1:"));

let n2 = parseFloat(prompt("Digite a nota da N2:"));

let notaFinal = (n1 * 2 + n2 * 3) / 5;

if (notaFinal >= 6) {
    alert("Nota final: " + notaFinal.toFixed(1) + 
          "\nAluno aprovado!");
} else {
    alert("Nota final: " + notaFinal.toFixed(1) + 
          "\nAluno reprovado!");
}