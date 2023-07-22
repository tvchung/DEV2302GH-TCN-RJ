import React ,{useState, useEffect} from 'react'

export default function DemoUseEffect() {
    
    const [count,setCount]=useState(0);
    // hàm useEffect là một hook -> có 3 cách sử dụng
    const [list,setList] = useState([]);
    useEffect(()=>{
        console.log("----------Use Effect callback function");
        // setList([
        //     ...list,
        //     count
        // ])
    })

    // tham số thứ 2 là mảng rỗng => gọi thực hiện 1 lần duy nhất
    useEffect(()=>{
        console.log("Một lần duy nhất");
        setList([
            ...list,
            count
        ])
    },[])

    // Tham số thứ 2 là một mảng các biến phụ thuộc
    useEffect(()=>{
        console.log("Thực hiện khi count thay đồi");
        setList([
            ...list,
            count
        ])
    },[count])
    const handleClick = ()=>{
        setCount(prev=>prev+1)
    }
  return (
    <div>
      <h2>Demo useEffect</h2>
      <p>Current Count: {count}</p>
      <button onClick={handleClick}>Click here</button>
      <p>List: {list}</p>
    </div>
  )
}
