import {Link} from "react-router-dom";
import {useState, useContext, useEffect} from "react";
import {Cart} from "../../context/CartContext";
const Navbar = () => {

  const [itemCount, setItemCount] = useState();
  const {cartItems} = useContext(Cart)

  useEffect(() => {
    setItemCount(cartItems.length)
  }, [cartItems])
  return(
    <div className="site-navbar bg-white py-2">

      <div className="search-wrap">
        <div className="container">
          <a href="/" className="search-close js-search-close"><span className="icon-close2"></span></a>
          <form action="#" method="post">
            <input type="text" className="form-control" placeholder="Search keyword and hit enter..." />
          </form>
        </div>
      </div>

      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo">
            <div className="site-logo">
              <a href="/" className="js-logo-clone">ShopMax</a>
            </div>
          </div>
          <div className="main-nav d-none d-lg-block">
            <nav className="site-navigation text-right text-md-center" role="navigation">
              <ul className="site-menu js-clone-nav d-none d-lg-block">
                <li className="has-children active">
                  <a href="/">Home</a>
                  <ul className="dropdown">
                    <li><a href="/">Menu One</a></li>
                    <li><a href="/">Menu Two</a></li>
                    <li><a href="/">Menu Three</a></li>
                    <li className="has-children">
                      <a href="/">Sub Menu</a>
                      <ul className="dropdown">
                        <li><a href="/">Menu One</a></li>
                        <li><a href="/">Menu Two</a></li>
                        <li><a href="/">Menu Three</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li><Link to={`/`}>Shop</Link></li>
              </ul>
            </nav>
          </div>
          <div className="icons">
            <a href="/" className="icons-btn d-inline-block js-search-open"><span className="icon-search"></span></a>
            <a href="/" className="icons-btn d-inline-block"><span className="icon-heart-o"></span></a>
            <Link to={`/cart/view`} className="icons-btn d-inline-block bag">
              <span className="icon-shopping-bag"></span>
              {itemCount > 0 ? <span className="number">{itemCount}</span> : <></>}
            </Link>
            <a href="/" className="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"><span
              className="icon-menu"></span></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar