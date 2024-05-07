
alert ("Bienvenido a Mundo Fungi");
alert ("Aquí encontrarás información sobre cómo cultivar hongos para implementar en tu cocina y venta de kits para que puedas tener tu propia huerta en casa")

//constantes globales
const melenadeleón = 7000
const portobello = 4000
const gírcolas = 3500
const envío = 1500
const retiro = 0

//funciones
function multiplicar(valor1, valor2){
    const resultado1 = valor1 * valor2;
    return resultado1;
}

function sumar(valor3,valor4){
    const resultado2 = valor3 + valor4;
    return resultado2;
}

//selección de kit de cultivo y cantidad
let especie = prompt ("Ingresa la especie que quieres cultivar: melenadeleón, portobello, gírcolas");
let cantidad = parseInt(prompt("ingrese la cantidad de kit de cultivo que desea comprar"));


switch (especie){
    case "melenadeleón":
       resultado1 = multiplicar(melenadeleón, cantidad);
       alert("Monto a pagar $ "+ resultado1 + " ");
       break;
    case "portobello":
        resultado1 = multiplicar(portobello, cantidad);
        alert("Monto a pagar $ "+ resultado1 + " ");
        break;
    case "gírcolas":
        resultado1 = multiplicar(gírcolas, cantidad);
        alert("Monto a pagar $ "+ resultado1 + " ");
        break;
    default:
        alert("Operacion Invalida");
        break;

}

//selección de método de entrega
let entrega = prompt ("¿Desea retirar en el local o pedir un envío? Escriba: envío o retiro ")

switch (entrega){
    case "envío":
       resultado2 = sumar(resultado1, envío);
       alert("El total de su compra es de $ "+ resultado2 + ". Gracias por elegirnos ");
       break;
    case "retiro":
        resultado2 = sumar (resultado1, retiro);
        alert("El total de su compra es de $"+ resultado2 + ". Gracias por elegirnos ");
        break;
    default:
        alert("Operacion Invalida");
        break;
}
