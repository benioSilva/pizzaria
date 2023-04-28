let text = "marcos"
let num = 2
let pers = { principal: "kit", lugar: 10 }
//console.log (pers.principal)
const lista = [text, num, pers, num + pers.principal]
//let num2 = num+=3
//let x = 3
//let num2 = num + x
//if (lista.principal>3) {console.log()} else{console.log("a variavel nao é maior que 3")}


//console.log(lista)
//console.log(lista[2])
//console.log(lista[0])
//console.log(lista[1])
//console.log(lista[2].principal)
//console.log(lista[3])
/* if (text > 3) {
    console.log(text);

}
else {
    console.log("a variavel nao é maior que 3");
} */
/* if (num > 3) {
    console.log(num);
} else {
    let soma = num + 3
    if (soma > 3) {
        console.log(soma);
    } else {
        console.log("a variavel nao é maior que 3")
    }
} */

/* if (pers.principal > 3) {
    console.log(pers.principal);
} else { console.log("a variavel nao é maior que 3"); }

if (pers.lugar > 3) {
    console.log(pers.lugar);
} else {
    console.log("a variavel nao é maior que 3");
}
 */

if (num > 3) {
    console.log(num) 
} else {
    var soma = minhaFuncao(num,2,text)
   
}
console.log(soma)
function minhaFuncao(n1,n2,text) {
    //var tra = tralala() 
    return n1+n2+text+tralala()


}

function tralala(){
    return 4
}
 //var tra = minhaFuncao(tralala)




