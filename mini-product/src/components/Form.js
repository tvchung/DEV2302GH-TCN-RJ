import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            productId: "",
            productName: "",
            descriptions: "",
            price: 0,
            quantity: 0,
            image: ""
        }
    }

    // change
    handleChange = (event)=>{
        let name=event.target.name;
        let value = event.target.value;
        console.log(name,value);

        this.setState({
            [name]:value,
        })
    }

    // submit form
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log("Form: Submit:",this.state);
        this.props.onSubmit(this.state)
    }
  render() {
    return (
        <div className="form col-md-5 col-12">
        <form action="" method="post">
          <div className="mb-3">
            <label htmlFor="productId" className="form-label">
              Product Id
            </label>
            <input
              type="text"
              className="form-control"
              id="productId"
              placeholder="Mã sản phẩm"
              name='productId'
              value={this.state.productId}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productName" className="form-label">
              Pproduct Name
            </label>
            <input
              type="text"
              className="form-control"
              id="productName"
              placeholder="Tên sản phẩm"
              name='productName'
              value={this.state.productName}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              placeholder="Giá sản phẩm"
              name='price'
              value={this.state.price}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">
              Product Quantity
            </label>
            <input
              type="number"
              className="form-control"
              id="quantity"
              placeholder="Số lượng sản phẩm"
              name='quantity'
              value={this.state.quantity}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="iamge" className="form-label">
              Image
            </label>
            <input type="file" className="form-control" id="image" 
            name='image'
            value={this.state.image}
            onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Mô tả sản phẩm
            </label>
            <textarea
              className="form-control"
              id="descriptions"
              rows={3}
              name='descriptions'
                value={this.state.descriptions}
                onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}
