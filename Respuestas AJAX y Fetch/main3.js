function enviarDatos() {
    let url = 'datos.json'; // Reemplaza esto con la URL de tu API

    // Datos que deseas enviar al servidor en formato JSON
    let datos = {
        nombre: 'David',
        edad: 23
    };

    fetch(url, {
        method: 'POST', // Método HTTP POST
        headers: {
            'Content-Type': 'application/json' // Tipo de contenido JSON
        },
        body: JSON.stringify(datos) // Convierte los datos a formato JSON
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('La solicitud no se completó correctamente');
        }
        return response.json();
    })
    .then(data => {
        console.log('Respuesta del servidor:', data);
    })
    .catch(error => {
        console.error('Error al enviar los datos:', error);
    });
}

let content=`
    <button id="btnEnviar">Enviar Datos</button>
`;

document.body.insertAdjacentHTML('beforeend', content);

// Llama a la función para enviar los datos cuando sea necesario
// Por ejemplo, cuando se haga clic en un botón:
document.getElementById('btnEnviar').addEventListener('click', enviarDatos);
