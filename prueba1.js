var readlineSync = require('readline-sync');
const fs = require('fs');
let clientes=['PEPE','JUAN'];
//Agregar clientes

function agregaClientes(){
    console.log('va a añadir al siguiente cliente: ' + cliente);
    clientes.push(cliente);
    //console.log(clientes.length);
    //console.log(clientes);
}


function preguntaClientes(){
    let repe=0;
    do{
        repe=0;
        console.log('Quiere agregar a un cliente?:')
        client=readlineSync.question('Agrega el nombre de tu cliente: ');
        cliente=client.toUpperCase();
        for(let i=0; i<=clientes.length; i++){
            if(clientes[i]==cliente){
                repe+=1;
                console.log('el nombre del cliente está repetido');
            }
        }
        if(repe==0){
            agregaClientes();
        }
    }while(repe>0);
    console.log('el numero de clientes en lista es '+ clientes.length);
    console.log('lista de clientes actual: '+ clientes);
    return clientes

}


preguntaClientes();
// Cliente a mesa y borrar cliente

function clienteListo(){
    console.log('se eliminará de la lista al siguinte cliente: ' + clientes[0]);
    clientes.shift();
    console.log('la lista de clientes ahora es: '+ clientes);
    return clientes;
}
clienteListo();


//ver turno de cliente
function verTurno(){
    nom=readlineSync.question('Consulta por el nombre del cliente: ');
    nombre=nom.toUpperCase();
         clientes.indexOf(nombre);
        console.log('El cliente ocupa el puesto número ' + (clientes.indexOf(nombre)+1) + ' de la lista de espera');
        return clientes.indexOf(nombre);
}

