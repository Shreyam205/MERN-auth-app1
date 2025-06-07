// import './style.css'
import React from 'react'

const Main = () => {
    const handleLogout = () =>{
        localStorage.removeItem("token")
        window.localStorage.reload()
    }
  return (
    <div className="main_container">
        <nav className="navbar">
            <h1>Login Page</h1>
            <button className='white_btn' onClick={handleLogout}>logout</button>
        </nav>
    </div>
  )
}

export default Main