function Product(props) {
  return (
    <div
  style={{
    border: "1px solid #ddd",
    padding: "15px",
    width: "230px",
    borderRadius: "12px",
    backgroundColor: "white",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    transition: "0.3s",
  }}
>
      <img
  src={props.image}
  alt=""
  style={{
    width: "100%",
    height: "220px",
    objectFit: "contain",
    marginBottom: "15px",
  }}
/>

      <h3
  style={{
    fontSize: "18px",
    minHeight: "60px",
  }}
>
  {props.title}
</h3>

      <p
  style={{
    fontSize: "20px",
    fontWeight: "bold",
    color: "#2563eb",
  }}
>
  Rs. {props.price}
</p>

      <div
  style={{
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  }}
>
  <button onClick={props.Addtocart}>
    Add To Cart
  </button>

  {props.showRemove && (
    <button onClick={props.deleteFromCart}>
      Remove
    </button>
  )}
</div>
    </div>
  )
}

export default Product