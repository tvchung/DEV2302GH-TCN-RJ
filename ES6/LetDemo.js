// Khai báo với let
let x = 5;
if(x==5){
    let x=10;
    console.log("x ben trong if:",x);
}
// ben ngoài if    
console.log("x ben ngoài if:",x);
// error
// let x=100; khai báo lại

let y=123;
if(y==123){
    y=321; // gán lại
    console.log("y bên trong if:",y);
}

console.log("y bên ngoài if:",y);