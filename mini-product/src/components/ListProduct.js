import React, { Component } from 'react'
import Product from './Product'

export default class ListProduct extends Component {
  render() {
    let {renderProducts} = this.props;
    console.log("List:",renderProducts);
    // map từng dòng dữ liệu trong mảng -> map to Product
    let elementProduct = renderProducts.map((product,index)=>{
        return <Product key={index} renderProduct={product} stt={index+1} />
    })
    return (
        <div className="list-product col-md-7 col-12">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
           {/* <Product /> */}
           {elementProduct}
          </tbody>
        </table>
      </div>
    )
  }
}
