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
    let i=0;
    while(nombre!=clientes[i]){
        i++;
        if(i==clientes.length-1){
            console.log("El nombre introducido no existe en la lista");
            break;
        }else{
            clientes.indexOf(nombre);
            console.log('El cliente ocupa el puesto número ' + (clientes.indexOf(nombre)+1) + ' de la lista de espera');
            return clientes.indexOf(nombre);
    }

}

verTurno();

function verLista(){
    console.log(clientes);
}

verLista();
/*
function guardarLista(){
    let lista =fs.openSync('lista.txt','a');
    fs.write(clientes);
    console.log(fs.openSync('lista.txt','a'))

}
guardarLista()


while(true){
    console.log()
}

*/

function interfaz(){
    console.log(
        "LISTA DE ESPERA - Restaurante Floridas' Hollywood"
    );
    console.log("========================================");
    console.log("1. Agregar nuevo cliente a la lista.");
    console.log("2. Siguiente cliente ocupa mesa.");
    console.log("3. Borrar ciente impaciente.");
    console.log("4. Ver turno de cliente");
    console.log("5. Ver estado de la lista de espera");
    console.log("6. Guardar la lista de espera.");
    console.log("7. Recuperar la lista de espera.");
    console.log("8. Salir del programa.")
    console.log('¿Qué opción desea elegir?');
}


/*
function pedirOpcion(){
    opcion=readlineSync.questionInt("Escriba el número de su opción (del 1 al 8): ");
    while(opcion<1 || opcion>8){
        console.log('No, no, no');
        console.log('Vuelva a elegir');
        break;
    }
    if(opcion=)
    interfaz();
    
}    
pedirOpcion();

*/