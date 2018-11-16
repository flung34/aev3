var readlineSync = require('readline-sync');
const fs = require('fs');


//Interfaz programa
function interfaz(arr){
    console.clear();
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
    opcionInterfaz(opc,arr);
}

//Función para gestionar las opciones

function opcionInterfaz(opcion,arr){
    if(opcion<1 || opcion>8){
        console.log('La opción introducida no es correcta.');
        interfaz(arr);
        if(opcion==8){
            exit();
        }
    }else{
        switch(opcion){
                case 1:
                    agregarCliente(arr);
                    console.clear();
                    interfaz(arr);
                    break;
                case 2:
                    clienteListo(arr);
                    interfaz(arr);
                    break;
                case 3:
                    
                    clientePerdido(arr);
                    console.clear();
                    interfaz(arr);
                    break;
                case 4:
                    
                    verTurno(arr);
                    console.clear();
                    interfaz(arr);
                    break;
                case 5:
                    verLista(arr);
                    interfaz(arr);
                    break;
                case 6:
                    
                    guardarDatos(arr);
                    interfaz(arr);

                case 7:
                    
                    recuperarDatos(arr);
                    interfaz(arr);

                case 8:
                    break;
                default:
                    interfaz(arr);
            }
            console.clear();
        }
    }



//1. Agregar nuevo cliente
//El argumento es un array
function agregarCliente(arr){
    console.clear();
    do{
        /*
        if(arr.length==0){
            nomMin=readlineSync.question('Escriba el nombre del cliente que desea agregar a la lista: ');
            nombre=nomMin.toUpperCase();
            arr.push(nombre);
        
        }else{
            */
            do{
                nomMin=readlineSync.question('Escriba el nombre del cliente que desea agregar a la lista: ');
                nombre=nomMin.toUpperCase();
                if(yaEstaCliente(nombre,arr)==false){
                    console.log('El nombre del cliente ya está registrado. Cambie el nombre.');
                }
            }while(yaEstaCliente(nombre,arr)==false);
        //}
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
    console.clear();
    console.log('se eliminará de la lista al siguinte cliente: ' + arr[0]);
    arr.shift();
    readlineSync.keyIn('la lista de clientes ahora es: '+ arr);
    //console.log('la lista de clientes ahora es: '+ arr);
    return arr;
}
//clienteListo();

//3. CLIENTE IMPACIENTE - funcion para borrar cliente
function clientePerdido(arr){
    console.clear();
    let esta = false;
    do{
        
        nomMin=readlineSync.question('Escriba el nombre del cliente que quiere quitar de la lista: ');
        nombre=nomMin.toUpperCase();
        esta = yaEstaCliente(nombre,arr);
        if(esta){
            console.log("El cliente no está en la lista. Vuelva a intentarlo")
            ver=readlineSync.question("Quiere ver la lista? Pulse 'v': ")
            if(ver=='v'){
                verLista(arr);
            }
        }
    }while(esta==true); //Si el cliente ya está en la lista ==false
    for(let i=0; i<arr.length; i++){
        console.clear();
        if(nombre==arr[i]){
            console.log('se eliminará de la lista al siguinte cliente: ' + arr[i]);
            arr.splice(i,1);
        }
    }
    readlineSync.keyIn('la lista de clientes ahora es: '+ arr);
    return arr;
}


//4. VER TURNO DE CLIENTE
function verTurno(arr){
    console.clear();
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
    readlineSync.keyIn('El cliente tiene '+ x + ' clientes por delante');


}
//verTurno();

//FUNCION ESTADO LISTA DE ESPERA
function verLista(arr){
    console.clear();
    for(let i=0; i<arr.length; i++){
        
        console.log('nombre: '+ arr[i] + ' -puesto ' + (i+1));
        
    }
    readlineSync.keyIn('                        ');
}

//verLista();


//6.FUNCION GUARDAR LISTA DE ESPERA
function guardarDatos(arr){
    let lista = fs.openSync('lista.txt','w');
    fs.writeSync(lista,arr,'utf-8');
    console.log('Sus datos se han guardado correctamente');
    verLista(arr)

}


//7. RECUPERAR DATOS
function recuperarDatos(arr){
    let file = fs.openSync('lista.txt', 'r');
    let lines=fs.readFileSync(file,"utf-8");
    let linea =lines.toString();
    arr= linea.split(',');
    readlineSync.keyIn('Sus datos se han recuperado');
    //console.log(arr);
    return arr;
}


////////////////////////////////////
let clientes=[];
interfaz(clientes);

