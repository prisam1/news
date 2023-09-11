import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../redux/authAction'

function Registration() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = () => {
    dispatch(register(email, password))
  }

  return (
<div className="container">
    <form> 
      <h4 className="title">Sign Up</h4>  
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
    <button onClick={handleRegister}>Register</button>
    </form> 
    </div>
  )
}

export default Registration
