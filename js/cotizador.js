// Cotizador Impresión 3D

document.title = "Cotizador 3D"

// Variables ingresadas por el usuario

const pesoPieza = prompt("Ingrese el peso de la pieza:");
const tiempoImpresion = prompt("Ingrese el tiempo de impresión:");
//const superficieImpresion = prompt("Indique tamaño del área de impresión:");
const material = prompt("Ingrese el material: PLA - Pet-g - ABS - Flex");

// Variables fijas

let precioFilamento = 0;

const pesoMaterial = 1000;
const valorKwh = 15;
let consumoImpresora = 150;  //Cambia segun la impresora

const desgasteImpresora = 5000;
const repuestos = 5500;
const porcentajeError = 40/100;

const ganancias = 4;


if(material== 0 ){
    console.log("No ingreso el valor correspondiente")
}
else{
    switch (material){

        case "PLA":
            precioFilamento = 5000;
        break
        case "Pet-g":
            precioFilamento = 5000;
        break
        case "ABS":
            precioFilamento = 5000;
        break
        case "Flex":
           precioFilamento = 5000;
        break  
    } 
    console.log("El precio del filamento es: " + precioFilamento)
}

function precioMaterial (peso){

   let a = 0;

    a =  peso * precioFilamento;
    let c = a / 1000;
    console.log("Precio Material= " + c)

    return c
    
}

function preciLuz (){

    let a = 0;
    let b = 0;
 
     a =  consumoImpresora * valorKwh;
     b = a / 1000;
     let c = b * tiempoImpresion
     console.log("Precio Luz= " + c)

     return c
 }

function desgasteMaquina (desgaste, rep){

    let a = 0;

    a = desgaste / rep;
    let c = a * tiempoImpresion;
    console.log("Desgaste MAquina= " + c)

    return c
    
}

function margenError (a,b,c){

    
    a = precioMaterial(pesoPieza);
    b = preciLuz();
    c = desgasteMaquina(desgasteImpresora, repuestos);
    let d = a + b + c;
    let f = d * porcentajeError
    let g = d + f;
    console.log("Margen de error= " + g)
    return g
}

function valorImpresión (){
    let a = margenError (precioMaterial(pesoPieza), preciLuz(), desgasteMaquina(desgasteImpresora, repuestos)) * ganancias;
    return a
}

console.log("El valor aproximado de la impresión es de: " + valorImpresión());