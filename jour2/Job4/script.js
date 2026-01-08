let regex =/[a-z]/;
let zoneText = document.getElementById("keylogger");
document.addEventListener("keydown",function(event){    
    if (event.key.match(regex)){
        zoneText.value += event.key; 
    }    
})
