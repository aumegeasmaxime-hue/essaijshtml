let count = 0;
document.addEventListener("keydown",function(event){
    console.log(event.key)
        switch (event.key){
            case "ArrowUp":
                document.getElementById("joueur").style.left = "1px"

            case "ArrowDown":
                document.getElementById("joueur").style.marginTop = "101px"     

            case "ArrowLeft":
                document.getElementById("joueur").style.marginRight = "101px"
               
            case "ArrowRight":
                document.getElementById("joueur").style.marginLeft = "101px"
                
        }
        






})


