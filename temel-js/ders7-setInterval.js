/*
var sayi=1;
setInterval(function () {
 console.log("selam: "+ sayi++)
},1000)
*/
var sayi=1;
var interval=setInterval(function () {
    if(sayi==5){
        clearInterval(interval);
    }
    console.log("selam: "+ sayi++)
},1000)