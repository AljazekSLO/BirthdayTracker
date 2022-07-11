import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { signin} from '../actions/auth'
import { useNavigate } from 'react-router-dom'

const initialState = {email: '', password: ''}

const Signin = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState(initialState)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signin(form)
      console.log(response);
      navigate('/')
    } catch (error) {
      console.log(error.response);
    }
  }

  const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value })
  }
  return (
    <>
    <div className='w-full h-screen'>
        <div className= 'fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[450px] mx-auto bg-indigo-600/75 rounded-xl text-white'>
                <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-bold'>Sign In</h1>
                    <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                        <input onChange={handleChange} name='email' className='p-3 my-2 bg-gray-700 rounded' type='email' placeholder='Email' autoComplete='email'/>
                        <input onChange={handleChange} name='password' className='p-3 my-2 bg-gray-700 rounded' type='password' placeholder='Password' autoComplete='current-password'/>
                        <button className='bg-purple-700 py-3 my-6 rounded font-bold'>Sign In</button>
                        <p className='py-8 text-white'><Link to='/signup'>Don't have an account? Sign Up.</Link></p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default Signin