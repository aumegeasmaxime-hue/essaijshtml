function fizzBuzz (){
    for(let i = 1; i <= 151 ;i++){
        let mot;
        if ((i % 3 == 0) && (i % 5 == 0)){
                mot = "FizzBuzz";
                console.log(mot);
        }
        else if (i % 3 == 0){
            mot = "Fizz";
            console.log(mot);
        }
        else if (i % 5 == 0){
            mot = "Buzz";
            console.log(mot);
        }
        else {
            console.log(i)
        }
    }
}