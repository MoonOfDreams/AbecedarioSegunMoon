const abc=require("./letras");

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

let hola="feli quiero blockazo"
console.log(hola)
console.log(convertir(hola))
