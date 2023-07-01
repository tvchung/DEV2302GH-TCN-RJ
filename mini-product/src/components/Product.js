import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        let {renderProduct, stt} = this.props;
        console.log("Product:",renderProduct,stt);
        return (
            <>
                <tr>
                    <th scope="row">{stt}</th>
                    <td>
                        <img src={`images/${renderProduct.image}`} alt="target-leap-frog" />
                    </td>
                    <td>{renderProduct.productId}</td>
                    <td>{renderProduct.productName}</td>
                    <td>{renderProduct.price}</td>
                    <td>{renderProduct.quantity}</td>
                    <td>
                        <button className="btn btn-primary">Xem</button>
                        <button className="btn btn-success">Sửa</button>
                        <button className="btn btn-danger">Xóa</button>
                    </td>
                </tr>
            </>
        )
    }
}
