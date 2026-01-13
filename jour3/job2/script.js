const json = '{"name":"laPlateforme","adresse":"8 rue d\'hozier","city":"marseille","nb_staff": 11,"creation":"2009"}';
const obj = JSON.parse(json)

console.log(obj.city)
function jsonValueKey(entrer , key){
      
    console.log(entrer[key]);
}

