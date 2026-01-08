let button = document.querySelector('button');
button.addEventListener('click',function(){
    showHide()
})

function showHide(){
    let article = document.getElementById("article01");
    if (article){        
        article.remove();        
    }  
    else {        
        article = document.createElement("article");
        article.setAttribute("id","article01");
        article.textContent = "L'important n'est pas la chute, mais l'atterrissage";
        document.body.appendChild(article);
    }
}