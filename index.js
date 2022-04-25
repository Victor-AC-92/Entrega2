//Este es un carrito de compras
const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const iva = x => x*0.21;

let cont = 0

do{
    let producto1 = parseFloat(prompt("Ingresa el precio del primer producto comprado"));
    let producto2 = parseFloat(prompt("Ingresa el precio del segundo producto comprado"));
    let producto3 = parseFloat(prompt("Ingresa el precio del tercer producto comprado"));

    let precio1 = suma(producto1, iva(producto1));
    let precio2 = suma(producto2, iva(producto2));
    let precio3 = suma(producto3, iva(producto3));

    let p1 = (precio1 > 0);
    let p2 = (precio2 > 0);
    let p3 = (precio3 > 0);


    function carrito(){
        if ((p1 == true && p2 == false && p3 == false) || (p1 == false && p2 == true && p3 == false) || (p1 == false && p2 == false && p3 == true)) {
            return alert("Has agregado 1 objeto en tu carrito"), 1;     
        } else if ((p1 == true && p2 == true && p3 == false) || (p1 == false && p2 == true && p3 == true) || (p1 == false && p2 == false && p3 == true)){
            return alert("Has agregado 2 objetos en tu carrito"), 2;        
        } else if (p1 && p2 && p3){
            return alert("Has agregado 3 objetos en tu carrito"), 3;       
        } else if (p1 == false && p2 == false && p3 == false){
            return alert("No tienes objetos en tu carrito"), 0;
        }
    }

    console.log("Producto 1 = " + precio1 + ", ", "Producto 2 = " + precio2 + ", ", "Producto 3 = " + precio3 + ".");
    cont += carrito();
    console.log(cont);
} while (prompt("Terminó de comprar?") != "Si");

