// Creare un array che contiene 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza. 
// Calcola quanto pesano tutte le zucchine.

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
 var sommaPeso=0;
 for(var i=0;i<zucchine.length;i++){
   sommaPeso+=zucchine[i].peso;
 }

console.log(sommaPeso);