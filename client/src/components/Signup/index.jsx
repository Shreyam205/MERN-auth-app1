import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react'
// import './style.css'
import axios from 'axios'

const Signup = () => {
    const [data, setData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:""
    })
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handleChange = ({currentTarget: input}) =>{
        setData({...data, [input.name]: input.value})
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        try {
            const url = "http://localhost:8080/api/users"
            const {data: res} = await axios.post(url, data)
            navigate("/login")
            console.log(res.message)
        } catch (error) {
            if(error.response &&  error.response.status >= 400 && error.response.status <= 500)
                {
                    setError(error.response.data.message)
                }
        }
    }
    
  return (
    <div className='signup_container'>
        <div className='signup_form_container'>
            <div className='left'>
                <h1>Welcome Back</h1>
                <Link to="/login">
                <button type='button' className='white_btn'>
                    Sing in
                </button>
                </Link>
            </div>
            <div className='right'>
                <form onSubmit={handleSubmit} className='form_container'>
                    <h1>Create Account</h1>
                    <input type="text" placeholder='First Name' name='firstName' value={data.firstName} required className='input' onChange={handleChange}/>
                    <input type="text" placeholder='Last Name' name='lastName' value={data.lastName} required className='input' onChange={handleChange}/>
                    <input type="email" placeholder='Email' name='email' value={data.email} required className='input' onChange={handleChange}/>
                    <input type="password" placeholder='Password' name='password' value={data.password} required className='input' onChange={handleChange}/>
                    {error && <div className='error_msg'>{error}</div>}
                    <button type='submit' className='green_btn'>Sign Up</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup