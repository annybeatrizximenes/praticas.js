let inicio = parseInt(prompt("Digite o primeiro valor:"));

let fim = parseInt(prompt("Digite o segundo valor:"));

let impares = "";

for (let i = inicio; i <= fim; i++) {

    if (i % 2 !== 0) {
        impares += i + " ";
    }

}

alert("Números ímpares:\n" + impares);