let button = document.querySelector('button');
button.addEventListener('click',function(){
    compte()
})
let count = 0;
function compte(){    
    let pValeur = document.getElementById("compteur").textContent = count++;    
}