import Navbar from "./components/nav.jsx"
import Product from "./components/productcard.jsx"
import {useEffect,useState} from "react"

function App(){

  const [products,setProduct]=useState([])
  const [cart,setCart]=useState([])
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((res)=>res.json())
    .then((data)=>setProduct(data))
  },[])

  function Addtocart(product){
    setCart([...cart,product])
  }
  function deletecart(product) {
    setCart(cart.filter((item) => item.id !== product.id))
  }

  return(

    <>
    <Navbar cartcount={cart.length}/>
    
    <div
     style={{display:"flex",flexWrap:"wrap",gap:"20px",padding:"20px"}}>
      {products.map((item)=>(
        <Product 
        key={item.id}
        title={item.title}
        price={item.price}
        image={item.image}
        Addtocart={()=>Addtocart(item)}
        deletecart={()=>deletecart(item)}
        />
      ))}
     </div>
    </>

  )
}

export default App