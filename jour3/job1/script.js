function pCreate(contenu){
    let pCreation = document.createElement("p");
    pCreation.textContent = contenu;
    document.body.appendChild(pCreation);
}
document.getElementById("button").addEventListener("click" , function(){
    fetch("expression.txt")
        .then(response =>{
            if (!response.ok){
                throw new Error("error in fetch");            
            }
            console.log(response);
            return response.text();
        })        
        .then(data=>{
            console.log(data);
            pCreate(data);
        })
        .catch(error => {
            console.error(error);
        })
})







/*document.getElementById("button").addEventListener("click" , function(){
    fetch("http://localhost:8080/all")
    .then(response=> {
        if (!response.ok){
            throw new Error("error in fetch");            
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        for (let article of data){
            createArticle(article);
        }
    })
    .catch(error => {
        console.error(error);

    })
})
document.getElementById("button").addEventListener("click",fetchArticle)
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
    */