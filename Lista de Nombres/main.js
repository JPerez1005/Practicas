const d=document;

let content=`
<form>
    <input id="nombre" type="text" placeholder="Ingrese un nombre...">
    <button onclick="insertarNombre(event)">Insertar</button>
</form>
<div>
    <ul id="lista-nombres"></ul>
</div>
`;

d.body.insertAdjacentHTML('beforeend', content);

function insertarNombre(e){
    e.preventDefault();//como es un form se previene valores por defecto

    let nombre=d.getElementById('nombre').value;

    if (nombre==""){//si el input está vacio
        alert('Digite algo en la caja');
    }else if(!isNaN(nombre)){
        alert('No digite numeros');
    }else{
        let opcion="<li>" + nombre + "</li>";
        let lista=d.getElementById('lista-nombres');

        lista.innerHTML+=opcion;

        alert("Se ah insertado el nombre");
    }

}