import {Link, useParams} from "react-router-dom"
import {useContext, useState} from "react";
import DataFromApis from "../../services/DataFromApi";

const Product = () => {
  const {productId} = useParams()
  const {data, error, isPending} = DataFromApis(`https://fakestoreapi.com/products/${productId}`)
  const [itemCount, setItemCount] = useState(1)

  const incrementItems = () => {
    itemCount > 0 ? setItemCount(parseInt(itemCount + 1)): setItemCount(parseInt(itemCount))
  }

  const decrementItems = () => {
    itemCount > 1 ? setItemCount(parseInt(itemCount - 1)) : setItemCount(parseInt(itemCount))
  }

  const addToCart = async () => {

    const postResponse = await fetch(`https://fakestoreapi.com/carts/5`, {
      method: "PUT",
      body: JSON.stringify(
        {
          userId: 3,
          date: 2022-10-11,
          products: [
            {
              productId: productId,
              quantity: itemCount
            }
          ]
        }
      )
    })

    if(postResponse.status === 200) {
      return postResponse.json()
    }
    throw new Error("Unable to add product")
  }

  return(
    <>
      <div className="bg-light py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-0"><Link to="/">Home</Link> <span className="mx-2 mb-0">/</span> <Link to="/">Shop</Link> <span className="mx-2 mb-0">/</span> <strong className="text-black">Gray
              Shoe</strong></div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row">
            { isPending && (
              <div className="col-md-6"> ... Loading </div>
            )}
            { data && (
              <>
              <div className="col-md-6">
                <div className="item-entry">
                  <a href="#" className="product-item md-height bg-gray d-block" style={{height: "650px"}}>
                    <img src={data.image} alt={data.descirption} className="img-fluid" />
                  </a>

                </div>

              </div>
              <div className="col-md-6">
                <h2 className="text-black">{ data.title }</h2>
                <p>{data.description}</p>
                <p><strong className="text-primary h4">${(data.price)}</strong></p>
                <div className="mb-1 d-flex">
                  <label htmlFor="option-sm" className="d-flex mr-3 mb-3" style={{ marginRight: "1pc" }}>
                  <span className="d-inline-block mr-2" style={{marginRight: "5px", position: "relative"}}><input type="radio"
                                                                                                           id="option-sm"
                                                                                                           name="shop-sizes" /></span>
                    <span className="d-inline-block text-black">Small</span>
                  </label>
                  <label htmlFor="option-md" className="d-flex mr-3 mb-3" style={{ marginRight: "1pc" }}>
                  <span className="d-inline-block mr-2" style={{marginRight: "5px", position: "relative"}}><input type="radio"
                                                                                                           id="option-md"
                                                                                                           name="shop-sizes" /></span>
                    <span className="d-inline-block text-black">Medium</span>
                  </label>
                  <label htmlFor="option-lg" className="d-flex mr-3 mb-3" style={{ marginRight: "1pc" }}>
                  <span className="d-inline-block mr-2" style={{marginRight: "5px", position: "relative"}}><input type="radio"
                                                                                                           id="option-lg"
                                                                                                           name="shop-sizes" /></span>
                    <span className="d-inline-block text-black">Large</span>
                  </label>
                  <label htmlFor="option-xl" className="d-flex mr-3 mb-3" style={{ marginRight: "1pc" }}>
                  <span className="d-inline-block mr-2" style={{marginRight: "5px", position: "relative"}}><input type="radio"
                                                                                                           id="option-xl"
                                                                                                           name="shop-sizes" /></span>
                    <span className="d-inline-block text-black"> Extra Large</span>
                  </label>
                </div>
                <div className="mb-5">
                  <div className="input-group mb-3" style={{ width: "120px"}}>
                    <div className="input-group-prepend">
                      <button className="btn btn-outline-primary js-btn-minus" type="button" onClick={() => decrementItems()}>&minus;</button>
                    </div>
                    <input type="text" value={itemCount} className="form-control text-center" placeholder=""
                           aria-label="Example text with button addon" aria-describedby="button-addon1" onChange={(e) => {
                              setItemCount(parseInt(e.target.value))
                           }} />
                    <div className="input-group-append">
                      <button className="btn btn-outline-primary js-btn-plus" type="button" onClick={() => incrementItems()}>+</button>
                    </div>
                  </div>
                </div>
                <p><button type="button" className="buy-now btn btn-sm height-auto px-4 py-3 btn-primary" onClick={() => {
                  try{ addToCart().then((response) => {
                    console.log(`Success`)
                    console.log(response)})
                    alert("Product successfully added to cart")
                  } catch (e) {
                    console.log(e)
                  }
                } }>Add To Cart</button>
                </p>

              </div>
              </>
            ) }

          </div>
        </div>
      </div>
    </>
)
}

export default Product