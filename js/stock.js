// Inventario de Stock

// Variable ingresada por el usuario

const productosaIngresar = prompt("Cantidad de productos a ingresar: ")


class Productos{
    constructor(producto, stock) {

        this.producto = producto;
        this.stock = stock;

    }
}

for(let i = 1; i <= productosaIngresar; i++){
    
    const nombreProducto = prompt("Nombre del producto: ");
    const cantidadStock = prompt("Cantidad en stock: ");

    const productos = new  Productos (nombreProducto, cantidadStock);
    console.log(productos);
}