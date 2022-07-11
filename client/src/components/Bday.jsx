import React from 'react'
import moment from 'moment'

const Bday = ({bday}) => {

    const date = new Date(`${bday.birthday}`).toLocaleDateString({year: 'numeric', month: 'long', day: 'numeric' })
    const year = new Date().getFullYear();
    const splitedDate = bday.birthday.split('-')
    const thisYearBday = `${year}-${splitedDate[1]}-${splitedDate[2]}`
    const birthday = moment(thisYearBday).calendar({
        sameDay: '[Today]',
        nextDay: '[Tomorrow]',
        nextWeek: 'dddd',
        lastDay: '[Yesterday]',
        lastWeek: '[Last] dddd',
        sameElse: 'DD/MM/YYYY'
    });
  return (
    <>
        <div className='absolute top-0 w-full px-4 py-24 z-50'>
            <h1>{bday.name}</h1>
            <h1>{date}</h1>
            <h1>{birthday}</h1>
        </div>
    </>
  )
}

export default Bday