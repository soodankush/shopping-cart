import {useEffect, useState} from "react"

const MostRated = () => {

  const [mostRatedProducts, setMostRatedProducts] = useState([])

  async function getMostRatedProducts() {
    const mostRatedProductResponse = await fetch(`https://fakestoreapi.com/products?sort=desc&limit=6`)
    if(mostRatedProductResponse.status === 200) {
      return await mostRatedProductResponse.json()
    }
    throw new Error(`${mostRatedProductResponse.status}`)
  }

  useEffect(() => {
    getMostRatedProducts().then((productResponse) => {
      setMostRatedProducts(productResponse)
    }).catch((error) => {
      alert(error)
    })
  }, [])

  return (
    <div className="site-section">
      <div className="container">
        <div className="row">
          <div className="title-section text-center mb-5 col-12">
            <h2 className="text-uppercase">Most Rated</h2>
          </div>
        </div>
        <div className="row">
          {mostRatedProducts.map((product, index) => (
            <div className="col-md-4 block-3" key={index}>
              <div className="nonloop-block-3 owl-carousel">
                <div className="item">
                  <div className="item-entry">
                    <a href="/" className="product-item md-height bg-gray d-block">
                      <img src={product.image} alt="Imagenew" className="img-fluid" />
                    </a>
                    <h2 className="item-title"><a href="/">{product.title}</a></h2>
                    <strong className="item-price">
                      <del>$46.00</del>
                      ${product.price}</strong>
                    <div className="star-rating">
                      <span className="icon-star2 text-warning"></span>
                      <span className="icon-star2 text-warning"></span>
                      <span className="icon-star2 text-warning"></span>
                      <span className="icon-star2 text-warning"></span>
                      <span className="icon-star2 text-warning"></span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MostRated