var readlineSync = require('readline-sync');
const fs = require('fs');
clientes=[];

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
    let opc= readlineSync.questionInt('¿Qué opción desea elegir? Escriba el número de su opción (1-8): ');
    opcionInterfaz(opc);
}

//Función para gestionar las opciones

function opcionInterfaz(opcion){
    if(opcion<1 || opcion>7){
        console.log('La opción introducida no es correcta.');
        interfaz();
    }else{
        while(opcion!=8){

        switch(opcion){
                case 1:
                    agregarCliente(clientes);
                    
                    interfaz();
                    break;
                case 2:
                    
                    clienteListo(clientes);
                    
                    interfaz();
                    break;
                case 3:
                    
                    clientePerdido(clientes);
                    
                    interfaz();
                    break;
                case 4:
                    
                    verTurno(clientes);
                    
                    interfaz();
                    break;
                case 5:
                    
                    verLista(clientes);
                    
                    interfaz();
                    break;
                case 6:
                    
                    guardarDatos(clientes);
                    
                    interfaz();
                case 7:
                    
                    recuperarDatos(clientes);
                    
                    interfaz();
                case 8:
                    break;
                default:
                    interfaz();
            }
            console.clear();
        }
    }
}


//1. Agregar nuevo cliente
//El argumento es un array
function agregarCliente(arr){
    do{
        if(arr.length==0){
            nomMin=readlineSync.question('Escriba el nombre del cliente que desea agregar a la lista: ');
            nombre=nomMin.toUpperCase();
        }else{
            do{
                nomMin=readlineSync.question('Escriba el nombre del cliente que desea agregar a la lista: ');
                nombre=nomMin.toUpperCase();
                if(yaEstaCliente(nombre,arr)==false){
                    console.log('El nombre del cliente ya está registrado. Cambie el nombre.');
                }
            }while(yaEstaCliente(nombre,arr)==false);
        }
        console.log('Añadir al siguiente cliente: ' + nombre);
        arr.push(nombre);
        seguir=readlineSync.question('¿Deseas seguir añadiendo clientes? Pulsa "s" para seguir: ');
    }while(seguir=='s');
    //volverAinterfaz();
}


//Saber si el cliente ya está en la lista
function yaEstaCliente(nom,arr){
    //La función devuelve false si el cliente ya está en la lista
    //Devuelve true si el cliente no estaba
    let yaEsta=0;
    for(let i=0; i<arr.length; i++){
        if(nom==arr[i]){
            yaEsta+=1;
        }
    }if(yaEsta>0){
        return false;
    }else{
        return true;
    }
}

//2.SIGUIENTE CLIENTE OCUPA MESA
function clienteListo(arr){
    console.log('se eliminará de la lista al siguinte cliente: ' + arr[0]);
    arr.shift();
    console.log('la lista de clientes ahora es: '+ arr);
    return arr;
}
//clienteListo();

//3. CLIENTE IMPACIENTE - funcion para borrar cliente
function clientePerdido(arr){
    let esta = false;
    do{
        
        nomMin=readlineSync.question('Escriba el nombre del cliente que quiere quitar de la lista: ');
        nombre=nomMin.toUpperCase();
        esta = yaEstaCliente(nombre,arr);
        if(esta){
            console.log("El cliente no está en la lista. Vuelva a intentarlo")
        }
    }while(esta==true); //Si el cliente ya está en la lista ==false
    for(let i=0; i<arr.length; i++){
        if(nombre==arr[i]){
            console.log('se eliminará de la lista al siguinte cliente: ' + arr[i]);
            arr.splice(i,1);
        }
    }
    console.log('la lista de clientes ahora es: '+ arr);
    return arr;
}
//clientePerdido();

//4. VER TURNO DE CLIENTE
function verTurno(arr){
    do{
        nomMin=readlineSync.question('Escriba el nombre del cliente que quiere comprobar: ');
        nombre=nomMin.toUpperCase();
        if(yaEstaCliente(nombre,arr)==true){
            console.log('El cliente no está en la lista. Vuelva a intentarlo')
        }
    }while(yaEstaCliente(nombre,arr)==true); //En este caso, si el cliente ya está en la lista ==false
    let x=0;
    for(let i=0; i<arr.length; i++){
        if(nombre==arr[i]){
            x=i;
            console.log('El cliente ' + arr[i] + ' está en el lugar número '+ (i+1));
        }
    }
    console.log('El cliente tiene '+ x + ' clientes por delante');


}
//verTurno();

//FUNCION ESTADO LISTA DE ESPERA
function verLista(arr){
    for(let i=0; i<arr.length; i++){
        console.log('nombre: '+ arr[i] + ' -puesto ' + (i+1));
        console.log('                        ');
    }
}

//verLista();


//6.FUNCION GUARDAR LISTA DE ESPERA
function guardarDatos(arr){
    let lista = fs.openSync('lista.txt','w');
    fs.writeSync(lista,arr,'utf-8');
}


//7. RECUPERAR DATOS
function recuperarDatos(arr){
    let file = fs.openSync('lista.txt', 'r');
    let lines=fs.readFileSync(file,"utf-8");
    let linea =lines.toString();
    arr= linea.split(',');
    console.log('Sus datos se han recuperado');
    console.log(arr);
    return arr;
}

//guardarDatos();


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

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
interfaz();
