import React from "react";
import ViewCart from "../components/store/ViewCart";
// import PopularProducts from "../components/store/popularProducts";

const Home = React.lazy(() => import('../components/store/Home'))
const ViewProductDetails = React.lazy(() => import('../components/store/Product'))

const ShoppingCartRouter = [
  {
    path: '/',
    exact: true,
    name: 'Home',
    element: Home
  },
  {
    path: '/products/:productId',
    exact: true,
    name: 'View Product',
    element: ViewProductDetails
  },
  {
    path: '/cart/view',
    exact: true,
    name: 'View Cart',
    element: ViewCart,
  }
]


export default ShoppingCartRouter
