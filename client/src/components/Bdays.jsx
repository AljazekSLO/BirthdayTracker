import React, {useState} from 'react'
import Bday from './Bday'
import Modal from './Modal'


const Bdays = ({bdays}) => {

    const [isOpen, setIsOpen] = useState(false)
   
  return (
    <>
    <div className='text-center lg:hidden'>
        <button className='bg-indigo-600 px-6 py-2 rounded cursor-pointer text-white'>Add new</button>
    </div>
    
    <div className='grid grid-cols-2'>
        <div className="grid md:grid-cols-2 col-span-2 lg:col-span-1">
            {bdays.map((bday) => (
                <Bday bday={bday}/>
            ))}
        </div>
    </div>
    {isOpen && <Modal setIsOpen={setIsOpen}/>}
    </>
  )
}

export default Bdays