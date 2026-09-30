const carro = {
    marca : "Volkswagen",
    modelo: " Nivus" ,
    ano: 2026,
    cor: "cinza",
    buzinar: function() {
        console.log("Estou buzinando...")
    } , 
    acelerar: function () {
            this.velocidade = this.velocidade +10;
    }
   }
   console.table(carro);

   carro.cor= "azul"

   console.table(carro);
   console.log('O ano do caro é: ${carro.ano}');

   carro.buzinar();
   carro.acelerar();
   carro.acelerar();
   console.table(carro);

