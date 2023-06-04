// Khai báo biến hằng
const x=5;
console.log("Giá trị x=",x);
/*
x=10
console.log("Giá trị x=",x);
*/

/* error
if(x==5){
    x=100; // Assignment to constant variable
    console.log("x bên trong if:",x);
}
*/

if(x==5){
    let x=100; 
    console.log("x bên trong if:",x);
}
console.log("Giá trị x=",x);
/* error
if(x==5){
    var x=100; 
    console.log("x bên trong if:",x);
}
console.log("Giá trị x=",x);
*/