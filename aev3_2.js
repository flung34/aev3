var readlineSync = require('readline-sync');
const fs = require('fs');
let clientes=['PEPE','JUAN'];

//Interfaz programa
function interfaz(){
    console.log('                                          ');
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
    opcion= readlineSync.questionInt('¿Qué opción desea elegir? Escriba el número de su opción (1-8): ');
    opcionInterfaz(opcion);
}

function opcionInterfaz(opcion){
    if(opcion<1 || opcion>8){
        console.log('La opción introducida no es correcta.');
        opcionInterfaz();
        
    }
}
interfaz();

function estaElCliente(cliente){
    let yaEsta=0;
    do{
        for(let i=0; i<clientes.length; i++){
            if(cliente==clientes[i]){
                yaEsta+=1;
                console.log('El nombre del cliente ' + cliente + ' ya está en la lista.')        
            }
        }
        preguntaClientes();
    }while(yaEsta>0);
    if(yaEsta==0){
        return true;
    }else{
        return false
    }
}

//estaElCliente();

//Agregar clientes


function agregaClientes(){
    console.log('va a añadir al siguiente cliente: ' + cliente);
    clientes.push(cliente);
    //console.log(clientes.length);
    //console.log(clientes);
}

function revisarNombres(nombre){
    let esta=0;
    for(let i=0; i<clientes.length; i++){
        if(nombre==clientes[i]){
        esta +=1;
        }    
    }if(esta>0){
        return true;
        //console.log('El nombre está en la lista');
    }else{
        return false;
        //console.log('El nombre no se encuentra en la lista');
    }
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
    while(revisarNombres(nombre)==false){
        
    }
    
    clientes.indexOf(nombre);
    console.log('El cliente ocupa el puesto número ' + (clientes.indexOf(nombre)+1) + ' de la lista de espera');
    return clientes.indexOf(nombre);
}



verTurno();

function verLista(){
    console.log(clientes);
};

verLista();

/*
function interfaz(){
    console.log("LISTA DE ESPERA - Restaurante Floridas' Hollywood");
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
*/