//callback hell

const  asenkronFunc=function (sayi,callback) {
            const sonuc=sayi+2;
            callback(sonuc);
};

asenkronFunc(2,function (sonuc) {
            console.log(sonuc);
            asenkronFunc(4,function (sonuc) {
                console.log(sonuc);
                asenkronFunc(6,function (sonuc) {
                    console.log(sonuc);
                    asenkronFunc(8,function (sonuc) {
                        console.log(sonuc);
                    })
                })
            })
});

const asyncPromise=(flag)=>{
    return new Promise((resolve,reject)=>{
        if(flag==true){
            resolve("everything is ok");
        }
        else {
            reject("reis bir sorun var")
        }
    })
};

asyncPromise(false)
    .then((data)=>{
        console.log(data);
        return 1;
    })
    .then((data)=>{
        console.log(data);
        return 2;
    })
    .then((data)=> {
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    });
