let nb1;
let nb2;
function isPrime (nb){
        let isPrime = true;
        for (let i = 2; i < nb; i++) {
           if (nb % i == 0) {
               isPrime = false;
               break;
           }
        }
        if (isPrime) {
            return true;
        }
}
function sommeNbPremier (nb1,nb2){
    if (isPrime(nb1) && isPrime(nb2)){
        return console.log(nb1+nb2);
    }
    else {
        return console.log("au moins un des numero n'est pas premier")
    }
}