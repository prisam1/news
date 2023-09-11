import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/Store'
import NewsList from './Components/NewsList'
import Registration from './Components/Signup'
import Login from './Components/Login'
import ArticleDetail from "./Components/NewsDetails"
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <Router>
      <div className="App">
          <header className="header">
            <h1>News App</h1>
            <ul className="login-links">
              <li>
                <Link to="/login" className='link'>Login</Link>
              </li>
              <li>
                <Link to="/register" className='link'>Register</Link>
              </li>
            </ul>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<NewsList/>} />
              <Route path="/register" element={<Registration/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/news/:id" element={ArticleDetail} />
            </Routes>
          </main>
          <footer>
            <p>{new Date().getFullYear()} News App</p>
          </footer>
        </div>
      </Router>
    </Provider>
  )
}

export default App
