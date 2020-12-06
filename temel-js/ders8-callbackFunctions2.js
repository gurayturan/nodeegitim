function birinci(callback){
    setTimeout(function () {
            console.log("birinci");
            callback(ucuncu);
    },1000);
}

function ikinci(callback){
    console.log("ikinci");
    callback();
}
function ucuncu(){
    console.log("ucuncu");
}

birinci(ikinci);