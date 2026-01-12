let ferie01 = new Date("2026/01/01").getTime();
let ferie02 = new Date("2026/04/06").getTime();
let ferie03 = new Date("2026/05/01").getTime();
let ferie04 = new Date("2026/05/08").getTime();
let ferie05 = new Date("2026/05/14").getTime();
let ferie06 = new Date("2026/05/25").getTime();
let ferie07 = new Date("2026/07/14").getTime();
let ferie08 = new Date("2026/08/15").getTime();
let ferie09 = new Date("2026/11/01").getTime();
let ferie10 = new Date("2026/12/25").getTime();
function jourTravaille(param){
    let date = new Date(param);
    if ((date.getTime() == ferie01)||(date.getTime() == ferie02)||(date.getTime() == ferie03)||
    (date.getTime() == ferie04)||(date.getTime() == ferie05)||
    (date.getTime() == ferie06)||(date.getTime() == ferie07)||(date.getTime() == ferie08)||
    (date.getTime() == ferie09)||(date == ferie10)){
        console.log("C'est un jour ferié");
    }
    else {
        if (0<(date.getDay())&&(date.getDay()<6)){
            console.log("C'est un jour travaillé");
        }
        else {
            console.log("C'est le week-end");
        }
    }
}