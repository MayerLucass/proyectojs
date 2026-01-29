// Constantes y arrays
const productos = [
    { nombre: "Mouse", precio: 5000 },
    { nombre: "Teclado", precio: 8000 },
    { nombre: "Auriculares", precio: 12000 }
];

let carrito = [];

// Función 1 → mostrar productos (salida)
function mostrarProductos() {
    console.log("Productos disponibles:");
    for (let i = 0; i < productos.length; i++) {
        console.log(
            i + 1 + " - " + productos[i].nombre + 
            " $" + productos[i].precio
        );
    }
}

// Función 2 → agregar producto (entrada + proceso)
function agregarProducto() {
    let opcion = prompt(
        "Ingrese el número del producto que desea comprar:\n" +
        "1 - Mouse\n2 - Teclado\n3 - Auriculares"
    );

    if (opcion >= 1 && opcion <= productos.length) {
        carrito.push(productos[opcion - 1]);
        alert("Producto agregado al carrito");
    } else {
        alert("Opción inválida");
    }
}

// Función 3 → calcular total (proceso + salida)
function calcularTotal() {
    let total = 0;

    for (let i = 0; i < carrito.length; i++) {
        total += carrito[i].precio;
    }

    alert("El total de su compra es: $" + total);
}

// Programa principal
alert("Bienvenido al simulador de compras");

mostrarProductos();

let continuar = true;

while (continuar) {
    agregarProducto();
    continuar = confirm("¿Desea agregar otro producto?");
}

calcularTotal();
console.log("Carrito final:", carrito);
