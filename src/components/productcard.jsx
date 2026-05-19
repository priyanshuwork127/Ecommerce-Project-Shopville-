function Product(props) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        width: "200px",
      }}
    >
      <img
        src={props.image}
        alt="image"
        style={{
          width: "100%",
          height: "200px",
          objectFit: "contain",
        }}
      />

      <h3>{props.title}</h3>

      <h3>Rs.{props.price}</h3>

      <button>Add to cart</button>
    </div>
  )
}

export default Product