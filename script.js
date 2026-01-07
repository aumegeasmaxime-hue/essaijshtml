
// creation d'une div avec javascript
let newDiv = document.createElement("div");
newDiv.textContent = "ceci est une nouvelle div";
newDiv.setAttribute("id","div01");
newDiv.setAttribute("title","new-div");
newDiv.classList.add("classe1");
document.body.appendChild(newDiv);

// recuperation d'un element par l'ID + ajout d'un p
let newP = document.createElement("p");
newP.textContent = "ceci est une nouvelle p";
let contenerProduit = document.getElementById("produit");
contenerProduit.appendChild(newP)

//let ajoutClasse1 = document.getElementById("produit");
//let ajoutClasse2 = document.getElementById("information");
//ajoutClasse1.classList.add("classe2");
//ajoutClasse2.classList.add("classe2");