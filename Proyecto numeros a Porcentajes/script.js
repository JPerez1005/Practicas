const d = document;
d.addEventListener('DOMContentLoaded', function () {
    // Tu código aquí
    let inputNum=`
    <div class="inputBox">
        <input type="number" id="porcentaje" required="required">
        <span>Digite un porcentaje:</span>
        <i></i>
    </div>
    <div class="inputBox">
        <input type="number" id="registro" required="required">
        <span>Digite un numero:</span>
        <i></i>
    </div>
    <button id="btn">
        <i></i>
        <i></i>
        <span>Registrar</span>
    </button>
    <br>
    <div class="box">
        <h2>Lista de resultados</h2>
        <ul id="lista"></ul>
    </div>
    `;
    d.body.insertAdjacentHTML('afterbegin',inputNum);

    let inputId = d.getElementById('registro');
    let btn = d.getElementById('btn');
    let listaId = d.getElementById('lista');
    let porcentaje=d.getElementById('porcentaje');
    let contador = 1; // Inicializamos el contador con el valor deseado

    btn.addEventListener('click', function () {
        let dato = inputId.value;
        let porcentajeValor = parseFloat(porcentaje.value); // Obtener el valor del porcentaje
    
        if (!isNaN(porcentajeValor)) { // Verificar si el porcentaje es un número válido
            let calc = ((dato * porcentajeValor) / 100).toFixed(2); // Calcula el porcentaje y redondeamos a 2 decimales
            let calcFormateadoConSeparadores = parseFloat(calc).toLocaleString(); // Agrega separadores de miles
            let li = `<li><span>${contador}</span>${calcFormateadoConSeparadores}</li>`;
            listaId.insertAdjacentHTML('beforeend', li);
            contador++;
        } else {
            alert('Porcentaje no válido'); // Mostrar un mensaje de error si el porcentaje no es válido
        }
    });
    // Stilos
    btn.addEventListener('mousemove', e =>{
        let rect= e.target.getBoundingClientRect();
        let x= e.clientX-rect.left;
        btn.style.setProperty('--x', x+'deg');
    });
});
