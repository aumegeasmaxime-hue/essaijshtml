
let button = document.getElementById("button");
button.addEventListener('click',function(){
    let champNom = document.getElementById("nom");    
    console.log(champNom.value)
})



let champId = document.getElementById("id");
let champNom = document.getElementById("nom");
let champType = document.getElementById("type");
if ((id == null)&&(nom == null)){
    // requete par type
    
    



}
else if ((id == null)&&(type == null)){
    // requete par nom


}
else if ((nom == null)&&(type == null)){
    // requete par id

    
}



async function fetchArticle(){
    try{
        let response = await fetch("http://localhost:8080/all");
        if (!response.ok){
            throw new Error("error in fetch");            
        }
        let data = await response.json();
            for (let article of data){
            createArticle(article);
        }
    }
    catch(error){
        console.error(error);
    }
}