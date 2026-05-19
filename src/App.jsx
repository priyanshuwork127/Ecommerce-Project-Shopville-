import Navbar from "./components/nav.jsx"
import Product from "./components/productcard.jsx"
import {useEffect,useState} from "react"
function App(){

  const [products,setProduct]=useState([])

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((res)=>res.json())
    .then((data)=>setProduct(data))
  },[])

  return(

    <>
    <Navbar />
    
    <div
     style={{display:"flex",flexwrap:"wrap",gap:"20px",padding:"20px"}}>
      {products.map((item)=>(
        <Product 
        key={item.id}
        title={item.title}
        price={item.price}
        image={item.image}
        />
      ))}
     </div>
    </>

  )
}

export default App