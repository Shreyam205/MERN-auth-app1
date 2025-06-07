import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
// import './style.css'
import axios from 'axios'

const Signup = () => {
    const [data, setData] = useState({
        email:"",
        password:""
    })
    const [error, setError] = useState("")

    const handleChange = ({currentTarget: input}) =>{
        setData({...data, [input.name]: input.value})
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        try {
            const url = "http://localhost:8080/api/auth"
            const {data: res} = await axios.post(url, data)
            localStorage.setItem("token", res.data)
            window.location = "/"
            console.log(res.message)
        } catch (error) {
            if(error.response &&  error.response.status >= 400 && error.response.status <= 500)
                {
                    setError(error.response.data.message)
                }
        }
    }
    
  return (
    <div className='login_container'>
        <div className='login_form_container'>
            <div className='left'>
                <form onSubmit={handleSubmit} className='form_container'>
                    <h1>Login to your Account</h1>
                    <input type="email" placeholder='Email' name='email' value={data.email} required className='input' onChange={handleChange}/>
                    <input type="password" placeholder='Password' name='password' value={data.password} required className='input' onChange={handleChange}/>
                    {error && <div className='error_msg'>{error}</div>}
                    <button type='submit' className='green_btn'>Login</button>
                </form>
            </div>
            <div className='right'>
                <h1>New User?</h1>
                <Link to="/singup">
                <button type='button' className='white_btn'>
                    Sing Up
                </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Signup