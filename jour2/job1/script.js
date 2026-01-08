let article = document.getElementById("citation");
let button = document.querySelector('button');
button.addEventListener('click',function(){ 
    citation(article.innerHTML);
})
function citation (element){
    console.log(element);
}