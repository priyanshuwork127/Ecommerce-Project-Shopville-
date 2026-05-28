import Navbar from "./components/nav.jsx"
import Product from "./components/productcard.jsx"
import Register from "./components/Register.jsx"

import { useEffect, useState } from "react"

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [showRegister, setShowRegister] =
    useState(false)
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  function addToCart(product) {
    setCart([...cart, product])
  }

  function deleteFromCart(indexToRemove) {
    const updatedCart = cart.filter(
      (_, index) => index !== indexToRemove
    )

    setCart(updatedCart)
  }

  const filteredProducts = products.filter(
    (item) =>
      item.title
        .toLowerCase()
        .includes(search.toLowerCase())
  )

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
      }}
    >
      <Navbar
        cartcount={cart.length}
        showCart={() => setShowCart(!showCart)}
        showRegister={() =>
          setShowRegister(!showRegister)
        }
        search={search}
        setSearch={setSearch}
      />

      {showRegister ? (
        <Register />
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            padding: "20px",
            justifyContent: "center",
          }}
        >
          {!showCart &&
            filteredProducts.map((item) => (
              <Product
                key={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                Addtocart={() =>
                  addToCart(item)
                }
              />
            ))}

          {showCart &&
            cart.map((item, index) => (
              <Product
                key={index}
                title={item.title}
                price={item.price}
                image={item.image}
                Addtocart={() =>
                  addToCart(item)
                }
                deleteFromCart={() =>
                  deleteFromCart(index)
                }
                showRemove={true}
              />
            ))}
        </div>
      )}

      <p
        style={{
          textAlign: "center",
          padding: "15px",
          color: "gray",
          fontSize: "14px",
        }}
      >
        Disclaimer: Product images,
        names, and data are used only
        for educational and learning
        purposes.
      </p>
    </div>
  )
}

export default App