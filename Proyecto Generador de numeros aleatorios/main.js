const d=document;

let content=`
<button onclick="generarNumeros()">mostrar numeros</button>
<select id="elementos"></select>
`;//contenido html

d.body.insertAdjacentHTML('beforeend', content);//metemos el contenido html en el body

function getRandomInt(min,max){//creamos la funcion para asignar numeros random
    return Math.floor(Math.random() * (max-min))+min;
}

function generarNumeros(){
    let elementos=d.getElementById('elementos');//focuseamos el select

    let opcionesGeneradas="";

    for(let i=0;i<10;i++){
        opcionesGeneradas+="<option>"+ getRandomInt(1,100) +"</option>";
        //al select le metemos cada una de las opciones
    }

    elementos.innerHTML=opcionesGeneradas;//Las opciones las metemos dentro de el select
}