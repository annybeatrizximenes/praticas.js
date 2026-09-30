const livro = {
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    paginas: 96,

    resumo: function() {
        return this.titulo + " foi escrito por " + this.autor +
        " e possui " + this.paginas + " páginas.";
    }
};

console.log(livro.resumo());


const nums = [1, 2, 3, 4, 5];

const original = [...nums];

nums.shift();   
nums.pop();     
nums.unshift(0); 
nums.push(6);    

console.log("Array original:", original);
console.log("Array resultante:", nums);
