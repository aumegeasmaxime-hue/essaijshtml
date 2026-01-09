const tabRef = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","a","b","Enter"];
let tabEntrees = [];

document.addEventListener("keydown",function(event){         
        tabEntrees.push(event.key);
        console.log(event.key)
        console.log(tabEntrees)
         console.log(tabEntrees.length)
            if (tabEntrees.length == 11){                
                let isEqual = true;
                for (let i = 0; i < tabRef.length; i++) {
                    if (tabRef[i] !== tabEntrees[i]) {
                    
                    console.log("false")
                    }
                    else {
                    console.log(isEqual);
                    document.documentElement.style.setProperty('--accent-color', 'blue');
                    }
                }               
            }      
})
