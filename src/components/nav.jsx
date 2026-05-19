function Navbar() {
  const isMobile = window.innerWidth < 600

  return (
    <nav
      style={{
        height: isMobile ? "auto" : "70px",
        width: "auto",
        backgroundColor: "black",
        color: "white",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px",
        gap: "15px",
      }}
    >
      <h1>Shop ville</h1>

      <div style={{ display: "flex", gap: "15px" }}>
        <input
          type="text"
          placeholder="Search"
          style={{
            padding: "8px",
            width: isMobile ? "100%" : "250px",
          }}
        />
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <button>Cart</button>
        <button>Login</button>
      </div>
    </nav>
  )
}

export default Navbar