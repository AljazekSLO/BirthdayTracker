import React, { useState } from 'react'
import { FaBirthdayCake } from 'react-icons/fa'
import Modal from './Modal'

const AddNew = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="text-center py-[10rem]">
        <FaBirthdayCake className='mx-auto h-12 text-gray-400 text-3xl' />
        <h3 className="mt-2 text-sm font-medium text-gray-900">No Birthdays</h3>
        <p className="mt-1 text-sm text-gray-500">
            Import your first birthday reminder!
        </p>
        <div className="mt-6">
            <button onClick={() => setIsOpen(true)} type="button" className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            New Birthday
            </button>
            {isOpen && <Modal setIsOpen={setIsOpen}/>}
        </div>
    </div>
  )
}

export default AddNew