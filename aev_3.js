var readlineSync = require('readline-sync');
const fs = require('fs');


/** Interfaz programa
 * Muestra las opciones y limpia la pantalla cada vez que se ejecuta
 * El argumento es el array con el que va a trabajar todo el programa.
 * Llama a otra funcion para gestionar a las opciones
*/
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

/** Función para gestionar las opciones
 * toma el parámetro arr de la funcion que la llama - interfaz
 * toma el parámetro opcion del body de la funcion interfaz
*/
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



/** 1. Agregar nuevo cliente
 * El argumento es un array
 * pide un input de teclado para añadirlo al array
 * si el input ya está en el array, sigue pidiéndolo
 * para comprobar si el input ya está en el array llama a la función yaEstaCliente
 * 
*/

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
}

/**
 * Saber si el cliente ya está en la lista
 * input: str,arr; output: boolean
 * los argumentos son nom, que toma del body de la función que llama a esta función - agregar cliente
 * toma el argumento arr, que es el parámetro de la función que llama a yaEstaCliente
 * si nom está en el array (arr), devuelve false
 * si nom no está en el array (arr), devuelve true
 */

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



/** 2.SIGUIENTE CLIENTE OCUPA MESA
 * argumento: array
 * elimina el primer elemento del array
*/
function clienteListo(arr){
    console.clear();
    console.log('se eliminará de la lista al siguinte cliente: ' + arr[0]);
    arr.shift();
    readlineSync.keyIn('la lista de clientes ahora es: '+ arr);
    //console.log('la lista de clientes ahora es: '+ arr);
    return arr;
}

/** 3. CLIENTE IMPACIENTE - funcion para borrar cliente
 * argumento: array
 * pide un input
 * comprueba si el input por teclado está en el array y lo elimina del array
 * si el input no existe en el array permite ver el array
 */
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

/** 4. VER TURNO DE CLIENTE
 * argumento: array
 * pide un input por teclado. Si el input está en el array, imprime el lugar que éste ocupa en el array
 * si no existe el input da la opción de ver todo el array o salir de la función
*/
function verTurno(arr){
    console.clear();
    do{
        nomMin=readlineSync.question('Escriba el nombre del cliente que quiere comprobar: ');
        nombre=nomMin.toUpperCase();
        if(yaEstaCliente(nombre,arr)==true){
            console.log('El cliente no está en la lista. Vuelva a intentarlo')
            ver=readlineSync.question("Quiere ver la lista? Pulse 'v'. O pulse 's' para salir: ");
            if(ver=='v'){
                verLista(arr);
            }else if(ver=='s'){
                interfaz(arr);
            }
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
/**FUNCION ESTADO LISTA DE ESPERA 
 * argumento: array
 * imprime los elementos que hay en el array
*/
function verLista(arr){
    console.clear();
    for(let i=0; i<arr.length; i++){
        
        console.log('nombre: '+ arr[i] + ' -puesto ' + (i+1));
        
    }
    readlineSync.keyIn('                        ');
}


/** 6.FUNCION GUARDAR LISTA DE ESPERA
 * argumento array
 * guarda el array que tiene como parámetro y lo guarda en un archivo: lista.txt
 */
function guardarDatos(arr){
    let lista = fs.openSync('lista.txt','w');
    fs.writeSync(lista,arr,'utf-8');
    verLista(arr);
    console.log('Sus datos se han guardado correctamente');
}


/**7. RECUPERAR DATOS  
 * recupera los datos que hay en lista.txt y los guarda en el array
 * 
*/
function recuperarDatos(arr){
    let file = fs.openSync('lista.txt', 'r');
    let lines=fs.readFileSync(file,"utf-8");
    let linea =lines.toString();
    linea = linea.split(',');
    arr.length = 0;
    for(let i = 0; i < linea.length; i++){
        arr[i] = linea[i];
    }
    readlineSync.keyIn('Sus datos se han recuperado');
    console.log(arr);
    return arr;
}


////////////////////////////////////
let clientes=[];
interfaz(clientes);

