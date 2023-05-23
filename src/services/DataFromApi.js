import {useState, useEffect} from "react"

const DataFromApis = (url) => {

  const getDataFromUrl = async(url) => {
    console.log(`calling gete data from url function`)
    const result = await fetch(url)
    const response = await result.json()
    return response
  }
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect( () => {
    ( () => {
      console.log(`In us Effect function`)

      getDataFromUrl(url)
      .then((data) => {
        setIsPending(false)
        setError(null)
        setData(data)
      })
        .catch((error) => {
          setIsPending(false)
          setError(error.message)
        })
      })();
  }, [url]);
  return {data, error, isPending}

  const getProductsData = async(productIdFromJson) => {
    const response = await fetch(`https://fakestoreapi.com/products/${productIdFromJson}`)
    if(response.status === 200) {
      const productJson = await response.json()
      return productJson
    }
    throw new Error(`Error getting data`)
  }
}
export default DataFromApis