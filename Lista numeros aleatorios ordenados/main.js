let d=document;

/*Generar un array de numeros aleatorios y ordenarlos*/

let content=`
<button id="generar" onclick="generarNum()">Generar</button>
<br>
<ul id="lista"></ul>
`;

d.body.insertAdjacentHTML('beforeend',content);

function generarNum(){
    let lista=d.getElementById('lista');
    let numeros=[];
    for (let i=0; i<10; i++){//creamos lista
        numeros.push(Math.floor(Math.random() * 100));
    }
    numeros.sort((a, b) => a - b);//ordenamos lista
    for(let i=0; i<10; i++){//recorrido de lista
        lista.innerHTML+='<li>'+numeros[i]+'</li>'
    }
}