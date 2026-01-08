
//L'interface Window représente une fenêtre contenant un document DOM 
window.addEventListener("scroll", () => {
    //Y est le nombre de pixels verticaux défilés.
  let scrollPosition = window.scrollY / (document.body.scrollHeight - window.innerHeight); 
  // explication accent grave https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Template_literals#:~:text=Les%20gabarits%20sont%20d%C3%A9limit%C3%A9s%20par,des%20accolades%20(%20%24%7Bexpression%7D)%20.
  document.documentElement.style.setProperty("--accent-color", `rgb(${0 + scrollPosition * 255},
     ${0}, ${0})`);
});