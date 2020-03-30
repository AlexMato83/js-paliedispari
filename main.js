var insertWord = document.getElementById('word');
var bottoneCalcolo = document.getElementById('calcola');
// inizio bottone------
bottoneCalcolo.addEventListener("click", miaFunzione);

function miaFunzione() {
        var testo = insertWord.value;
        var revStr = "";
        var i = testo.length;
        for(var j=i -1; j>=0; j--) {
            revStr = revStr+testo.charAt(j);
        }
        if(testo == revStr) {
            document.getElementById('msg').innerHTML=(testo +" è un palindromo");
        } else {
            document.getElementById('msg').innerHTML=(testo +" non è un palindromo");
        }
      }

      

// fare la somma dei numeri che vanno da 1 a 10

// var somma = 0;
//
// for(var i = 1; i <= 10; i++) {
//
//   somma = somma + i;
// }
//
// console.log(somma);
//
// var elementoTrovato = false;
//
// for (var i = 0; mioArray.length; i++) {
//
//   if (mioArray[i] === 5) {
//     elementoTrovato = true;
//   }
// }
//
// console.log(elementoTrovato);
