let countTop = 0;
let countLeft = 0;
document.addEventListener("keydown",function(event){
    console.log(event.key)
        switch (event.key){
            case "ArrowUp":
                document.getElementById("joueur").style.top = (countTop +"px")
                countTop--
                console.log(countBottom)
                break;  
            case "ArrowDown":
                document.getElementById("joueur").style.top = (countTop +"px")
                countTop++
                console.log(countTop)
                break;
            case "ArrowLeft":
                document.getElementById("joueur").style.left = (countLeft +"px")
                countLeft--
                console.log(countRight)
                break;
            case "ArrowRight":
                document.getElementById("joueur").style.left = (countLeft +"px")
                countLeft++
                console.log(countLeft)
                break;
        }
        






})


