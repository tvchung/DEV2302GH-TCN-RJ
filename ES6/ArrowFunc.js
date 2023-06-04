// Khái niệm: Arrow function

// cũ: nomal function
function show(name){
    console.log('==============Nomal function========');
    console.log("Xin chào, " , name);
    console.log('====================================');
}

var display = function(name){
    console.log('=============Nomal function=========');
    console.log("Xin chào, " , name);
    console.log('====================================');
}

show("Chung Trịnh")
display("Devmaster Academy")

// arrow
const hienThi = (name)=>{
    console.log('=============Arrow function=========');
    console.log("Xin chào, " , name);
    console.log('====================================');
}
hienThi("Viện công nghệ Devmaster")