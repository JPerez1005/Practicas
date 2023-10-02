function cargarJSON(){
    let llamada=new XMLHttpRequest();//conexion
    let url="datos.json";//direccion de conexion

    llamada.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            console.log("Recibida la información del fichero");
            let datos=JSON.parse(this.responseText);
            console.log(datos);
        }
    }

    console.log("Se envia la peticion");

    llamada.open('GET', url, true);
    llamada.send();
}

window.onload=cargarJSON;