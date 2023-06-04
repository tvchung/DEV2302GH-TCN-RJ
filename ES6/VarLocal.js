
// var -local
function varLocal(){
    var a=123;
    console.log("Giá trị a bên trong hàm varLocal:",a);
}
// sử dụng biến a => error
console.log("Giá trị a bên ngoài hàm (ko tồn tại)",a);