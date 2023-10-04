//Navigation bar effects on scroll
window.addEventListener('scroll', function(){
    const header=this.document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY>0);
});



//REsponsive navigation menu toggle

const menuBtn=document.querySelector('.nav_menu_btn');
const closeBtn=document.querySelector('.nav_close_btn');
const navigation=document.querySelector('.navigation');

menuBtn.addEventListener('click', ()=>{
    navigation.classList.add('active');
});

closeBtn.addEventListener('click',()=>{
    navigation.classList.remove('active');
});

// Ejemplo1

const d=document;


let lista2=[];
function agregar(){
    let name=d.getElementById('nombre').value;//solo el valor
    let lista=d.getElementById('lista');//nos adueñamos de la lista
    lista2.push(name);
    lista.innerHTML='';
    for(let i=0; i<lista2.length; i++){
        lista.innerHTML+='<li>'+lista2[i]+'</li>';
    }
    name.innerHTML='';
}

function eliminar(){
    let lista=d.getElementById('lista');//nos adueñamos de la lista
    lista2.pop();
    lista.innerHTML='';
    for(let i=0; i<lista2.length; i++){
        lista.innerHTML+='<li id=item'+i+'>'+lista2[i]+'</li>'; //volvemos a mostrar
    }
}

function removerTodo(){
    let lista=d.getElementById('lista');//nos adueñamos de la lista
    lista.innerHTML='';
    console.log(lista2);

    lista2 = [];

    console.log(lista2);
}