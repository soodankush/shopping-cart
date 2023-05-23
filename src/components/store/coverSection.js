import frontImage from "../../assets/images/model_3.png";

const CoverSection = () => {
  return (
    <div className="site-blocks-cover">
      <div className="container">
        <div className="row">
          <div className="col-md-6 ml-auto order-md-2 align-self-start">
            <div className="site-block-cover-content">
              <h2 className="sub-title">#New Summer Collection 2019</h2>
              <h1>Arrivals Sales</h1>
              <p><a href="/" className="btn btn-black rounded-0">Shop Now</a></p>
            </div>
          </div>
          <div className="col-md-6 order-1 align-self-end">
            <img src={frontImage} alt="Front End Pic" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoverSection