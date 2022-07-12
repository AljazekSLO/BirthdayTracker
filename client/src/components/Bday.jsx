import React, {useState, useEffect } from 'react'
import moment from 'moment'
import BirthdayCake from '../images/bday.svg'
import {AiOutlineClose} from 'react-icons/ai'
import { Countdown } from './Countdown'

    const defaultRemainingTime = {
      seconds: '00',
      minutes: '00',
      hours: 'Loading',
      days: 'Loading',
    }

    const Bday = ({ bday }) => {
      
      const stringDate = new Date(`${bday.birthday}`).toLocaleDateString({year: 'numeric', month: 'long', day: 'numeric' })
      

      let year = new Date().getFullYear();
      const splitedDate = bday.birthday.split('-')
      let thisYearBday = `${year}-${splitedDate[1]}-${splitedDate[2]}`

      let countdown = new Date(`${thisYearBday}`).getTime();
      const currentDate = new Date().getTime();

      const bdayString = new Date(thisYearBday).toLocaleDateString();
      const currentDateString = new Date().toLocaleDateString()

      if(currentDate > countdown) {
        thisYearBday = `${year + 1}-${splitedDate[1]}-${splitedDate[2]}`
        countdown = new Date(`${thisYearBday}`).getTime();
      }


      

    const [isOpen, setIsOpen] = useState(false)
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)

    useEffect(() => {
      const intervalId = setInterval(() => {
        updateRemainingTime(countdown);
      }, 1000)
      return () => clearInterval(intervalId)
    }, [countdown])

    const updateRemainingTime = (countdown) => {
      setRemainingTime(Countdown(countdown))
    }


    const handleDelete = () => {

    }
    

  return (
    <>
    
         <div className='container mx-auto px-20 mt-10'>
            <div className='w-72 bg-cyan-500 rounded-lg shadow-lg p-6 cursor-auto '>
              <div className='w-16 mx-auto relative -mt-10 mb-3'>
                <img className='-mt-1' src={BirthdayCake} alt="Birthday Cake" />
              </div>
              <div className='flex items-center flex-col text-center'>
                <span className='w-full sm:w-48 block leading-normal text-gray-800 text-xl font-bold mb-1'>{bday.name}</span>
                <span className='w-full sm:w-48 block leading-normal text-gray-800 text-md'>Birhdate: {stringDate}</span>
                <span className='w-full sm:w-48 block leading-normal text-gray-800 text-md mb-3'>{bdayString === currentDateString ? <span className='uppercase text-md text-red-500 font-bold'>Happy Birthday!</span> : `Birthday in ${remainingTime.days === '0' ? `${remainingTime.hours} hours` : `${remainingTime.days} days`}` }</span>
              </div>
              <div className='flex items-center justify-between'>
              <div className='flex'>
              <form>
                <input type='checkbox' />
              </form>
                <p className='text-sm ml-1 text-white font-bold'>Reminder</p>
              </div>
                <AiOutlineClose onClick={handleDelete} className='text-3xl p-1 rounded-lg bg-red-400 text-red-700 hover:cursor-pointer' />
              </div>
            </div>
         </div>
          
    </>
  )
}

export default Bday