const myfunc=function(){
    return 1;
};
console.log(myfunc());

const myfnc2=(sayi1,sayi2,callback)=>{
    callback();
    return 2;
};
console.log(myfnc2(1,2,()=>{
    console.log("hi, im callback function");
}));