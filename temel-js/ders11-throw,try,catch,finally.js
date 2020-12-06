/*
var isim= "mehmet";
if(isim!=="ahmet")
    throw  Error("beklenmeyen İsim");
*/

try{
    var sayi1=3;
    var sayi2=2;
    var sonuc=sayi1/sayi2;

    if(sayi2==0){
        throw Error("sayi2 '0' olamaz");
    }
    else
    {
        console.log(sonuc);
    }
}
catch(error)
{
    console.log(error);
}
finally{
    console.log("burası finally");
}

/*
 "use strict" hatalı yazım varsa derleme yapmaz. Js dosyasının başına koy
 */