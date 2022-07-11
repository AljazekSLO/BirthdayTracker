import React, {useState} from 'react'
import { FaLock } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { createBday } from '../actions/bday'

const initialState = {name: '', birthday: ''}

const Modal = ({ setIsOpen }) => {
    const navigate = useNavigate()
    const [form, setForm] = useState(initialState)

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await createBday(form)
        console.log(response);
        setIsOpen(false)

      } catch (error) {
        console.log(error.response);
      }
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
  return (
    <>
        <div className='w-full'>
        <div className='absolute top-0 w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[400px] mx-auto bg-indigo-600/90 rounded-xl text-white'>
                <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-bold'>Add new Birthday</h1>
                    <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                        <input onChange={handleChange} name='name' className='p-3 my-2 bg-gray-700 rounded' type='text' placeholder='Name' required/>
                        <input onChange={handleChange} name='birthday' className='p-3 my-2 bg-gray-700 rounded' type='text' onFocus={(e) => e.target.type = 'date'} placeholder='Birthday' required/>
                        
                        <div>
                          <button className='bg-purple-700 p-3 my-6 mr-4 rounded font-bold'>Submit input</button>
                          <button onClick={() => setIsOpen(false)} className='bg-gray-700/50 p-3 my-6 rounded font-bold'>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Modal