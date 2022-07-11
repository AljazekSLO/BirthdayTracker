import React, {useState, useEffect} from 'react'
import AddNew from '../components/AddNew'
import { getBday } from '../actions/bday'
import Bday from '../components/Bday'

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
            bdays.map((bday) => (
              <Bday key={bday._id} bday={bday} />
            ))
          ) : (
            <AddNew />
          )} 
        </div>
      ) : (
        <h1>No user</h1>
      ) }
    </>
  )
}

export default Home