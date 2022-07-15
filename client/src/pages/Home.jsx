import React, {useState, useEffect} from 'react'
import AddNew from '../components/AddNew'
import { getBday } from '../actions/bday'
import Bdays from '../components/Bdays'
import Modal from '../components/Modal'

const Home = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const [bdays, setBdays] = useState([]);
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    getBday().then(bdays => setBdays(bdays))
  }, [])

  
  return (
    <>
    {isOpen && <Modal setIsOpen={setIsOpen}/>}
      {user ? (
        <>
          {bdays.length !== 0 ? (
            <Bdays bdays={bdays} />
          ) : (
            <AddNew />
          )} 
        </>
      ) : null}
    </>
  )
}

export default Home