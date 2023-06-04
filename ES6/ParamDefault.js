// Tham số mặc định (2 cách khai báo)
// note: ds các tham số mặc định => phải đặt cuối danh sách
// cách 1:
function add(a,b,c=10){
    // biến c là loại tham số mặc định
    let kq=a+b+c;
    console.log("kết quả:",kq);
}
// exec
add(10,20);// 40
add(10,10,50); // 70

// cách 2:
function display(name, company){
    // tham số mặc định là company =Devmaster Academy
    company = company || "Devmaster Academy";

    console.log('====================================');
    console.log("Xin chào,",name);
    console.log(company);
    console.log('====================================');

}
display("Chung Trịnh");// Sử dụng company là mạc định
display("Dev","Viện công nghệ")
