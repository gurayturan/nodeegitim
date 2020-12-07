const arr=["foo","bar","xyz"];
console.log(...arr);

const arrx=[1,2,3];

/*
const arry=[arrx,4,5,6,];
console.log(arry);//[ [ 1, 2, 3 ], 4, 5, 6 ]
 */

const arry=[...arrx,4,5,6];
console.log(arry);//[ 1, 2, 3, 4, 5, 6 ]

const arrayx=[1,2,3,4];
const [deger1,deger2,...rest]=arrayx;
console.log(deger1);//1
console.log(rest);//[ 3, 4 ]
