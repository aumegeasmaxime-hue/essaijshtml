let countTop = 0;
let countLeft = 0;
document.addEventListener("keydown",function(event){
    console.log(event.key)
        switch (event.key){
            case "ArrowUp":
                document.getElementById("joueur").style.top = (countTop +"px")
                countTop--;
                console.log(countTop);
                console.log(countLeft + " left");
                break;  
            case "ArrowDown":
                document.getElementById("joueur").style.top = (countTop +"px")
                countTop++;
                console.log(countTop);
                console.log(countLeft + " left");
                break;
            case "ArrowLeft":
                document.getElementById("joueur").style.left = (countLeft +"px")
                countLeft--;
                console.log(countLeft);
                break;
            case "ArrowRight":
                document.getElementById("joueur").style.left = (countLeft +"px")
                countLeft++;
                console.log(countLeft);
                break;
        }
        if ((countTop == 21)&&((0<=countLeft)&&(countLeft<30))){
            countTop = 22;
        }
        if ((countTop == 20)&&((0<=countLeft)&&(countLeft<30))){
            countTop = 19;
        }






})


