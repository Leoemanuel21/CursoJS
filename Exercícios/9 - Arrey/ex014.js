let num = [5, 8, 2, 9, 3];
num.push(1); //Cria e adicionar na última casa
num.sort(); //Ordena em ordem crescente
console.log(num);
console.log(`O vetor tem ${num.length}posições`); //length mostrar a quantidade
console.log(`O primeiro valor do vetor é ${num[0]}`);

let pos = num.indexOf(8); //Procura a posição na memoria
console.log(`O valor 8 está na posição ${pos}`);