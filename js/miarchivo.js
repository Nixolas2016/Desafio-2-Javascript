/*let precioFinal = Number(prompt("Indique cual fue el precio final se su compra"))


for (let i = 1; i <= 1000; i++) {
    if (i % 2 === 0) {
        console.log(`El numero ${i} es PAR`);
    } else {
        console.log(`El numero ${i} es IMPAR`);
    }



const suma  = (a,b) => a + b
const resta = (a,b) => a - b

const iva   = x => x * 0.21
let precioProducto  = 1000
let descuento = 500

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento) 
console.log(nuevoPrecio)


alert ("Si el precio final del producto es PAR se lleva un premio de regalo")

if  (precioFinal == 2 || precioFinal == 4 || precioFinal == 3 || precioFinal == 4) {
    (console.log("Felicitaciones, su numero es " + nuevoPrecio));
    } else (precioFinal == 1 && precioFinal == 3 && precioFinal == 5 && precioFinal == 7); {
    (console.log("Mala suerte, su numero es " + nuevoPrecio));
    }
*/

let numeroIngresado = Number(prompt ("Ingrese cual fue el precio final de su compra"))

function solicitarNumero() {
    alert("El numero ingresado es " + numeroIngresado)
}

solicitarNumero();

alert ("Si el precio final del producto supera los 500$, se lleva un cupon del 15% de descuento en la proxima compra")

if (numeroIngresado >= 500) {
    alert("Felicitaciones, recibiste un cupon del 15% de descuento para tu proxima compra");
} else {
    alert("Los usuarios que gasten mas de 500$ en productos recibiran un cupon del 15% de descuento como regalo")
}

if (numeroIngresado <= 0) {
    alert("Ingrese un numero valido para la proxima")
}

