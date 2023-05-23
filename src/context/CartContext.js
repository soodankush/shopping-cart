import {createContext, useEffect, useState, useReducer} from 'react'
import DataFromApis from "../services/DataFromApi";
export const Cart = createContext([])

const CartContext = ({children}) => {
  const [cartItems, setCartItems] = useState([])
  const [subTotal, setSubTotal] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)
  const [state, dispatch] = useReducer(reducer, {product: 0});


  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        let product = cartItems.find((el) => el.id === action.payload.productId)
        product.quantity += 1
        return { ...cartItems}
        break;

      case 'decrement':
        let decrementProduct = cartItems.find((el) => el.id === action.payload.productId)
          decrementProduct.quantity -= 1
        return { ... cartItems}
        break;

      default:
        return { ...cartItems }
        break;
    }
  }
  function increment(productId) {
    dispatch({ type: 'increment', payload: {productId: productId}})
  }

  function decrement(productId) {
    dispatch({ type: 'decrement', payload: {productId: productId}})
  }

  const {data, error, isPending} = DataFromApis('https://fakestoreapi.com/carts/5')

  useEffect(  () => {
    (async () => {
      setCartItems([])
      let productDataWithQuantity = data?.products.map( async (productData) => {
        const ifProductAlreadyPresent = cartItems.findIndex(el => el.id == productData.productId)

        const productDataResult = await getProductsData(productData.productId)
        return { ...productDataResult, quantity: productData.quantity}

      })

      productDataWithQuantity
        .map((el) => {
          el.then((dataResponse) => {
            setCartItems(cartItems => [...cartItems, dataResponse])
          }).catch(error => {
            console.log(error)
          })
        })
    })()

  }, [data])

  const getProductsData = async(productIdFromJson) => {
    const response = await fetch(`https://fakestoreapi.com/products/${productIdFromJson}`)
    if(response.status === 200) {
      const productJson = await response.json()
      return productJson
    }
    throw new Error(`Error getting data`)
  }

  useEffect(() => {
    const f = () => {
      const subTotalValue = calculateSubTotal();
      setSubTotal(subTotalValue)

      const cartTotalValue = calculateCartTotal();
      setCartTotal(cartTotalValue)
    };
    f();
  }, [cartItems])

  const calculateSubTotal = () => {
    console.log(`In Sub total function`)
    let total = 0
    const subTotalOfCart = cartItems.reduce((total, currentValue) => {
      return total + (currentValue.quantity * currentValue.price)
    }, 0)
    console.log(subTotalOfCart)
    return parseFloat(subTotalOfCart).toFixed(2)
  }

  const calculateCartTotal = () => {
    let total = 0
    const cartTotal = cartItems.reduce((total, currentValue) => {
      return total + (currentValue.quantity * currentValue.price)
    }, 0)

    const cartTotalAfterTax = ((1/20) * cartTotal) + cartTotal
    return parseFloat(cartTotalAfterTax).toFixed(2)
  }

  return <Cart.Provider value={{
    cartItems,
    setCartItems,
    increment,
    decrement,
    subTotal,
    cartTotal
  }}>{children}</Cart.Provider>
}

export default CartContext
