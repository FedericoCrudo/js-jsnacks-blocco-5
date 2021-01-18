// Creare un oggetto palla che abbia le seguenti proprietà.
// Nome = palla
// Peso = 10
// Attraverso un prompt dare la possibilità all'utente di modificare il peso della palla.
var palla=
  {
    "nome":"palla",
      "peso":10
  };

var peso=parseInt(prompt("Inserire il peso da modificare"));

if(isNaN(peso)){
  alert("Inserire solo numeri");
  var peso=parseInt(prompt("Inserire il peso da modificare"));
}
else{
  palla.peso=peso;
}
console.log(palla);



