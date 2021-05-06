var myStock = localStorage;
var myList = document.querySelector('ul');

$("#save").click(function(){
    let expName = document.getElementById("expName").value;
    let link = document.getElementById("link").value;
    if(expName == "" || link == ""){
      return 0;
    }
    myStock.setItem(expName, link);
    console.log(myStock);
});    

$("#reset").click(function(){
  myStock.clear();
  console.log(myStock);
}); 

console.log(myStock);

//CREATION DES CONTENEUR


//AJOUTS DES CONTENUS
for( let i = 0; i < myStock.length; i++){
  let listElement = document.createElement('li');
  listElement.id = myStock.key(i);
  let linkElement = document.createElement('a');
  listElement.innerHTML = myStock.key(i) + ` : <a target="_blank" title="Aller sur le site ?" href="${myStock.getItem(myStock.key(i))}">Allons-y</a> <img title="Supprimer" src="assets/img/corbeille.png" onclick="supprElement('${myStock.key(i)}')">`;
  myList.appendChild(listElement);
}

const supprElement = (element) =>{
  let d = document.getElementById(element);
  d.remove();
  myStock.removeItem(element);
}
//AFFECTATIONS DES BLOCS


