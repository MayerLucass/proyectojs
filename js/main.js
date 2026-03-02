// DOM

const contenedorProductos = document.getElementById("contenedor-productos");

const contenedorCarrito = document.getElementById("contenedor-carrito");

const contadorCarrito = document.getElementById("contador-carrito");

const totalCarrito = document.getElementById("total-carrito");

const mensajeVacio = document.getElementById("mensaje-vacio");

const botonVaciar = document.getElementById("btn-vaciar");


// ARRAYS

let productos = [];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];




// CARGAR PRODUCTOS DESDE JSON

fetch("data/productos.json")

.then(res => res.json())

.then(data => {

productos = data;

mostrarProductos();

});




// MOSTRAR PRODUCTOS

function mostrarProductos(){


contenedorProductos.innerHTML = "";


productos.forEach(producto => {


const card = document.createElement("div");

card.className = "card";


card.innerHTML = `


<img src="${producto.imagen}">


<h3>${producto.nombre}</h3>


<p>$${producto.precio}</p>


<button onclick="agregarAlCarrito(${producto.id})">


Agregar al carrito


</button>


`;


contenedorProductos.appendChild(card);


});


}




// AGREGAR AL CARRITO

function agregarAlCarrito(id){


const producto = productos.find(p => p.id === id);


carrito.push(producto);


guardarStorage();


mostrarCarrito();


}




// MOSTRAR CARRITO

function mostrarCarrito(){


contenedorCarrito.innerHTML = "";


contadorCarrito.innerText = carrito.length;


let total = 0;


if(carrito.length === 0){

mensajeVacio.style.display = "block";

}

else{

mensajeVacio.style.display = "none";

}



carrito.forEach((producto, index) => {


const card = document.createElement("div");

card.className = "card";


card.innerHTML = `


<img src="${producto.imagen}">


<h4>${producto.nombre}</h4>


<p>$${producto.precio}</p>


<button onclick="eliminarProducto(${index})">


Eliminar


</button>


`;


contenedorCarrito.appendChild(card);


total += producto.precio;


});


totalCarrito.innerText = total;


}




// ELIMINAR

function eliminarProducto(index){


carrito.splice(index, 1);


guardarStorage();


mostrarCarrito();


}




// VACIAR

botonVaciar.addEventListener("click", () => {


carrito = [];


guardarStorage();


mostrarCarrito();


});




// STORAGE

function guardarStorage(){


localStorage.setItem("carrito", JSON.stringify(carrito));


}




// INICIO

mostrarCarrito();