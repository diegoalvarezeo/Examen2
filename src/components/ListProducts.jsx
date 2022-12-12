import React, {  useState, useEffect} from 'react'

export const ListProducts = () => {
  const [Product,setProduct] = useState([])
  

  useEffect(() => {
      getData();
  }, [])
    

  const getData = async ()=>{
    const data = await fetch(' https://dummyjson.com/products')
    const response= data.ok ? await data.json() : await data.text();
    console.log(response)
    setProduct(response.products)
  }
  return (
    <div>
      <h1>lista Productos</h1>
    <ul>
       {
          Product.map(item=>(
          <li key={item.id}>{item.title}</li>
         ))
        }

    </ul>
    </div>
  )
}
export default ListProducts;
