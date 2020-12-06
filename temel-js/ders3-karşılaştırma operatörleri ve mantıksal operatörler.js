/*
* == (eşit ise)
* === (veri türü dahil eşit ise)
* != (eşit değil ise)
* !== (veri türü dahil eşit değil ise)
* > (büyükse)
* < (küçükse)
* <= (küçük eşitse)
* >= (büyük eşitse)
 */

var sayı =2;

console.log(sayı==2); //true
console.log(sayı=="2"); //true
console.log(sayı===2); //true
console.log(sayı==="2"); //false
/*
* && (ve)
* || (veya)
*/

console.log(sayı==2&&sayı<5);//true
console.log(sayı==2||sayı>5);//true