

var readlineSync = require('readline-sync');
const fs = require('fs');
let clientes=['PEPE','JUAN', 'MARTIN','ROSA'];

//Interfaz programa
function interfaz(){
    console.log('                                          ');
    console.log(
        "LISTA DE ESPERA - Restaurante Floridas' Hollywood"
    );
    console.log("========================================");
    console.log('                                          ');
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

//Función para gestionar las opciones

function opcionInterfaz(opcion){
    if(opcion<1 || opcion>8){
        console.log('La opción introducida no es correcta.');
        interfaz();
    }else{
        // PENDIENTE AÑADIR SWITCH console.log('algo')
    }
}
interfaz();
agregarCliente();

//1. Agregar nuevo cliente
function agregarCliente(){
    do{
        clien=readlineSync.question('Escriba el nombre del cliente que desea agregar a la lista: ');
        cliente=clien.toUpperCase();
        if(yaEstaCliente(cliente)==false){
            console.log('El nombre del cliente ya está registrado. Cambie el nombre.');
        }
    }while(yaEstaCliente(cliente)==false);
    console.log('Añadir al siguiente cliente: ' + cliente);
    clientes.push(cliente);
    //volverAinterfaz();
}


//Saber si el cliente ya está en la lista
function yaEstaCliente(clien){
    //La función devuelve false si el cliente ya está en la lista
    //Devuelve true si el cliente no estaba
    let cliente=clien.toUpperCase();
    let yaEsta=0;
    for(let i=0; i<clientes.length; i++){
        if(cliente==clientes[i]){
            yaEsta+=1;
        }
    }if(yaEsta>0){
        return false;
    }else{
        return true;
    }
}

//2.SIGUIENTE CLIENTE OCUPA MESA
function clienteListo(){
    console.log('se eliminará de la lista al siguinte cliente: ' + clientes[0]);
    clientes.shift();
    console.log('la lista de clientes ahora es: '+ clientes);
    return clientes;
}
clienteListo();

//3. CLIENTE IMPACIENTE - funcion para borrar cliente
function clientePerdido(){
    do{
        clien=readlineSync.question('Escriba el nombre del cliente que quiere quitar de la lista: ');
        cliente=clien.toUpperCase();
    }while(yaEstaCliente(clien)==true); //En este caso, si el cliente ya está en la lista ==false
    for(let i=0; i<clientes.length; i++){
        if(cliente==clientes[i]){
            console.log('se eliminará de la lista al siguinte cliente: ' + clientes[i]);
            clientes.splice(i,1);
        }
    }
    console.log('la lista de clientes ahora es: '+ clientes);
    return clientes;
}
clientePerdido();

//4. VER TURNO DE CLIENTE
function verTurno(){
    do{
        clien=readlineSync.question('Escriba el nombre del cliente que quiere comprobar: ');
        cliente=clien.toUpperCase();
    }while(yaEstaCliente(cliente)==true); //En este caso, si el cliente ya está en la lista ==false
    let x=0;
    for(let i=0; i<clientes.length; i++){
        if(cliente==clientes[i]){
            x=i;
            console.log('El cliente ' + clientes[i] + ' está en el lugar número '+ (i+1));
        }
    }
    console.log('El cliente tiene '+ x + ' clientes por delante');


}
verTurno();

//FUNCION ESTADO LISTA DE ESPERA
function verLista(){
    for(let i=0; i<clientes.length; i++){
        console.log('nombre: '+ clientes[i] + ' -puesto ' + (i+1));
        console.log('                        ');
    }
}

verLista();


//FUNCION GUARDAR LISTA DE ESPERA



//FUNCIONES USER EXPERIENCE - PENDIENTES
function meEquivoque(funcion){
    let volver=readlineSync.question('Estás seguro de que es lo que querías hacer? Si no lo estás pulsa "n". Pulsa cualquier otra tecla para continuar: ');
    if(volver=='n'){
        return funcion;
    }
}

function volverAinterfaz(){
    volver = readlineSync.question('¿Desea volver al inicio?')
    return interfaz();
}

