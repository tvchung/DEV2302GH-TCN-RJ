// trích xuất thành phần
// array / object
var arr=[1,3,5,7];
const [a,b]=arr;
console.log("a=",a);
console.log("b=",b);

var obj = {
    name:"Chung Trịnh",
    age:44,
    address:"25 Vũ Ngọc Phan",
    skill: "All"
}
// des
var {name,age} = obj;
console.log("Xin chào,",name,age);

var {name,address} = obj;
console.log("Xin chào,",name,address);
