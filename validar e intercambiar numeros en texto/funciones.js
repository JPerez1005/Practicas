function esNumero(num){
    return !isNaN(num);//si es numero retornará true
}

function generarAleatorio(minimo, maximo){
    if(esNumero(minimo) && esNumero(maximo)){//si el valor es numero, entonces es doble true
        minimo=parseInt(minimo);
        maximo=parseInt(maximo);

        if(minimo>maximo){//cambiamos de lugar los numeros si es necesario
            let aux=maximo;
            maximo=minimo;
            minimo=aux;
        }

        //mostramos un numero entre el maximo y minimo
        return Math.floor(Math.random()*(maximo-minimo))+minimo;
    }else{
        console.error('Los numeros son un formato incorrecto');
    }
}