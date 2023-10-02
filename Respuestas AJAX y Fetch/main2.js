function cargarJSON() {
    let url = 'datos.json';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('La solicitud no se completó correctamente');
            }
            return response.json();
        })
        .then(data => {
            console.log('Recibida la información del archivo JSON:', data[2]["nombre"]);
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
        });
}

window.onload = cargarJSON;
