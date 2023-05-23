import {useEffect, useState} from "react"
import {Link} from "react-router-dom";

const PopularProducts = () => {

  const [popularProducts, setPopularProducts ] = useState([])
  async function getPopularProducts() {
    const popularProductsData = await fetch('https://fakestoreapi.com/products?limit=6')
    if(popularProductsData.status === 200) {
      return await popularProductsData.json()
    }
    throw new Error(`${popularProductsData.status}`)
  }

  useEffect(() => {
    getPopularProducts().then((responseData) => {
      setPopularProducts(responseData)
    }).catch((error) => {
      console.log(error)
      console.log(`error`)
    });
  }, [])

  return (
    <>
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="title-section mb-5 col-12">
              <h2 className="text-uppercase">Popular Products</h2>
            </div>
          </div>
          <div className="row">
            { popularProducts.map((product, productIndex) => (
              <div className="col-lg-4 col-md-6 item-entry mb-4" key={productIndex}>
                <Link to={`/products/${product.id}`} className="product-item md-height bg-gray d-block">
                  <img src={ product.image } alt="Imagenew" className="img-fluid" />
                </Link>
                <Link to={`/products/${product.id}`} className="item-title"><a href="/">{product.title}</a></Link>
                <strong className="item-price">${product.price}</strong>
              </div>
            )) }
          </div>
        </div>
      </div>
    </>

  )
}

export default PopularProducts