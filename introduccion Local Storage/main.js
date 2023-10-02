const d=document;

let content=`
    <div id="mensaje"></div>

    <div>
        <label for="clave">Clave</label>
        <input type="text" name="clave" id="clave">
    </div>
    <div>
        <label for="valor">Valor</label>
        <input type="text" name="valor" id="valor">
    </div>
    <div>
        <button id="aniadir" onclick="aniadir()">Añadir</button>
        <button id="eliminar" onclick="eliminar()">Eliminar</button>
        <button id="mostrar" onclick="mostrar()">Mostrar</button>
        <button id="limpiar" onclick="limpiar()">Limpiar</button>
    </div>

    <div id="datos"></div>
`;

d.body.insertAdjacentHTML('beforeend',content);


// Añadimos registros----------------------------
function aniadir(){
    let clave=d.getElementById('clave').value;
    let valor=d.getElementById('valor').value;

    if (clave != '') {//si la clave no es vacía entonces...
        
        if (localStorage.getItem(clave)) {//si hay otra clave igual la edita
            d.getElementById('mensaje').innerHTML='<p>Se Editó el Registro</p>';
            clave.innerHTML='';
        }else{//si no la crea
            d.getElementById('mensaje').innerHTML='<p>Se Guardó el Registro</p>'; 
            clave.innerHTML='';
        }
        localStorage.setItem(clave,valor);//enviamos los datos
    }else{
        alert('La clave debe de tener un valor');
    }
}

// Eliminamos Registros----------------------------
function eliminar() {
    let clave=d.getElementById('clave').value;

    if(localStorage.getItem(clave)){
        localStorage.removeItem(clave);
        d.getElementById('mensaje').innerHTML='<p>Se Eliminó el Registro...</p>';
        clave.innerHTML='';
    }else{
        d.getElementById('mensaje').innerHTML=`<p>La clave ${clave} no existe...</p>`;
        clave.innerHTML='';
    }
}

// Muestreo de datos-------------------------------
function mostrar(){
    let divDatos=d.getElementById('datos');
    divDatos.innerHTML='';//si hay contenido existente lo limpiamos

    if(localStorage.length===0){//miramos la cantidad de datos en el local
        alert('No hay datos');
    }else{//si hay datos entonces....
        let contentTable=`
        <table border="1" id="tabla" style="background: white">
            <tr>
                <th>Clave</th>
                <th>Valor</th>
            </tr>
        </table>
        `;
    
        divDatos.insertAdjacentHTML('afterbegin',contentTable);
        let tabla=d.getElementById('tabla');
        for(let i=0; i<localStorage.length; i++){//recorremos toda la lista en el local 
            const key =localStorage.key(i);
            let fila=`<tr><td>${key}</td><td>`+localStorage.getItem(key)+`</td></tr>`;
            tabla.insertAdjacentHTML("beforeend", fila);
        }
    }

}

// Reseteo de datos-------------------------------
function limpiar() {
    alert('Se borraron  todos los datos');
    d.getElementById('datos').innerHTML="";
    localStorage.clear();
}