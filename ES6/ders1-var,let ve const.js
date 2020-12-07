var x ="değişken";
let y="buda değişken";

for (var i=0;i<5;i++){

}

console.log(i);//5
/* let  kullanıldığında scope for un içinde kalır. var kullanılırda her yerden erişilir.
 */
for (let k=0;k<5;k++){

}
/*console.log(k);// k is not defined
*/

var x="foo";
var x="bar";

console.log(x);// bar

/*
let x="foo";
let x="bar";

console.log(x);// Identifier 'x' has already been declared
*/

/*
const pi=3.14;
pi=3; //Attempt to assign to const or readonly variable
*/

let pi=3;
pi=3.14;
console.log(pi);

const diziler=["Fi","Dexter","Lucifer"];
diziler.push("Witcher");
console.log(diziler);//[ 'Fi', 'Dexter', 'Lucifer', 'Witcher' ]

/*diziler=["",2,3];//Attempt to assign to const or readonly variable */


//template literal
const  name ="Güray";
const surname="Turan";

console.log(`benim adım ${name} soyadım ${surname}`);
