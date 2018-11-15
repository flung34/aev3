var readlineSync = require('readline-sync');

let arr=['fran','pepe', 'julio'];


function clientePerdido(arr){
    do{
        nomMin=readlineSync.question('Escriba el nombre del cliente que quiere quitar de la lista: ');
        nombre=nomMin.toUpperCase();
        if(yaEstaCliente(nombre,arr)==true){
            console.log("El cliente no está en la lista. Vuelva a intentarlo")
        }
    }while(yaEstaCliente(nombre)==true); //Si el cliente ya está en la lista ==false
    for(let i=0; i<arr.length; i++){
        if(nombre==arr[i]){
            console.log('se eliminará de la lista al siguinte cliente: ' + arr[i]);
            arr.splice(i,1);
        }
    }
    console.log('la lista de clientes ahora es: '+ arr);
    return arr;
}

clientePerdido(arr);
