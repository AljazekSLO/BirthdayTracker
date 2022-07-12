import React, {useState, useEffect} from 'react'
import AddNew from '../components/AddNew'
import { getBday } from '../actions/bday'
import Bdays from '../components/Bdays'

const Home = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const [bdays, setBdays] = useState([]);

  useEffect(() => {
    getBday().then(bdays => setBdays(bdays))
  }, [])

  
  return (
    <>
      {user ? (
        <div>
          {bdays.length !== 0 ? (
            <Bdays bdays={bdays} />
          ) : (
            <AddNew />
          )} 
        </div>
      ) : null}
    </>
  )
}

export default Home