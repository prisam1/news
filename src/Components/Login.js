import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../redux/authAction'

function Login() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    dispatch(login(email, password))
  }

  return (
    <div className="container">   
    <form>  
     <h4 className="title">Log In</h4>

    <div className="mb-3">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      </div> 
      <div className="mb-3">
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      
    </div>
    <button onClick={handleLogin}  className="btn btn-primary">Login</button>
    </form>
    </div>    
      
  )
}

export default Login
