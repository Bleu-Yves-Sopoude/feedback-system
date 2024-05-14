import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Login from './Login';

import Register from './Register'

function App() {


  return (
<Router>
      <nav>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        {/* Other navigation links */}
      </nav>
      <Routes>
        <Route path="/register" element={<Register/> } />
        <Route path="/login" element={<Login/>} />

        {/* Other routes */}
      </Routes>
    </Router>
  )
}

export default App
