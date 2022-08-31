














const listaSpesa = [`banana`,`mele`,`gelato`,`broccoli`,`aceto`,`patatine`];

const htmlContainer = document.querySelector(`.container`)

htmlContainer.innerHTML = ``





let counter = 0;

while( counter < listaSpesa.length) {

    console.log(listaSpesa[counter]);


    htmlContainer.innerHTML += `<div> 
                                    ${listaSpesa[counter]} 
                                </div>` 

    counter++;

    
}