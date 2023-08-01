// Inventario de Stock
document.title="Stock";

// Variable ingresada por el usuario

const productosaIngresar = prompt("Cantidad de productos a ingresar: ")

const arrayProducto = [];


class Productos{
    constructor(producto, stock) {

        this.producto = producto;
        this.stock = stock;

    }
}

do{    
    const nombreProducto = prompt("Nombre del producto: ");
    const cantidadStock = prompt("Cantidad en stock: ");

    arrayProducto.push (new  Productos (nombreProducto, cantidadStock));
    arrayStock.push (cantidadStock);

}while(arrayProducto.length != productosaIngresar)

console.log(arrayProducto);






