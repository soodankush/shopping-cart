import DataFromApis from "../../services/DataFromApi";
import {useEffect, useState, useContext} from "react";
import {Cart} from "../../context/CartContext";
const ViewCart = () => {
  const { cartItems, increment, decrement, subTotal, cartTotal } = useContext(Cart)

  return(
    <div className="site-section">
      <div className="container">
        <div className="row mb-5">
          <form className="col-md-12" method="post">
            <div className="site-blocks-table">
              <table className="table table-bordered">
                <thead>
                <tr>
                  <th className="product-thumbnail">Image</th>
                  <th className="product-name">Product</th>
                  <th className="product-price">Price</th>
                  <th className="product-quantity">Quantity</th>
                  <th className="product-total">Total</th>
                  <th className="product-remove">Remove</th>
                </tr>
                </thead>
                <tbody>
                {cartItems.length > 0 ? cartItems.map((product, index) => {
                  return(
                    <tr key={index}>
                      <td className="product-thumbnail">
                        <img src={product.image} alt={product.title} className="img-fluid" />
                      </td>
                      <td className="product-name">
                        <h2 className="h5 text-black">{product.title}</h2>
                      </td>
                      <td>${product.price}</td>
                      <td>
                        <div className="input-group mb-3" style={{maxWidth: "120px"}}>
                          <div className="input-group-prepend">
                            <button className="btn btn-outline-primary js-btn-minus" type="button" onClick= {() => decrement(product.id)}>&minus;</button>
                          </div>
                          <input type="text" className="form-control text-center" value={product.quantity} placeholder=""
                                 aria-label="Example text with button addon" aria-describedby="button-addon1" onChange={(e) => { console.log(e.target.value)}}/>
                          <div className="input-group-append">
                            <button className="btn btn-outline-primary js-btn-plus" type="button" onClick={() => increment(product.id)} >+</button>
                          </div>
                        </div>

                      </td>
                      <td>${product.price * product.quantity}</td>
                      <td><a href="#" className="btn btn-primary height-auto btn-sm">X</a></td>
                    </tr>
                    )
                }) : <tr></tr>}


                </tbody>
              </table>
            </div>
          </form>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="row mb-5">
              <div className="col-md-6 mb-3 mb-md-0">
                <button className="btn btn-primary btn-sm btn-block">Update Cart</button>
              </div>
              <div className="col-md-6">
                <button className="btn btn-outline-primary btn-sm btn-block">Continue Shopping</button>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <label className="text-black h4" htmlFor="coupon">Coupon</label>
                <p>Enter your coupon code if you have one.</p>
              </div>
              <div className="col-md-8 mb-3 mb-md-0">
                <input type="text" className="form-control py-3" id="coupon" placeholder="Coupon Code"  onChange={(e) => { console.log(e.target.value)}}/>
              </div>
              <div className="col-md-4">
                <button className="btn btn-primary btn-sm px-4">Apply Coupon</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 pl-5">
            <div className="row justify-content-end">
              <div className="col-md-7">
                <div className="row">
                  <div className="col-md-12 text-right border-bottom mb-5">
                    <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <span className="text-black">Subtotal</span>
                  </div>
                  <div className="col-md-6 text-right">
                    <strong className="text-black">${subTotal}</strong>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-md-6">
                    <span className="text-black">Total</span>
                  </div>
                  <div className="col-md-6 text-right">
                    <strong className="text-black">${cartTotal}</strong>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <button className="btn btn-primary btn-lg btn-block"
                            onClick={() => console.log('Proceed to checkout')}>Proceed To Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewCart