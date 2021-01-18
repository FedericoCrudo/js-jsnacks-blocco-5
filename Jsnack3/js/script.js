// Creare  un array che contiene 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm. 
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

var zucchine=[
    {
      "varieta":"",
      "peso":15,
      "lunghezza":12
    },
    {
      "varieta":"",
      "peso":20,
      "lunghezza":16
    },
    {
      "varieta":"",
      "peso":18,
      "lunghezza":14
    },
    {
      "varieta":"",
      "peso":15,
      "lunghezza":12
    },
    {
      "varieta":"",
      "peso":15,
      "lunghezza":12
    },
    {
      "varieta":"",
      "peso":15,
      "lunghezza":12
    },
    {
      "varieta":"",
      "peso":10,
      "lunghezza":10
    },
    {
      "varieta":"",
      "peso":8,
      "lunghezza":9
    },
    {
      "varieta":"",
      "peso":15,
      "lunghezza":12
    },
    {
      "varieta":"",
      "peso":25,
      "lunghezza":20
    },
]
 var arrayMeno=[];
 var pesoMeno=0;//peso tot zucchine <15
 var arrayPiu=[];
 var pesoPiu=0;//peso tot zucchine >15
 for(var i=0;i<zucchine.length;i++){
   if(zucchine[i].lunghezza>=15){
      arrayPiu.push(zucchine[i]);
      pesoPiu+=zucchine[i].peso;
   }
   else{
    arrayMeno.push(zucchine[i]);
    pesoMeno+=zucchine[i].peso;
   }

 }
 console.log(zucchine);
 console.log("zucchine > 15cm");
 console.log(arrayPiu);
 console.log("zucchine < 15cm");
 console.log(arrayMeno);
 console.log("peso zucchine (lunghezza < 15cm): "+pesoMeno);
 console.log("peso zucchine (lunghezza > 15cm): "+pesoPiu);