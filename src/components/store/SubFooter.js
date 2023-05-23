import footerFirstImage from "../../assets/images/model_6.png";

const SubFooter = () => {
  return (
    <div className="site-blocks-cover inner-page py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 ml-auto order-md-2 align-self-start">
            <div className="site-block-cover-content">
              <h2 className="sub-title">#New Summer Collection 2019</h2>
              <h1>New Shoes</h1>
              <p><a href="/" className="btn btn-black rounded-0">Shop Now</a></p>
            </div>
          </div>
          <div className="col-md-6 order-1 align-self-end">
            <img src={ footerFirstImage } alt="Imagenew" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubFooter