// console.log("começando o programa")
// let x = 10;
// // Here x is 10
// console.log(x)

// {
// let x = 2;
// console.log(x)
// // Here x is 2
// }

// // Here x is 10 
// let y = Math.ceil(4.9);
// console.log(y)
// let z = Math.ceil(4.7);
// console.log(z)
// let a = Math.round(4.4);
// let b = Math.ceil(4.2);
// let c = Math.ceil(-4.2);
// console.log(c)
// console.log(a)
// let i = 2;
// while (i < 10) {
//   console.log(i); 
// i = i + 2;
//}
let teste = testeFuncao(4,2,3) 
console.log(teste)

function testeFuncao(a,b,c) {
  return (a + b) * c;
}

let x = teste2funcao(3,2)
console.log(x)
function teste2funcao(x,y) {
  return x + y 
}


b = 4
a = 7
let fx = a + b
console.log (fx)
if(fx > 11) {
console.log (fx)
} else {
  let total = fx + 3 
 if(total > 11) {console.log (total)
} else {
  console.log("variavel menor que 11")
}
}

let safx = a + b + fx;
if (safx <16) {
  console.log("reprovado")
} else if (safx < 20) {
  console.log("recuperação")
} else {
    console.log("aprovado")
}

const car1 = {tipo:"Fiat", modelo:"Uno", cor: "azul", info: function() {return this.tipo + " " + this.modelo + " " + this.cor}};
const car2 = {tipo:"Toyota", modelo:"Corolla", cor:"vermelho"};
const car3 = {tipo:"Ford", modelo:"KA", cor:"prata"};
const car4 = {tipo:"Chevrolet", modelo:"Onix", cor:"branco"};
const carros = [car1, car2, car3, car4];
const proprietario =  ["Afolso", "Guilherme", "Rogerio", "Sergio"];
const anoPosse = ["2000", "2005", "2010", "2015"];

let p1 =  car1.info() = " " + 
console.log (p1)
