import React, {useState} from 'react'
import Bday from './Bday'
import Modal from './Modal'


const Bdays = ({bdays}) => {

   
  return (
    <>
    <div className='grid grid-cols-2'>
        <div className="grid md:grid-cols-2 col-span-2 lg:col-span-1">
            {bdays.map((bday) => (
                <Bday bday={bday}/>
            ))}
        </div>
    </div>
    </>
  )
}

export default Bdays