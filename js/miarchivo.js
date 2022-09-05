let precioFinal = Number(prompt("Indique cual fue el precio final se su compra"))


for (let i = 1; i <= 1000; i++) {
    if (i % 2 === 0) {
        console.log(`El numero ${i} es PAR`);
    } else {
        console.log(`El numero ${i} es IMPAR`);
    }
}


const suma  = (a,b) => a + b
const resta = (a,b) => a - b

const iva   = x => x * 0.21
let precioProducto  = 1000
let descuento = 500

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento) 
console.log(nuevoPrecio)


alert ("Si el precio final del producto es PAR se lleva un premio de regalo")

if  (precioFinal == 2, 4, 6, 8, 10) {
    (console.log("Felicitaciones, su numero es " + nuevoPrecio));
    } else (precioFinal == 1, 3, 5, 7, 9); {
    (console.log("Mala suerte, su numero es " + nuevoPrecio));
    }
