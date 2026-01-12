const tabRef = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a","Enter"];
let tabEntrees = [];

document.addEventListener("keydown",function(event){         
        tabEntrees.push(event.key);
        
        let count = 0;        
        if (tabEntrees.length == tabRef.length){            
            for (let i = 0; i < tabRef.length; i++) {
                if (tabRef[i] == tabEntrees[i]) {
                    count++
                }
            }            
        }    
        if (count == tabEntrees.length) {            
            document.documentElement.style.setProperty('--accent-color', '#0062FF');
            tabEntrees = [];
            console.log(tabEntrees)

        }
        if ((tabEntrees.length == tabRef.length)&&(count != tabEntrees.length)){
            tabEntrees = [];
        }
    
        
/*  Methode 2

const codesKonami = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
let codesUtilisateur = [];

document.addEventListener("keydown" , event => {
codesUtilisateur.push(event.key)
console.log(codesUtilisateur)
for (i = 0; i<codesUtilisateur.length; i++) {
    if (codesKonami[i]!=codesUtilisateur[i]) {
        console.log("Failed");
        codesUtilisateur = [];
    } else if (codesUtilisateur.length == codesKonami.length) {
        console.log("Password OK")
        codesUtilisateur = [];
    }
}});

*/
})
