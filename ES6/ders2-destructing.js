const degerler={
    deger1:"değer1",
    deger2:"değer2",
    deger3:"değer3",
    deger4:{
        name:"guray"
    }
};

const {deger4:{name}}=degerler;
console.log(name);
const {deger4:{name:myname}}=degerler;//like as a (name "as a" mayname)
console.log(myname);
const values={
    value1:"value1",
    value2:"value2",
    value3:"value3"
};

const deger1=degerler.deger1;
const deger2=degerler.deger2;
console.log(deger1,deger2);

//ES6 object
const {value1,value2,value4="value4"}=values;
console.log(value1,value2,value4);

//es6 array
const  sayilar=[1,2,3];
const [sayi1,sayi2,sayi3]=sayilar;
console.log(sayi1,sayi2,sayi3);//1 2 3

