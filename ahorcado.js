String.prototype.replaceAt = function(index, character) 
{ 
    return this.substring(0, index) + character + this.substring(index+character.length); 
} 

const palabras =['rocko','casa','rodolfo','celular'];
const palabra= palabras[Math.floor(Math.random()*palabras.length)];
let palabraConGuiones= palabra.replace(/./gi, "_ ");
let contadorFallo =0;

document.querySelector('#output').innerHTML = palabraConGuiones;
document.querySelector('#calcularLetra').addEventListener('click',()=>
{
    const letra = document.querySelector('#letra').value;
    let fallo= true;

    for(const i in palabra){
        if(letra == palabra[i]){
            palabraConGuiones = palabraConGuiones.replaceAt(i*2, letra);
            fallo=false;
        }
    } 
    if(fallo){
        contadorFallo++;
        document.querySelector('#hunged').style.backgroundPosition =-(319*contadorFallo)+'px 0'
        if (contadorFallo == 4){
            alert("loser")
        }
    }else {
        if(palabraConGuiones.indexOf('_')<0){
            document.querySelector('#ganador').style.display = 'flex';
        }
    }
    document.querySelector('#output').innerHTML = palabraConGuiones;
    document.querySelector('#letra').value = ''; 
    document.querySelector('#letra').focus();
});
