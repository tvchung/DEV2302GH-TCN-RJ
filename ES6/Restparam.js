// các tham số còn lại ...param
function add (num1, num2, ...param){
    let res = num1+num2;
    // param.forEach(element => {
    //     res +=element
    // });
    for (let i = 0; i < param.length; i++) {
        res +=param[i]
    }
    console.log("Result:",res);
}
add(10,20); //30
add(10,20,30,40); // 100
add(10,10,20,20,20,20);//100