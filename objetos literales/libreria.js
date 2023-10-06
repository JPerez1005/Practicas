const d=document;

let libreria;
// Recuperar el valor del 'localStorage' y verificar si es nulo o indefinido
const listaAlmacenada = localStorage.getItem('libros');
if (listaAlmacenada === null || listaAlmacenada === undefined) {
    // Inicializar 'list' como un array vacío si no hay un valor almacenado
    libreria = [];
} else {
    // Parsear el valor almacenado como un array
    libreria = JSON.parse(listaAlmacenada);
}

if(libreria){
    const listaLibros = d.getElementById('listaLibros');
    listaLibros.innerHTML='';
    for (let i = 0; i < libreria.length; i++) {
        const libro = libreria[i];//tomar prestado el indice del array, o hacemos referencia a un libro de la libreria
        listaLibros.innerHTML+=`<div class="card_container">
        <article class="card_article">
        <img src="${libro.portada}" class="card_img">
        <div class="card_data">
        <h2>Titulo: ${libro.titulo}</h2>
        <span class="card_description">Autor: ${libro.autor}</span>
        <span class="card_description">Publicación: ${libro.publicacion}</span>
        <span class="card_description">Disponible: ${libro.disponible}</span>
        <span class="card_description">Prestado a: ${libro.prestado}</span>
        <button onclick="eliminarLibro(${i})">Eliminar</button>
        </div>
        </article>
        </div>`;
    }
}//si hay libros, coloquelos

function agregarLibro() {
    const titulo = d.getElementById('titulo').value;
    const publicacion = d.getElementById('publicacion').value;
    const autor = d.getElementById('autor').value;
    const disponible=d.getElementById('disponible').value;
    const prestado=d.getElementById('prestado').value;
    const portada=d.getElementById('portada').value;


    if (titulo && !isNaN(publicacion) && autor && disponible && prestado && disponible) {//eso lo que hace es ver si los datos estan vacios
        let libro = {//bien
            portada: portada,
            titulo: titulo,
            autor: autor,
            publicacion: publicacion,
            disponible: disponible,
            prestado: prestado
        };

        const validaPortada = portada.substring(0,8)
        if (validaPortada != 'https://'){
            alert('La direccion debe ser "https://"');
            return;
        }
        if (publicacion < 868 || publicacion > 2023){
            alert("Ingrese un año valido");
        }
        if (portada.includes('png') == true || portada.includes('jpg') == true || portada.includes('jpeg') == true ){
            libreria.push(libro);//que hace esta linea?no?
            console.log(libreria);//ahora?
            localStorage.setItem('libros',JSON.stringify(libreria));  
        }
        else {
            alert('Ingresa una imagen jpg, png o jpge');
        }

        

        mostrarLibros();
        
        // Limpiar los campos del formulario
        d.getElementById('titulo').value = '';
        d.getElementById('publicacion').value = '';
        d.getElementById('autor').value = '';
        d.getElementById('disponible').value = '';
        d.getElementById('prestado').value = '';
        d.getElementById('portada').value = '';
    } else {
        alert('Por favor, complete todos los campos.');
    }

}

function mostrarLibros() {//aca?
    const listaLibros = d.getElementById('listaLibros');
    listaLibros.innerHTML = '';

    for (let i = 0; i < libreria.length; i++) {
        const libro = libreria[i];//tomar prestado el indice del array, o hacemos referencia a un libro de la libreria
        listaLibros.innerHTML+=`<div class="card_container">
        <article class="card_article">
        <img src="${libro.portada}" class="card_img">
        <div class="card_data">
        <h2>Titulo: ${libro.titulo}</h2>
        <span class="card_description">Autor: ${libro.autor}</span>
        <span class="card_description">Publicación: ${libro.publicacion}</span>
        <span class="card_description">Disponible: ${libro.disponible}</span>
        <span class="card_description">Prestado a: ${libro.prestado}</span>
        <button onclick="eliminarLibro(${i})">Eliminar</button>
        </div>
        </article>
        </div>`;
    }
}

function eliminarLibro(index) {
    if (index >= 0 && index < libreria.length) {
        libreria.splice(index, 1); // Elimina 1 elemento en la posición 'index' del arreglo 'libreria'
        localStorage.setItem('libros', JSON.stringify(libreria)); // Actualiza el localStorage
        mostrarLibros(); // Vuelve a mostrar la lista de libros actualizada
    } else {
        alert('Índice no válido');
    }
}

/* Orden de los libros */

const ordenSelect = d.getElementById('ordenSelect');
const listaLibros = d.getElementById('listaLibros');

function mostrarLibrosOrdenados(criterioOrden) {
    libreria.sort((a, b) /*Agarramos dos elementos de la lista*/=> {
        if (a[criterioOrden] < b[criterioOrden]) return -1;//si a es menor que b , antepone a antes que b
        if (a[criterioOrden] > b[criterioOrden]) return 1;//lo de arriba pero al reves
        return 0;//no hace ningun cambio
    });

    // Limpia la lista actual de libros en el HTML
    listaLibros.innerHTML = '';

    // Vuelve a mostrar los libros ordenados
    for (let i = 0; i < libreria.length; i++) {
        const libro = libreria[i];
        listaLibros.innerHTML += `<div class="card_container">
            <article class="card_article">
                <img src="${libro.portada}" class="card_img">
                <div class="card_data">
                    <h2>Titulo: ${libro.titulo}</h2>
                    <span class="card_description">Autor: ${libro.autor}</span>
                    <span class="card_description">Publicación: ${libro.publicacion}</span>
                    <span class="card_description">Disponible: ${libro.disponible}</span>
                    <span class="card_description">Prestado a: ${libro.prestado}</span>
                    <button onclick="eliminarLibro(${i})">Eliminar</button>
                </div>
            </article>
        </div>`;
    }
}

ordenSelect.addEventListener('change', function () {
    const criterioOrden = ordenSelect.value;

    if (criterioOrden === 'titulo') {
        mostrarLibrosOrdenados('titulo');
    } else if (criterioOrden === 'autor') {
        mostrarLibrosOrdenados('autor');
    } else if (criterioOrden === 'publicacion') {
        mostrarLibrosOrdenados('publicacion');
    }
    // Agrega más condiciones para otros criterios de ordenamiento si es necesario
});

// Llama a la función para mostrar los libros inicialmente
mostrarLibrosOrdenados('titulo'); // O cualquier criterio de ordenamiento inicial

/*ANIMACIONES*/
const body = document.body;
const cardContainers = document.querySelectorAll('.card_container');

cardContainers.forEach(container => {
    container.addEventListener('mouseenter', () => {
        body.classList.add('blur');
    });

    container.addEventListener('mouseleave', () => {
        body.classList.remove('blur');
    });
});

/*Aparicion agregar libro*/
const wrapper=document.querySelector('.wrapper'),
btnPopup=document.querySelector('.btnAdd-popup'),
iconClose=document.querySelector('.icon-close');

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup')
})