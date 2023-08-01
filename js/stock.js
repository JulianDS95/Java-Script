// Inventario de Stock
document.title="Stock";

// Variable ingresada por el usuario

const productosaIngresar = prompt("Cantidad de productos a ingresar: ")

const arrayProducto = [];


class Productos{
    constructor(producto, stock, precio) {

        this.producto = producto;
        this.stock = stock;
        this.precio = precio;

    }
}

do{    
    const nombreProducto = prompt("Nombre del producto: ");
    const cantidadStock = prompt("Cantidad en stock: ");
    const precioProducto = prompt("Precio de: " + nombreProducto);

    arrayProducto.push (new  Productos (nombreProducto, cantidadStock, precioProducto));
    //arrayStock.push (cantidadStock);

}while(arrayProducto.length != productosaIngresar)

console.log(arrayProducto);









