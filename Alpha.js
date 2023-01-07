const abc=require("./letras");
const def=require("./letra2")
function convertir(texto){
    let textoTraducido= ""
    for(let i=0;i< texto.length;i++){
        if(texto[i]===" "){
            textoTraducido= textoTraducido + " "
        } else {
        textoTraducido = textoTraducido + abc[texto[i].toLowerCase()]
    }};
    return textoTraducido
}
function revertir(texto){
    let textoTraducido= ""
    for(let i=0;i< texto.length;i++){
        if(texto[i]===" "){
            textoTraducido= textoTraducido + " "
        } else {
        textoTraducido = textoTraducido + def[texto[i].toLowerCase()]
    }};
    return textoTraducido
}

let hola="feli quiero blockazo"
let saludos="]564 <14529 /693*7)9"
console.log(hola)
console.log(convertir(hola))
console.log(revertir(saludos))
