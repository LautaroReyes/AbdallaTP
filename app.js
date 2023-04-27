let numero = parseInt(prompt("Ingrese un numero"));
let suma = 0;

function esPerfecto(numero){
    for(let i = 0; i < numero; i++){
        if(numero % i == 0){
            suma += i;
            console.log(suma);
        }
    }

    
        if(suma !== numero){
            document.write(numero + " no es perfecto <br>")
        }
        else if(suma == numero){
            document.write(numero + " es perfecto <br>")
        }
    
}

esPerfecto(numero);
