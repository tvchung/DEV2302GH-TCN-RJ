import React, { Component } from 'react'
import Control from './components/Control'
import ListProduct from './components/ListProduct'
import Form from './components/Form'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products:[
        {
            productId: "P001",
            productName: "aplusautomation",
            descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
            price: 12,
            quantity: 10,
            image: "aplusautomation.jpg"
        },
        {
            productId: "P002",
            productName: "aplus media",
            descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
            price: 11,
            quantity: 0,
            image: "aplus-media.jpg"
        },
        {
            productId: "P003",
            productName: "robo fig combo",
            descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
            price: 15,
            quantity: 5,
            image: "robo_fig_combo.jpg"
        },
        {
            productId: "P004",
            productName: "target leap frog",
            descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
            price: 8,
            quantity: 8,
            image: "target-leap-frog.jpg"
        },
        
    ], 
    }
  }

  // submit form
  handleSubmit = (product)=>{
    console.log("Form->App:",product);
    let products=this.state.products;
    // products.push(product);
    products=[...products,product];
    this.setState({
      products:products,
    })
  }
  render() {
    let {products} = this.state;
    // let lallalal = this.state.products;
    return (
      <section className="container">
        <h1 className="text-center mt-3 pt-3">QUẢN LÝ SẢN PHẨM</h1>
        {/* Phần xử lý chức năng: thêm, tìm kiếm, sắp xếp  */}
        <Control />
        <div className="row">
          {/* phần hiển thị danh sách quản lý sản phẩm  */}
          <ListProduct  renderProducts={products} />
          {/* Form xử lý: Xem, Thêm, Sửa  */}
         <Form onSubmit={this.handleSubmit} />
        </div>
      </section>
    )
  }
}
