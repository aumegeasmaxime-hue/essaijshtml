let tabNbs = [2,4,6,8,1,3,5,7,9,3425252,4.34];
let order = "asc";
function tri(numbers , order){
    let nbMax = 0;
    for (let number of numbers){
        if (number>nbMax){
            nbMax=number;
        }
    }
    if (order == "asc"){
        let p = 0;
        let tabNbsAsc = [];
            for (let i=0 ;i <= nbMax;i++){
                for (let a of numbers){
                    if (i == a){
                        tabNbsAsc[p] = a ; // tabNbsAsc.push(a);
                        p++;
                    }
                }
            }
        for (let z of tabNbsAsc){
            console.log(z);
        }
    }
    else if (order == "dsc"){
        let p = 0;
        let tabNbsAsc = [];
        for (let i=nbMax ;i >=0 ;i--){
            for (let a of numbers){
                if (i == a){
                  tabNbsAsc[p] = a ;
                  p++;
                }
            }
        }
        for (let z of tabNbsAsc){
            console.log(z);
        }
    }
}