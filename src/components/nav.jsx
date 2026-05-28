function Navbar({
  cartcount,
  showCart,
  showRegister,
  search,
  setSearch
}) {
  const isMobile = window.innerWidth < 600

  return (
    <nav
  style={{
    minHeight: "80px",
    backgroundColor: "#111827",
    color: "white",
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 40px",
    gap: "20px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
  }}
>
      <h1
  style={{
    margin: 0,
    fontSize: "36px",
    fontWeight: "bold",
    letterSpacing: "1px",
  }}
>
  Shop Ville
</h1>

      <input
  type="text"
  placeholder="Search products..."
  value={search}
  onChange={(e) =>
    setSearch(e.target.value)
  }
  style={{
    padding: "12px",
    width: isMobile ? "100%" : "350px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
  }}
/>

      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={showCart} style={{
    padding: "10px 18px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#2563eb",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "14px",
  }}>
          Cart: {cartcount}
        </button>

        <button onClick={showRegister} style={{
    padding: "10px 18px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#2563eb",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "14px",
  }}>
          Login
        </button>
      </div>
    </nav>
  )
}

export default Navbar