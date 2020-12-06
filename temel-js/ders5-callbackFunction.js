function soyle(text,callback){
    console.log(text);
    callback();
}

function  cayDemle() {
console.log("çay demleniyor...")
}

soyle("Merhaba",cayDemle);


var cayDemle=function  () {
    console.log("çay demleniyor...")
}

soyle("Merhaba",cayDemle);

//-----------------------------------------------

soyle("Merhaba",function  () {
    console.log("çay demleniyor...")
});