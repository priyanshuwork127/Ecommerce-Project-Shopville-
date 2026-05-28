import { useState } from "react"

function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [error,setError]=useState("")
  function handleSubmit(e) {
    e.preventDefault()
    if(name==="")
{
      setError("Name is required")
      return
    }
    if(email==="")
{
      setError("Email is required")
      return
    }
    if(!email.includes("@")){
      setError("Email is invalid")
      return
    }
    if(password==="")
{
      setError("Password is required")
      return
    }
    if(password.length<8){
      setError("Password must be at least 8 characters")
      return
    }
    setError("")
    alert("Registration Successful")
  }

  return (
    <div>
      <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",width:"300px",margin:"15px"}}>
        <h2>Register</h2>
        {error && <p style={{color:"red"}}>{error}</p>}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button type="submit">
          Register
        </button>
      </form>
    </div>
  )
}

export default Register