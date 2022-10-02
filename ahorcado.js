String.prototype.replaceAt = function(index, character) 
    { 
        return this.substring(0, index) + character + this.substring(index+character.length); 
    } 

function calcularLetra()
    {        
        const letras = letra.value; 
        let fallo= true; 
        
        for(const i in palabra)
        {       
            if (letras == palabra[i])
                {
                    palabraConGuiones = palabraConGuiones.replaceAt(i*2, letras);
                    fallo=false;
                }        
        } 
        if(fallo)
        {            
            contadorFallo++;
            document.querySelector('#hunged').style.backgroundPosition =-(319*contadorFallo)+'px 0'           
            palabraUsada.push(letra.value);
            bnpalabraUsada.value=palabraUsada.join('-');          

            if (contadorFallo == 4)
            {
                swal(
                {                
                    title: "PERDISTE!",
                    text: "Intenta una vez más!", 
                    closeOnEsc: false,
                    closeOnClickOutside:false,
                    icon:'error',                                                                                                                                        
                    buttons: {
                        cancelar: { text: "JUGAR"
                        },
                        agregar: {
                          text: "INICIO"
                        },
                      },                      
                    })
                    .then((value) => {
                      switch (value) {
                     
                        case "cancelar":
                            window.location.href  = "hunged.html";                           
                          break;                     
                        case "agregar":
                            window.location.href  = "index.html";   
                          break;
                      }              
                });                             
            }
        }
        else 
            {
                if(palabraConGuiones.indexOf('_')<0)
                {
                    swal(
                        {                
                            title: "FELICITACIONES!",
                            text: "Haz ganado, juega otra vez!",                             
                            closeOnEsc: false,
                            icon:'success', 
                            closeOnClickOutside:false,                                      
                            buttons: {
                                cancelar: { text: "JUGAR"
                                },
                                agregar: {
                                  text: "INICIO"
                                },
                              },                      
                            })
                            .then((value) => {
                              switch (value) {
                             
                                case "cancelar":
                                    window.location.href  = "hunged.html";                           
                                  break;                     
                                case "agregar":
                                    window.location.href  = "index.html";   
                                  break;
                              }              
                        });                 
                                      
                }
            }
        document.querySelector('#output').innerHTML = palabraConGuiones;
        document.querySelector('#letra').value = ''; 
        document.querySelector('#letra').focus();         
    }

function mayus(e)
    {
        e.value = e.value.toUpperCase();    
    }

function validarLetras(letra) 
    {         
        if(!letra.checkValidity()) {            
            swal("CAMPO NO VALIDO", "No numeros; No tildes, ni caracteres especiales!", "error")
        } 
    }
   
const input_indexmodaladdPalabra = document.querySelector('#modalInput_agregarPalabra');
const bn_indexmodaladdPalabra= document.querySelector('#bn_modalAgregarPalabra');
const input_indexmodalmostrarPalabra= document.querySelector('input_mostrarPalabra');

const letra = document.querySelector('#letra');
const bnProbar_letra = document.querySelector('#calcularLetra');
const bnpalabraUsada = document.querySelector('#palabra_Usada');
const palabraUsada = [];

const palabras =['LINCE','CUONES','COBRA','SERPIENTE','VIBORA',
                'HYENA','LEOPARDO','PANTERA','AGUILA','TIBURON',
                'CAIMAN','HALCON','JAGUAR','ORCA','ESCORPION',
                'COMADREJA','GAVILAN','CIEMPIES','TARANTULA','DELFINES'];

const palabra= palabras[Math.floor(Math.random()*palabras.length)];
let palabraConGuiones= palabra.replace(/./gi, "_ ");
let contadorFallo =0;

document.querySelector('#output').innerHTML = palabraConGuiones;


bnProbar_letra.addEventListener('click',(e)=>
{    
    if(letra.value=="")
    {
        swal("texto vacio")
    }
    else
    {   validarLetras(letra);     
        calcularLetra();       
    }    
});

bn_indexmodaladdPalabra.addEventListener('click',(e)=>
{
    
    let mostrarPalabra = input_indexmodalmostrarPalabra.value;

    if(input_indexmodaladdPalabra.value=="")
    {

    }

    if(palabras.includes(agregarPalabra.value))
    {
        palabras.push(agregarPalabra.value);
        mostrarPalabra.value = agregarPalabra.value;
        agregarPalabra.value=="";
    }
    else
    {
        swal('Intenta Nuevamente','La palabra ya existe','error')
    }
})
