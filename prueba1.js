let arr=[1,2,3,4,5,6,7,8];
//arr.splice(1,1);
//console.log(arr);
const fs = require('fs');
function guardaArr(arr){
    let prueba00 = fs.openSync('prueba00.txt','w');
    for(let i=0; i<arr.length; i++){
        if(i==arr.length-1){
            texto=arr[i];
        }else{
            texto=arr[i]+(', '+ '\n');
        }
        fs.writeSync(prueba00,texto,undefined,'utf-8');
    }
}
function recuperArr(){
    let unArray = fs.openSync('prueba00.txt', 'r');
    console.log(unArray);
    //console.log(unArray.length);
    return(unArray);
}
guardaArr(arr);
recuperArr();