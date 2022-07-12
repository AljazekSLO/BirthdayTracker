import React, {useState } from 'react'
import moment from 'moment'
import { FaBirthdayCake } from 'react-icons/fa'

const Bday = ({ bday }) => {
  
    const [isOpen, setIsOpen] = useState(false)

    const date = new Date(`${bday.birthday}`).toLocaleDateString({year: 'numeric', month: 'long', day: 'numeric' })
    const year = new Date().getFullYear();
    const splitedDate = bday.birthday.split('-')
    const thisYearBday = `${year}-${splitedDate[1]}-${splitedDate[2]}`
    const birthday = moment(thisYearBday).fromNow()
    

  return (
    <>
          <div className='bg-sky-700/70 p-6 z-50 flex justify-center text-center flex-col rounded-lg mx-10 my-5 shadow-xl'>
          <div className='bg-white rounded-full mx-auto p-3 mb-2'>
            <FaBirthdayCake className='text-2xl text-gray-600'/>
          </div>
              <h1 className='text-2xl text-white'>{bday.name}</h1>
              <h1 className='text-sm text-white mb-5'>Birthdate: <span className='font-bold text-white'>{date}</span></h1>
              <h1 className='text-red-800 font-bold mb-4'>Birthday {birthday}</h1>
              <button className='bg-red-500 w-[50%] mx-auto px-6 py-2 rounded cursor-pointer text-white'>Delete</button>
          </div>
          
    </>
  )
}

export default Bday